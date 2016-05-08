var restify = require('restify');
var mongojs = require('mongojs');
var _ = require('lodash');  	

var ip = '127.0.0.1';
var port = '8080';
var connection_string = '127.0.0.1:27017/romankata';
var db = mongojs(connection_string, ['romankata']);
var numbers = db.collection('numbers');

var reference = [
{
	roman : 'M',
	arabic: 1000
},
{
	roman : 'CM',
	arabic: 900
},
{
	roman : 'D',
	arabic: 500
},
{
	roman : 'CD',
	arabic: 400
},
{
	roman : 'C',
	arabic: 100
},
{
	roman : 'XC',
	arabic: 90
},
{
	roman : 'L',
	arabic: 50
},
{
	roman : 'XL',
	arabic: 40
},
{
	roman : 'X',
	arabic: 10
},
{
	roman : 'IX',
	arabic: 9
},
{
	roman : 'V',
	arabic: 5
},
{
	roman : 'IV',
	arabic: 4
},
{
	roman : 'I',
	arabic: 1
},
];

var server = restify.createServer({
	name: 'romankata'
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

server.listen(port, ip, function(argument) {
	console.log('%s listening at %s ', server.name , server.url);
});

var PATH = '/numbers';

server.get({ path : PATH }, getNumbers);
server.get({ path : PATH + '/:number' }, getNumber);
// server.post({ path : PATH , version : '0.0.1' }, setNumber);

function getNumbers(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin','*');
	numbers.find().sort({convertedOn : -1} , function(err, response){
		// console.log('Response success ' + response);
		// console.log('Response error ' + err);
		if(response) {
			res.send(200 , response);
			return next();
		}
		else {
			return next(err);
		}
	});
}

function getNumber(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin','*');
	var number = parseInt(req.params.number);
	var params =  { roman : req.params.number.toUpperCase() };
	var mode = 'romanToArabic';
	if(Number.isInteger(number)) {
		params =  { arabic : req.params.number };
		mode = 'arabicToRoman';
	}
	console.log(params);
	console.log(typeof req.params.number);
	numbers.findOne(params, function(err, response){
		console.log(response);
		// console.log('Response error ' + err);
		if(response) {
			res.send(200 , response);
			return next();
		}
		else if(err) {
			return next(err);
		}
		else {
			var new_number = req.params.number;
			if(mode === 'arabicToRoman') {
				new_number = arabicToRoman(new_number);
				params.mode = mode;
				params.roman = new_number;
			}
			else if(mode === 'romanToArabic') {
				new_number = romanToArabic(new_number);
				params.mode = mode;
				params.arabic = new_number;

			}
			else {

			}
			// res.send(200 , new_number);
			// return next();
			setNumber(params,function(response){
				res.send(200 , response);
				return next();
			});
			
		}
	});
}

function setNumber(args,callback){
	args.convertedOn = new Date();
	numbers.save(args, function(err, response) {
		console.log('saved');
		// console.log('Response error ' + err);

		if(response) {
			callback(response);
		} else if(err) {
			callback(err);
		}
	})
}

function romanToArabic(number) {
	var roman = number.toUpperCase().split("");
	var new_number = _.reduce(roman, function(result,value,i) {
		var num = _.find(reference, { 'roman': value });
		var next = _.find(reference, { 'roman': roman[i + 1] });
		if (next === undefined || next.arabic <= num.arabic) {
			return result + num.arabic;
		} 
		else {
			return result - num.arabic;
		}
	},0);

	return new_number.toString();
}

function arabicToRoman(number) {
	var roman = '';
	_.forEach(reference, function(value,index) {
		while(number >= reference[index].arabic) {
			roman += reference[index].roman;
			number -= reference[index].arabic;
		}
	});
	return roman;
}
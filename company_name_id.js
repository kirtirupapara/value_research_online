var request = require('request');
var cheerio = require('cheerio');


var fatch = function(alpha){

  request('https://www.valueresearchonline.com/stocks/StockSelector/default.asp?index=&cap=&sec=&indus=&firstchar='+alpha, function (error, response, html) {

  var obj = {};
  var $ = cheerio.load(html);


  var name = $('.tablesorter tbody').first();
  // name = name.split('.');
  name.each(function(){

    $(this).find('tr td a').not('.color_gray').each(function() {
      name = $(this).first().text();
      var url = $(this).attr('href');
      url = url.split('=');
      code = url[1];
      obj.name = name;
      obj.code = code;
      console.log(obj);
     })
  })
})

}
fetch('B');

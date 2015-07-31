var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

exports.fetch = function(alpha){

  var html = 'A.html'
    var $ = cheerio.load(fs.readFileSync(html));


  var list_table = [];

  var name = $('.tablesorter tbody').first();

    $(name).find('tr td a').not('.color_gray').each(function() {
      var obj = {};
      name = $(this).first().text();
      var url = $(this).attr('href');
      url = url.split('=');
      code = url[1];
      obj.c_name = name;
      obj.code = code;
      list_table.push(obj);
     })


return list_table;

}


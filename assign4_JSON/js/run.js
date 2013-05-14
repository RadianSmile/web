function JsonQ(txt)
{
	$('#theTitle').text( txt + " condition");
	var woeid = cities[txt] ;
	
	var query = 'select * from weather.forecast where woeid=' + woeid;
	var url = 'http://query.yahooapis.com/v1/public/yql?format=json&q=' + query;
	$.getJSON(url,{},
	
function DataProcess (data,status)
{
	console.log("data:",data);
    var a = data.query.results.channel.item,
    title = a.title ;
    locate = a.lat + "," + a.long,
    date = a.pubDate,
    temp = a.condition.temp + "°F" +" , "+ parseInt((a.condition.temp-32)*5/9) +"°C";
    cdt = a.condition.text;
	
	var wth;
	switch  (cdt)
	{
		case "Showers in the Vicinity" :$('#weather').removeClass(); $('#weather').addClass('rain');console.log ("yes");break;
		case "Cloudy" :$('#weather').removeClass();$('#weather').addClass('cloudy2');break;
		case "Partly Cloudy" :$('#weather').removeClass();$('#weather').addClass('cloudy1');break;
		case "Mostly Cloudy" :$('#weather').removeClass();$('#weather').addClass('cloudy2');break;
		case "Sunny" :$('#weather').removeClass();$('#weather').addClass('sunny');break;
		default :$('#weather').removeClass();$('#weather').addClass('sunny') ;break;
	}
	
	
    $.getJSON(
	  'http://maps.googleapis.com/maps/api/geocode/json',
      {address:locate,sensor:false},
	  function(data, status)
	  {
		var cc = data['results'][0]['address_components'], addr ="" ;
		for (var i =  cc.length-3 ; i >=0 ; i-- )
		{
		  addr +=cc[i]['short_name'];
		  //console.log (addr,cc[i]['short_name']);
		}
		//$("#description #title").append(cc);
		$("#description #location").append("<br>" + addr );
	   });
	toShow(title,locate,date,temp,cdt);
});};

function toShow (a,b,c,d,e)
{
	$("#description #title").text(a);
	$("#description #location").text(b);
	$("#description #date").text(c);
	$("#description #temp").text(d);
	$("#description #condition").text(e);
}
$('#county').change(
  function ()
  {
	$('#city').children().remove();
	var a = $(this).find(':selected').text();
	var b = region[a];
	var i ,c = [];
	for ( i = 0 ;  i < b.length ; i++ )
	{
	  c.push ('<option>'+b[i]+'</option>');
	}
	//console.log (c);
	$('#city').append(c);
	$('#city').trigger("change");
  }
);

function init () 
{
  var arr = [] ;
  for ( var i in cities){arr.push("<div class='locate'><a href='#'>"+ i + "</a></div>");};
  $("#locations").append(arr);
  $('.locate').click(function(e){
	  JsonQ($(e.currentTarget).text());
	  $(e.currentTarget).parent().children().removeClass('b');
	  $(e.currentTarget).addClass('b');
	  });

  var a =[];
  var k;
  for ( k in region ) {a.push ("<option>" + k +"</option>")};

  $("#county").append(a); 
  $('#city').change(function (){JsonQ($(this).find(':selected').text());});
  $("#county").trigger("change");
};


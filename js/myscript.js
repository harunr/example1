$(document).ready(function(){	
	//testimonials
	$('#testimonials_carousel').carousel({
		pause: 'hover'
	});	
	
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
			
	//Twitter Setup
	$(".tweet_block").tweet({
	  join_text: "auto",
	  username: "envato",
	  avatar_size: 0,
	  count: 3,
	  auto_join_text_default: "",
	  auto_join_text_ed: "",
	  auto_join_text_ing: "",
	  auto_join_text_reply: "",
	  auto_join_text_url: "",
	  loading_text: "loading tweets..."
	});	
	
	//Flickr Integration
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=89129181@N06&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			if(i<=11){ // <— change this number to display more or less images
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul")
				.wrap("<li><a href='" + item.link + "' target='_blank' title='Flickr'></a></li>");
			}
		});	
		//flickr hover
		$(".FlickrImages li a").live('mouseover',function(){
				var info=$(this).find("img");
				info.stop().animate({opacity:0.3},300);
			}
		);
		$(".FlickrImages li a").live('mouseout',function(){
				var info=$(this).find("img");
				info.stop().animate({opacity:1},300);
			}
		);
    });	
							
});	
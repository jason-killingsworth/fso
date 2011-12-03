/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "mobileSlideshow"
 * Version: 1.0
 * by Matteo Trapella, matteo@trapella.it
 *                      http://www.trapella.it/
 *
 * Copyright (c) 2010 Matteo Trapella
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Requires jQuery 1.4
 */

jQuery.fn.mobileSlideshow = function(pauseTime, transitionTime) 
{   
	var items = this;
	for (var i=0; i<items.length ;i++)
	{
		$(items[i]).css('z-index',-i);
	}
	items.css('position','absolute');
	items.css('opacity','0');
	items.css({'-webkit-transition-property': 'opacity', '-webkit-transition-duration': (transitionTime/1000)+'s'})
	
	items.parent().find('.item:first').css('opacity','1');
	items.parent().find('.item:first').addClass('mobileSlideshow_visible');

	setInterval(function() { doSlideShow(items, transitionTime) }, pauseTime);      
};
 
function doSlideShow(items, transitionTime) 
{  
	var current = items.parent().find('.item.mobileSlideshow_visible');  
	var next = (items.index(current) != items.length-1) ? current.next() : items.parent().find('.item:first');

	current.removeClass('mobileSlideshow_visible')
	
	next.css('opacity', '1');					
   	
   	next.addClass('mobileSlideshow_visible');
   	doFadeOut(current, next, transitionTime);
}  

function doFadeOut(current, next, transitionTime)
{
   if ($.browser.webkit) 
   {
   		current.css('opacity','0');
   }
   else
   {
		current.fadeTo(transitionTime,0)
   }
} 


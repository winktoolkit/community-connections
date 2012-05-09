/**
 * Main namespace
 * 
 * @author:
 * 	--> Jérôme GIRAUD
 * 
 */
var df =
{
	structure: null
};

/**
 * 
 */
window.onload = function()
{
	df.main.init();
};

/**
 * 
 */
df.main = (function()
{
	var main = {};
	
	/**
	 * 
	 */
	main.init = function()
	{
		df.utils.sizeElements();
		
		require(
		[
			"wink/ui/layout/scroller/js/scroller.js",
			"dojox/mobile",
			"dojox/mobile/parser",
			"dojox/mobile/compat",
			"dojox/mobile/RadioButton",
			"dojox/mobile/Carousel",
			"dojox/mobile/Opener",
			"dojox/mobile/SpinWheel",
			"dojo/data/ItemFileReadStore",
			"wink/ui/xyz/coverflow/js/coverflow.js"
		], function(Scroller, dojoMobile)
		{
			df.utils.sizeElements();
			df.utils.positionElements();
			
			// Parse the page
			dojoMobile.parser.parse();
			
			// Display the right options
			if ( !wink.has('css-perspective'))
			{	
				wink.byId('rb3').disabled = true;
			}
			
			// We can now enter the webapp
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://spreadsheets.google.com/feeds/cells/0AtSHGN06xE4bdGtCUHNWMWcxeHBvRV9uR25fTTI1bVE/od6/public/basic?alt=json-in-script&callback=df.splash.update';
			
			document.getElementsByTagName('head')[0].appendChild(script);
		});
	};
	
	/**
	 * 
	 */
	main.changeMode = function(event)
	{
		switch(event.srcElement.id)
		{
			case 'rb1':
				df.members.displayList();
				df.members.display();
				break;
			case 'rb2':
				df.members.displayCarousel();
				df.members.display();
				break;
			case 'rb3':
				df.members.displayCoverflow();
				df.members.display();
				break;
			case 'rb4':
				df.members.displayMosaic();
				df.members.display();
				break;
			default:
				break;
		}
		
	};
	
	return main;
})();
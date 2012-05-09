/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
df.splash = (function()
{
	var splash = {};
	
	/**
	 * 
	 */
	splash.update = function(structure) 
	{
		df.structure = structure;
		
		// Build the scrollers
		df.members.init();
		df.member.init();
		
		wink.byId('spinner').innerHTML = 'enter';
		wink.byId('spinner').style.fontSize = '50px';
		
		wink.byId('spinner').addEventListener('click', this.hide, false);
		
		df.members.preLoadPictures();
	};
	
	/**
	 * 
	 */
	splash.hide = function()
	{
		wink.byId('wrapper').removeChild(wink.byId('splash'));
		
		wink.byId('container').style.visibility = 'visible';
		wink.byId('options').style.visibility = 'visible';
	};
	
	return splash;
})();
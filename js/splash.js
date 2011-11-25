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
		
		$('spinner').innerHTML = 'enter';
		$('spinner').style.fontSize = '50px';
		
		$('spinner').addEventListener('click', this.hide, false);
		
		df.members.preLoadPictures();
	};
	
	/**
	 * 
	 */
	splash.hide = function()
	{
		$('wrapper').removeChild($('splash'));
		
		$('container').style.visibility = 'visible';
		$('options').style.visibility = 'visible';
	};
	
	return splash;
})();
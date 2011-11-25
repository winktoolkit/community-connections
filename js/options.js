/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
df.options = (function()
{
	var options = {};
		
	/**
	 * 
	 */
	options.display = function()
	{
		wink.fx.apply($('container'), {'transition-timing-function': 'ease-in-out'});
		$('container').translate(window.innerWidth - 81, 0);
	};
	
	/**
	 * 
	 */
	options.hide = function()
	{
		wink.fx.apply($('container'), {'transition-timing-function': 'ease-in-out'});
		$('container').translate(0, 0);
	};
	
	return options;
})();
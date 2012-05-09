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
		wink.fx.apply(wink.byId('container'), {'transition-timing-function': 'ease-in-out'});
		wink.fx.translate(wink.byId('container'), window.innerWidth - 81, 0);
	};
	
	/**
	 * 
	 */
	options.hide = function()
	{
		wink.fx.apply(wink.byId('container'), {'transition-timing-function': 'ease-in-out'});
		wink.fx.translate(wink.byId('container'), 0, 0);
	};
	
	return options;
})();
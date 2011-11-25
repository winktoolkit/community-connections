/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
df.utils =
{
	/**
	 * 
	 */
	sizeElements: function()
	{
		scrollTo(0, 0, 0);
		
		_p = function(e){return document.getElementById(e);};
		
		_p('wrapper').style.height = window.innerHeight + 'px';
		_p('wrapper').style.width = window.innerWidth + 'px';
		
		_p('members_scroller').style.height = window.innerHeight - 141 + 'px';
		_p('members_scroller').style.width = window.innerWidth + 'px';
		
		_p('member_scroller').style.height = window.innerHeight - 102 + 'px';
		_p('member_scroller').style.width = window.innerWidth + 'px';
		
		_p('container').style.height = window.innerHeight + 'px';
		
		_p('coverflow').style.height = window.innerHeight - 141 + 'px';
		
		_p('options').style.width = (window.innerWidth - 81) + 'px';
		_p('members').style.width = window.innerWidth + 'px';
		_p('member').style.width = window.innerWidth + 'px';
	},
	
	/**
	 * 
	 */
	positionElements: function()
	{
		$('container').translate(0, 0);
		
		setTimeout(function()
		{
			wink.fx.applyTransformTransition($('container'), '400ms');	
		}, 1);
	},
	
	/**
	 * 
	 */
	getLang: function(node, v)
	{
		if(v === true)
		{
			node.value = dijit.byId("spin").getValue();
		}
	},
	
	/**
	 * 
	 */
	setLang: function(node)
	{
		// FIX: not working
		var v = node.value;
		var w = dijit.byId("spin");
		w.setValue(v);
	}
};
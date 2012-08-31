/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
df.members = (function()
{
	var members = 
	{
		scroller: null,
		carousel: null,
		coverflow: null,
		mosaic: null,
		store: null,
		pictures: []
	};

	var scrolling = false;
	var sliding = false;
	var currentStage = null;
	var selectTimer = null;
	var nodePreselected = null;
	var nodeSelected = null;
	
	var carousel_structure = 
	{
		items: []
	};
	
	var coverflow_structure = [];
	
	/**
	 * 
	 */
	members.init = function() 
	{
		df.utils.sizeElements();
		
		var firstNames = df.members.getFirstName();
		var lastNames = df.members.getLastName();
		
		for ( var i=0; i<firstNames.length; i++)
		{
			var li = document.createElement('li');

			li.innerHTML = '<a href="#" onclick="df.member.display(null, ' + firstNames[i].id + ')">' + firstNames[i].content + ' ' + lastNames[i].content + '</a><span class="w_icon w_chevron"></span>';
			li.className = 'w_list_item w_border_bottom w_bg_light';
			
			wink.byId('content').appendChild(li);
		}
		
		var properties =
		{
			target: 'scrollContent', 
			direction: 'y',
			callbacks: 
			{
				scrollerTouched:	{ context: this, method: 'stageChanged', arguments: 'scrollerTouched' },
				scrollerClicked:	{ context: this, method: 'stageChanged', arguments: 'scrollerClicked' },
				startScrolling:		{ context: this, method: 'stageChanged', arguments: 'startScrolling' },
				scrolling:			{ context: this, method: 'stageChanged', arguments: 'scrolling' },
				endScrolling:		{ context: this, method: 'stageChanged', arguments: 'endScrolling' },
				startSliding:		{ context: this, method: 'stageChanged', arguments: 'startSliding' },
				stopSliding:		{ context: this, method: 'stageChanged', arguments: 'stopSliding' }
			}
		};
		
		if ( wink.ua.isMobile && !wink.ua.isIOS )
		{
			properties.scrollbars =
			{
				active: false
			};
		}
			
		this.scroller = new wink.ui.layout.Scroller(properties);
	};
	
	/**
	 * 
	 */
	members.getDataByColumn = function(column, id)
	{
		var a = new Array();
		var b = new Array();
		
		var s = df.structure.feed.entry;
		var l = s.length;
		
		for ( var i=0; i<l; i++)
		{
			if ( s[i].title.$t.charAt(0) == column )
			{
				b.push(s[i]);
			}
		}
		
		l = b.length;
		
		for ( var k=1; k<l; k++ )
		{
			if ( wink.isSet(id) )
			{
				if ( b[k].title.$t.substring(1, b[k].content.$t.length) == id )
				{
					a.push({id: b[k].title.$t.substring(1, b[k].content.$t.length), content: b[k].content.$t});
					return a;
				}
			} else
			{
				a.push({id: b[k].title.$t.substring(1, b[k].content.$t.length), content: b[k].content.$t});
			}
			
		}
		
		return a;
	};
	
	/**
	 * 
	 */
	members.getFirstName = function(id)
	{
		return this.getDataByColumn('A', id);
	};
	
	/**
	 * 
	 */
	members.getLastName = function(id)
	{
		return this.getDataByColumn('B', id);
	};
	
	/**
	 * 
	 */
	members.getIRC = function(id)
	{
		return this.getDataByColumn('C', id);
	};
	
	/**
	 * 
	 */
	members.getCompany = function(id)
	{
		return this.getDataByColumn('D', id);
	};
	
	/**
	 * 
	 */
	members.getProject = function(id)
	{
		return this.getDataByColumn('E', id);
	};
	
	/**
	 * 
	 */
	members.getPicture = function(id)
	{
		return this.getDataByColumn('F', id);
	};
	
	/**
	 * 
	 */
	members.getBio = function(id)
	{
		return this.getDataByColumn('G', id);
	};
	
	/**
	 * 
	 */
	members.getWebsite = function(id)
	{
		return this.getDataByColumn('H', id);
	};
	
	/**
	 * 
	 */
	members.getLocation = function(id)
	{
		return this.getDataByColumn('I', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion1 = function(id)
	{
		return this.getDataByColumn('J', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion2 = function(id)
	{
		return this.getDataByColumn('K', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion3 = function(id)
	{
		return this.getDataByColumn('L', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion4 = function(id)
	{
		return this.getDataByColumn('M', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion5 = function(id)
	{
		return this.getDataByColumn('N', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion6 = function(id)
	{
		return this.getDataByColumn('O', id);
	};
	
	/**
	 * 
	 */
	members.getQuestion7 = function(id)
	{
		return this.getDataByColumn('P', id);
	};
	
	/**
	 * 
	 */
	members.getContributions = function(id)
	{
		return this.getDataByColumn('Q', id);
	};
	
	/**
	 * 
	 */
	members.getCommiterSince = function(id)
	{
		return this.getDataByColumn('R', id);
	};
	
	/**
	 * 
	 */
	members.getFacebook = function(id)
	{
		return this.getDataByColumn('S', id);
	};
	
	/**
	 * 
	 */
	members.getGooglePlus = function(id)
	{
		return this.getDataByColumn('T', id);
	};
	
	/**
	 * 
	 */
	members.getTwitter = function(id)
	{
		return this.getDataByColumn('U', id);
	};
	
	/**
	 * 
	 */
	members.preLoadPictures = function()
	{
		var pictures = df.members.getPicture();

		for ( var i=0; i<pictures.length; i++ )
		{
			if ( wink.isSet(pictures[i]) )
			{
				var image = new Image();
				image.src = pictures[i].content;
				
				this.pictures.push({id: pictures[i].id, content: image});
			}
		}
	};
	
	/**
	 * 
	 */
	members.display = function()
	{
		wink.fx.apply(wink.byId('container'), {'transition-timing-function': 'linear'});
		wink.fx.translate(wink.byId('container'), 0, 0);
	};
	
	/**
	 * 
	 */
	members.displayList = function()
	{
		wink.byId('mosaic').style.display = 'none';
		wink.byId('content').style.display = 'block';
		
		wink.byId('coverflow').style.display = 'none';
		wink.byId('carousel').style.display = 'none';
		wink.byId('members_scroller').style.display = 'block';
		
		this.scroller.updateTargetSize();
	};
	
	/**
	 * 
	 */
	members.displayCarousel = function()
	{
		wink.byId('coverflow').style.display = 'none';
		wink.byId('carousel').style.display = 'block';
		wink.byId('members_scroller').style.display = 'none';
		
		if ( !wink.isSet(this.carousel) )
		{
			this.carousel = new dojox.mobile.Carousel({height:"220px", navButton:false, numVisible:1}, "carousel");
			
			var firstName = df.members.getFirstName();
			var lastName = df.members.getLastName();
			
			for ( var i=0; i<firstName.length; i++ )
			{
				var picture = df.members.getPicture(firstName[i].id)[0];
				
				if ( wink.isSet(picture) )
				{
					picture = picture.content;
				} else
				{
					picture = './images/avatar.jpg';
				}
				
				var view = new dojox.mobile.SwapView();
				this.carousel.addChild(view);

				var item = new dojox.mobile.CarouselItem({src: picture, headerText: firstName[i].content + ' ' + lastName[i].content});
				item.placeAt(view.containerNode);
			}
			
			dojo.subscribe('/dojox/mobile/carouselSelect', function(w, img, item, idx)
			{
				df.member.display(null, idx+2);
			});
			
			this.carousel.startup();
		}
	};
	
	/**
	 * 
	 */
	members.displayCoverflow = function()
	{
		wink.byId('coverflow').style.display = 'block';
		wink.byId('carousel').style.display = 'none';
		wink.byId('members_scroller').style.display = 'none';
		
		if ( !wink.isSet(this.coverflow) )
		{
			var firstName = df.members.getFirstName();
			var lastName = df.members.getLastName();
			
			for ( var i=0; i<firstName.length; i++ )
			{
				var picture = df.members.getPicture(firstName[i].id)[0];
				
				if ( wink.isSet(picture) )
				{
					picture = picture.content;
				} else
				{
					picture = './images/avatar.jpg';
				}
				
				coverflow_structure.push({image: picture, title: 'coverflow_title_' + i, action: {context: df.member, method: 'display', arguments: firstName[i].id}});
				
				var title = document.createElement('div');
				
				title.id = 'coverflow_title_' + i;
				title.className = 'coverflowTitle';
				title.innerHTML = firstName[i].content + ' ' + lastName[i].content;

				wink.byId('coverflow_titles').appendChild(title);
			}
			
			var properties = 
			{
				covers: coverflow_structure,
				size: 280,
				position: Math.floor(coverflow_structure.length/2),
				viewportWidth: document.documentElement.offsetWidth,
				reflected: true,
				displayTitle: true,
				fadeEdges: true,
				handleOrientationChange: true,
				handleGesture: false,
				backgroundColor: { r: 238, g: 238, b: 238 }
			};
			
			this.coverflow = new wink.ui.xyz.CoverFlow(properties);
			wink.byId('coverflow').appendChild(this.coverflow.getDomNode());
		}
	};
	
	/**
	 * 
	 */
	members.displayMosaic = function()
	{
		var factor = 3;
		
		wink.byId('mosaic').style.display = 'block';
		wink.byId('content').style.display = 'none';
		
		wink.byId('coverflow').style.display = 'none';
		wink.byId('carousel').style.display = 'none';
		wink.byId('members_scroller').style.display = 'block';
		
		if ( window.innerWidth > 320 )
		{
			factor = 6;
		}
		
		if ( !wink.isSet(this.mosaic) )
		{
			for ( var i=0; i<this.pictures.length; i++ )
			{
				this.pictures[i].content.style.height=  ((window.innerWidth/factor) - 10) +'px';
				this.pictures[i].content.style.width= ((window.innerWidth/factor) - 10) + 'px';
				
				this.pictures[i].content.value = this.pictures[i].id;
				
				this.pictures[i].content.onclick = function()
				{
					df.member.display(null, this.value);
				};
				
				wink.byId('mosaic').appendChild(this.pictures[i].content);
			}
			
			this.mosaic = true;
		}
		
		this.scroller.updateTargetSize();
	};
	
	/**
	 * 
	 */
	members.preselect = function(node)
	{
		clearTimeout(this.selectTimer);
		this.selectTimer = null;
		if (this.scrolling == false && this.sliding == false) 
		{
			var cn = node.className;
			if (cn.indexOf('selected') == -1) 
			{
				this.resetItemStatus();
				
				wink.addClass(node.parentNode, 'preselected');
				this.nodePreselected = node;
			}
		}
	};

	/**
	 * 
	 */
	members.select = function(node) 
	{
		clearTimeout(this.selectTimer);
		this.resetItemStatus();
		wink.addClass(node.parentNode, 'selected');
		this.nodeSelected = node;
	};

	/**
	 * 
	 */
	members.resetItemStatus = function() 
	{
		if (this.nodePreselected != null) 
		{
			wink.removeClass(this.nodePreselected.parentNode, 'preselected');
			this.nodePreselected = null;
		}
		
		if (this.nodeSelected != null)
		{
			wink.removeClass(this.nodeSelected.parentNode, 'selected');
			this.nodeSelected = null;
		}
	};
	
	/**
	 * 
	 */
	members.stageChanged = function(params, stage) 
	{
		this.currentStage = stage;

		var target;
		
		if (wink.isSet(params.uxEvent)) 
		{
			target = params.uxEvent.target;
			target = (target.nodeType == 3 ? target.parentNode : target);
		}

		if (stage == 'scrollerTouched') 
		{
			if (this.sliding == false) 
			{
				this.selectTimer = wink.setTimeout(this, 'preselect', 200, target);
			}
		} else if (stage == 'startScrolling') 
		{
			this.resetItemStatus();
			this.scrolling = true;
		} else if (stage == 'endScrolling') 
		{
			if (this.selectTimer != null) 
			{
				clearTimeout(this.selectTimer);
				this.selectTimer = null;
			}
			this.scrolling = false;
		} else if (stage == 'startSliding') 
		{
			this.sliding = true;
		} else if (stage == 'stopSliding') 
		{
			this.sliding = false;
		} else if (stage == 'scrollerClicked') 
		{
			this.select(target);
		}
	};
	
	return members;
})();
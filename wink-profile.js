var profile = {
	
	layers: {
		"dojo/dojo" : {
			customBase: true,
			include: [
				"dojo/dojo",
				"dojo/main",
				"dojo/_base/config",
				"dojo/_base/loader",
				"dojo/_base/window",
				"dojo/_base/xhr",
				"dojo/cldr/supplemental",			//mobile
				"dojo/cldr/nls/gregorian",			//mobile
				"dojo/colors",						//gfx
				"dojo/date",						//mobile
				"dojo/date/locale",					//mobile
				"dojo/dom",
				"dojo/dom-class",
				"dojo/dom-construct",
				"dojo/dom-geometry",
				"dojo/dom-style",
				"dojo/fx",
				"dojo/i18n",						//charting,mobile
				"dojo/loadInit",
				"dojo/NodeList-fx",
				"dojo/on",
				"dojo/parser",
				"dojo/regexp",						//mobile
				"dojo/text",
				"dojo/window",
				"dojo/selector/acme",
				"dojo/store/Memory",				//mobile
				"dojox/xml/DomParser",

				// Common UI Framework (Abstract) - Needed by both dijit and dojox/mobile
				"dijit/dijit",						//mobile
				"dijit/_WidgetBase",				//mobile
				"dijit/_TemplatedMixin",			//mobile
				"dijit/_WidgetsInTemplateMixin",	//mobile
				"dijit/_Contained",					//mobile
				"dijit/_Container",					//mobile
				"dijit/_BidiSupport",				//charting
				"dijit/place",						//mobile
				"dijit/registry",					//mobile,charting
				"dijit/form/Button",				//charting
				"dijit/form/_ButtonMixin",			//mobile
				"dijit/form/_FormWidget",			//mobile
				"dijit/form/_FormValueWidget",		//mobile
				"dijit/form/_ListBase",				//mobile
				"dijit/form/_TextBoxMixin",			//mobile
				"dijit/layout/_LayoutWidget",		//mobile
				"dijit/form/_AutoCompleterMixin",	//mobile
				"dijit/form/nls/ComboBox",			//mobile	
				"dijit/form/_ComboBoxMenuMixin",	//mobile
				"dijit/form/_ExpandingTextAreaMixin",//mobile
				"dijit/form/DataList",				//mobile
				"dijit/form/_RadioButtonMixin",		//mobile
				
				// Dojo Mobile
				
				"dojox/css3/fx",					//mobile
				"dojox/css3/transit",				//mobile
				"dojox/css3/transition",			//mobile

			    "dojox/mobile",						// all mobile widgets...
				"dojox/mobile/compat",
				"dojox/mobile/_base",
				"dojox/mobile/_ComboBoxMenu",
				"dojox/mobile/_DataListMixin",
				"dojox/mobile/_ItemBase",
				"dojox/mobile/_IconItemPane",
				"dojox/mobile/_ListTouchMixin",
				"dojox/mobile/_ScrollableMixin",
				"dojox/mobile/parser",
				"dojox/mobile/scrollable",
				"dojox/mobile/sniff",
				"dojox/mobile/Button",
				"dojox/mobile/Carousel",
				"dojox/mobile/CheckBox",
				"dojox/mobile/ComboBox",
				"dojox/mobile/common",
				"dojox/mobile/ContentPane",
				"dojox/mobile/EdgeToEdgeCategory",
				"dojox/mobile/EdgeToEdgeDataList",
				"dojox/mobile/EdgeToEdgeList",
				"dojox/mobile/ExpandingTextArea",
				"dojox/mobile/FixedSplitter",
				"dojox/mobile/FixedSplitterPane",
				"dojox/mobile/Heading",
				"dojox/mobile/i18n",
				"dojox/mobile/IconContainer",
				"dojox/mobile/IconItem",
				"dojox/mobile/iconUtils",
				"dojox/mobile/ListItem",
				"dojox/mobile/Opener",
				"dojox/mobile/Overlay",
				"dojox/mobile/PageIndicator",
				"dojox/mobile/Pane",
				"dojox/mobile/RadioButton",
				"dojox/mobile/RoundRect",
				"dojox/mobile/RoundRectCategory",
				"dojox/mobile/RoundRectDataList",
				"dojox/mobile/RoundRectList",
				"dojox/mobile/ScrollableView",
				"dojox/mobile/Slider",
				"dojox/mobile/SpinWheel",
				"dojox/mobile/SpinWheelDatePicker",
				"dojox/mobile/SpinWheelSlot",
				"dojox/mobile/SpinWheelTimePicker",
				"dojox/mobile/SwapView",
				"dojox/mobile/Switch",
				"dojox/mobile/TabBar",
				"dojox/mobile/TabBarButton",
				"dojox/mobile/TextArea",
				"dojox/mobile/TextBox",
				"dojox/mobile/ToggleButton",
				"dojox/mobile/ToolBarButton",
				"dojox/mobile/Tooltip",
				"dojox/mobile/transition",
				"dojox/mobile/TransitionEvent",
				"dojox/mobile/View",
				"dojox/mobile/ViewController",
				"dojox/mobile/SimpleDialog",
				
				"dojo/data/ItemFileReadStore",
				
				"wink/ui/xyz/coverflow/js/coverflow",
				"wink/ui/layout/scroller/js/scroller"
			],
			exclude: [
			]
		},
	},
	
	"action"				  : "release",

	// point basePath to build/
	"basePath"				  : "../../../",
	"releaseDir"			  : "./build",
	"selectorEngine"		  : "acme",
	"optimize"				  : "closure",
	"layerOptimize"			  : "closure",
	"stripConsole"			  : "normal",
	"copyTests"				  : false,
	
	"cssImportIgnore"		  : "../dijit.css",
	"cssOptimize"			  : "comments.keepLines",
	"mini"					  : true,
	"localeList"			  : "en",
	"webkitMobile"			  : true,

	// now a typical loader packages configuration
	packages:[
		{ name:"dojo"		 , location:"./dojo"		},
		{ name:"dojox"		 , location:"./dojox"		},
		{ name:"dijit"		 , location:"./dijit"		},
		{ name:"wink"		 , location:"./wink"		}
	]	
};

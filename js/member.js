/**
 * @author:
 * 	--> Jérôme GIRAUD
 */
df.member = (function()
{
	var member = 
	{
		scroller: null
	};
		
	/**
	 * 
	 */
	member.init = function() 
	{
		var properties = 
		{
			target: "scrollContent2", 
			direction: "y"
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
	member.display = function(e, id) 
	{
		var firstName     = df.members.getFirstName(id)[0];
		var lastName      = df.members.getLastName(id)[0];
		var irc           = df.members.getIRC(id)[0];
		var company       = df.members.getCompany(id)[0];
		var project       = df.members.getProject(id)[0];
		var picture       = df.members.getPicture(id)[0];
		var bio           = df.members.getBio(id)[0];
		var website       = df.members.getWebsite(id)[0];
		var location      = df.members.getLocation(id)[0];
		var question1     = df.members.getQuestion1(id)[0];
		var question2     = df.members.getQuestion2(id)[0];
		var question3     = df.members.getQuestion3(id)[0];
		var question4     = df.members.getQuestion4(id)[0];
		var question5     = df.members.getQuestion5(id)[0];
		var question6     = df.members.getQuestion6(id)[0];
		var question7     = df.members.getQuestion7(id)[0];
		var contributions = df.members.getContributions(id)[0];
		var commiterSince = df.members.getCommiterSince(id)[0];
		var facebook      = df.members.getFacebook(id)[0];
		var googlePlus    = df.members.getGooglePlus(id)[0];
		var twitter       = df.members.getTwitter(id)[0];
		
		wink.byId('member_name').innerHTML = firstName.content + ' ' + lastName.content;
		
		if ( wink.isSet(company) )
		{
			wink.byId('member_company').innerHTML = company.content;
		} else
		{
			wink.byId('member_company').innerHTML = 'n/a';
		}
		
		if (  wink.isSet(project) )
		{
			wink.byId('member_project').innerHTML = project.content;
		} else
		{
			wink.byId('member_project').innerHTML = 'n/a';
		}
		
		if (  wink.isSet(picture) )
		{
			wink.byId('member_picture').src = picture.content;
		} else
		{
			wink.byId('member_picture').src = './images/avatar.jpg';
		}
		
		if (  wink.isSet(bio) )
		{
			wink.byId('member_bio').innerHTML = bio.content;
		} else
		{
			wink.byId('member_bio').innerHTML = 'n/a';
		}
		
		if (  wink.isSet(twitter) )
		{
			wink.byId('member_twitter').href = 'http://www.twitter.com/' + twitter.content;
			wink.byId('member_twitter').style.display = 'inline-block';
		} else
		{
			wink.byId('member_twitter').style.display = 'none';
		}
		
		if (  wink.isSet(website) )
		{
			wink.byId('member_website').href = website.content;
			wink.byId('member_website').style.display = 'inline-block';
		} else
		{
			wink.byId('member_website').style.display = 'none';
		}
		
		if (  wink.isSet(location) )
		{
			wink.byId('member_location').href = 'http://maps.google.com/maps?q=' + encodeURIComponent(location.content);
			wink.byId('member_location').style.display = 'inline-block';
		} else
		{
			wink.byId('member_location').style.display = 'none';
		}
		
		if (  wink.isSet(question1) )
		{
			wink.byId('member_question1').innerHTML = '<div class="question">What is your favourite occupation?</div><div class="answer"><i>' + question1.content + '</i></div>';
			wink.byId('member_question1').style.display = 'block';
		} else
		{
			wink.byId('member_question1').style.display = 'none';
		}
		
		if (  wink.isSet(question2) )
		{
			wink.byId('member_question2').innerHTML = '<div class="question">What is your favorite programming language?</div><div class="answer"><i>' + question2.content + '</i></div>';
			wink.byId('member_question2').style.display = 'block';
		} else
		{
			wink.byId('member_question2').style.display = 'none';
		}
		
		if (  wink.isSet(question3) )
		{
			wink.byId('member_question3').innerHTML = '<div class="question">Where would you like to live?</div><div class="answer"><i>' + question3.content + '</i></div>';
			wink.byId('member_question3').style.display = 'block';
		} else
		{
			wink.byId('member_question3').style.display = 'none';
		}
		
		if (  wink.isSet(question4) )
		{
			wink.byId('member_question4').innerHTML = '<div class="question">If not yourself, who would you be?</div><div class="answer"><i>' + question4.content + '</i></div>';
			wink.byId('member_question4').style.display = 'block';
		} else
		{
			wink.byId('member_question4').style.display = 'none';
		}
		
		if (  wink.isSet(question5) )
		{
			wink.byId('member_question5').innerHTML = '<div class="question">What is your favourite heroes in World history</div><div class="answer"><i>' + question5.content + '</i></div>';
			wink.byId('member_question5').style.display = 'block';
		} else
		{
			wink.byId('member_question5').style.display = 'none';
		}
		
		if (  wink.isSet(question6) )
		{
			wink.byId('member_question6').innerHTML = '<div class="question">What you hate the most</div><div class="answer"><i>' + question6.content + '</i></div>';
			wink.byId('member_question6').style.display = 'block';
		} else
		{
			wink.byId('member_question6').style.display = 'none';
		}
		
		if (  wink.isSet(question7) )
		{
			wink.byId('member_question7').innerHTML = '<div class="question">The natural talent you\'d like to be gifted with</div><div class="answer"><i>' + question7.content + '</i></div>';
			wink.byId('member_question7').style.display = 'block';
		} else
		{
			wink.byId('member_question7').style.display = 'none';
		}
		
		if (  wink.isSet(contributions) )
		{
			wink.byId('member_contributions').innerHTML = '<b>' + firstName.content + '\'s contributions: </b><i>' + contributions.content + '</i>';
			wink.byId('member_contributions').style.display = 'block';
		} else
		{
			wink.byId('member_contributions').style.display = 'none';
		}
		
		if (  wink.isSet(commiterSince) )
		{
			wink.byId('member_commiter_since').innerHTML = '<b>' + firstName.content + ' commits since: </b><i>' + commiterSince.content + '</i>';
			wink.byId('member_commiter_since').style.display = 'block';
		} else
		{
			wink.byId('member_commiter_since').style.display = 'none';
		}
		
		if (  wink.isSet(irc) )
		{
			wink.byId('member_irc').innerHTML = '<b>' + firstName.content + ' on IRC: </b><i>' + irc.content + '</i>';
			wink.byId('member_irc').style.display = 'block';
		} else
		{
			wink.byId('member_irc').style.display = 'none';
		}
		
		if (  wink.isSet(facebook) )
		{
			wink.byId('member_facebook').innerHTML = '<b>' + firstName.content + ' on Facebook: </b><i><a href="' + facebook.content + '" target="_blank">visit</a></i>';
			wink.byId('member_facebook').style.display = 'block';
		} else
		{
			wink.byId('member_facebook').style.display = 'none';
		}
		
		if (  wink.isSet(googlePlus) )
		{
			wink.byId('member_google_plus').innerHTML = '<b>' + firstName.content + ' on Google+: </b><i><a href="' + googlePlus.content + '" target="_blank">visit</a></i>';
			wink.byId('member_google_plus').style.display = 'block';
		} else
		{
			wink.byId('member_google_plus').style.display = 'none';
		}
		
		
		this.scroller.updateTargetSize();
		this.scroller.scrollTo(0, 0, 0);
		
		wink.fx.apply(wink.byId('container'), {'transition-timing-function': 'linear'});
		wink.fx.translate(wink.byId('container'), -window.innerWidth, 0);
	};
	
	return member;
})();
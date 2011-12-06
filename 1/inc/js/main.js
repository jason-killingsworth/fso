var ge = function(x){return document.getElementById(x);}
var ce = function(x){return document.createElement(x);}
var sa = function(x,y,z){return x.setAttribute(y,z);}
var ctn = function(x){return document.createTextNode(x);}
var ac = function(x,y){return x.appendChild(y);}
var gh = function(x){return ge(x).innerHTML.value;}
var sh = function(x,y){return ge(x).innerHTML=y;}
var gls = function(x){return localStorage.getItem(x);}
var sls = function(x,y){localStorage[x] = y;}
var cl = function(x){console.log(x);}
var dw = function(x){document.write(x);}

// Positions and abbreviations used in JSON file.
var cats = ["Center","Left Wing","Right Wing","Defence","Goalie"];
var cat_ab = ["C","LW","RW","D","G"];

// format options - Right Wing > right_wing for form values.
function stripOption(input)
	{
	var output = input.replace(/\x20/g,"_");
	return output.replace(/\W/g,"").toLowerCase();
	}

// loop through positions and create browse buttons for #index
function popCategories(type)
	{
	var html = "";
	for(var i=0; i<cats.length; i++)
		{
		if(type == "browse")
			{
			var ack = cats[i].replace(" ","");
			html+= "<p><a href=\"#browse" + ack+ "\" data-role=\"button\" data-icon=\"arrow-r\" data-iconpos=\"right\" data-theme=\"a\">" + cats[i] + "</a></p>";
			}
		if(type == "form")
			{
			html += "<option value=\"" + cats_ab[i] + "\">" + cats[i] + "</option>";
			}
		}
	dw(html);
	}

// create date input and set it to todays date
function setDate(x)
	{
	if(x != "null")
		{
		var d=new Date();
		var year = d.getFullYear();
		var month = (d.getMonth()+1);
		var day = d.getDate();
		if(month < 10)
			{
			month = "0" + month;
			}
		if(day < 10)
			{
			day = "0" + day;
			}
		var output = year + "-" + month + "-" + day;
		}
	else
		{
		output = x;
		}
	dw("<input type=\"date\" id=\"purchaseDate\" name=\"purchaseDate\" value=\"" + output + "\" class=\"ui-input-text ui-body-null ui-corner-all ui-shadow-inset ui-body-a\" />");
	}

// no longer needed with jquery mobile.
function rangeValue(newValue)
	{
	sh("output",newValue);
	}

// save player to local storage
// called from validation ONLY - using #addPlayerForm only
function saveData(x)
	{
	$.mobile.showPageLoadingMsg();
	var db_pid = new Date().getTime();
	//var db_rank = ge('formMyRank').value;
	var db_rank = $('#formMyRank').val();
	//var db_position = ge('formPosition').value;
	var db_position = $('#formPosition').val();
	//var db_num = ge('formNum').value;
	var db_num = $('#formNum').val();
	//var db_first = ge('formFirstName').value;
	var db_first = $('#formFirstName').val();
	//var db_last = ge('formLastName').value;
	var db_last = $('#formLastName').val();
	//var db_fav = ge('formFav').checked;
	var db_fav = $('#formFav').is(':checked');
	var db_team = ge('formTeam').value;
	var db_team = $('#formTeam').val();
	//var db_purchaseDate = ge('purchaseDate').value;
	var db_ta = window.document.lsForm["formNotes"].value;
	var db_ta = $('#formNotes').val();
	var dataB = db_rank + "|" + db_first + "|" + db_last + "|" + db_num + "|" + db_team + "|XX|" + db_position;
	// not necessary to validate this input, blank input will be set to zero.
	if(ge("togglePositionGoalie").style.display == "block")
		{
		if(ge('newPLayerWins').value != "")
			{
			//var db_w = ge('newPLayerWins').value;
			var db_w = $('#newPLayerWins').val();
			}
		else
			{
			var db_w = "0";
			}
		if(ge('newPLayerGaa').value != "")
			{
			//var db_gaa  =ge('newPLayerGaa');
			var db_gaa = $('#newPLayerGaa').val();
			}
		else
			{
			var db_gaa = "0";
			}
		if(ge('newPLayerSv').value != "")
			{
			//var db_sv = ge('newPLayerSv').value;
			var db_sv = $('#newPLayerSv').val();
			}
		else
			{
			var dv_sv = "0";
			}
		if(ge('newPLayerSo').value != "")
			{
			//var db_so = ge('newPLayerSo').value;
			var db_so = $('#newPLayerSo').val();
			}
		else
			{
			var db_so = "0";
			}
		var dataA = db_w + "::" + db_gaa + "::" + db_sv + "::" + db_so;
		}
	if($('#togglePositionForward').css("display") == "block")
		{
		if($('#newPLayerGoals').val() != "")
			{
			//var db_g = ge('newPLayerGoals').value;
			var db_g = $('#newPLayerGoals').val();
			}
		else
			{
			var db_g = "0";
			}
		if($('#newPLayerAssists').val() != "")
			{
			//var db_a = ge('newPLayerAssists').value;
			var db_a = $('#newPLayerAssists').val();
			}
		else
			{
			var db_a = "0";
			}
		if($('#newPLayerPlusMinus').val() != "")
			{
			//var db_pm = ge('newPLayerPlusMinus').value;
			var db_pm = $('#newPLayerPlusMinus').val();
			}
		else
			{
			var db_pm = "0";
			}
		if($('#newPLayerPim').val() != "")
			{
			//var db_pim = ge('newPLayerPim').value;
			var db_pim = $('#newPLayerPim').val();
			}
		else
			{
			var db_pim = "0";
			}
		if($('#newPLayerPpp').val() != "")
			{
			//var db_ppp = ge('newPLayerPpp').value;
			var db_ppp = $('#newPLayerPpp').val();
			}
		else
			{
			var db_ppp = "0";
			}
		if($('#newPLayerSog').val() != "")
			{
			//db_sog = ge('newPLayerSog').value;
			db_sog = $('#newPLayerSog').val();
			}
		else
			{
			var db_sog = "0";
			}
		var dataA = db_g + "::" + db_a + "::" + db_pm + "::" + db_pim + "::" + db_ppp;
		}
		//dataA = dataA.join("::");
		var dataC = db_ta;
	var data = dataB;
	data += "|" + dataA;
	data += "|" + dataC;
	data += "";
	data = data.replace(",","|");
	if(x != "new")
		{
		sls(db_pid,data);
		//location.href="#myTeam";
		}
	else
		{
		sls(db_pid,data);
		//location.href="#myTeam";
		}
	}

// calls genData(), allows for extra events such as toggling visibility of DOM elements.
function getItems()
	{
	if(localStorage.length>0)
		{
		//ge('wrapClear').style.display = "block";
		$('#wrapClear').css("display","block");
		genData();
		}
	}

// run from form, if valid: sent to saveData(), else: alert.
// will change the error to give a message on the page and highlight the erroneous fields.
function validateForm()
	{
	$.mobile.showPageLoadingMsg();
	var erMsg = "";
	var valid = true;
	//var nameFirst = ge('formFirstName').value;
	var nameFirst = $('#formFirstName').val();
	//var nameLast = ge('formLastName').value;
	var nameLast = $('#formLastName').val();
	var qty = ge('formMyRank').value;
	//var formDate = ge('purchaseDate').value;
	var ta = window.document.lsForm["formNotes"].value;
	//var naughty = /\W/;
	var naughty = /\W\x20/gi;
	if(naughty.test(nameFirst) || nameFirst == "" || naughty.test(nameLast) || nameLast == "")
		{
		valid = false;
		erMsg += "Error in Player Name Field\n\"" + name + "\"\nPlease use only regular characters and underscores.\n\n";
		}
	if(isNaN(qty) || qty < 1 || qty >500)
		{
		valid = false;
		erMsg += "Error in Ranking\n" + "Enter a number between 1-500\n\n";
		}
	/*
	var reDate = /^\d{4}[- ]\d{2}[- ]\d{2}$/;
	if(!reDate.test(formDate))
		{
		valid = false;
		erMsg += "Error in Date\n\"" + formDate + "\"\nPlease use this exact format: YYYY-MM-DD\n\n";
		}
	*/
	if(valid == true)
		{
		//var type = ge("method").value;
		var type = $('#method').val();
		if(type == "new")
			{
			saveData("new");
			}
		else
			{
			saveData(type);
			}
		}
		
	else
		{
		alert(erMsg);
		}
	}

// function from SDI - replaces underscores with spaces: ucwords(str_replace("_"," ",$str));
function titleCase(input)
	{
	var str = input.replace("_"," ");
	var subs = str.split(" ");
	var output = "";
	var prep = [];
	for(var i=0; i<subs.length; i++)
		{
		var first = subs[i].substr(0,1);
		var last = subs[i].substr(1, subs[i].length -1);
		prep.push(first.toUpperCase() + last);
		}
	for(var i=0; i<subs.length; i++)
		{
		output += prep[i] + " ";
		}
	return output;
	}

// this is silly, should be using the library I created.
function swapMethod(x)
	{
	//ge("method").value = x;
	$('#method').html(x);
	}

function makeLink(fct,ref,title,rng)
	{
	var output = "<a href=\"#\" onClick=\"swapMethod('" + ref + "');rangeValue('" + rng + "');" + fct + "('" + ref + "')\">" + title + "</a>";
	return output;
	}

function removePlayer(x)
	{
	$.mobile.showPageLoadingMsg();
	var ver = confirm("Are you sure you want to remove this player?");
	if(ver)
		{
		localStorage.removeItem(x);
		window.location.reload();
		}
	else
		{
		alert("Cancelled, player will remain in your list.");
		}
	}

function fireTeam()
	{
	$.mobile.showPageLoadingMsg();
	var teamSize = localStorage.length;
	if(teamSize == 0)
		{
		alert("You do not have any players added yet.");
		//window.location.reload();
		location.href="index.html#myTeam";
		}
	else if(teamSize == 1)
		{
		var name = localStorage.getItem(localStorage.key(0));
		var name = name.split("|");
		var name = name[1] + " " + name[2];
		var msg = "Are you sure you want to remove " + name + "?";
		}
	else if(teamSize > 1)
		{
		var msg = "Are you sure you want to remove all " + teamSize + " players?";
		}
		var ver = confirm(msg);
	if(ver)
		{
		localStorage.clear();
		window.location.reload();
		}
	else
		{
		if(teamSize > 0)
			{
			alert("Cancelled, you team has not been changed.");
			// must reload or jqm loading will stall
			window.location.reload();
			}
		}
	}

// add player function, need to add a small dialog that shows the event has occured and then closes itself without the need to click an OK button.
function addPlayer(page,id,rank,first,last,num,team,team_ab,pos,stats)
	{
	$.mobile.showPageLoadingMsg();
	var stats = stats + "";
	stats = stats.replace(/,/gi,"::");
	stats = stats.replace(/aaaaa/gi,'.');
	//stats = stats.replace("aaaaa",'.');
	var dummy = "0";
	var db_array = [rank,first,last,num,team,team_ab,pos,stats,dummy];
	try
		{
	  	sls(id,db_array.join('|'));
		//document.location.href=page;
		window.location.reload();
	  	//alert(first + " " + last + " has been added to your team.");
	  	}
	catch(err)
	  	{
	  	txt="There was an error on this page.\n" + err.description + "\n";
	  	txt+="Click OK to continue viewing this page,\n";
	  	txt+="or Cancel to return to the home page.\n\n";
	  	if(!confirm(txt))
			{
			document.location.href="index.html";
			}
	  	}
  	}

// toggles visibility of golaie/forward stats on #addPlayerForm based on selected position
function togglePositionData(pos)
  	{
  	if(pos == "C" || pos == "LW" || pos == "RW" || pos == "D" || pos == "C,LW" || pos == "C,RW")
  		{
  		//ge('togglePositionGoalie').style.display = "none";
  		$('#togglePositionGoalie').css("display","none");
  		//ge('togglePositionForward').style.display = "block";
  		$('#togglePositionForward').css("display","block");
  		}
  	if(pos == "G")
  		{
  		$('#togglePositionForward').css("display","none");
  		//ge('togglePositionForward').style.display = "none";
  		$('#togglePositionGoalie').css("display","block");
  		//ge('togglePositionGoalie').style.display = "block";
  		}
  	}

// creates footer with options of fixed positioning and jquery mobile styles.
  function footer(fixed,style)
  	{
  	dw("<div style=\"text-align:center;\" data-role=\"footer\" class=\"" + style + "\" data-position=\"" + fixed + "\"><div data-role=\"navbar\"><a href=\"index.html\" rel=\"external\" data-role=\"button\" data-theme=\"" + style + "\" data-icon=\"home\" style=\"width:19%\">Home<br>Page</a><a href=\"#myTeam\" data-role=\"button\" data-theme=\"" + style + "\" data-icon=\"star\" style=\"width:20%\">Team<br>Page</a><a href=\"index.html#addPlayerForm\" rel=\"external\" data-role=\"button\" data-theme=\"" + style + "\" data-icon=\"plus\" style=\"width:20%\">Create<br>Player</a><a href=\"#removePlayer\" data-role=\"button\" data-theme=\"" + style + "\" data-icon=\"delete\" style=\"width:20%\">Remove<br>Player</a><a href=\"#myTeam\" onClick=\"fireTeam()\" data-role=\"button\" data-theme=\"" + style + "\" data-icon=\"delete\" style=\"width:19%\">Remove<br>Team</a></div></div>");
	}

function browseCenter()
	{
	var currentTeam = [];
	for(var j=0; j<localStorage.length; j++)
		{
		currentTeam.push(localStorage.key(j));
		}			
	for(var i=0; i<jsoncenter.center.length; i++)
		{
		var onTeam = 0;
		var id = jsoncenter.center[i].pid;
		for(var j=0; j<currentTeam.length; j++)
			{
			if(currentTeam[j] == id)
				{
				onTeam++;
				break;
				}
			}
		if(onTeam == 0)
			{
			var name = jsoncenter.center[i].last + ", " + jsoncenter.center[i].first;
			var first = jsoncenter.center[i].first;
			var last = jsoncenter.center[i].last;
			var num = jsoncenter.center[i].num;
			var team_ab = jsoncenter.center[i].team_ab;
			var pos = jsoncenter.center[i].pos;
			var stats = jsoncenter.center[i].stats;
			var rank = jsoncenter.center[i].rank;
			var team = jsoncenter.center[i].team;
			var g = jsoncenter.center[i].stats[0] ;
			var a = jsoncenter.center[i].stats[1] ;
			var pm = jsoncenter.center[i].stats[2] ;
			var pim = jsoncenter.center[i].stats[3] ;
			var thumb = jsoncenter.center[i].pid;
			if(thumb > 5000)
				{
				thumb = "5555";
				}
			//id,rank,first,last,num,team,team_ab,pos,stats
			if(i==10)
				{
				dw("<li data-theme=\"e\">The rest of the list</li>");
				}
				dw("<li data-theme=\"a\" data-icon=\"plus\">");
				dw("<a href=\"#\" onClick=\"addPlayer('browseCenter','" + id + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
				dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
				dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
				dw("</a></li>");
				}
			}
		}
function browseLeftWing()
	{
	var currentTeam = [];
	for(var j=0; j<localStorage.length; j++)
		{
		currentTeam.push(localStorage.key(j));
		}			
	for(var i=0; i<jsonleft_wing.left_wing.length; i++)
		{
		var onTeam = 0;
		var id = jsonleft_wing.left_wing[i].pid;
		for(var j=0; j<currentTeam.length; j++)
			{
			if(currentTeam[j] == id)
				{
				onTeam++;
				break;
				}
			}
		if(onTeam == 0)
			{
			var name = jsonleft_wing.left_wing[i].last + ", " + jsonleft_wing.left_wing[i].first;
			var first = jsonleft_wing.left_wing[i].first;
			var last = jsonleft_wing.left_wing[i].last;
			var num = jsonleft_wing.left_wing[i].num;
			var team_ab = jsonleft_wing.left_wing[i].team_ab;
			var pos = jsonleft_wing.left_wing[i].pos;
			var stats = jsonleft_wing.left_wing[i].stats;
			var rank = jsonleft_wing.left_wing[i].rank;
			var team = jsonleft_wing.left_wing[i].team;
			var g = jsonleft_wing.left_wing[i].stats[0] ;
			var a = jsonleft_wing.left_wing[i].stats[1] ;
			var pm = jsonleft_wing.left_wing[i].stats[2] ;
			var pim = jsonleft_wing.left_wing[i].stats[3] ;
			var thumb = jsonleft_wing.left_wing[i].pid;
			if(thumb > 5000)
				{
				thumb = "5555";
				}
			//id,rank,first,last,num,team,team_ab,pos,stats
			if(i==10)
				{
				dw("<li data-theme=\"e\">The rest of the list</li>");
				}
				dw("<li data-theme=\"a\" data-icon=\"plus\">");
				dw("<a href=\"#\" onClick=\"addPlayer('browseLeftWing','" + id + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
				dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
				dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
				dw("</a></li>");
				}
			}
		}

function browseRightWing()
	{
	var currentTeam = [];
	for(var j=0; j<localStorage.length; j++)
		{
		currentTeam.push(localStorage.key(j));
		}			
	for(var i=0; i<jsonright_wing.right_wing.length; i++)
		{
		var onTeam = 0;
		var id = jsonright_wing.right_wing[i].pid;
		for(var j=0; j<currentTeam.length; j++)
			{
			if(currentTeam[j] == id)
				{
				onTeam++;
				break;
				}
			}
		if(onTeam == 0)
			{
			var name = jsonright_wing.right_wing[i].last + ", " + jsonright_wing.right_wing[i].first;
			var first = jsonright_wing.right_wing[i].first;
			var last = jsonright_wing.right_wing[i].last;
			var num = jsonright_wing.right_wing[i].num;
			var team_ab = jsonright_wing.right_wing[i].team_ab;
			var pos = jsonright_wing.right_wing[i].pos;
			var stats = jsonright_wing.right_wing[i].stats;
			var rank = jsonright_wing.right_wing[i].rank;
			var team = jsonright_wing.right_wing[i].team;
			var g = jsonright_wing.right_wing[i].stats[0] ;
			var a = jsonright_wing.right_wing[i].stats[1] ;
			var pm = jsonright_wing.right_wing[i].stats[2] ;
			var pim = jsonright_wing.right_wing[i].stats[3] ;
			var thumb = jsonright_wing.right_wing[i].pid;
			if(thumb > 5000)
				{
				thumb = "5555";
				}
			//id,rank,first,last,num,team,team_ab,pos,stats
			if(i==10)
				{
				dw("<li data-theme=\"e\">The rest of the list</li>");
				}
				dw("<li data-theme=\"a\" data-icon=\"plus\">");
				dw("<a href=\"#\" onClick=\"addPlayer('browseRightWing','" + id + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
				dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
				dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
				dw("</a></li>");
				}
			}
		}
function browseDefence()
	{
	var currentTeam = [];
	for(var j=0; j<localStorage.length; j++)
		{
		currentTeam.push(localStorage.key(j));
		}			
	for(var i=0; i<jsondefence.defence.length; i++)
		{
		var onTeam = 0;
		var id = jsondefence.defence[i].pid;
		for(var j=0; j<currentTeam.length; j++)
			{
			if(currentTeam[j] == id)
				{
				onTeam++;
				break;
				}
			}
		if(onTeam == 0)
			{
			var name = jsondefence.defence[i].last + ", " + jsondefence.defence[i].first;
			var first = jsondefence.defence[i].first;
			var last = jsondefence.defence[i].last;
			var num = jsondefence.defence[i].num;
			var team_ab = jsondefence.defence[i].team_ab;
			var pos = jsondefence.defence[i].pos;
			var stats = jsondefence.defence[i].stats;
			var rank = jsondefence.defence[i].rank;
			var team = jsondefence.defence[i].team;
			var g = jsondefence.defence[i].stats[0] ;
			var a = jsondefence.defence[i].stats[1] ;
			var pm = jsondefence.defence[i].stats[2] ;
			var pim = jsondefence.defence[i].stats[3] ;
			var thumb = jsondefence.defence[i].pid;
			if(thumb > 5000)
				{
				thumb = "5555";
				}
			//id,rank,first,last,num,team,team_ab,pos,stats
			if(i==10)
				{
				dw("<li data-theme=\"e\">The rest of the list</li>");
				}
				dw("<li data-theme=\"a\" data-icon=\"plus\">");
				dw("<a href=\"#\" onClick=\"addPlayer('browseDefence','" + id + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
				dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
				dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
				dw("</a></li>");
				}
			}
		}
		
function browseGoalies()
	{
	var currentTeam = [];
	for(var j=0; j<localStorage.length; j++)
		{
		currentTeam.push(localStorage.key(j));
		}			
	for(var i=0; i<jsongoalie.goalie.length; i++)
		{
		var onTeam = 0;
		var id = jsongoalie.goalie[i].pid;
		for(var j=0; j<currentTeam.length; j++)
			{
			if(currentTeam[j] == id)
				{
				onTeam++;
				break;
				}
			}
		if(onTeam == 0)
			{
			var name = jsongoalie.goalie[i].last + ", " + jsongoalie.goalie[i].first;
			var first = jsongoalie.goalie[i].first;
			var last = jsongoalie.goalie[i].last;
			var num = jsongoalie.goalie[i].num;
			var team_ab = jsongoalie.goalie[i].team_ab;
			var pos = jsongoalie.goalie[i].pos;
			var stats = jsongoalie.goalie[i].stats + "";
			var rank = jsongoalie.goalie[i].rank;
			var team = jsongoalie.goalie[i].team;
			var g = jsongoalie.goalie[i].stats[0] ;
			var a = jsongoalie.goalie[i].stats[1] ;
			var pm = jsongoalie.goalie[i].stats[2] ;
			var pim = jsongoalie.goalie[i].stats[3] ;
			var bugger = stats.replace(/,/gi,"::");
			bugger = bugger.replace(/\./gi,"aaaaa");
			var thumb = jsongoalie.goalie[i].pid;
			if(thumb > 5000)
				{
				thumb = "5555";
				}
			//id,rank,first,last,num,team,team_ab,pos,stats
		if(i==10)
			{
			dw("<li data-theme=\"e\">The rest of the list</li>");
			}
		dw("<li data-theme=\"a\" data-icon=\"plus\">");
		dw("<a href=\"#\" onClick=\"addPlayer('browseGoalie','" + id + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + bugger + "');\">");
		dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
		dw("<p>Wins: " + g + ", GA Avg: " + a + ", Save %: " + pm + ", Shutouts: " + pim+ "</p>");
		dw("</a></li>");
		}
	}
}

function featuredPlayers()
	{
	for(var i=0; i<3; i++)
		{
		var name = jsoncenter.center[i].last + ", " + jsoncenter.center[i].first;
		var first = jsoncenter.center[i].first;
		var last = jsoncenter.center[i].last;
		var num = jsoncenter.center[i].num;
		var team_ab = jsoncenter.center[i].team_ab;
		var pos = jsoncenter.center[i].pos;
		var stats = jsoncenter.center[i].stats;
		var rank = jsoncenter.center[i].rank;
		var team = jsoncenter.center[i].team;
		var g = jsoncenter.center[i].stats[0] ;
		var a = jsoncenter.center[i].stats[1] ;
		var pm = jsoncenter.center[i].stats[2] ;
		var pim = jsoncenter.center[i].stats[3] ;
		var passId = jsoncenter.center[i].pid;
		if(passId > 5500)
			{
			var thumb = "5555";
			}
		else
			{
			var thumb = passId;
			}	
		dw("<li data-theme=\"a\" data-icon=\"plus\">");
		dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><a href=\"#\" onClick=\"addPlayer('browseCenter','" + thumb + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
		dw("<h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
		dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
		dw("</a></li>");
		}
		
		dw("<li data-role=\"list-divider\" data-theme=\"e\">Featured Left Wingers</li>");
	for(var i=0; i<3; i++)
		{
		var name = jsonleft_wing.left_wing[i].last + ", " + jsonleft_wing.left_wing[i].first;
		var first = jsonleft_wing.left_wing[i].first;
		var last = jsonleft_wing.left_wing[i].last;
		var num = jsonleft_wing.left_wing[i].num;
		var team_ab = jsonleft_wing.left_wing[i].team_ab;
		var pos = jsonleft_wing.left_wing[i].pos;
		var stats = jsonleft_wing.left_wing[i].stats;
		var rank = jsonleft_wing.left_wing[i].rank;
		var team = jsonleft_wing.left_wing[i].team;
		var g = jsonleft_wing.left_wing[i].stats[0] ;
		var a = jsonleft_wing.left_wing[i].stats[1] ;
		var pm = jsonleft_wing.left_wing[i].stats[2] ;
		var pim = jsonleft_wing.left_wing[i].stats[3] ;
		var passId = jsonleft_wing.left_wing[i].pid;
		if(passId > 5500)
			{
			var thumb = "5555";
			}
		else
			{
			var thumb = passId;
			}						//id,rank,first,last,num,team,team_ab,pos,stats
		dw("<li data-theme=\"a\" data-icon=\"plus\">");
		dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><a href=\"#\" onClick=\"addPlayer('browseLeftWing','" + thumb + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
		dw("<h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
		dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
		dw("</a></li>");
		}
	dw("<li data-role=\"list-divider\" data-theme=\"e\">Featured Right Wingers</li>");
	for(var i=0; i<3; i++)
		{
		var name = jsonright_wing.right_wing[i].last + ", " + jsonright_wing.right_wing[i].first;
		var first = jsonright_wing.right_wing[i].first;
		var last = jsonright_wing.right_wing[i].last;
		var num = jsonright_wing.right_wing[i].num;
		var team_ab = jsonright_wing.right_wing[i].team_ab;
		var pos = jsonright_wing.right_wing[i].pos;
		var stats = jsonright_wing.right_wing[i].stats;
		var rank = jsonright_wing.right_wing[i].rank;
		var team = jsonright_wing.right_wing[i].team;
		var g = jsonright_wing.right_wing[i].stats[0] ;
		var a = jsonright_wing.right_wing[i].stats[1] ;
		var pm = jsonright_wing.right_wing[i].stats[2] ;
		var pim = jsonright_wing.right_wing[i].stats[3] ;
		var passId = jsonright_wing.right_wing[i].pid;
		if(passId > 5500)
			{
			var thumb = "5555";
			}
		else
			{
			var thumb = passId;
			}	
		dw("<li data-theme=\"a\" data-icon=\"plus\">");
		dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><a href=\"#\" onClick=\"addPlayer('browseLeftWing','" + thumb + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
		dw("<h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
		dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
		dw("</a></li>");
		}
	dw("<li data-role=\"list-divider\" data-theme=\"e\">Featured Defencemen</li>");
	for(var i=0; i<3; i++)
		{
		var name = jsondefence.defence[i].last + ", " + jsondefence.defence[i].first;
		var first = jsondefence.defence[i].first;
		var last = jsondefence.defence[i].last;
		var num = jsondefence.defence[i].num;
		var team_ab = jsondefence.defence[i].team_ab;
		var pos = jsondefence.defence[i].pos;
		var stats = jsondefence.defence[i].stats;
		var rank = jsondefence.defence[i].rank;
		var team = jsondefence.defence[i].team;
		var g = jsondefence.defence[i].stats[0] ;
		var a = jsondefence.defence[i].stats[1] ;
		var pm = jsondefence.defence[i].stats[2] ;
		var pim = jsondefence.defence[i].stats[3] ;
		var passId = jsondefence.defence[i].pid;
		if(passId > 5500)
			{
			var thumb = "5555";
			}
		else
			{
			var thumb = passId;
			}	
		dw("<li data-theme=\"a\" data-icon=\"plus\">");
		dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><a href=\"#\" onClick=\"addPlayer('browseLeftWing','" + thumb + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + stats + "');\">");
		dw("<h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
		dw("<p>Goals: " + g + ", Assists: " + a + ", Plus/Minus: " + pm + ", Penalty Minutes: " + pim+ "</p>");
		dw("</a></li>");
		}
		dw("<li data-role=\"list-divider\" data-theme=\"e\">Featured Goalies</li>");
	for(var i=0; i<3; i++)
		{
var name = jsongoalie.goalie[i].last + ", " + jsongoalie.goalie[i].first;
				var first = jsongoalie.goalie[i].first;
				var last = jsongoalie.goalie[i].last;
				var num = jsongoalie.goalie[i].num;
				var team_ab = jsongoalie.goalie[i].team_ab;
				var pos = jsongoalie.goalie[i].pos;
				var stats = jsongoalie.goalie[i].stats + "";
				var rank = jsongoalie.goalie[i].rank;
				var team = jsongoalie.goalie[i].team;
				var g = jsongoalie.goalie[i].stats[0] ;
				var a = jsongoalie.goalie[i].stats[1] ;
				var pm = jsongoalie.goalie[i].stats[2] ;
				var pim = jsongoalie.goalie[i].stats[3] ;
				var passId = jsongoalie.goalie[i].pid;
				var bugger = stats.replace(/,/gi,"::");
				bugger = bugger.replace(/\./gi,"aaaaa");
		if(passId > 5500)
			{
			var thumb = "5555";
			}
		else
			{
			var thumb = passId;
			}	
		dw("<li data-theme=\"a\" data-icon=\"plus\">");
		dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><a href=\"#\" onClick=\"addPlayer('browseGoalie','" + thumb + "','" + rank + "','" + first + "','" + last + "','" + num + "','" + team + "','" + team_ab + "','" + pos + "','" + bugger + "');\">");
		dw("<h2>" + name + "</h2><p>Team: " + team + ", Overall Rank: " + rank + "</p>");
		dw("<p>Wins: " + g + ", GA Avg: " + a + ", Save %: " + pm + ", Shutouts: " + pim+ "</p>");
		dw("</a></li>");
		}
	}
	
function myTeam()
	{
	if(localStorage.length > 0)
		{
		for(var i=0; i<localStorage.length; i++)
			{
			var ar = gls(localStorage.key(i));
			ar = ar.split('|');
			var passId = localStorage.key(i);
			if(passId > 5500)
				{
				var thumb = "5555";
				}
			else
				{
				var thumb = passId;
				}
			var rank = ar[0];
			var first = ar[1];
			var last = ar[2];
			var num = ar[3];
			var team = ar[4];
			var team_ab = "XX";
			var pos = ar[6];
			var stats = ar[7];
			var query = passId + "|" + rank + "|" + first + "|" + last + "|" + num + "|" + team + "|" + team_ab + "|" + pos + "|" + stats;
			dw("<li data-theme=\"a\">");
			dw("<a rel=\"external\" href=\"index.html?" + query + "#addPlayerForm\">");
			dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h1>#" + ar[3] + " " + ar[1] + " " + ar[2] + "</h1><p>" + ar[6] + " from " + ar[4] + ". Overall Ranking: " + ar[0] + "</p></a></li>");
			}
		}
	else
		{
		dw("<h3 class=\"c\">You currently have no players on your team.</h3>");
		dw("<p><a href=\"#featuredPlayers\" data-role=\"button\" data-icon=\"search\" data-iconpos=\"right\" data-theme=\"a\">View Featured Players</a></p>");
		dw("<h4 class=\"c\">Browse Available Players By Category</h4>");
		popCategories("browse");
		}
	}

function setFormPosition()
	{
	if(location.search != "")
			{
			//ge("pageTitleAddPlayer").innerHTML = "Edit Player";
			$('#pageTitleAddPlayer').html("Edit Player");
			var ar  = location.search.split("|");
			if(ar[7] == "C")
				{
				var title = "Center";
				}
			if(ar[7] == "LW")
				{
				var title = "Left Wing";
				}
			if(ar[7] == "RW")
				{
				var title = "Right Wing";
				}
			if(ar[7] == "D")
				{
				var title = "Defence";
				}
			if(ar[7] == "G")
				{
				var title = "Goalie";
				}
			if(ar[7] == "C,LW")
				{
				var title = "Center - Left Wing";
				}
			if(ar[7] == "C,RW")
				{
				var title = "Center - Right Wing";
				}
			dw("<select name=\"formPosition\" id=\"formPosition\" onChange=\"togglePositionData(this.value);\">");
			dw("<option value=\"" + ar[7] + "\" selected>" + title + "</option>");
			}
			else
				{
				dw("<select name=\"formPosition\" id=\"formPosition\" onChange=\"togglePositionData(this.value);\">");
				}
			}
function toggleAddPlayerButton()
	{
	if(location.search != "")
			{
			var getId = location.search.split("|");
			getId = getId[0];
			var subVal = "Edit Player";
			dw("<input type=\"hidden\" id=\"pid\" name=\"pid\" value=\"" + getId + "\">");
			var query = location.search;
			query = query.split("|");
			//ge("pid").value = query[0];
			$('#pid').val(query[0]);
			//ge("formMyRank").value = query[1];
			$('#formMyRank').val(query[1]);
			//ge("formFirstName").value = query[2];
			$('#formFirstName').val(query[2]);
			//ge("formLastName").value = query[3];
			$('#formLastName').val(query[3]);
			//ge("formNum").value = query[4];
			$('#formNum').val(query[4]);
			//ge("formTeam").value = query[5];
			$('#formTeam').val(query[5]);
			var stats = query[8].split("::");
			var curPos = query[7];
			togglePositionData(curPos);
			if(query[7] == "C" || query[7] == "LW" || query[7] == "RW" || query[7] == "D" || query[7] == "C,LW" || query[7] == "C,RW")
				{
				$('#newPLayerGoals').val(stats[0]);
				$('#newPLayerAssists').val(stats[1]);
				$('#newPLayerPlusMinus').val(stats[2]);
				$('#newPLayerPim').val(stats[3]);
				$('#newPLayerPpp').val(stats[4]);
				$('#newPLayerSog').val(stats[5]);
				}
			if(query[7] == "G")
				{
				$('#newPLayerWins').val(stats[0]);
				$('#newPLayerGaa').val(stats[1]);
				$('#newPLayerSv').val(stats[2]);
				$('#newPLayerSo').val(stats[3]);
				}
			}
		else
			{
			var subVal = "Add Player";
			}
		dw("<input type=\"submit\" value=\"" + subVal + "\" id=\"submit\" data-theme=\"e\"><span style=\"float:right;margin-top:14px;\"><a href=\"#myTeam\" rel=\"external\">Cancel</a></span>");
	}

function removePlayerList()
	{
	if(localStorage.length > 0)
		{
		for(var i=0; i<localStorage.length; i++)
			{
			var ar = gls(localStorage.key(i));
			ar = ar.split('|');
			var passId = localStorage.key(i);
			if(passId > 5500)
				{
				var thumb = "5555";
				}
			else
				{
				var thumb = passId;
				}
			var rank = ar[0];
			var first = ar[1];
			var last = ar[2];
			var num = ar[3];
			var team = ar[4];
			var team_ab = "XX";
			var pos = ar[6];
			var stats = ar[7];
			var query = passId + "|" + rank + "|" + first + "|" + last + "|" + num + "|" + team + "|" + team_ab + "|" + pos + "|" + stats;
			dw("<li data-theme=\"a\" data-icon=\"delete\">");
			dw("<a href=\"#\" onClick=\"removePlayer('" + passId + "');\">");
			dw("<img src=\"img/yimg/" + thumb + ".jpg\" style=\"float:left;margin:14px 0px 0px 14px;\" /><h1>#" + ar[3] + " " + ar[1] + " " + ar[2] + "</h1><p>" + ar[6] + " from " + ar[4] + ". Overall Ranking: " + ar[0] + "</p></a></li>");
			}
		}
	}

	function removePlayer(id)
		{
		if(localStorage.length > 0)
			{
			for(var i=0; i<localStorage.length; i++)
				{
				if(id == localStorage.key(i))
					{
					localStorage.removeItem(id);
					}
				}
			}
		window.location.reload();
		}
		
function createRange()
	{
	if(location.search != "")
		{
		var query = location.search;
		query = query.split("|");
		var rv = query[1];
		}
	else
		{
		var rv = "250";
		}
	dw("<input type=\"range\" name=\"formMyRank\" id=\"formMyRank\" min=\"1\" max=\"500\" step=\"1\" value=\""+rv+"\" onChange=\"rangeValue(this.value)\" />");
	sh("output",rv);
	}
			
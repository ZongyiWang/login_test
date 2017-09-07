var stage;
var canvas;

var userContainer;
var tweetContainer;
var twtEntityContainer;
var retweetContainer;
var geoContainer;

var timeline;
var friends;
var followers;

var user;
var entities;
var retweet;

var user_mentions;
var retweeted_status;
var contained_within;

var currWidth, currHeight;

var txt;
var mid;
var media;

var statica;

var twtUserColor, tweetColor, twtGeoColor;

var queryUserParameters;
var queryTweetParameters;
var queryGeoParameters;
var count;

var main, para;

var s, str;

function init() {
    
 //    currWidth = 1200;
 //    currHeight = 550;
 //    canvas = document.getElementById("myCanvas");
    
 //    count = document.getElementById("common");
    
 //    queryUserParameters = document.getElementById("user");
 //    queryTweetParameters = document.getElementById("tweet");
 //    queryGeoParameters = document.getElementById("geo");
    
 //    main = document.getElementById("main");
    
 //    stage = new createjs.Stage("myCanvas");
 //    stage.enableMouseOver(10);
    
 //    twtUserColor = "red";
 //    tweetColor = "#1e90ff";
 //    twtGeoColor = "brown";
    
 //    var rect0 = new createjs.Shape();
 //    rect0.on("click", handleClickQueryUser);
 //    var rect1 = new createjs.Shape();
 //    rect1.on("click", handleClickQueryTweet);
 //    var rect2 = new createjs.Shape();
 //    rect2.on("click", handleClickQueryGeo);
    
 //    statica = new createjs.Container();
    
 //    rects = [rect0, rect1, rect2];
 //    for(i = 0; i < rects.length; i++){
 //        rects[i].x = 160 + 150 * i;
 //        rects[i].y = 20;
 //        rects[i].graphics.beginFill("blue").drawRect(0, 0, 100, 50);
 //        rects[i].alpha = 0.4;
 //        statica.addChild(rects[i]);
 //    }
    
 //    var label0 = new createjs.Text("queryUser", "20px Arial", "black");
 //    var label1 = new createjs.Text("queryTweet", "19px Arial", "black");
 //    var label2 = new createjs.Text("queryGeo", "20px Arial", "black");
 //    labels = [label0, label1, label2];
 //    for(i = 0; i < rects.length; i++){
 //        labels[i].x = rects[i].x;
 //        labels[i].y = rects[i].y + 10;
 //        statica.addChild(labels[i]);
 //    }
    
 //    stage.addChild(statica);
    
 //    txt = "{twitter{ }}";
 //    mid = " ";
    
 //    media = new createjs.Text("stackExchange\n\nmediaWiki\n\ninstagram\n\npinterest\n\ntwitter\n\nfacebook\n\nflickr\n\nspotify\n\nyoutube\n\nreddit\n\nweibo\n\ntumblr", "15px Arial", "black");
 //    media.x = 20;
 //    media.y = 120;
    
 //    // display query string below canvas
 //    para = document.getElementById("string");
 //    var txtNode = document.createTextNode(txt);
 //    para.appendChild(txtNode);
 //    main.appendChild(para);
    
	// stage.addChild(media);

	// stage.update();
	// createjs.Ticker.addEventListener("tick", stage);

}

function handleMouseOver(event){
    event.target.alpha = ((event.type=="mouseover") ? 0.75 : 0.5);
}

function handleClickQueryUser(){
    stage.removeAllChildren();
    stage.addChild(media, statica);
    var circle = new createjs.Shape();
    circle.graphics.beginFill(twtUserColor).drawCircle(0, 0, 65);
    circle.x = 250;
    circle.y = 180;
    circle.alpha = 0.5;
    circle.on("mouseover", handleMouseOver);
    circle.on("mouseout", handleMouseOver);
    circle.on("click", drawTwtUserFields);
    
    var label = new createjs.Text("queryUser", "20px Arial", "#000");
    label.x = circle.x - 50;
    label.y = circle.y - 35;
    
    txt = "{ twitter{ queryUser(q:&quot;&quot; count:3 page:5){ } } }";
    para.innerHTML = txt;
    
    stage.addChild(circle, label);
    stage.update();
    
    queryTweetParameters.style.display = "none";
    queryGeoParameters.style.display = "none";
    queryUserParameters.style.display = "inline";
}

function handleClickQueryTweet(){
    stage.removeAllChildren();
    stage.addChild(media, statica);
    queryUserParameters.style.display = "none";
    
    var circle = new createjs.Shape();
    circle.graphics.beginFill(tweetColor).drawCircle(0, 0, 65);
    circle.x = 250;
    circle.y = 180;
    circle.alpha = 0.5;
    circle.on("mouseover", handleMouseOver);
    circle.on("mouseout", handleMouseOver);
    circle.on("click", drawTweetFields);
    
    var label = new createjs.Text("queryTweet", "20px Arial", "#000");
    label.x = circle.x - 50;
    label.y = circle.y - 35;
    
    txt = "{ twitter{ queryTweet(q:&quot;&quot; count:3 result_type:&quot;mixed&quot; ){ } } }";
    para.innerHTML = txt;
    
    stage.addChild(circle, label);
    stage.update();
    
    queryUserParameters.style.display = "none";
    queryGeoParameters.style.display = "none";
    queryTweetParameters.style.display = "inline";
}

function handleClickQueryGeo(){
    stage.removeAllChildren();
    stage.addChild(media, statica);
    var circle = new createjs.Shape();
    circle.graphics.beginFill(twtGeoColor).drawCircle(0, 0, 65);
    circle.x = 250;
    circle.y = 180;
    circle.alpha = 0.5;
    circle.on("mouseover", handleMouseOver);
    circle.on("mouseout", handleMouseOver);
    circle.on("click", drawTwtGeoFields);
    
    var label = new createjs.Text("queryGeo", "20px Arial", "#000");
    label.x = circle.x - 50;
    label.y = circle.y - 35;
    
    txt = "{\n  twitter{\n    queryGeo(){\n" + mid + "    }\n  }\n}";
    para.innerHTML = txt;
    
    stage.addChild(circle, label);
    stage.update();
    
    queryUserParameters.style.display = "none";
    queryTweetParameters.style.display = "none";
    queryGeoParameters.style.display = "inline";
}



function addSmallCircle(x, y, name, container){
    var circle = new createjs.Shape();
    circle.graphics.beginFill("grey").drawCircle(0, 0, 15);
    circle.name = name;
    var label = new createjs.Text(name, "11px Arial", "#000");
    circle.x = label.x = x;
    circle.y = label.y = y;
    circle.alpha = 0.5;
    circle.on("click", changeQuery);
    container.addChild(circle, label);
}

function changeQuery(event){
    event.target.alpha = 1.5 - event.target.alpha;
    var str = para.innerHTML;
    var field = event.target.name;
    if(event.target.alpha == 1){
        mid += field + " ";
    }
    else{
        var i = mid.indexOf(field);
        mid = mid.substring(0, i) + mid.substring(i+field.length);
    }
    
    var before = str.lastIndexOf("{");
    var after = str.indexOf("}");
    para.innerHTML = str.substring(0, before+2) + mid + str.substring(after);
    stage.update();
}

function addBigCircle(x, y, name, color){
    
    if(x > currWidth - 55){
        resizeWidth();
    }
    if(y > currHeight){
        resizeHeight();
    }
    
    var circle = new createjs.Shape();
    circle.graphics.beginFill(color).drawCircle(0, 0, 65);
    circle.alpha = 0.5;
    circle.on("mouseover", handleMouseOver);
    circle.on("mouseout", handleMouseOver);
    
    var label = new createjs.Text(name, "20px Arial", "#000");
    
    circle.x = x;
    circle.y = y;
    label.x = x - 30;
    label.y = y - 30;
    
    switch(name){
        case "timeline":
            circle.on("click", handleClickTimeline);
            timeline = new createjs.Container();
            timeline.addChild(circle, label);
            stage.addChild(timeline);
            addParaCount(x,y);
            break;
        
        case "friends":
            circle.on("click", handleClickFriends);
            friends = new createjs.Container();
            friends.addChild(circle, label);
            stage.addChild(friends);
            addParaCount(x,y);
            break;
            
        case "followers":
            circle.on("click", handleClickFollowers);
            followers = new createjs.Container();
            followers.addChild(circle, label);
            stage.addChild(followers);
            addParaCount(x,y);
            break;
            
        case "user":
            circle.on("click", handleClickUser);
            user = new createjs.Container();
            user.addChild(circle, label);
            stage.addChild(user);
            break;
            
        case "entities":
            circle.on("click", handleClickEntities);
            entities = new createjs.Container();
            entities.addChild(circle, label);
            stage.addChild(entities);
            break;
            
        case "retweet":
            circle.on("click", handleClickRetweet);
            retweet = new createjs.Container();
            retweet.addChild(circle, label);
            stage.addChild(retweet);
            addParaCount(x,y);
            break;
            
        case "user_mentions":
            circle.on("click", handleClickUserMentions);
            user_mentions = new createjs.Container();
            user_mentions.addChild(circle, label);
            stage.addChild(user_mentions);
            break;
            
        case "retweeted_status":
            circle.on("click", handleClickRetweetedStatus);
            retweeted_status = new createjs.Container();
            retweeted_status.addChild(circle, label);
            stage.addChild(retweeted_status);
            break;
            
        case "contained_within":
            circle.on("click", handleClickContainedWithin);
            contained_within = new createjs.Container();
            label.x = x - 65;
            label.y = y - 10;
            contained_within.addChild(circle, label);
            stage.addChild(contained_within);
            break;
    }
}

function addParaCount(x, y){
    var newele = queryUserParameters.cloneNode(false);
    newele.style.display = "inline";
    newele.style.left = ""+ (x-5) +"px";
    newele.style.top = ""+ (y+5) +"px";
    var cl = count.cloneNode(false);
    var txtNode = document.createTextNode("count:");
    var ipt = document.createElement("INPUT");
    ipt.setAttribute("type", "number");
    ipt.setAttribute("value", 3);
    ipt.setAttribute("min", 0);
    ipt.style.width = "25%";
    ipt.setAttribute("onchange", "getCount(this.value)");
    cl.appendChild(txtNode);
    cl.appendChild(ipt);
    newele.appendChild(cl);
    main.appendChild(newele);
}

function getCount(value){
    
}

function addArrow(fromx, fromy, tox, toy, container){
    var lineShape = new createjs.Shape();
    lineShape.graphics.setStrokeStyle(1).beginStroke("black").moveTo(fromx, fromy).lineTo(tox, toy);
    container.addChild(lineShape);
    
}


// display all fields of twtUser

function drawTwtUserFields(event){
    
    var obj = event.target;
    
    addBigCircle(obj.x + 300, obj.y, "timeline", tweetColor);
    addArrow(obj.x + 65, obj.y, obj.x + 235, obj.y, timeline);
    
    addBigCircle(obj.x + 212, obj.y + 212, "friends", twtUserColor);
    addArrow(obj.x + 44, obj.y + 44, obj.x + 166, obj.y + 166, friends);
    
    addBigCircle(obj.x, obj.y + 300, "followers", "red");
    addArrow(obj.x, obj.y + 65, obj.x, obj.y + 235, followers);
    
    userContainer = new createjs.Container();
    
    // 16 basic fields
    addSmallCircle(obj.x, obj.y - 95, "id", userContainer);
    addSmallCircle(obj.x + 36, obj.y - 88, "id_str", userContainer);
    addSmallCircle(obj.x + 67, obj.y - 67, "name", userContainer);
    addSmallCircle(obj.x + 88, obj.y - 36, "screen_name", userContainer);
    addSmallCircle(obj.x + 95, obj.y, "description", userContainer);
    addSmallCircle(obj.x + 88, obj.y + 36, "created_at", userContainer);
    addSmallCircle(obj.x + 67, obj.y + 67, "profile_image_url", userContainer);
    addSmallCircle(obj.x + 36, obj.y + 88, "url", userContainer);
    addSmallCircle(obj.x, obj.y + 95, "location", userContainer);
    addSmallCircle(obj.x - 36, obj.y + 88, "tweets_count", userContainer);
    addSmallCircle(obj.x - 67, obj.y + 67, "followers_count", userContainer);
    addSmallCircle(obj.x - 88, obj.y + 36, "friends_count", userContainer);
    addSmallCircle(obj.x - 95, obj.y, "listed_count", userContainer);
    addSmallCircle(obj.x - 88, obj.y - 36, "favourites_count", userContainer);
    addSmallCircle(obj.x - 67, obj.y - 67, "statuses_count", userContainer);
    addSmallCircle(obj.x - 36, obj.y - 88, "time_zone", userContainer);
    
    stage.addChild(userContainer);
    stage.update();
}

// display all fields of twtGeo
function drawTwtGeoFields(event){
    var obj = event.target;
    addBigCircle(obj.x + 300, obj.y, "contained_within", twtGeoColor);
    addArrow(obj.x + 65, obj.y, obj.x + 235, obj.y, contained_within);
    
    geoContainer = new createjs.Container();
    // 8 basic fields
    addSmallCircle(obj.x, obj.y - 95, "attributes", geoContainer);
    addSmallCircle(obj.x + 67, obj.y - 67, "country", geoContainer);
    addSmallCircle(obj.x + 95, obj.y, "country_code", geoContainer);
    addSmallCircle(obj.x + 67, obj.y + 67, "full_name", geoContainer);
    addSmallCircle(obj.x, obj.y + 95, "id", geoContainer);
    addSmallCircle(obj.x - 67, obj.y + 67, "name", geoContainer);
    addSmallCircle(obj.x - 95, obj.y, "place_type", geoContainer);
    addSmallCircle(obj.x - 67, obj.y - 67, "url", geoContainer);
    stage.addChild(geoContainer);
    stage.update();
    
}

function addBigToQuery(field){
    mid = " ";
    var str = para.innerHTML;
    var i = str.indexOf("}");
    para.innerHTML = str.substring(0,i) + field + "{ }" + str.substring(i);
}

// called when "timeline" clicked
function handleClickTimeline(event){
    stage.removeChild(userContainer);
    stage.removeChild(friends);
    stage.removeChild(followers);
    stage.update();
    
    addBigToQuery("timeline(count:3)");
    
    drawTweetFields(event);
}

// called when "friends" clicked
function handleClickFriends(event){
    stage.removeChild(userContainer);
    stage.removeChild(timeline);
    stage.removeChild(followers);
    stage.update();
    
    addBigToQuery("friends(count:3)");
    
    drawTwtUserFields(event);
}

// called when "followers" clicked
function handleClickFollowers(event){
    stage.removeChild(userContainer);
    stage.removeChild(timeline);
    stage.removeChild(friends);
    stage.update();
    
    addBigToQuery("followers(count:3)");
    drawTwtUserFields(event);
}

// called when "user" clicked
function handleClickUser(event){
    stage.removeChild(tweetContainer);
    stage.removeChild(entities);
    stage.removeChild(retweet);
    stage.update();
    drawTwtUserFields(event);
}

// called when "entities" clicked TODO: need to check parent
function handleClickEntities(event){
    stage.removeChild(tweetContainer);
    stage.removeChild(user);
    stage.removeChild(retweet);
    stage.update();
    addBigToQuery("entities");
    drawTwtEntityFields(event);
}

// called when "retweet" clicked
function handleClickRetweet(event){
    stage.removeChild(tweetContainer);
    stage.removeChild(user);
    stage.removeChild(entities);
    stage.update();
    addBigToQuery("retweet(count:3)");
    drawRetweetFields(event);
}

// called when "user_mentions" clicked
function handleClickUserMentions(event){
    stage.removeChild(twtEntityContainer);
    stage.update();
    addBigToQuery("user_mentions");
    drawTwtUserFields(event);
}

// called when "retweeted_status" clicked
function handleClickRetweetedStatus(event){
    stage.removeChild(retweetContainer);
    stage.removeChild(entities);
    stage.removeChild(user);
    stage.update();
    drawTweetFields(event);
    
}

function handleClickContainedWithin(event){
    stage.removeChild(geoContainer);
    stage.update();
    drawTwtGeoFields(event);
}

// display all fields of tweet
function drawTweetFields(event){
    
    var obj = event.target;
    
    addBigCircle(obj.x + 300, obj.y, "user", "red");
    addArrow(obj.x + 65, obj.y, obj.x + 235, obj.y, user);
    
    addBigCircle(obj.x + 212, obj.y + 212, "entities", "yellow");
    addArrow(obj.x + 44, obj.y + 44, obj.x + 166, obj.y + 166, entities);
    
    addBigCircle(obj.x, obj.y + 300, "retweet", "green");
    addArrow(obj.x, obj.y + 65, obj.x, obj.y + 235, retweet);
    tweetContainer = new createjs.Container();
    
    // 8 basic fields
    addSmallCircle(obj.x, obj.y - 95, "id", tweetContainer);
    addSmallCircle(obj.x + 67, obj.y - 67, "id_str", tweetContainer);
    addSmallCircle(obj.x + 95, obj.y, "created_at", tweetContainer);
    addSmallCircle(obj.x + 67, obj.y + 67, "text", tweetContainer);
    addSmallCircle(obj.x, obj.y + 95, "retweet_count", tweetContainer);
    addSmallCircle(obj.x - 67, obj.y + 67, "in_reply_to_user_id_str", tweetContainer);
    addSmallCircle(obj.x - 95, obj.y, "in_reply_to_status_id_str", tweetContainer);
    addSmallCircle(obj.x - 67, obj.y - 67, "in_reply_to_screen_name", tweetContainer);
    
    stage.addChild(tweetContainer);
    stage.update();
}


function drawTwtEntityFields(event){
    var obj = event.target;
    
    addBigCircle(obj.x + 300, obj.y, "user_mentions", "red");
    addArrow(obj.x + 65, obj.y, obj.x + 235, obj.y, user_mentions);
    
    twtEntityContainer = new createjs.Container();
    
    // 2 basic fields
    addSmallCircle(obj.x, obj.y - 95, "urls", twtEntityContainer);
    addSmallCircle(obj.x - 95, obj.y, "hashtags", twtEntityContainer);
    
    stage.addChild(twtEntityContainer);
    stage.update();
}

function drawRetweetFields(event){
    var obj = event.target;
    
    addBigCircle(obj.x + 300, obj.y, "entities", "yellow");
    addArrow(obj.x + 65, obj.y, obj.x + 235, obj.y, entities);
    
    addBigCircle(obj.x + 212, obj.y + 212, "retweeted_status", "#1e90ff");
    addArrow(obj.x + 44, obj.y + 44, obj.x + 166, obj.y + 166, retweeted_status);
    
    addBigCircle(obj.x, obj.y + 300, "user", "red");
    addArrow(obj.x, obj.y + 65, obj.x, obj.y + 235, user);
    
    retweetContainer = new createjs.Container();
    
    // 9 basic fields
    addSmallCircle(obj.x, obj.y - 95, "id", retweetContainer);
    addSmallCircle(obj.x + 61, obj.y - 73, "id_str", retweetContainer);
    addSmallCircle(obj.x + 94, obj.y - 16, "text", retweetContainer);
    addSmallCircle(obj.x + 82, obj.y + 48, "created_at", retweetContainer);
    addSmallCircle(obj.x + 32, obj.y + 89, "in_reply_to_status_id_str", retweetContainer);
    addSmallCircle(obj.x - 32, obj.y + 89, "in_reply_to_user_id_str", retweetContainer);
    addSmallCircle(obj.x - 82, obj.y + 48, "in_reply_to_screen_name", retweetContainer);
    addSmallCircle(obj.x - 94, obj.y - 16, "favorite_count", retweetContainer);
    addSmallCircle(obj.x - 61, obj.y - 73, "retweet_count", retweetContainer);
    
    stage.addChild(retweetContainer);
    stage.update();
}

// double the size of canvas width
function resizeWidth(){
    canvas = document.getElementById("myCanvas");
    canvas.width = 2 * canvas.width;
    currWidth = canvas.width;
    alert("width resize to " + currWidth);
}

// double the size of canvas height
function resizeHeight(){
    canvas = document.getElementById("myCanvas");
    canvas.height = 2 * canvas.height;
    currHeight = canvas.height;
    alert("height resize to " + currHeight);
}



function getKeyword(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("q:");
    var after = str.indexOf(" count");
    s.innerHTML = str.substring(0, before+3) + val + str.substring(after-1);
}

function getCount(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("count:");
    var after = str.indexOf(" page:");
    s.innerHTML = str.substring(0, before+6) + val + str.substring(after);
    
}

function getPage(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("page:");
    var after = str.indexOf(")");
    s.innerHTML = str.substring(0, before+5) + val + str.substring(after);
}

function getCountTweet(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("count:");
    var after = str.indexOf(' ', before+6);
    s.innerHTML = str.substring(0, before+6) + val + str.substring(after);
}

function getType(val){
    s = document.getElementById("string");
    str = s.innerHTML;
    var before = str.indexOf("type");
    var after = str.indexOf('"', before+6);
    s.innerHTML = str.substring(0, before+6) + val + str.substring(after);
}

function getOptionalParas(key, val){
    s = document.getElementById("string");
    str = s.innerHTML;
    if(str.indexOf(key) == -1){
        var i = str.indexOf(")");
        s.innerHTML = str.substring(0, i) + key + "&quot;" + val + "&quot; " + str.substring(i);
    }
    else{
        var before = str.indexOf(key);
        var after = str.indexOf('"', before+key.length+1);
        s.innerHTML = str.substring(0, before+key.length+1) + val + str.substring(after);
    }
}
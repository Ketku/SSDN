function marketingPosts(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
		
		var tempDiv= document.createElement ("tempDiv");
			tempDiv.innerHTML=val.excerpt;
			$("a",tempDiv).remove();
			var excerpt=tempDiv.innerHTML;
		
		output+='<li>';
		output += '<a href="#marketingPost" onclick="showPost(' + val.id + ')">';
		output+='<h3>' + val.title + '</h3>' ;
		output+='</a>';
		output+='</li>' ;
	});// go through each post
	output+='</ul>';
	$('#postlist').html(output);
} //lists all the posts

function showPost(id) {
	$.getJSON('http://susociodenegocios.com/?json=get_post&post_id=' + id + '&callback=?',
	function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>' ;
		output += data.post.content ;
		$('#markpost').html(output);
	});//get JSON Data for Marketing Posts
} //showPost

function managementPosts(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
		
		var tempDiv= document.createElement ("tempDiv");
			tempDiv.innerHTML=val.excerpt;
			$("a",tempDiv).remove();
			var excerpt=tempDiv.innerHTML;
		
		output+='<li>';
		output+= '<a href="#managementPost" onclick="showPostMark(' + val.id + ')">';
		output+='<h3>' + val.title + '</h3>' ;
		output+='</a>';
		output+='</li>' ;
	});// go through each post
	output+='</ul>';
	$('#managementpostlist').html(output);
} //lists all the posts

function showPostMark(id) {
	$.getJSON('http://susociodenegocios.com/?json=get_post&post_id=' + id + '&callback=?',
	function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>' ;
		output += data.post.content ;
		$('#manpost').html(output);
	});//get JSON Data for Management Posts
} //showPost

function financePosts(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
		
		var tempDiv= document.createElement ("tempDiv");
			tempDiv.innerHTML=val.excerpt;
			$("a",tempDiv).remove();
			var excerpt=tempDiv.innerHTML;
		
		output+='<li>';
		output+= '<a href="#financePost" onclick="showPostFinance(' + val.id + ')">';
		output+='<h3>' + val.title + '</h3>' ;
		output+='</a>';
		output+='</li>' ;
	});// go through each post
	output+='</ul>';
	$('#financepostlist').html(output);
} //lists all the posts

function showPostFinance(id) {
	$.getJSON('http://susociodenegocios.com/?json=get_post&post_id=' + id + '&callback=?',
	function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>' ;
		output += data.post.content ;
		$('#financepost').html(output);
	});//get JSON Data for Management Posts
} //showPost

function tipsPosts(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
		
		var tempDiv= document.createElement ("tipsDiv");
			tempDiv.innerHTML=val.excerpt;
			$("a",tempDiv).remove();
			var excerpt=tempDiv.innerHTML;
		
		output+='<li>';
		output+= '<a href="#tipsPost" onclick="showPostTips(' + val.id + ')">';
		output+='<h3>' + val.title + '</h3>' ;
		output+='<img src="' + val.thumbnail +'"/>';
		output+='<p>' + excerpt + '</p>' ;
		output+='</a>';
		output+='</li>' ;
	});// go through each post
	output+='</ul>';
	$('#tipspostlist').html(output);
} //lists all the posts

function showPostTips(id) {
	$.getJSON('http://ketonen.co/ssdn/?json=get_post&post_id=' + id + '&callback=?',
	function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>' ;
		output += data.post.content ;
		$('#tipspost').html(output);
	});//get JSON Data for Management Posts
} //showPost



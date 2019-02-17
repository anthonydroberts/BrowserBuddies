
'use strict';
var SERVER_URL = "http://cuhacking-2019-browserbuddies.appspot.com";
var SINGLE_TAB_ADD_PATH = "/addtabs";
var TAB_LIST_PATH = "/tablist";
let addTabOpt = document.getElementById('addTabOpt');
let tabListDiv = document.getElementById('tabList');
addTabOpt.onclick = function(element) {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		$.ajax({method:"POST",
				url: SERVER_URL + SINGLE_TAB_ADD_PATH,
				data:tabs[0],
				success:function(response){
					//alert("post worked");
					//alert(JSON.stringify(tabs));//[obj obj]
				}
		});
	});	
	
  
};

$("#tab1").click(function(){
	var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
    $("#tab2").removeClass( "active");
  
  document.getElementById("tabTab").style.display = "block";
   $("#tab1").addClass( "active");
  $('#tab-list').empty();
  $.ajax({method:"GET",
		url: SERVER_URL + TAB_LIST_PATH,
		success:function(response){
		
			for (var i=0;i<response.length;i++){
				$('#tab-list').append(" <li><a href='"+JSON.parse(response[i]).url+"' target='_blank'>"+JSON.parse(response[i]).title+"</a></li>");
			}
			
		}
});
});
$("#tab2").click(function(){
	var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
   $("#tab1").removeClass( "active");
  
  document.getElementById("bmarkTab").style.display = "block";
  $("#tab2").addClass( "active");
 $('#bmarklist').empty();
 $.ajax({method:"GET",
		url: SERVER_URL + "/bookmarklist",
		success:function(response){
			
			for (var i=0;i<response.length;i++){
				for (var j=0;j<((JSON.parse(response[i]).children[0]).children).length;j++){
					$('#bmarklist').append(" <li> <a href='"+(((JSON.parse(response[i]).children[0]).children)[j]).url+"' target='_blank'>"+(((JSON.parse(response[i]).children[0]).children)[j]).title+"</a></li>");
				}
			}
		}
});
});


$.ajax({method:"GET",
		url: SERVER_URL + TAB_LIST_PATH,
		success:function(response){
		
			for (var i=0;i<response.length;i++){
				$('#tab-list').append(" <li><a href='"+JSON.parse(response[i]).url+"' target='_blank'>"+JSON.parse(response[i]).title+"</a></li>");
			}
			

		}
});




let addBmarkOpt = document.getElementById('addBmarkOpt');
let tabBmarkDiv = document.getElementById('bmarkList');
addBmarkOpt.onclick = function(element) {
	chrome.bookmarks.getTree(function(tabs){
		$.ajax({method:"POST",
				url: SERVER_URL + "/addbookmarks",
				data:tabs[0]
		});
	});	
	
  
};

$.ajax({method:"GET",
		url: SERVER_URL + "/bookmarklist",
		success:function(response){
			
			for (var i=0;i<response.length;i++){
				for (var j=0;j<((JSON.parse(response[i]).children[0]).children).length;j++){
					$('#bmarklist').append(" <li> <a href='"+(((JSON.parse(response[i]).children[0]).children)[j]).url+"' target='_blank'>"+(((JSON.parse(response[i]).children[0]).children)[j]).title+"</a></li>");
				}
			}
			//alert(JSON.stringify(tabs));//[obj obj]
		}
});


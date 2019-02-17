
'use strict';

chrome.runtime.onInstalled.addListener(function() {
	
	
	  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  /*
	chrome.storage.sync.get('group', function(data) {
		alert("data:")
		alert(JSON.stringify(data))
			if(jQuery.isEmptyObject(data)) {
				alert("empty.filling...")
				var gid = prompt("Please enter your group id", "id");

				if (gid != null) {
				    chrome.storage.sync.set({"group":gid}, function() {
						alert("groupset")
						$.ajax({method:"POST",
								url: SERVER_URL + "/cr",
								data:tabs[0],
								success:function(response){
									//alert("post worked");
									//alert(JSON.stringify(tabs));//[obj obj]
								}
						});
					  });
				}
			}
				else alert("not emptyy")
		
	});*/
});

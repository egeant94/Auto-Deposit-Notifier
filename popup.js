var loggedin = false;
var manual_loggedin = false;
var username;

chrome.storage.sync.get(['username', 'webHookInfo', 'webHookUrl'], function(data) {
    username = data.username;
    if('webHookUrl' in data) {
        document.getElementById("webHookUrl").value = data.webHookUrl;
    }
    if('webHookInfo' in data) {
        document.getElementById('webHookInfo').innerHTML = data.webHookInfo;
    }
});

function checkLoginStatus() {
    chrome.storage.sync.get(['discord_token', 'username'], function(data) {
        document.getElementById("login_status").value = data;
				manual_loggedin = true;
				if (data.username == undefined){
					username = "";}
                username = data.username;
                document.getElementById("login_status").innerHTML = "";
                document.getElementById("username").value = username;
                document.getElementById("username").style.visibility = "visible";
                document.getElementById("username_label").style.visibility = "visible";
            loggedin = true;
            document.getElementById("settings").style.visibility = "visible";
            document.getElementById("saveSettings").style.visibility = "visible";
            document.getElementById("login").classList.remove('notloggedin');
            document.getElementById("login").classList.add('loggedin');
            document.getElementById("manual_login").style.visibility = "hidden";
            document.getElementById("settings").style.visibility = "visible";
    });
}
checkLoginStatus();


document.getElementById("saveSettings").addEventListener("click", function(){
    chrome.storage.sync.remove(['webHookInfo'], function() {
        if (manual_loggedin) {
            chrome.storage.sync.set({ webHookUrl: document.getElementById("webHookUrl").value, username: document.getElementById("username").value }, function() {
                chrome.runtime.sendMessage({type: 'update',  update: 1}, function(response) {
                });
                username = document.getElementById("username").value;
				document.getElementById('webHookInfo').innerHTML = "";
				chrome.runtime.sendMessage({type: 'save',  update: 1}, function(response) {
				});	
            });
        } else {
            chrome.storage.sync.set({ webHookUrl: document.getElementById("webHookUrl").value, webHookName: undefined }, function() {
                chrome.runtime.sendMessage({type: 'update',  update: 1}, function(response) {
                });
                getGuildInfo();
            });
        }
        chrome.storage.sync.set({ webHookUrl: document.getElementById("webHookUrl").value }, function() {
            chrome.runtime.sendMessage({type: 'update',  update: 1}, function(response) {
            });
        });
    });
});

document.getElementById("manual_login").addEventListener("click", function(){
    loggedin = true;
    manual_loggedin = true;
    document.getElementById("settings").style.visibility = "visible";
    document.getElementById("saveSettings").style.visibility = "visible";
    document.getElementById("login").classList.remove('notloggedin');
    document.getElementById("login").classList.add('loggedin');
    document.getElementById("manual_login").style.visibility = "hidden";
    document.getElementById("settings").style.visibility = "visible";
});


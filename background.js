var webHookUrl = "";
var username = "";

var webhook_is_valid = true;

refreshVars();

function sleep(ms) //function that allows to stop the program for a given time
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function postToWebhook(content) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', webHookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    data = {
        content: content,
    }

    xhr.send(JSON.stringify(data));

    xhr.onload = async function (res) {
		console.log('posted: ', res);
		if (xhr.status != 200 && xhr.status != 204 && xhr.status != 201){
			console.log('Error : ', xhr.status);
			if (xhr.status == 429){
				var retry_after = xhr.getResponseHeader("retry-after");
				console.log('Response headers = ', retry_after);
				await sleep(parseInt(retry_after) + 100);
				postToWebhook(content);
				console.log('Resent notification after ratelimit');
			}
			else {
				await sleep(5000);
				postToWebhook(content);
				console.log('Resent notification');
			};
		};
    }

    xhr.onerror = async function (res) {
		console.log('error posting: ', res);
		await sleep(5000);
		postToWebhook(content);
		console.log('Resent the notification');
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendResponse({});
    if (request.type == 'update') {
        refreshVars();
	}
    if (request.type == 'rollbit') {
        postToWebhook("<@" + username + ">, Send steam offer (Rollbit)");
        var options =
        {
            title: 'CSGOEmpire Deposit',
            message: '10 minutes to send steam offer',
            iconUrl: 'icons/icon_1000.png',
            type: 'basic'
        };
        chrome.notifications.create('', options);
    };
    if (request.type == 'csgoempire') {
        postToWebhook("<@" + username + ">, Send steam offer (CsgoEmpire)");
        var options =
        {
            title: 'CSGOEmpire Deposit',
            message: '10 minutes to send steam offer',
            iconUrl: 'icons/icon_1000.png',
            type: 'basic'
        };
        chrome.notifications.create('', options);
    };
    if (request.type == 'save') {
        postToWebhook("<@" + username + ">, You just saved your settings on the extension.");
        var options =
        {
            title: 'CSGOEmpire Deposit',
            message: 'You hit save on the extension.',
            iconUrl: 'icons/icon_1000.png',
            type: 'basic'
        };
        chrome.notifications.create('', options);
    };
});


function refreshVars() {
    chrome.storage.sync.get('username', function (data) {
        username = data.username;
        console.log("username: " + username);
    });
    chrome.storage.sync.get('webHookUrl', function (data) {
        webHookUrl = data.webHookUrl;
        console.log("url: " + webHookUrl);
    });
}

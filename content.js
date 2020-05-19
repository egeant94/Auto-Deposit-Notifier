function sleep(ms) //function that allows to stop the program for a given time
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

function pressok() //function that presses the ok button if it exists
{
	var btn = document.getElementsByTagName('button'); // find all buttons on the page
	for(var i=0; i<btn.length; i++) // go through each button
	{
		if(btn[i].innerText.indexOf('OK') > -1)  // If the button text is Claim FREE Coins
		{
			btn[i].click(); // Click button
			console.log('closed pop up'); // Print Claimed Free coins to the console
		}
	}
}

async function imready() //function that presses the Im ready button if it exists
{
	var btn = document.getElementsByTagName('button'); // find all buttons on the page
	for(var i=0; i<btn.length; i++) // go through each button
	{
		if(btn[i].innerText.indexOf('Yes, I\'m Ready') > -1)  // If the button text is I'm Ready, Yes, I\'m Ready
		{
			console.log('Accepted one trade.'); // Print accepted one trade to the console
			await sleep(5000); //wait 5 seconds before pressing i'm ready
			btn[i].click(); // Click button
			chrome.runtime.sendMessage({type: 'notify',  update: 1}, function(response) {
			});			//send message to background.js, to send notification and webhook
			await sleep(2000); //wait 2 sec for a potential "trade status slow" pop up
			pressok(); //press ok on this pop up if it exists
			await sleep(58000); //wait 58 seconds before continuing the script, to avoid spamming "I'm ready" button
		}
		if(buttonR[i].innerText.indexOf('Claim FREE Coins') > -1) {
			buttonR[i].click();
			console.log('Success ! claimed Rain');  
		}
	}
}

async function main()   //function that scans button every 1 sec, but wait for the function to be ended before continuing
{
	while (1)
	{
		await imready();  //wait for the im ready function to end
		await sleep(1000); //wait 1 sec
	}
}

console.log('Extension on.'); //print on console extension on, debug purposes
main(); //call the main loop

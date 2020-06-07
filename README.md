# Auto-Deposit-Notifier
The github of the Auto Deposit Notifier chrome extension. It will click on the "I'm Ready" button of csgoempire, send a discord message and claim rains. Don't have to stay on the tab, you can minimize chrome, but don't close it.
Contact Toalen#0001 for support.

# How to install :
Go to chrome://extensions/, enable dev mode (top right corner), and click "Load unpacked" (top left corner), select the Auto-Deposit-Notifier folder (has to be unzipped), and you're good

# How to use :
First, create a webhook in your discord server (you need to be an admin). Go to server settings of your choice,

Go to webhooks, create one and copy the url, input that into the extension (left click on it).

You'll also want to put your Discord User ID, so the bot can mention you. the user id is not something like Xxxx#0000, but a string of numbers (IE: 299556639294488576).

To get it, type \\@your-discord-name then hit enter, the numbers after the @ are your ID.

That's it, you're good to go :)

# Changelogs
- Version 2.6.0
  Scripts clicks on every "ok" button he finds every 1 sec. Goal is to avoid the annoying "Deposit Status" pop up
- Version 2.5.2
  Sends the notification before clicking on the buttons, first option of the rightclick on the extension leads to the github
- Version 2.5.1
  dumb mistake in rain claim
- Version 2.5.0
  Auto claims rain
- Version 2.4.0
  Sends a notification / discord message when pressing save. useful for tests
- Version 2.2.0
  Fixed the windows notification.
  Added a 5 seconds delay before pressing on "I'm Ready", to let the sound notification start.
- Version 2.1.2
  Added a gui when clicking on the extension, allowing to put discord webhook url and user ID.
  Added brand new Design made by Hugo#6400
- Version 1.0.0
  Extension that auto clicks on ready, and makes a windows notification.

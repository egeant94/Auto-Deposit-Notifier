# Auto-Deposit-Notifier
The github of the Auto Deposit Notifier extension.

# How to install :
Go to chrome://extensions/, enable dev mode (top right corner), and click "Load unpacked extension", select the Auto-Deposit-Notifier folder (has to be unzipped), and you're good

# How to use :
First, create a webhook in your discord server (you need to be an admin). Go to settings of the server of your choice,
Go to webhooks, and create one associated with the channel of your choise. It will give you an url, input that into the extension
(left click on it).
You'll also want to put your Discord User ID, so the bot mention you. the user id is not something like Xxxx#0000, but a string of numbers. You get it by right clicking on the user of your choice. (Copy ID button)
And that's it ! you're good to go :)

# Changelogs
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

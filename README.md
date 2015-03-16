# Freed
##aka Parking Lot

![alt tag](https://github.com/Parkinglot/parkinglot/blob/master/www/img/images.png)

Driving is fun, parking is not. Especially all the stress that comes with it. Even after finding parking, we have to fuss over the right amount of coins to add to our parking meter, and whether parking attendants will do their rounds at the wrong time. Wouldn't you want to be freed of all your worries once and for all?

Freed seeks to help accomplish exactly that, by giving power back to the people.

Crowdsource parking, beat the clock, beat the odds

Around the world, thousands, if not millions, of dollars are being wasted every day when drivers leave their parking lots early. Why not pay the favor forward? Users that leave their parking lots early will be able to indicate on the interactive map, allowing others to easily find parking lots, and some extra time as a bonus.

We fear what we cannot predict, and parking attendants have to take one of the top few spots in that list. If you see a parking attendant on the streets, a single click on Freed notifies all users immediately. Many fantastic dates have been ruined by constant sweating over whether one's car is safe from the dreaded ticket. Freed gives you that confidence, with a community of watchful users that will safeguard your car, and secure your date.

This app was built with the belief that graciousness is alive and well. We hope to build a community of users that actually care for each other, and to say, **"I'll watch your back, cause you will watch mine."**

##Jobs
1. Frontend: Bern
2. Facebook API: Piku
3. Backend: Shara
4. Graphics: Anne

##Get started!
###Using Ionic
IONIC: http://ionicframework.com/getting-started/

How to run the app:

1. IF YOU HAVE MAC: Install xCode to run iOS sim:
$ cd myApp
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
2. IF YOU DONT: Sign up for Ionic account and view over browser:
http://view.ionic.io/
  $ cd myApp
  $ ionic upload
  Then, install Ionic View on your mobile phone, log in. Select your app, download, and view!

###Github
1. Clone repo in a DIFFERENT folder. $ git clone https://github.com/Parkinglot/parkinglot.git
2. Update your folder to the latest version: git pull
2. After creating your app (IN A DIFF FOLDER), replace the 3 folders with the ones in the repo.
3. After making changes, copy changed file to repo folder.
4. Commit your changes: git commit -m "your message"
5. Push changes to github: git push -u origin master
6. "Please, commit your changes or stash them before you can merge." Just git reset --hard
##Frontend
wht im doing

##Facebook
added the openfb.js library and 2 other htmls for logging in. modified app.js and controller.js to include fblogin function and info. updated the index.html to include the fb api.

###Naming Structure

**index.html** contains the apis and libraries which are being used.

**css** contains **style.css** which is the design of the app

**img** contains the app icon

**js** file contains 3 javascript files -> **app.js** for the layout of the tabs and declarations and links to the htmls for those
--> **controller.js** contains the implementation functions for the tabs
-->**services.js** contains information (text, images etc) for stuff inside one of the tabs (?)

**lib** -> contains all the ionic default libraries which we need

**templates** --> the html pages for each tab are  contained here


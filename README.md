### how to custom add-ins ?
We can read it at here: https://docs.microsoft.com/en-us/javascript/api/office/office.dialogparentmessagereceivedeventargs?view=common-js

# How to set up ?

- This is node project, so we need to install npm and node js to your pc

Step 1 : install node modules, we need to run *npm install* in terminal console

Step 2 : to run server, we need to run *npm server.js*. Server is going to start at port 1000 for http and port 3000 for https. If we want auto restart server when edit anything in source, We needs to install nodemon and run *nodemon server.js*

Step 3 : install add-ins for offices:

- Step 1 : choose insert tab.
- Step 2 : choose *Upload My Add-in* tab.
- Step 3 : click *Browser* or *Browse...* button
- Step 4 : choose manifest-localhost.xml file at this path *nodejs_office_add-ins\add-in_plugins\manifest-localhost.xml*

# Note

### add_ins folder contains:
- manifest.xml use to config add-in for client server 
- manifest-localhost.xml use to config add-in for localhost server

### public folder contains:
- assets folder use to contains image for add-in app
- views folder use to contains design file for add-in app

#### files -server.crt- and -server.key- to generate certificates for localhost server and run it on https
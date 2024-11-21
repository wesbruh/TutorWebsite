# README testing section

I tested with no problem

## INSTRUCTIONS (Please follow instruction accordingly):

!! Make sure you are in 'TUTORWEBSITE' directory !!

cd client
npm install

# (for error: 'react-scripts' is not recognized as an internal or external command, operable program or batch file.)

# If you recieve an error on windows stating "cannot be loaded because running scripts is disabled on this system"

# Open Windows Powershell as an administrator and run the command "Set-ExecutionPolicy RemoteSigned" and answer "Y" to the prompt.

npm start

# This starts a react app on a port3000 for visual confirmation that everything is working, should see spinning react icon.

# Check server

cd ..

# Or, if needed, click the + sign in the terminal to create a secondary terminal, then use command: cd TUTORWEBSITE

cd server
npm install express mongoose cors nodemon

# Install necessary packages on your system for the server.

# TEST:

node index.js

# Confirm terminal shows 'SERVER RUNS PERFECTLY!'

test

11/16/2024 "missing emotion dependcies" or "legacy-deps"

# start in the project directory and enter command

npm install

# then enter

npm config set legacy-peer-deps true

# this will configure some dependencies in react to work with new SidebarData for the the whole project

# enter command:

npm install emotion-icons --save

# this will install correct dependcies and packages in the package-lock.json, if you are waiting for the dependedcies to isntall this a isa good sign, it will take a good 1-3 minutes or so

# afterwards enter command npm run dev in the project directory to confirm the website runs on the port.

# to view the side bar add ' /studentdashboard ' in the url.

Cannot find module 'ajv/dist/compile/codegen'

# enter command

npm install --save-dev ajv@^7

Can't resolve 'react- spinners/C1ipLoader' ---> npm install --save react-spinners

cd server ---> npm install passport passport-oauth2 passport-google-oauth20 express-session

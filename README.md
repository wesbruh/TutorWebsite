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
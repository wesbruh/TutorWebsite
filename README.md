# README testing

## INSTRUCTIONS (Please follow instruction accordingly):
!! Make sure you are in 'TUTORWEBSITE' directory !!

cd client
npm install (for error: 'react-scripts' is not recognized as an internal or external command,
operable program or batch file.)
# If you recieve an error on windows stating "cannot be loaded because running scripts is disabled on this system"
# Open Windows Powershell as an administrator and run the command "Set-ExecutionPolicy RemoteSigned" and answer "Y" to the prompt.

npm start

cd ..
cd server
npm install express mongoose cors nodemon

TEST: 
node index.js
Confirm terminal shows 'SERVER RUNS PERFECTLY!'
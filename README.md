# Here is our fully-functional, responsive tutoring website!
![Screenshot 2024-12-27 094226](https://github.com/user-attachments/assets/50a669f5-37c6-4a07-b1e5-9f940875cf84)
![Screenshot 2024-12-27 094255](https://github.com/user-attachments/assets/31c978e5-c267-40f5-8a37-a52403844c1b)
![Screenshot 2024-12-27 094319](https://github.com/user-attachments/assets/0601e487-4700-4a5a-bb72-b99988b8e617)
![Screenshot 2024-12-27 094349](https://github.com/user-attachments/assets/ccf8e54f-d239-406a-846c-5657db6ec391)
![Screenshot 2024-12-27 094413](https://github.com/user-attachments/assets/43d45264-b6c8-4d9f-b261-e8632bfda266)
![Screenshot 2024-12-27 094429](https://github.com/user-attachments/assets/b4a61bef-70d8-437e-b439-69d491bb9bf1)



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

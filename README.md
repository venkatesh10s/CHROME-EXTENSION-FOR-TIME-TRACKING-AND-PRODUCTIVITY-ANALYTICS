## CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

"COMPANY": CODETECH IT SOLUTIONS

"NAME": S VENKATESH

"INTERN ID": CT04DF1907

"DOMAIN": FULL STACK DEVELOPER

"DURATION": 4 WEEKS

"MENTOR": NEELA SANTOSH KUMAR

In Task 4 of my internship project, I developed a Chrome extension that tracks the time I spend on different websites and displays a summary of my daily browsing activity. The goal of this extension is to help users understand how productively they are using their time online. It also connects with a backend server that stores this data using MongoDB, and the final results can be seen both in the popup of the extension and a full dashboard using an HTML page.

## Tools & Technologies Used

# To build this project, I used:

HTML, CSS & JavaScript for the popup UI and dashboard

Chrome Extension APIs (like tabs, storage, and runtime) for tracking tab usage

Node.js and Express.js to create a backend server

MongoDB for storing how long the user spends on each site

Fetch API to get data from backend and show in popup/index.html

## How It Works – Step by Step

1. Background Script Monitoring
A file called background.js runs in the background of Chrome. It listens to when the active tab is changed or updated. Based on how long a tab is focused, it keeps track of how many seconds a user spends on that website.

2. Saving to Backend
Every few seconds, the data collected in the background is sent to the backend server (running on localhost:3501) using a POST request. The backend saves the domain name and the time spent into a MongoDB database.

3. Viewing the Output in Popup
When I click on the extension icon in the Chrome toolbar, the popup.html opens. It uses popup.js to send a GET request to the backend and fetches all the data. It then displays something like:

google.com: 3 min
github.com: 1 min

So I can immediately know which websites I spent most time on today.

4. Opening the Full Dashboard
There is also a file called index.html that works like a proper dashboard. When I open it, it fetches the same data from the backend and displays it neatly, acting as a full-screen summary page.

## How to Run This Project

Step 1: Setup Backend Server

Make sure MongoDB is installed and running on your machine.

Go to the project folder using terminal.

## Run these commands:

npm install
node server.js

It will say: Server running at http://localhost:3501

Step 2: Load Chrome Extension

Open Google Chrome.

Type chrome://extensions in the address bar.

Enable "Developer Mode" at the top-right.

Click “Load Unpacked” and select the folder that has:

manifest.json

background.js

popup.html, etc.

Step 3: Open a Few Websites

Now browse some websites like Google, YouTube, GitHub etc.

Spend a few seconds on each.

Step 4: Click the Extension

Click the extension icon near Chrome's address bar.

It will open the popup and show you how many minutes you spent on each site.

Step 5: Open Dashboard

Open index.html using Live Server (or just double click to open in browser).

## It will also show the same data like:

newtab - 2 min
google.com - 5 min
github.com - 3 min

## final output

![Image](https://github.com/user-attachments/assets/66b50feb-fc48-4b91-a31d-9fd4fe54422f)

![Image](https://github.com/user-attachments/assets/159f6ce1-dab6-4235-8a61-81e6b59b6787)

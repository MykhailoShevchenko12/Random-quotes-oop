# Random Quotes OOP with API

Welcome to the Random Quotes application!
This project consists of a client-side Vanilla JavaScript app and a server-side Express Node.js app.

## Running the App in Development Mode

### Run Server

1. Navigate to the root directory of the project.
2. Open a terminal window.
3. Change directory to the server subfolder: `cd server`.
4. Install server dependencies by running the following command: `npm install`.
5. Run server in the development mode with hot-reload feature: `npm run dev`.

### Run Client

1. Open new terminal window in the root of the project.
2. Run client in the development mode with hot-reload feature: `npx live-server client`.

## Running the App in Production Mode

### Run Server

1. Navigate to the root directory of the project.
2. Open a terminal window.
3. Change directory to the server subfolder: `cd server`.
4. Install server dependencies by running the following command: `npm install`.
5. Run server in the production mode: `npm start`.
6. Configure hosting server where you run application to forward all requests to the `http://localhost:3000`.
7. Take assigned by the hosting provider URL for your backend API server.
   For example `https://my-random-quotes-app.com`

### Run Client

1. There is no need to build the client as it already contains HTML, CSS, JavaScript files.
2. In the `client/src/config.js` replace `http://localhost:3000` with URL assigned to the server API in the step 7, in the previous section. For example `https://my-random-quotes-app.com`
3. Host all client files from the `client` subfolder on the public web server.
4. Get assigned by the hosting provider URL for your client frontend application. For example `https://my-random-quotes-frontend.com`
5. Open `https://my-random-quotes-frontend.com` in the web browser.

# Json Server REST API
Back-end for Front-end Developer Challenge. 

## About
This project uses json-server version 0.17.4 to create a fake REST API to provide data about physical quantities such as acceleration and velocity to generate data dashboards for supporting predictive maintenance of industrial machinery.

## How to run for development
1. Clone this repository
2. Install all dependencies

```
bash npm i
```
3. Build typescript file
```
npm run build
```
4. Create a .env file at the project's root directory, specifying the port to be used for server execution (use the .env.example file as a reference). 
5. Start the local server
```
npm start
```

The server will be running locally at the localhost address on the selected port (e.g., http://localhost:3000). To retrieve data, just issue an HTTP request to the /data route (e.g., perform a GET request at http://localhost:3000/data).

The project also has been deployed on Render. You can access it at the following link: https://json-server-api-lsdr.onrender.com
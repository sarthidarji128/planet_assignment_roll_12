# Planet Management API

This is a Node.js and Express-based REST API for managing a collection of planets. It provides functionality to add, search, update, and delete planet records, as well as connect to a MongoDB database to persist data.

## Features

- Add new planets
- Search for planets by name
- Update existing planet information
- Delete planets by name
- MongoDB integration for persistent storage

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Setup and Installation

Follow these steps to set up and run the project locally:

### Prerequisites

1. Install [Node.js](https://nodejs.org/) and npm.
2. Install [MongoDB](https://www.mongodb.com/try/download/community).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sarthidarji128/planet_assignment_roll_12.git

	2.	Navigate to the project directory:

cd planet-management-api


	3.	Install dependencies:

npm install



Running the Application

	1.	Start MongoDB server:

mongod


	2.	Run the application:

npm start


	3.	The server will be running on http://localhost:8000.

API Endpoints

Base URL: http://localhost:8000

1. Add a Planet

	•	Method: POST
	•	Endpoint: /
	•	Request Body:

{
  "name": "Earth",
  "circumference": 40075,
  "distance_from_sun_km": 149600000,
  "distance_from_earth_km": 0,
  "description": "The only planet known to support life.",
  "image_url": "https://example.com/image.jpg"
}


	•	Response:
	•	201 Created: Planet added successfully
	•	500 Internal Server Error: If an error occurs

2. Search a Planet

	•	Method: GET
	•	Endpoint: /:name
	•	Response:
	•	200 OK: Returns the planet object
	•	404 Not Found: If the planet is not found
	•	500 Internal Server Error: If an error occurs

3. Update a Planet

	•	Method: PUT
	•	Endpoint: /:name
	•	Request Body:

{
  "circumference": 40100
}


	•	Response:
	•	200 OK: Planet updated successfully
	•	404 Not Found: If the planet is not found
	•	500 Internal Server Error: If an error occurs

4. Delete a Planet

	•	Method: DELETE
	•	Endpoint: /:name
	•	Response:
	•	200 OK: Planet deleted successfully
	•	404 Not Found: If the planet is not found
	•	500 Internal Server Error: If an error occurs



## Project Structure

src/

├── models/

│   └── planetModel.js       # Mongoose schema for planets

├── routes/

│   └── planetRoute.js       # Route handlers for planet endpoints

├── connectDB.js             # MongoDB connection logic

├── server.js                # Entry point of the application



Notes

	•	Ensure MongoDB is running locally at mongodb://localhost:27017/P. You can change the connection string in connectDB.js.
	•	Test the API using tools like Postman or curl.

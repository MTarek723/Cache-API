# Redis Cache API Example

This project is a simple Express.js application that demonstrates how to use Redis as a caching layer for API responses. The application fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) and caches the results in Redis to improve performance.

## Features

- **GET `/`**: Fetches all posts from the API and caches the result in Redis for 360 seconds (6 minutes).
- **GET `/:id`**: Fetches a specific post by ID from the API and caches the result in Redis for 360 seconds (6 minutes).
- Logs whether the data was retrieved from the cache or directly from the API.

## Prerequisites

To run this project, you'll need:

1. [Node.js](https://nodejs.org/) installed on your system.
2. [Redis](https://redis.io/) installed and running.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   node index.js
   ```

4. The application will be available at `http://localhost:3000`.

## Usage

- **Fetch all posts:**
  ```
  GET http://localhost:3000/
  ```

- **Fetch a specific post by ID:**
  ```
  GET http://localhost:3000/1
  ```

## Notes

- This project was created for **testing and learning purposes** and is **not intended for production use**.
- Data is cached for 360 seconds (6 minutes). You can modify this value in the `redisClient.setEx` calls in the code.
- Ensure your Redis server is running before starting the application.

## Dependencies

- [Express](https://expressjs.com/)
- [Redis](https://www.npmjs.com/package/redis)
- [Axios](https://axios-http.com/)

## License

This project is licensed under the MIT License.
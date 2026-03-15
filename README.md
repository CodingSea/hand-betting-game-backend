# Hand Betting Game -- Backend

This repository contains the **backend service** for the Hand Betting
Game application.\
It provides API endpoints for managing game data and storing leaderboard
scores.

The backend is built as part of a **MEAN stack architecture** and
communicates with the Angular frontend.

------------------------------------------------------------------------

# Tech Stack

Main technologies used in this backend:

-   **Node.js**
-   **Express.js**
-   **MongoDB**
-   **Mongoose**

Supporting tools:

-   **dotenv** for environment variable management
-   **cors** for cross-origin requests
-   **morgan** for HTTP request logging

------------------------------------------------------------------------

# Installation

Clone the repository:

``` bash
git clone https://github.com/CodingSea/hand-betting-game-backend.git
```

Install dependencies:

``` bash
npm install
```

------------------------------------------------------------------------

# Environment Variables

Create a `.env` file in the root directory and configure the required
variables.

Example:

    PORT=3000
    DB_URI=your_mongodb_connection_string
    FRONTEND=frontend_url

------------------------------------------------------------------------

# Running the Server

Start the backend server:

``` bash
npm start
```

The server will run on:

    http://localhost:3000

------------------------------------------------------------------------

# API Overview

The backend provides endpoints for:

-   Retrieving **leaderboard scores**
-   Saving **new game results**

These endpoints are consumed by the **Angular frontend** application.

------------------------------------------------------------------------

# AI Usage Disclosure

AI tools were used for minor assistance such as improving documentation
and troubleshooting small implementation details.\
All backend logic and architecture decisions were implemented and
reviewed manually.

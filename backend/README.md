# Transaction API

This project provides an API for storing and retrieving transaction data using Express, MongoDB, and Mongoose. The data includes information on sales transactions, such as title, description, price, category, date of sale, and sold status. Additionally, the project includes a seeding script to populate the database with sample data fetched from an external source.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** connection URI, which can be a local or remote MongoDB instance (e.g., MongoDB Atlas).
- **Internet connection** to fetch data for seeding the database.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/numberdaar/RoxilerSystems-transctionschart.git
   cd RoxilerSystems-transctionschart
   ```

2. **Install dependencies for backend**:
    ```bash
    cd backend
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. Open your browser at `http://localhost:5000` to view the dashboard.

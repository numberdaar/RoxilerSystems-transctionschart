# Transaction-Dashboard

A React application for displaying transaction data with filtering, searching, and graphical visualization. This dashboard allows users to view transactions by month, see summary statistics, and visualize transaction data in various price ranges.

## Features

- **Transaction Table**: Displays a paginated table with transaction data.
- **Statistics**: Shows total sales amount and number of items sold.
- **Bar Chart**: Visualizes the count of items within specific price ranges.
- **Search and Filter**: Filters transactions by selected month and search term.
- **Responsive Design**: Uses Tailwind CSS for a responsive and modern UI.

## Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** connection URI, which can be a local or remote MongoDB instance (e.g., MongoDB Atlas).
- **Internet connection** to fetch data for seeding the database.


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/numberdaar/RoxilerSystems-transctionschart
    cd RoxilerSystems-transctionschart
    ```

2. **Install dependencies for frontend**:
    ```bash
    cd frontend
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. Open your browser at `http://localhost:3000` to view the dashboard.

5. **Install dependencies for backend**:
    ```bash
    cd backend
    npm install
    ```

6. **Start the development server**:
    ```bash
    npm start
    ```

7. Open your browser at `http://localhost:5000` to view the dashboard.
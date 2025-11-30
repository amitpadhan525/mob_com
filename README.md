# Mobile Comparison Website

A modern, full-stack mobile comparison website built with Next.js and SQLite.

## Features

- **Compare Mobiles**: Select up to 3 devices to compare specs side-by-side.
- **Real-time Database**: Data is stored in a local SQLite database.
- **Modern Design**: Glassmorphism, dark mode, and responsive layout.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Initialize Database**:
    The database is already initialized with sample data. To reset or re-initialize:
    ```bash
    node setup_db.js
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Open Browser**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Database**: SQLite (via `sqlite` and `sqlite3`)
- **Styling**: CSS Modules / Global CSS (Glassmorphism)
- **Language**: TypeScript

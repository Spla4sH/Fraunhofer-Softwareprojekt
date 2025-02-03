# fraunhofer-app

This document provides an overview of the ticket system prototype designed for managing technical problems at Fraunhofer ISE. The system is intended to streamline issue reporting, tracking, and resolution to enhance operational efficiency.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Development Server](#running-the-development-server)
4. [Folder Structure](#folder-structure)
5. [Development Team](#development-team)
6. [Preview](#preview)

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v20.16.0 or later): [Download Node.js](https://nodejs.org/)

To verify, run the following commands in your terminal:

```bash
node -v
npm -v
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Spla4sH/Fraunhofer-Softwareprojekt.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Fraunhofer-Softwareprojekt
   ```

3. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

## Running the Development Server

To start the development server:

Using npm:

```bash
npm run dev
```

This will launch the app in your default web browser. By default, it runs on `http://localhost:5173`.

## Folder Structure

Here is a basic overview of the project structure:

```
project-root/
├── public/               # Static assets (e.g., images, favicon)
├── src/                  # Source code
│   ├── api/              # API endpoints
│   ├── assets/           # static assets
│   ├── components/       # Reusable React components
│   ├── db/               # Database mock for testing
│   ├── pages/            # Page components
│   ├── theme/            # Theme
│   ├── App.css           # Global style
│   ├── App.jsx           # Main application component
│   ├── index.css         # Global style
│   └── main.jsx          # Entry point for Vite
├── .gitignore            # Files to ignore in Git
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package-lock.json     # Project configuration and dependencies (Automatically generated by npm)
├── package.json          # Project configuration and dependencies
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration file
```

## Preview
![photo_5258102936511310894_y](https://github.com/user-attachments/assets/aeb3356f-0a08-464c-83f4-6b7800c26999)

![photo_5260428730021572046_y](https://github.com/user-attachments/assets/dd418f2b-37a2-4fa8-a8d5-3714fca0da9f)


## Development Team

| Name            | Email                          |
| --------------- | ------------------------------ |
| Louis Unger     | lunxxxx@stud.hs-furtwangen.de  |
| Moreen Rach     | mra48623@stud.hs-furtwangen.de |
| Lorenz Noll     | lno44776@stud.hs-furtwangen.de |
| Sebastian Rösch | sro48000@stud.hs-furtwangen.de |
| Vincent Pojer   | vpo45924@stud.hs-furtwangen.de |

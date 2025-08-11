# 🛍️ E-commerce Platform | Full-Stack Shopping Application

Welcome to this full-stack e-commerce web application, a comprehensive project built from the ground up to demonstrate a complete MERN stack implementation. This platform provides a modern, intuitive, and secure online shopping experience for users, alongside a powerful and easy-to-use dashboard for administrators.

The goal of this project was to engineer a robust, real-world application that handles everything from user authentication and product discovery to state management and order processing, showcasing a deep understanding of both frontend and backend development principles.

---

### Built With
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
 ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
 ![NodeJS](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
 ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
 ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
 ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

---

## 🚀 Key Features

### For Customers:
* **Product Discovery:** A clean and responsive interface to browse, search, and filter products across various categories. 
* **Shopping Cart:** Fully persistent cart functionality allowing users to add, remove, and manage items. 
* **User Account Management:** Secure user registration, login, and a personal profile page to view order history. 
* **Secure Authentication:** User sessions are managed securely using JSON Web Tokens (JWT) for protected routes and actions. 
* **Order Processing:** A streamlined, multi-step process for securely placing orders. 

### For Administrators:
* **Dedicated Admin Dashboard:** A separate, secure interface for site management. 
* **Content Management:** Full CRUD (Create, Read, Update, Delete) capabilities for products. 
* **Real-time Inventory Control:** Easily manage product stock, pricing, and details, with changes reflected instantly on the site. 

## 🛠️ Tech Stack

This project was built using the MERN stack and other modern web technologies. 

#### Frontend:
* **React.js** 
* **Redux Toolkit** (for global state management)
* **Tailwind CSS** 

#### Backend:
* **Node.js**
* **Express.js** (for building RESTful APIs) 

#### Database:
* **MongoDB** 

#### API & Authentication:
* **RESTful APIs**
* **JWT (JSON Web Tokens)** 

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js installed on your machine
* npm or yarn
* MongoDB instance (local or cloud)

### Installation

1.  **Clone the repository**
    ```sh
    git clone <YOUR_REPOSITORY_URL>
    ```

2.  **Navigate to the backend directory and install dependencies**
    ```sh
    cd server
    npm install
    ```

3.  **Create a `.env` file in the `server` directory and add the following environment variables:**
    ```
    PORT=8080
    MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
    JWT_SECRET=<YOUR_JWT_SECRET>
    ```

4.  **Navigate to the frontend directory and install dependencies**
    ```sh
    cd ../client
    npm install
    ```

5.  **Start the backend server**
    ```sh
    # From the 'server' directory
    npm start
    ```

6.  **Start the frontend development server**
    ```sh
    # From the 'client' directory
    npm start
    ```

The application should now be running on your local machine.

## 🔌 API Design

The backend serves a RESTful API for all data transactions. [cite: 14] Key responsibilities include:

* **User Authentication:** Endpoints for user registration, login, and profile updates, protected with JWT middleware.
* **Product Catalog Management:** API routes for fetching, creating, updating, and deleting products.
* **Order Processing:** Secure endpoints to handle the creation and retrieval of user orders. 

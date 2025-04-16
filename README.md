# MERN Gym App

This is a **MERN** (MongoDB, Express, React, Node.js) stack application for managing workouts, including user login and workout tracking features. The app allows users to check in and check out workouts, and view progress over time.

## Features

- **User Authentication**: Users can sign up, log in, and manage their account.
- **Workout Tracking**: Users can check in and check out workouts.
- **Responsive UI**: The app is built with React for the frontend and is mobile-friendly.
- **Data Storage**: MongoDB is used for storing user data and workout logs.

## Project Structure

The project consists of two main parts:
- **Frontend**: React-based user interface.
- **Backend**: Express and Node.js server managing API routes and MongoDB interactions.

### Frontend
The frontend is developed with **React.js** and includes the following:
- `frontend/src/`: Source code for the React app.
- `frontend/public/`: Static files for the React app.

### Backend
The backend is built with **Node.js** and **Express**, and includes:
- `backend/models/`: Mongoose models for MongoDB collections.
- `backend/routes/`: API routes for user authentication and workout management.
- `backend/config/`: Configuration files (e.g., for MongoDB connection).

## Prerequisites

Before running the application locally, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (with npm)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Setup and Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Tarun-rawat-007/Mern_Gym_app.git
    cd Mern_Gym_app
    ```

2. **Setup Backend**:
    - Navigate to the backend folder:
      ```bash
      cd backend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file for environment variables like MongoDB URI and secret keys. You can refer to `.env.example` if provided.

3. **Setup Frontend**:
    - Navigate to the frontend folder:
      ```bash
      cd ../frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

4. **Start the Backend**:
    - In the `backend` folder, run:
      ```bash
      npm start
      ```
    - The backend will start running on `http://localhost:5000` (or the port you've configured).

5. **Start the Frontend**:
    - In the `frontend` folder, run:
      ```bash
      npm start
      ```
    - The frontend will start running on `http://localhost:3000`.

## Deployment

### Frontend Deployment (Netlify):
To deploy the frontend to **Netlify**, follow these steps:
1. Go to [Netlify](https://www.netlify.com/).
2. Create a new site by linking your GitHub repository.
3. Set the build command as `npm run build` and the publish directory as `frontend/build`.

### Backend Deployment (Vercel):
To deploy the backend to **Vercel**, follow these steps:
1. Go to [Vercel](https://vercel.com/).
2. Create a new project and link it to your GitHub repository.
3. Set up the `backend` directory as the deployment source and configure the environment variables.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the above file with additional project details or instructions specific to your app!

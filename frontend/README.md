# Uber Clone - Frontend

A modern React-based frontend for an Uber-like ride-sharing application. Built with [Vite](https://vitejs.dev/) for fast development and optimized production builds, this application provides a seamless user experience for both passengers and captains.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Project Pages & Routes](#project-pages--routes)
- [Components Overview](#components-overview)
- [State Management](#state-management)
- [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [Getting Started Guide](#getting-started-guide)
- [Development Tips](#development-tips)
- [Notes](#notes)

---

## Features

✅ **User Authentication**
- User registration and login
- Captain (driver) registration and login
- JWT-based token authentication
- Protected routes with authentication guards

✅ **User Features**
- Search and request rides
- View available drivers
- Confirm ride details
- Real-time ride status tracking
- Ride history

✅ **Captain Features**
- Captain registration and login
- Accept/reject ride requests
- View ride details
- Track passenger pickups and dropoffs
- Ride earnings tracking

✅ **UI/UX**
- Responsive design
- Smooth animations and transitions
- Real-time status updates
- Modal confirmations for critical actions
- Location-based services

---

## Tech Stack

- **Framework**: React 18+ with [Vite](https://vitejs.dev/)
- **Styling**: CSS3 with custom styles
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Linting**: ESLint
- **Package Manager**: npm

---

## Project Structure

```
src/
├── App.jsx                    # Main application component
├── App.css                    # Global application styles
├── index.css                  # Global CSS reset and utilities
├── main.jsx                   # Application entry point
│
├── pages/                     # Page components (routes)
│   ├── Start.jsx              # Landing/splash page
│   ├── Home.jsx               # User dashboard
│   ├── Riding.jsx             # Ride in progress view
│   ├── UserLogin.jsx          # User login form
│   ├── UserSignup.jsx         # User registration form
│   ├── UserLogout.jsx         # User logout handler
│   ├── UserProtectWrapper.jsx # Route protection for users
│   ├── CaptainLogin.jsx       # Captain login form
│   ├── CaptainSignup.jsx      # Captain registration form
│   ├── CaptainHome.jsx        # Captain dashboard
│   └── CaptainProtectWrapper.jsx # Route protection for captains
│
├── components/                # Reusable UI components
│   ├── LocationSearchPanel.jsx    # Location search and autocomplete
│   ├── VehiclePanel.jsx           # Vehicle selection panel
│   ├── ConfirmRide.jsx            # Ride confirmation modal
│   ├── ConfirmRidePopUp.jsx       # Alternative confirmation popup
│   ├── LookingForDriver.jsx       # Searching for driver animation
│   ├── RidePopUp.jsx              # Ride details popup
│   ├── WaitingForDriver.jsx       # Waiting state display
│   └── CaptainDetails.jsx         # Captain profile information
│
├── context/                   # React Context for state management
│   ├── UserContext.jsx        # User state and actions
│   └── CaptainContext.jsx     # Captain state and actions
│
├── assets/                    # Static assets (images, icons, etc.)
│
└── Resources/                 # Documentation and resources

```

### Folder Descriptions

- **pages/**: Contains full-page components that represent different routes in the application. Each page handles its own logic and child components.
- **components/**: Reusable UI components used across multiple pages. Each component is self-contained and receives data via props.
- **context/**: React Context providers for global state management shared across the application.
- **assets/**: Static files like images, icons, fonts, and other media.

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- Git

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Uber/frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root of the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

See [Environment Variables](#environment-variables) for more details.

### Step 4: Start the Development Server

```bash
npm run dev
```

The application will be available at **`http://localhost:5173`** (default Vite port).

---

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot module replacement (HMR). Changes are reflected instantly in the browser.

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `dist/` folder. This minifies code and optimizes assets for deployment.

### Preview Production Build Locally

```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Linting

ESLint configuration is available in `eslint.config.js`. Run linting with:
```bash
npm run lint
```

---

## Project Pages & Routes

### Public Routes (No Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Start.jsx` | Landing page with options to sign up or log in |

### User Routes (Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/user-login` | `UserLogin.jsx` | User login form |
| `/user-signup` | `UserSignup.jsx` | User registration form |
| `/home` | `Home.jsx` | User dashboard (protected) |
| `/riding` | `Riding.jsx` | Active ride screen (protected) |
| `/user-logout` | `UserLogout.jsx` | User logout action |

### Captain Routes (Authentication Required)

| Route | Component | Description |
|-------|-----------|-------------|
| `/captain-login` | `CaptainLogin.jsx` | Captain login form |
| `/captain-signup` | `CaptainSignup.jsx` | Captain registration form |
| `/captain-home` | `CaptainHome.jsx` | Captain dashboard (protected) |

### Route Protection

- **UserProtectWrapper.jsx**: Wraps user routes and ensures only authenticated users can access them. Redirects to login if not authenticated.
- **CaptainProtectWrapper.jsx**: Wraps captain routes and ensures only authenticated captains can access them. Redirects to captain login if not authenticated.

---

## Components Overview

### LocationSearchPanel
Allows users to search for pickup and dropoff locations. Features autocomplete and location validation.

**Props:**
- `setVehiclePanel` - Function to show vehicle options
- `setPanelOpen` - Function to manage panel visibility

### VehiclePanel
Displays available vehicle types (economy, comfort, premium) with pricing and estimated time.

**Props:**
- `setConfirmRidePanel` - Function to show ride confirmation
- `setVehiclePanel` - Function to close this panel

### ConfirmRide
Modal for confirming ride details before requesting a ride.

**Props:**
- `setConfirmRidePanel` - Function to close the panel
- `setLookingForDriver` - Function to show driver search screen

### LookingForDriver
Animated loading screen while searching for an available captain.

**Props:**
- `setLookingForDriver` - Function to close this screen

### RidePopUp
Displays ride request details to the captain with accept/reject options.

**Props:**
- `ride` - Ride object with details
- `setRidePopupPanel` - Function to manage popup visibility

### WaitingForDriver
Shows passenger details and pickup/dropoff information while captain is on the way.

### CaptainDetails
Displays captain's profile information including name, rating, and vehicle details.

**Props:**
- `captain` - Captain object with details

---

## State Management

The application uses **React Context API** for global state management.

### UserContext

Manages user-related state:
- `user` - Current authenticated user
- `setUser` - Update user info
- `logout` - Clear user session
- `login` - Set user after authentication

**Usage:**
```jsx
import { UserContext } from '../context/UserContext';
const { user, setUser, logout } = useContext(UserContext);
```

### CaptainContext

Manages captain-related state:
- `captain` - Current authenticated captain
- `setCaptain` - Update captain info
- `logout` - Clear captain session
- `login` - Set captain after authentication

**Usage:**
```jsx
import { CaptainContext } from '../context/CaptainContext';
const { captain, setCaptain, logout } = useContext(CaptainContext);
```

---

## Environment Variables

Create a `.env.local` file in the frontend root directory:

```env
# Backend API URL
VITE_API_URL=http://localhost:3000

# Optional: uncomment for development debugging
# VITE_DEBUG=true
```

**Variables:**
- `VITE_API_URL` - Backend server URL (default: `http://localhost:3000`)
- `VITE_DEBUG` - Enable debug logging (optional)

Access environment variables in your code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## API Integration

The frontend communicates with the backend API for authentication, ride requests, and status updates.

### Key Endpoints

**User Authentication:**
- `POST /register` - User registration
- `POST/login` - User login
- `GET /profile` - Get user profile
- `GET /logout` - User logout

**Captain Authentication:**
- `POST /register` - Captain registration
- `POST /login` - Captain login
- `GET /profile` - Get captain profile
- `GET /logout` - Captain logout

**Rides:**
- `POST /request-ride` - Request a new ride
- `GET /rides` - Get ride history
- `GET /active-ride` - Get current active ride
- `PUT /ride/:id/confirm` - Confirm ride as captain

### Axios Configuration

The app uses Axios for HTTP requests. Configure it in your context:

```jsx
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});
```

### Authentication Headers

JWT tokens are stored in localStorage and sent with each request:

```jsx
const token = localStorage.getItem('token');
const headers = {
  Authorization: `Bearer ${token}`
};
```

---

## Getting Started Guide

### For Users

1. Navigate to `http://localhost:5173`
2. Click **"Sign Up"** and create an account
3. Log in with your credentials
4. Enter pickup and dropoff locations
5. Select a vehicle type
6. Confirm the ride request
7. Wait for a captain to accept
8. Track the ride in real-time

### For Captains

1. Navigate to `http://localhost:5173`
2. Click **"Captain Sign Up"** and register
3. Log in to the captain dashboard
4. Accept incoming ride requests
5. Navigate to pickup location
6. Confirm pickup and dropoff
7. Complete the ride

---

## Development Tips

### Hot Module Replacement (HMR)
Vite provides instant hot reloading. Save changes and see them immediately in the browser without full page refresh.

### Component Debugging
Use React DevTools browser extension for inspecting components and state changes.

### Network Debugging
Use browser DevTools Network tab to inspect API requests and responses.

### Console Logging
The console shows helpful error messages and logs from your application logic.

### CSS Modules (Optional)
For component-scoped styles, use CSS modules:
```jsx
import styles from './Component.module.css';
<div className={styles.container}></div>
```

---

## Notes

⚠️ **Important:**
- Ensure the backend server is running on `http://localhost:3000` before starting the frontend. See `../Backend/README.md` for backend setup instructions.
- Clear browser localStorage if experiencing authentication issues: `localStorage.clear()` in DevTools console.
- For production builds, update `VITE_API_URL` to your deployed backend URL.
- Check `eslint.config.js` to customize linting rules as per your project standards.

---

## Customization

- **Styles**: Modify `src/App.css` and `src/index.css` for global styling
- **Components**: Add new components in `src/components/` and import as needed
- **Pages**: Create new page components in `src/pages/` and add routes
- **Context**: Extend context providers in `src/context/` for additional global state
- **Assets**: Place images, icons, and other files in `src/assets/`

---

## License

This project is part of the Uber Clone application. All rights reserved.

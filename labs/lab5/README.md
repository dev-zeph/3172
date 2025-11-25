# Lab 6: Interactive React Portfolio with API Integration

* *Date Created*: 17 11 2025
* *Last Modification Date*: 24 11 2025
* *Deployed URL*: https://3171portfolio.netlify.app/
* *Git Repository*: https://git.cs.dal.ca/zephaniah/3172.git

## Author

* Zephaniah Chizulu (zephaniah@dal.ca)

## Built With

* [React](https://react.dev/) - JavaScript library for building user interfaces (with useState and useEffect hooks)
* [Vite](https://vitejs.dev/) - Next generation frontend tooling
* [React Router](https://reactrouter.com/) - Declarative routing for React applications
* [Bootstrap 5](https://getbootstrap.com/) - CSS framework for responsive design
* [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library for UI elements
* [Express.js](https://expressjs.com/) - Backend framework for API routes
* [OpenWeatherMap API](https://openweathermap.org/api) - Weather data integration
* [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language

## Project Description

This is an interactive personal portfolio website built with React that showcases my skills, projects, and experience as a Computer Science student. **Lab 6** builds upon Lab 5 by adding:

- **Theme Switcher**: Light/Dark mode toggle with localStorage persistence
- **Interactive Skills Filter**: Real-time search and category filtering
- **Backend API**: Express.js server serving projects data
- **Weather Integration**: Live weather data from OpenWeatherMap API
- **Loading States & Error Handling**: User-friendly feedback for all async operations

The website features:

- **Home Page**: Landing page with live weather widget and introduction
- **About Page**: Interactive skills filter with search and category selection
- **Projects Page**: API-fetched projects with loading states and error handling
- **404 Page**: Custom error page for handling unknown routes
- **Theme Toggle**: Persistent light/dark mode across all pages

The website implements responsive design principles using Bootstrap 5 and follows WCAG accessibility guidelines.

## Features Implemented

### Lab 6 New Features

#### 1. Theme Switcher (Light/Dark Mode)
- **React State Management**: Uses `useState` hook for theme state
- **LocalStorage Persistence**: Theme preference persists across page refreshes
- **Dynamic CSS**: CSS custom properties for seamless theme transitions
- **Accessible Toggle Button**: Icon-based button with proper ARIA labels
- **Context API**: ThemeContext provider for global theme state

#### 2. Interactive Skills Filter
- **Real-Time Search**: On-the-fly filtering as user types
- **Category Filtering**: Filter by skill categories (Frontend, Backend, DevOps, etc.)
- **Multiple Filter Methods**: 
  - Search input for keyword filtering
  - Dropdown select for category selection
  - Quick-filter buttons with skill counts
- **Dynamic Results**: Shows filtered skill count and "no results" message
- **React State**: Uses `useState` for search term and selected category

#### 3. Backend API
- **Express.js Server**: REST API running on port 5001
- **Projects Endpoint**: `/api/projects` returns project data from JSON file
- **Weather Proxy**: `/api/weather/:city` fetches OpenWeatherMap data
- **CORS Enabled**: Allows frontend requests from development server
- **Error Handling**: Proper error responses for failed requests

#### 4. API Integration with useEffect
- **Projects Page**: Fetches projects from backend API on component mount
- **Weather Widget**: Fetches current weather for specified city
- **Loading States**: Spinner indicators during data fetching
- **Error Handling**: User-friendly error messages with retry information
- **Dynamic Updates**: Weather updates when user changes city

#### 5. Weather Information Display
- **City Name**: Displays current location
- **Temperature**: Shows temperature in Celsius with icon
- **Humidity**: Displays humidity percentage
- **Weather Description**: Text description of current conditions
- **Feels Like**: Apparent temperature
- **City Input**: Users can change city and refresh weather data

### Lab 5 Base Features

#### 1. React Project Setup
- Created using Vite for fast development experience
- Organized folder structure with separate directories for components, pages, and context
- Implemented React Router for client-side routing

#### 2. Components
- **Header Component**: Reusable navigation bar with Bootstrap navbar
  - Responsive mobile menu
  - Active route highlighting
  - ARIA labels for accessibility
  - Integrated theme toggle button
  
- **Footer Component**: Reusable footer displayed across all pages
  - Copyright information
  - Technologies used

- **ThemeToggle Component**: Theme switcher button with icons

#### 3. Pages
- **Home**: Landing page with weather widget, introduction, and call-to-action buttons
- **About**: Education, experience, **interactive skills filter**, and career goals
- **Projects**: Portfolio of projects with detailed descriptions
- **404 Not Found**: Custom error page with navigation back to home

### 4. Styling
- Bootstrap 5 integration for consistent UI
- Custom CSS for enhanced styling
- Hover effects and transitions
- Card-based layout for better visual hierarchy

### 5. Accessibility (WCAG Compliance)
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images (when added)
- Color contrast compliance

### 6. Routing
- React Router implementation
- Catch-all route (*) for 404 page
- Clean, readable URLs


### Issues Encountered and Solutions
1. **Port conflict**: Development server port 5173 was in use
   - Solution: Vite automatically switched to port 5174

2. **Bootstrap JavaScript not loading**: Nav toggle wasn't working
   - Solution: Added `bootstrap/dist/js/bootstrap.bundle.min.js` import

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API Key (free tier available at https://openweathermap.org/api)

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://git.cs.dal.ca/zephaniah/3172.git
cd 3172/labs/lab5
```

#### 2. Install Frontend Dependencies
```bash
npm install
```

#### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

#### 4. Configure Environment Variables
Create a `.env` file in the `backend` directory:
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and add your OpenWeatherMap API key:
```
OPENWEATHER_API_KEY=your_actual_api_key_here
PORT=5001
```

#### 5. Run the Application

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
```

**Terminal 2 - Start Frontend Development Server:**
```bash
cd .. # back to lab5 root
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5174
- Backend API: http://localhost:5001

### API Endpoints

#### Backend API Routes
- `GET /api/health` - Health check endpoint
- `GET /api/projects` - Fetch all projects
- `GET /api/weather/:city` - Fetch weather data for specified city

### Testing the Features

1. **Theme Switcher**: Click the sun/moon icon in the navbar
2. **Skills Filter**: Navigate to About page and try:
   - Typing in the search box (e.g., "React", "Python")
   - Selecting a category from dropdown
   - Clicking category filter buttons
3. **Projects API**: Check Projects page loads data from backend
4. **Weather Widget**: On Home page, enter a different city name and press Enter

## Sources Used

All code was written from scratch based on course materials and official React/Bootstrap documentation. No external code was copied or modified.

### References:
- React Documentation: https://react.dev/
- React Hooks (useState, useEffect): https://react.dev/reference/react/hooks
- React Router Documentation: https://reactrouter.com/
- Bootstrap 5 Documentation: https://getbootstrap.com/docs/5.0/
- Bootstrap Icons: https://icons.getbootstrap.com/
- Vite Documentation: https://vitejs.dev/
- Express.js Documentation: https://expressjs.com/
- OpenWeatherMap API: https://openweathermap.org/api
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

## Acknowledgments

* Course materials from CSCI 3172 (Lab 5 & Lab 6)
* Bootstrap documentation for UI components
* React Router documentation for routing implementation
* OpenWeatherMap for providing free weather API
* Express.js community for backend framework

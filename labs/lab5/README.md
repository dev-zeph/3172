# Lab 5: React Portfolio Website

* *Date Created*: 17 11 2025
* *Last Modification Date*: 17 11 2025
* *Deployed URL*: [TO BE ADDED AFTER DEPLOYMENT]
* *Git Repository*: https://git.cs.dal.ca/zephaniah/3172.git

## Author

* Zephaniah Chizulu (zephaniah@dal.ca)

## Built With

* [React](https://react.dev/) - JavaScript library for building user interfaces
* [Vite](https://vitejs.dev/) - Next generation frontend tooling
* [React Router](https://reactrouter.com/) - Declarative routing for React applications
* [Bootstrap 5](https://getbootstrap.com/) - CSS framework for responsive design
* [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language

## Project Description

This is a personal portfolio website built with React that showcases my skills, projects, and experience as a Computer Science student. The website features:

- **Home Page**: Landing page with a brief introduction
- **About Page**: Detailed information about education, experience, career goals, and technical skills
- **Projects Page**: Showcase of academic and personal projects with descriptions and technologies used
- **404 Page**: Custom error page for handling unknown routes

The website implements responsive design principles using Bootstrap 5 and follows WCAG accessibility guidelines.

## Features Implemented

### 1. React Project Setup
- Created using Vite for fast development experience
- Organized folder structure with separate directories for components and pages
- Implemented React Router for client-side routing

### 2. Components
- **Header Component**: Reusable navigation bar with Bootstrap navbar
  - Responsive mobile menu
  - Active route highlighting
  - ARIA labels for accessibility
  
- **Footer Component**: Reusable footer displayed across all pages
  - Copyright information
  - Technologies used

### 3. Pages
- **Home**: Landing page with introduction and call-to-action buttons
- **About**: Education, experience, technical skills, and career goals
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

## Testing

### Unit Testing
Components were tested manually through:
- Navigation testing: Verified all links work correctly
- Route testing: Confirmed all pages render properly
- 404 testing: Verified unknown routes redirect to 404 page
- Responsive testing: Checked layout on different screen sizes

### Browser Compatibility Testing
Tested on the following browsers:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge (latest version)

All features work correctly across tested browsers with no major discrepancies.

### Issues Encountered and Solutions
1. **Port conflict**: Development server port 5173 was in use
   - Solution: Vite automatically switched to port 5174

2. **Bootstrap JavaScript not loading**: Nav toggle wasn't working
   - Solution: Added `bootstrap/dist/js/bootstrap.bundle.min.js` import

## Deployment Instructions

### Deploying to Netlify

1. Push code to GitHub repository
2. Log in to Netlify
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select the repository
5. Configure build settings:
   - Base directory: `labs/lab5`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy site

### Environment Variables
No environment variables required for this project.

## Sources Used

All code was written from scratch based on course materials and official React/Bootstrap documentation. No external code was copied or modified.

### References:
- React Documentation: https://react.dev/
- React Router Documentation: https://reactrouter.com/
- Bootstrap 5 Documentation: https://getbootstrap.com/docs/5.0/
- Vite Documentation: https://vitejs.dev/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

## Acknowledgments

* Course materials from CSCI 3172
* Bootstrap documentation for UI components
* React Router documentation for routing implementation

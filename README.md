# ICETIME-24

Welcome to the ICETIME-24 project! This repository contains the source code for the official website of ICETIME-24, a National Level Technical Conference organized by the Department of Mechanical Engineering at Sri Sai Ram Engineering College. The live version of the website can be accessed [here](https://icimme-25.netlify.app/).

## Project Overview

The ICETIME-24 website serves as the central platform for information regarding the conference, including event details, schedules, team information, and FAQs. The conference is aimed at bringing together researchers, academicians, and industry professionals to discuss innovations and advancements in Mechanical Engineering and related fields.

## Features

- **Informative Content**: Provides comprehensive details about the conference, including keynote sessions, paper presentations, and workshops.
- **Responsive Design**: Ensures optimal viewing and interaction experiences across a wide range of devices, from desktops to mobile phones.
- **User-Friendly Navigation**: Features a clear and intuitive navigation structure, allowing users to easily access information about sessions, the organizing team, and important announcements.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that offers a rapid development server and optimized build process.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Netlify**: Platform used for deploying and hosting the website.

## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Aswin-04/ICETIME-24.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ICETIME-24
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Access the application**:

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

The repository is organized as follows:

- **`public/`**: Contains static assets such as images and the `index.html` file.
- **`src/`**: Houses the main application source code, including components and styles.
  - **`assets/`**: Stores images, fonts, and other media assets.
  - **`components/`**: Contains reusable React components.
  - **`pages/`**: Includes the main pages of the website.
  - **`App.jsx`**: The root component that sets up the application routes and layout.
  - **`main.jsx`**: The entry point for the React application.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`vite.config.js`**: Configuration file for Vite.

## Deployment

The website is deployed on Netlify. To deploy your own version:

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy the contents of the `dist/` directory** to your preferred hosting platform.

## Contributing

Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request.



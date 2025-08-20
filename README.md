# Estate Elite 🏡

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

**Estate Elite** is a feature-rich, static front-end web application for a modern real estate marketplace. It provides a sleek, user-friendly interface for users to browse, search, and find their dream properties. The project includes interactive maps, detailed property listings, and essential financial calculators to assist potential buyers.

![Estate Elite Showcase](https://i.imgur.com/8a3gY2t.gif)

---

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#-technology-stack)
- [🚀 Getting Started](#-getting-started)
- [▶️ How to Run the Project](#️-how-to-run-the-project)
- [📂 Project Structure](#-project-structure)
- [🔮 Future Improvements](#-future-improvements)

---

## 🌐 Live Demo

<a href="https://taranpreet09.github.io/Estate-Elite/EstateElite/home.html
" target="_blank">View</a>



---

## ✨ Key Features

- **Interactive Homepage**: A stunning landing page with a background video, featured listings, and customer testimonials.
- **Dynamic Property Search & Filtering**: Users can search for properties and filter them by type (Rent/Buy), category (Apartment/House), price range, and number of bedrooms.
- **Interactive Map View**: Powered by **Leaflet.js**, the map displays all property listings as markers. The map view dynamically updates based on search filters.
- **Detailed Property Pages**: Each property has a dedicated page showing comprehensive details, including images, room sizes, nearby amenities, and its location on a map.
- **User Authentication Simulation**: A functional login and signup interface that uses browser `localStorage` to simulate user sessions and persist data.
- **Financial Planning Tools**:
    - **EMI Calculator**: A comprehensive tool to calculate Equated Monthly Installments with currency conversion (INR, USD, EUR, GBP) and a visual breakdown chart (Principal vs. Interest) using **Chart.js**.
    - **Loan Calculator**: A simple tool to quickly calculate loan payments and total interest.
- **Image Downloader Utility**: A Node.js script (`download.js`) to fetch and save property images from the Pixabay API, useful for populating project assets.

---

## 🛠️ Technology Stack

- **Frontend**: `HTML5`, `CSS3`, `JavaScript (ES6)`
- **JavaScript Libraries**:
    - **Leaflet.js**: For interactive maps.
    - **Swiper.js**: For touch-enabled sliders and carousels.
    - **Chart.js**: For rendering the EMI calculator's pie chart.
- **Development Utility**:
    - **Node.js**: Used for the `download.js` image fetching script (requires `https` and `fs` core modules).

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a modern web browser. For the best experience and to avoid potential CORS issues with local files, it's recommended to use a live server. If you have VS Code, the **Live Server** extension is a great choice.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/estate-elite.git](https://github.com/your-username/estate-elite.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd estate-elite
    ```

---

## ▶️ How to Run the Project

### 1. Running the Main Web Application

1.  Open the project folder in your code editor (e.g., VS Code).
2.  Right-click on the `home.html` file.
3.  Select "Open with Live Server" (or your equivalent).
4.  Your browser will open with the project running.

### 2. Running the Image Downloader Utility (Optional)

The `download.js` script is a utility to fetch images.

1.  **Open the script**: Open the `download.js` file.
2.  **Add your API Key**: Replace the placeholder API key with your own key from Pixabay.
    ```javascript
    // download.js
    const apiKey = 'YOUR_PIXABAY_API_KEY';
    ```
3.  **Run the script from your terminal**:
    ```bash
    node download.js
    ```
    This will download images into the root directory of the project.

---

## 📂 Project Structure

The project is organized with a clear and intuitive file structure.
You are absolutely right. It looks like some of our previous conversation and explanations were accidentally copied into the file along with the README content, causing the repetitions and formatting issues.

My apologies for the confusion.

Here is the clean, corrected, and de-duplicated version. This is the single, complete README.md file that you can copy and paste directly into GitHub.

Markdown

# Estate Elite 🏡

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

**Estate Elite** is a feature-rich, static front-end web application for a modern real estate marketplace. It provides a sleek, user-friendly interface for users to browse, search, and find their dream properties. The project includes interactive maps, detailed property listings, and essential financial calculators to assist potential buyers.

![Estate Elite Showcase](https://i.imgur.com/8a3gY2t.gif)

---

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [✨ Key Features](#-key-features)
- [🛠️ Technology Stack](#-technology-stack)
- [🚀 Getting Started](#-getting-started)
- [▶️ How to Run the Project](#️-how-to-run-the-project)
- [📂 Project Structure](#-project-structure)
- [📸 Screenshots](#-screenshots)
- [🔮 Future Improvements](#-future-improvements)

---

## 🌐 Live Demo

<a href="https://taranpreet09.github.io/Estate-Elite/EstateElite/home.html" target="_blank">View</a>

---

## ✨ Key Features

- **Interactive Homepage**: A stunning landing page with a background video, featured listings, and customer testimonials.
- **Dynamic Property Search & Filtering**: Users can search for properties and filter them by type (Rent/Buy), category (Apartment/House), price range, and number of bedrooms.
- **Interactive Map View**: Powered by **Leaflet.js**, the map displays all property listings as markers. The map view dynamically updates based on search filters.
- **Detailed Property Pages**: Each property has a dedicated page showing comprehensive details, including images, room sizes, nearby amenities, and its location on a map.
- **User Authentication Simulation**: A functional login and signup interface that uses browser `localStorage` to simulate user sessions and persist data.
- **Financial Planning Tools**:
    - **EMI Calculator**: A comprehensive tool to calculate Equated Monthly Installments with currency conversion (INR, USD, EUR, GBP) and a visual breakdown chart (Principal vs. Interest) using **Chart.js**.
    - **Loan Calculator**: A simple tool to quickly calculate loan payments and total interest.
- **Image Downloader Utility**: A Node.js script (`download.js`) to fetch and save property images from the Pixabay API, useful for populating project assets.

---

## 🛠️ Technology Stack

- **Frontend**: `HTML5`, `CSS3`, `JavaScript (ES6)`
- **JavaScript Libraries**:
    - **Leaflet.js**: For interactive maps.
    - **Swiper.js**: For touch-enabled sliders and carousels.
    - **Chart.js**: For rendering the EMI calculator's pie chart.
- **Development Utility**:
    - **Node.js**: Used for the `download.js` image fetching script (requires `https` and `fs` core modules).

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a modern web browser. For the best experience and to avoid potential CORS issues with local files, it's recommended to use a live server. If you have VS Code, the **Live Server** extension is a great choice.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/estate-elite.git](https://github.com/your-username/estate-elite.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd estate-elite
    ```

---

## ▶️ How to Run the Project

### 1. Running the Main Web Application

1.  Open the project folder in your code editor (e.g., VS Code).
2.  Right-click on the `home.html` file.
3.  Select "Open with Live Server" (or your equivalent).
4.  Your browser will open with the project running.

### 2. Running the Image Downloader Utility (Optional)

The `download.js` script is a utility to fetch images.

1.  **Open the script**: Open the `download.js` file.
2.  **Add your API Key**: Replace the placeholder API key with your own key from Pixabay.
    ```javascript
    // download.js
    const apiKey = 'YOUR_PIXABAY_API_KEY';
    ```
3.  **Run the script from your terminal**:
    ```bash
    node download.js
    ```
    This will download images into the root directory of the project.

---

## 📂 Project Structure

The project is organized with a clear and intuitive file structure.
```

/
├── assets/                 # Contains all static assets like images, videos, fonts
├── home.html               # The main landing page of the website
├── login.html              # Login and Signup page
├── map.html                # The page for searching, filtering, and viewing properties
├── estateDetail.html       # The template for a single property's detail page
├── emi.html                # The EMI Calculator page
├── loan.html               # The simple Loan Calculator page
├── home.css                # Styles specific to the homepage
├── map.css                 # Styles specific to the map and listings page
├── estateDetail.css        # Styles for the property detail page
├── ...                     # Other specific CSS files
├── home.js                 # Logic for homepage interactions (modals, search bar)
├── map.js                  # Core logic for filtering listings and map functionality
├── estateDetail.js         # Logic to display data on the property detail page
├── emi.js                  # Logic for the EMI calculator and chart
├── download.js             # Node.js utility script for downloading images
└── README.md               # This file

```

## 🔮 Future Improvements

This project has a solid foundation. Here are some potential features to add in the future:

-   **Full Backend Integration**: Replace the hardcoded JavaScript data arrays with a robust backend (e.g., Node.js, Express) and a database (e.g., MongoDB, PostgreSQL) for dynamic data management.
-   **Real User Accounts**: Implement a complete authentication system with password hashing and session management.
-   **Dynamic "Add Property" Feature**: Integrate a geocoding API to automatically get coordinates for a new property's address.
-   **Deployment**: Deploy the final application to a hosting service like Netlify, Vercel, or Gi

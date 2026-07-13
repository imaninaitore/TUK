# Technical University of Kenya (TUK) Website Redesign

A clean, modern, and fully responsive frontend web application for the Technical University of Kenya (TUK), built using modern web development standards.

## 🎯 Overview

This project is a visual and structural redesign of the official TUK website. The goal of this trial is to improve upon the existing platform by updating its layout, ensuring mobile responsiveness, and creating a smoother, single-page application (SPA) experience.

By leveraging React and client-side routing, this version eliminates slow page reloads and offers an intuitive navigation flow for students, faculty, and visitors.

## ✨ Features Built & Restructured

### 🖥️ Public Landing & Informational Pages
*   **Dynamic Homepage:** Features an active hero section, quick-link banners, upcoming campus events, and an official notice board.
*   **About TUK Hub:** Reorganized institutional history, mission statement, philosophy, and university leadership profiles.
*   **Academics & Faculties:** Clear grid layout sorting the various Faculties (e.g., FAST, FEBE, FSST) and their respective departments.
*   **Admissions Guide:** A step-by-step layout explaining application procedures, entry requirements, and fee structures for prospective students.

### 👥 Specialized User Portals (Frontend Layouts)
*   **Student Portal Interface:** Clean dashboards for hypothetical course registration, timetable viewing, and exam result tracking.
*   **Staff Portal Interface:** A clean dashboard concept for faculty member management and internal communication.

### 🛠️ UI/UX Enhancements
*   **Instant Client-Side Navigation:** Zero page-refresh lags when moving between university modules.
*   **Utility-First Styling:** Clean UI using custom Tailwind color configurations matching official university branding.
*   **Intuitive Mobile Menu:** A fully animated, thumb-friendly navigation drawer optimized for mobile users.
*   **Accessible Typography:** Clear hierarchy and high-contrast color choices to improve general readability.

## 🚀 Tech Stack

*   **Frontend Library:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router (v6)

## 🛠️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```

2. Open the project folder:
   ```bash
   cd tuk-website-redesign
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the local development server:
```bash
npm run dev
```

Once running, open your browser and go to `http://localhost:5173` to view the website.

## 📂 Project Structure

```text
├── src/
│   ├── assets/          # Images, official logos, and campus icons
│   ├── components/      # Reusable UI pieces (Navbar, Footer, FacultyCards)
│   ├── pages/           # Routed views (Home, About, Admissions, Portals)
│   ├── App.jsx          # Router setup and global layout wrapper
│   ├── index.css        # Tailwind CSS directives and global typography overrides
│   └── main.jsx         # The entry point that mounts our React application
```

## 📈 Future Scope & Extensions
*   **Backend Integration:** Connect to a Node.js/Express API or Firebase/Supabase for real student authentication.
*   **Search Functionality:** Implement a client-side search bar to scan through listed courses and documents.
*   **Dark Mode Toggle:** Provide a high-contrast dark theme option for late-night student browsing.

## 🎨 Asset Attributions
*   **Logos & Branding:** All official Technical University of Kenya logos and media materials belong strictly to TUK.
*   **Icons:** Provided by [Lucide React](https://lucide.dev) / [Heroicons](https://heroicons.com).

## ✍️ Author

*   **Imani Naitore** - [GitHub Profile](https://github.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Disclaimer

This project is an independent trial and a personal design proposal. It is not officially affiliated with, commissioned by, or endorsed by the Technical University of Kenya administration.

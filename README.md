CodeXP

Welcome to CodeXP, a cutting-edge learning platform designed to empower individuals with skills in coding. This repository hosts the source code and assets for CodeXP's web application.

Features

Gamified Learning Experience: Earn badges and rewards as you progress through lessons.

Interactive Timeline: Track your learning journey with a visually appealing timeline.

Dynamic Content: Learn front-end, back-end, and UI/UX design, with more topics to come.

Engaging UI: Modern design with a video-enhanced hero section.

Personalized Learning Paths: Tailored lessons based on user goals and preferences.

Technologies Used

Frontend: React.js (with Tailwind CSS for styling)

Backend: Node.js (with Express.js)

Database: MySQL

Deployment: Vercel (for the web application)

Assets: Video backgrounds and custom illustrations

Getting Started

Follow these steps to set up and run the project locally.

Prerequisites

Node.js (v14 or later)

MySQL

Installation

Clone the repository:

git clone https://github.com/your-username/codexp.git
cd codexp

Install dependencies:

npm install

Set up the database:

Create a MySQL database.

Import the schema from database/schema.sql (if available).

Update the database credentials in the .env file.

Start the development server:

npm run dev

Open your browser and navigate to:

http://localhost:3000

Project Structure

src
├── app
│   ├── page.js        # Main entry point for the web app
│   └── components     # Reusable components (e.g., Timeline, Navbar)
├── assets             # Static assets (e.g., images, videos)
public
├── assets             # Publicly accessible static files
.env                   # Environment variables
package.json           # Dependencies and scripts

Contact

For questions or feedback, reach out to:

Email: your-email@example.com

GitHub: your-username

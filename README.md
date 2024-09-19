# IESA Educativo Website

This is the official website of IESA Educativo, built with Next.js to provide a fast and scalable educational platform. The website includes server-side rendering, dynamic routing, and environmental variables for secure email handling.

### Table of Contents

- Installation
- Development
- Environment Variables
- Running the Application
- Project Structure
- License

## Installation

Before starting, ensure that you have Node.js and npm installed on your system. Then, clone the repository and install the dependencies:

    git clone https://github.com/sensitiky/IESA-WEB
    cd IESA-WEB
    npm install

## Development

To start the development server:

    npm run dev

The development server will be available at `http://localhost:3000`.

## Environment Variables

The project relies on several environment variables for email functionality, which must be configured for different environments (Development, Preview, Production). Ensure that these variables are added to a .env.local file for local development, or set in your hosting environment for production.

Required Environment Variables:

- EMAIL_TO - The recipient email address.
- EMAIL - The sender email address.
- EMAIL_PASSWORD - The password for the sender email.
- EMAIL_HOST - The host for the email service (e.g., smtp.gmail.com).
- EMAIL_PORT - The port for the email service (e.g., 465 or 587).
- EMAIL_USER - The email username.
- EMAIL_PASS - The email password.
- EMAIL_FROM - The "From" address that appears in outgoing emails.

For example, your .env.local file may look like this:

    EMAIL_TO=example@iesaeducativo.com
    EMAIL=youremail@example.com
    EMAIL_PASSWORD=yourpassword
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=465
    EMAIL_USER=youremail@example.com
    EMAIL_PASS=yourpassword
    EMAIL_FROM="IESA Educativo <youremail@example.com>"

## Running the Application

To build and run the application in production mode:

    npm run build
    npm start

This will create an optimized production build and serve it.

### License

This project is licensed under the MIT License.

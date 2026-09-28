# COLORS Web Application

## Description
COLORS is a full-stack web application built for COP 4331. It allows authenticated users to securely log in, add custom color names to a persistent database, and search through previously added entries. 

## Technologies Used
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** PHP, MySQL
* **Infrastructure:** LAMP Stack (Linux, Apache, MySQL, PHP) hosted on a DigitalOcean droplet.

## High-Level Setup Instructions
1. Clone this repository to your local machine or server.
2. Ensure you have a LAMP environment configured.
3. Place the contents of the `public/` directory into your server's web root.
4. Place the `api/` directory in a secure location accessible by your frontend.

## How to Run and Access
1. Import the required SQL database schema to your MySQL instance.
2. Update the database connection strings in the PHP API files.
3. Update the `urlBase` variable in `js/code.js`.
4. Navigate to `index.html` in your browser.

## Assumptions & Limitations
* Passwords are securely hashed using MD5 on the client side before transmission.
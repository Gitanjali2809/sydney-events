## 📝 Sydney Events – Project Summary

This project is a full-stack web application that displays events in **Sydney, Australia**. The event data is scraped from [Eventbrite](https://www.eventbrite.com/) using Python and shown on a React-based website. Users can click a **"GET TICKETS"** button to view events and will be asked for their email before being redirected to the original event page (email modal still in progress).

---

### ✅ What We Completed

* Created a Python scraper using **Selenium** and **BeautifulSoup** to extract event data from Eventbrite.
* Built a **Node.js + Express** backend to serve the scraped data via an `/events` endpoint.
* Built a **React frontend** to fetch and display the event list in a clean and minimal UI.
* Set up button functionality to eventually collect email and redirect users.
* Successfully connected frontend and backend.

---

### ⚠️ What Was Difficult

* **Scraper Issues**: Initially, incorrect selectors caused 0 results. Fixed using browser Inspect tool.
* **React Modal**: Attempted to implement a modal for email input before redirection. Encountered rendering issues likely related to logic or CSS, and it's currently under refinement for future completion.
* **Backend Fetch Errors**: Faced CORS and timing issues when frontend loaded before backend was ready. Fixed with proper setup.
* **React Confusion**: Mixed up Vite and CRA commands (`npm run dev` vs `npm start`)—corrected after realizing this was a CRA project.

---

### 📌 To Be Done (Future Plans)

* Complete and fix the email input modal using React state.
* Store user emails via a POST request in the backend.
* Set up the scraper to run automatically (e.g., on a cron job).
* Polish UI design further for mobile responsiveness.
* Add event filtering by category, date, or interest.

---

### 💡 Tools & Resources

* Python (Selenium, BeautifulSoup) – for scraping data
* Node.js + Express – for API backend
* React – for frontend UI
* Axios – to fetch events from backend
* **ChatGPT** – used throughout the project to help understand errors, debug, and learn concepts

---

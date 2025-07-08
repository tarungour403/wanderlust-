# 🌍 Wanderlust

**Wanderlust** is a full-stack web application inspired by Airbnb, where users can discover, create, review, and manage campground listings across the globe. It features modern UI, robust backend architecture, secure authentication, image hosting, and geolocation support.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization**  
  Secure login and registration using Passport.js.

- 🏕️ **Campground Management**  
  Users can add, edit, view, and delete campground listings.

- 💬 **Reviews & Ratings**  
  Logged-in users can post reviews and ratings on campgrounds.

- 📷 **Image Uploads via Cloudinary**  
  Upload multiple images per listing with drag-and-drop support.

- 🗺️ **Interactive Maps with Mapbox**  
  Displays campground locations on a dynamic map.

- 🛡️ **Input Validation**  
  Ensures clean and valid user input using JOI.

---

## 🧰 Tech Stack

**Frontend**
- HTML, CSS, JavaScript
- EJS (Embedded JavaScript Templates)
- Bootstrap 5

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (authentication)
- Cloudinary (image hosting)
- Mapbox (geolocation & mapping)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tanugour/wanderlust.git
cd wanderlust
wanderlust/
├── app.js
├── models/
│   ├── campground.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── public/
│   └── stylesheets/
├── views/
│   ├── campgrounds/
│   ├── layouts/
│   ├── partials/
│   └── reviews/
├── utils/
├── middleware/
└── .env

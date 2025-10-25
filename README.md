
# 🛍️ Ecommerce Web App

A complete **Ecommerce Web Application** where users can browse products, add them to the cart, log in, place orders, and make online payments.  
The admin dashboard allows managing products, orders, and users.

---

## 👩🏻‍💻 Technologies Used

- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Authentication & Hosting:** Firebase  
- **Hosting:** MongoDB Atlas  
- **Payment Gateway:** Stripe 
- **UI:** Responsive React UI with Pagination

---

## ✨ Features

### 👤 User Side
- Firebase Google / Email Login  
- Product Listing & Dynamic Product Details Page  
- Add to Cart, Update Quantity, Remove from Cart  
- Checkout & Online Payment System  
- Order History Page  
- Fully Responsive Design (Mobile & Desktop)

### 🛠️ Admin Dashboard
- Secure Admin Login  
- Add / Update / Delete Products  
- Manage Orders & Users  
- Dashboard Statistics and Overview  

---

## ⚙️ Installation (Local Setup)


# Go inside the project folder
cd ecommerce

# Install dependencies
npm install

# Setup environment variables
Create a `.env` file in the root with:
MONGO_URI=your_mongodb_url
FIREBASE_API_KEY=your_firebase_key
PORT=4000
PAYMENT_SECRET_KEY=your_payment_secret

# Start the server
npm run dev


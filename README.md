# Help Community

> Full-stack e-commerce and community support platform built with React, Node.js, Express, PostgreSQL, and Mercado Pago integration.

<p align="center">
  <img src="./Client/src/assets/logoAzul.png" width="200" alt="Help Community Logo">
</p>

---

# 📌 Overview

Help Community is a modern web platform that combines traditional e-commerce functionality with social/community-oriented features.

The project allows users to:

- Browse and purchase products
- Create and manage campaigns
- Interact with community initiatives
- Manage profiles and purchase history
- Process payments through Mercado Pago
- Upload and manage media through Cloudinary

The application follows a decoupled client-server architecture using React on the frontend and Node.js/Express on the backend.

---

# 🚀 Main Features

## User Features

- User registration and authentication
- Firebase authentication integration
- Product browsing and filtering
- Shopping cart functionality
- Checkout and payment flow
- Purchase history
- User profile management
- Campaign creation and management

## Administrative Features

- Product management
- Category management
- Campaign moderation
- User administration
- Purchase monitoring

## Integrations

- Mercado Pago payment gateway
- Cloudinary media hosting
- Nodemailer email notifications
- Firebase authentication services

---

# 🏗️ Technical Architecture

## Frontend

### Technologies

- React
- Vite
- Redux
- Redux Thunk
- React Router DOM
- Axios

### Responsibilities

- User interface rendering
- Client-side routing
- Global state management
- API communication
- Form validation
- User experience logic

---

## Backend

### Technologies

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL

### Responsibilities

- REST API
- Business logic
- Authentication handling
- Database management
- Payment processing
- Email services

---

# 🗂️ Project Structure

```bash
Help-Community/
│
├── Client/
│   ├── src/
│   │   ├── Components/
│   │   ├── Views/
│   │   ├── Redux/
│   │   ├── assets/
│   │   └── routes/
│   │
│   └── package.json
│
├── Server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── handlers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── utils/
│   │
│   └── package.json
│
└── README.md
```

---

# 🧩 Main Database Models

The backend currently includes entities such as:

- User
- Product
- Category
- Campaign
- Buy
- Review
- ShoppingCar
- State
- CategoryProduct

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone <repository-url>
cd Help-Community
```

---

## 2. Install Dependencies

### Frontend

```bash
cd Client
npm install
```

### Backend

```bash
cd Server
npm install
```

---

# 🔐 Environment Variables

Create `.env` files in both frontend and backend environments.

## Backend Example

```env
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=helpcommunity

MP_ACCESS_TOKEN=your_mercadopago_token

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

FIREBASE_API_KEY=your_firebase_key
```

---

# ▶️ Running the Project

## Backend

```bash
cd Server
npm start
```

## Frontend

```bash
cd Client
npm run dev
```

---

# 💳 Payment Integration

The platform integrates Mercado Pago for secure payment processing.

Features include:

- Checkout flow
- Payment preference generation
- Transaction handling
- Purchase confirmation

---

# ☁️ Media Management

Cloudinary is used for:

- Product image hosting
- Campaign media storage
- Optimized image delivery

---

# 📧 Email Notifications

Nodemailer integration supports:

- Purchase confirmations
- User notifications
- Administrative alerts

---

# 🔒 Authentication

Firebase Authentication is implemented for:

- User login
- Registration
- Session management
- Secure authentication flow

---

# 📈 Scalability Considerations

The project architecture was designed with scalability and modularity in mind:

- Separation of concerns
- Modular route organization
- Reusable React components
- Centralized state management
- ORM-based database abstraction
- Environment-based configuration

---

# 🛠️ Future Improvements

Potential future enhancements include:

- Advanced analytics dashboard
- Real-time notifications
- Mobile responsiveness optimization
- Multi-language support
- Recommendation engine
- Campaign donation tracking improvements

---

# 📄 Provisional Ownership Statement

This repository and its associated assets represent the current implementation state of the Help Community platform.

All concepts, interfaces, workflows, branding assets, business logic, and source code should be treated as confidential and proprietary unless explicitly authorized otherwise.

---

# 👨‍💻 Tech Stack Summary

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| State Management | Redux / Redux Thunk |
| Backend | Node.js + Express |
| ORM | Sequelize |
| Database | PostgreSQL |
| Authentication | Firebase |
| Payments | Mercado Pago |
| Media Hosting | Cloudinary |
| Email Service | Nodemailer |

---

# 📌 Status

🚧 Project currently under active development.

---

# 📬 Contact

For technical review, collaboration, or project inquiries, please contact the project owner directly.

---

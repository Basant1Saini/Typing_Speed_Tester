# Typing Speed Tester

A modern, full-stack typing speed test application built with the MERN stack, featuring real-time performance tracking, user authentication, and responsive design.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server (replaces deprecated Create React App)
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router v6** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Query/TanStack Query** - Server state management and caching

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT (jsonwebtoken)** - Secure user authentication
- **bcryptjs** - Password hashing and security
- **cors** - Cross-origin resource sharing
- **helmet** - Security middleware
- **express-rate-limit** - API rate limiting

### Development & Deployment
- **ESLint + Prettier** - Code linting and formatting
- **Husky** - Git hooks for code quality
- **Docker** - Containerization for consistent deployment
- **GitHub Actions** - CI/CD pipeline
- **Vercel/Netlify** - Frontend deployment
- **Railway/Render** - Backend deployment

## ✨ Features

- **Real-time Typing Test** - Accurate WPM and accuracy calculations
- **Multiple Test Modes** - Various time limits and text difficulties
- **User Authentication** - Secure registration and login system
- **Performance Analytics** - Detailed statistics and progress tracking
- **Leaderboards** - Global and personal best scores
- **Responsive Design** - Works seamlessly on all devices
- **Dark/Light Theme** - User preference theme switching
- **Custom Text Import** - Upload your own practice texts
- **Keyboard Heatmap** - Visual representation of typing patterns

## 🏗️ Architecture

```
Typing_Speed_Tester/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service functions
│   │   ├── store/         # State management
│   │   ├── utils/         # Helper functions
│   │   └── types/         # TypeScript type definitions
│   ├── public/
│   ├── package.json
│   └── vite.config.ts     # Vite configuration
├── server/                # Express backend
│   ├── src/
│   │   ├── controllers/   # Route handlers
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── utils/         # Helper functions
│   │   └── config/        # Database and app config
│   ├── package.json
│   └── server.js
├── docker-compose.yml     # Multi-container setup
└── README.md
```

## 🚫 Deprecated Technologies Avoided

- **Create React App** - Replaced with Vite for faster builds and better DX
- **Class Components** - Using modern functional components with hooks
- **Redux (for simple state)** - Using React Query + Context for efficient state management
- **Webpack (manual config)** - Vite handles bundling with zero config
- **npm** - Using pnpm/yarn for faster package management
- **CommonJS** - Using ES6 modules throughout
- **Moment.js** - Using native Date API or date-fns for smaller bundle size

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ (LTS recommended)
- MongoDB 6.0+
- pnpm (recommended) or npm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/typing-speed-tester.git
   cd typing-speed-tester
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   pnpm install
   
   # Install client dependencies
   cd ../client
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   # Server environment
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URI, JWT secret, etc.
   
   # Client environment (if needed)
   cd ../client
   cp .env.example .env
   ```

4. **Start Development Servers**
   ```bash
   # Terminal 1 - Start backend
   cd server
   pnpm dev
   
   # Terminal 2 - Start frontend
   cd client
   pnpm dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173 (Vite default)
   - Backend API: http://localhost:5000

### Docker Setup (Alternative)

```bash
# Run with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Typing Tests
- `GET /api/tests/texts` - Get practice texts
- `POST /api/tests/results` - Submit test results
- `GET /api/tests/history` - Get user test history
- `GET /api/tests/leaderboard` - Get global leaderboard

### User Management
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/stats` - Get user statistics
- `DELETE /api/users/account` - Delete user account

## 🎯 Performance Optimizations

- **Code Splitting** - Route-based lazy loading
- **Image Optimization** - WebP format with fallbacks
- **Bundle Analysis** - Regular bundle size monitoring
- **Caching Strategy** - Service worker for offline functionality
- **Database Indexing** - Optimized MongoDB queries
- **CDN Integration** - Static asset delivery

## 🧪 Testing

```bash
# Frontend tests
cd client
pnpm test

# Backend tests
cd server
pnpm test

# E2E tests
pnpm test:e2e
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
pnpm build
vercel --prod
```

### Backend (Railway)
```bash
cd server
# Connect to Railway and deploy
railway login
railway deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by popular typing test platforms
- Built with modern web development best practices
- Community feedback and contributions

---

**Note**: This project emphasizes modern development practices and avoids deprecated technologies to ensure long-term maintainability and performance.
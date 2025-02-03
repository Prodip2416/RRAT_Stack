# RRAT Stack (React-Redux-Antd-Tailwind)

A modern, powerful frontend stack combining React, Redux, Ant Design, and Tailwind CSS for building scalable and beautiful web applications.

![RRAT Stack](https://img.shields.io/badge/RRAT-Stack-blue)
![React](https://img.shields.io/badge/React-18.x-blue)
![Redux](https://img.shields.io/badge/Redux-4.x-purple)
![Ant Design](https://img.shields.io/badge/Antd-5.x-red)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-teal)

## 🚀 Features

- **React 18+** - Latest React features including Concurrent Mode
- **Redux Toolkit** - Modern state management with simplified setup
- **Ant Design 5** - Enterprise-grade UI components
- **Tailwind CSS 3** - Utility-first CSS framework
<!-- - **TypeScript** - Type safety and better developer experience -->
- **Vite** - Lightning fast build tool
- **ESLint & Prettier** - Code quality and formatting
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Built-in theme switching
- **Performance Optimized** - Best practices for optimal performance

## 🎯 Key Components Showcase

### App Page
```jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import MainLayout from "./layout/MainLayout";
import ErrorBoundary from "./pages/ErrorBoundary";
import Login from "./pages/Login";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthContext";
import { Spin } from "antd";

const App = () => (
  <ErrorBoundary>
    <Router>
      <Suspense fallback={<Spin size="large"></Spin>}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            {routes.map(({ path, component: Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <PrivateRoute>
                    <MainLayout>
                      <Component />
                    </MainLayout>
                  </PrivateRoute>
                }
              />
            ))}
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  </ErrorBoundary>
);

export default App;

```

Features:
- Full Application Error Boundary Handle
- Suspense for heavy Component
- Auth Provider
- Dynamic Routes
- Private Routes
- Responsive design with Layout

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/RRAT_Stack.git

# Navigate to project directory
cd RRAT_Stack

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Project Structure

```
RRAT_Stack/
├── src/
│   ├── apiEndPoints/    # Reusable components
│   ├── assets/          # assets files
│   ├── auth/            # authentication
│   ├── components/      # Reusable components
│   ├── layout/          # Main Layout
│   └── menuItems/       # Menus Items
│   ├── pages/           # Route Page
│   ├── routes/          # Route Define
│   ├── serviecs/        # api services
│   ├── utils/           # Utility functions
├── public/              # Static assets
└── tests/               # Test files
```

## 🔧 Configuration

### Vite & Tailwind CSS 

```javascript
// tailwind.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
});

```

### Redux Store Setup

```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(/* your middlewares */)
});
```

## 🎨 Styling Guide

### Combining Tailwind with Ant Design

```jsx
// Example component using both Tailwind and Ant Design
const CustomCard = () => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">
        Title
      </h2>
      <Button type="primary" className="w-full">
        Action
      </Button>
    </div>
  </Card>
);
```

## 📱 Responsive Design

Built-in responsive breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Performance Optimizations

- Code splitting with React.lazy()
- Image optimization
- Tree-shaking enabled
- Debounced and throttled events
- Memoized components
- Virtual scrolling for large lists

## 📈 Best Practices

1. Use TypeScript for type safety
2. Implement proper error boundaries
3. Follow Redux best practices
4. Write unit tests for components
5. Use proper semantic HTML
6. Optimize bundle size
7. Follow accessibility guidelines

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team
- Redux Team
- Ant Design Team
- Tailwind CSS Team
- All contributors

---

Made with ❤️ by [Prodip]
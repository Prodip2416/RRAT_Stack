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
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning fast build tool
- **ESLint & Prettier** - Code quality and formatting
- **Husky & lint-staged** - Git hooks for code quality
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Built-in theme switching
- **Performance Optimized** - Best practices for optimal performance

## 🎯 Key Components Showcase

### Interactive Progress Slider
```jsx
import { ProgressSlider } from './components';

// Dynamic progress bars with smooth animations
<ProgressSlider 
  items={15} 
  minValue={40} 
  maxValue={80} 
  updateInterval={3000} 
/>
```

Features:
- Horizontal scrollable interface
- Custom eye-catching scrollbar
- Random value generation (40-80%)
- Smooth animations and transitions
- Mouse wheel and drag navigation
- Responsive design with Tailwind CSS

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
│   ├── components/        # Reusable components
│   ├── features/         # Feature-based modules
│   ├── store/           # Redux store configuration
│   ├── styles/          # Global styles and Tailwind config
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
└── tests/              # Test files
```

## 🔧 Configuration

### Tailwind CSS with Ant Design

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true, // Required for compatibility with Ant Design
  theme: {
    extend: {
      // Your custom theme extensions
    }
  }
}
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

Made with ❤️ by [Your Name]
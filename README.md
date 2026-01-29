# ALX Listing App

A modern, scalable Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project establishes a solid foundation for a dynamic property listing application with a focus on clean architecture, reusability, and best practices.

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-38B2AC?style=flat-square&logo=tailwind-css)

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Learning Objectives](#learning-objectives)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Development Guidelines](#development-guidelines)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About The Project

The **ALX Listing App** is the foundational milestone for building a production-ready Airbnb clone. This project scaffolds a well-organized and scalable codebase that serves as the starting point for developing a comprehensive property listing platform.

### Project Goals

- Establish a clean, maintainable project architecture
- Implement type-safe development with TypeScript
- Create reusable UI components following modern design patterns
- Ensure responsive and accessible user interfaces
- Follow industry-standard best practices for scalability

---

## 🎓 Learning Objectives

By completing this project, you will:

- ✅ **Master Next.js Project Setup**: Scaffold production-ready Next.js applications with optimal configurations
- ✅ **Implement TypeScript Best Practices**: Use interfaces and types to ensure code safety and maintainability
- ✅ **Configure TailwindCSS**: Build responsive, accessible, and visually appealing UI components
- ✅ **Structure Projects Professionally**: Organize codebases following industry-standard conventions
- ✅ **Create Reusable Components**: Design modular, scalable component architectures
- ✅ **Manage Assets Effectively**: Organize and optimize project assets for real-world applications

---

## 🛠️ Tech Stack

### Core Technologies

- **[Next.js 13+](https://nextjs.org/)** - React framework for production-grade applications
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript superset
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Code quality and consistency tool

### Additional Tools

- **Node.js 16+** - JavaScript runtime
- **React 18+** - UI library
- **PostCSS** - CSS processing tool

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required

- **Node.js** (version 16 or higher)
- **npm** or **yarn** or **pnpm** package manager
- **Git** for version control

### Recommended

- **VS Code** with the following extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Knowledge Prerequisites

- Basic understanding of React and Next.js
- Familiarity with TypeScript syntax and concepts
- Knowledge of TailwindCSS utility classes
- Understanding of component-based architecture
- Experience with ESLint configuration

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Run the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### 5. Start Building!

Begin editing `app/page.tsx` to see your changes reflected in real-time with hot module replacement.

---

## 📁 Project Structure

```
alx-listing-app/
├── app/                          # Next.js 13+ app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles and Tailwind imports
├── components/                   # Reusable UI components
│   ├── common/                  # Common components
│   │   ├── Card.tsx            # Card component
│   │   └── Button.tsx          # Button component
│   └── layout/                  # Layout components
│       ├── Header.tsx          # Header component
│       └── Footer.tsx          # Footer component
├── interfaces/                   # TypeScript interfaces and types
│   └── index.ts                # Centralized interface definitions
├── constants/                    # Application constants
│   └── index.ts                # Constant values and configurations
├── public/                       # Static assets
│   └── assets/                 # Images, SVGs, and other media
│       ├── images/             # Image files
│       └── svgs/               # SVG files
├── styles/                       # Additional styling (if needed)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

### Directory Descriptions

- **`app/`**: Contains Next.js 13+ app router pages and layouts
- **`components/`**: Modular, reusable React components organized by category
- **`interfaces/`**: TypeScript type definitions and interfaces for type safety
- **`constants/`**: Application-wide constants and configuration values
- **`public/assets/`**: Static files like images, icons, and SVGs
- **`styles/`**: Additional custom styles if needed beyond Tailwind

---

## ✨ Key Features

### 1. **Type-Safe Development**

All components use TypeScript interfaces for props, ensuring compile-time safety:

```typescript
// interfaces/index.ts
export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
```

### 2. **Reusable Components**

Pre-built, customizable components ready for use:

- **Card Component**: Display property listings with images, titles, and pricing
- **Button Component**: Flexible button with multiple variants and states
- **Header/Footer**: Consistent layout components across pages

### 3. **TailwindCSS Integration**

Fully configured TailwindCSS for rapid UI development:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
}
```

### 4. **ESLint Configuration**

Enforces code quality and consistency:

- TypeScript-aware linting
- React best practices
- Next.js specific rules
- Accessibility checks

### 5. **Scalable Architecture**

Organized structure that grows with your application:

- Clear separation of concerns
- Easy to locate and modify components
- Consistent naming conventions
- Modular design patterns

---

## 📘 Development Guidelines

### Component Creation

1. **Location**: Place components in appropriate subdirectories within `components/`
2. **Naming**: Use PascalCase for component files (e.g., `PropertyCard.tsx`)
3. **Structure**: Each component should have its own file
4. **Props**: Define interfaces for all component props in `interfaces/index.ts`

### TypeScript Best Practices

- Always define interfaces for props and complex objects
- Use type inference where possible
- Avoid `any` type unless absolutely necessary
- Export interfaces from `interfaces/index.ts`

### Styling Guidelines

- Prefer TailwindCSS utility classes
- Use semantic color names from the theme
- Keep responsive design in mind (mobile-first approach)
- Extract repeated patterns into reusable components

### Code Quality

- Run ESLint before committing: `npm run lint`
- Follow the project's ESLint configuration
- Write meaningful component and variable names
- Add comments for complex logic

---

## 📜 Available Scripts

### Development

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run lint:fix  # Fix ESLint errors automatically
```

### Testing

```bash
npm run type-check  # Run TypeScript compiler check
```

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Add comments for complex implementations

---

## 📄 License

This project is part of the ALX Software Engineering Program.

---

## 🙏 Acknowledgments

- **ALX Africa** - For providing the project requirements and learning framework
- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment solutions
- **TailwindCSS** - For the utility-first CSS framework
- **TypeScript Team** - For type-safe JavaScript

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review [TailwindCSS Documentation](https://tailwindcss.com/docs)
3. Consult [TypeScript Handbook](https://www.typescriptlang.org/docs/)
4. Reach out to ALX mentors and peers

---

## 🎯 Project Status

**Current Milestone**: Foundation Setup ✅

### Completed
- ✅ Next.js project scaffolding
- ✅ TypeScript configuration
- ✅ TailwindCSS setup
- ✅ ESLint configuration
- ✅ Project structure establishment
- ✅ Reusable component creation

### Next Steps
- 🔄 Implement property listing page
- 🔄 Add dynamic routing
- 🔄 Integrate API endpoints
- 🔄 Implement filtering and search
- 🔄 Add user authentication

---

## 📸 Screenshots

_Coming soon: Add screenshots of your application here_

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

<div align="center">

**Built with ❤️ as part of ALX Software Engineering Program**

⭐ Star this repository if you find it helpful!

</div>
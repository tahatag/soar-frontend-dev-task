# Soar Frontend Dev Task

Welcome to the **Soar Frontend Dev Task** repository! This project showcases a responsive and modular frontend web application using modern tools and best practices.

## Live Demo

Explore the live application hosted on Vercel: [Soar Frontend Dev Task](https://soar-frontend-dev-task.vercel.app/)

---

## Getting Started

Follow the steps below to run the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tahatag/soar-frontend-dev-task.git
   cd soar-frontend-dev-task
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm i
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Tech Stack

This project leverages the following technologies:

### Framework & Language

- **Next.js 15**: Provides server-side rendering, routing, and API handling.
- **TypeScript**: Ensures type safety and improved development experience.

### Styling

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Shadcn/ui**: Pre-configured UI components for Tailwind CSS.

### State Management

- **Zustand**: Lightweight and flexible state management.

### Data Fetching & Handling

- **TanStack Query**: Asynchronous state management and server-state handling.
- **Axios**: HTTP client for handling API requests.

### Forms

- **React-hook-form**: Simplifies form handling and validation.
- **Zod**: Schema validation and parsing for form inputs.

### Visualization & Carousel

- **Recharts**: For creating data visualizations.
- **embla-carousel-react**: Lightweight carousel solution for modern React applications.

### Additional Utilities

- **Sonner**: For notifications and toast messages.
- **Date-fns**: To manage and format dates efficiently.

## Project Structure

The project is organized as follows:

```
soar-frontend-dev-task/
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── app/                 # Next.js pages (frontend and API endpoints)
├── public/              # Static assets
├── lib/                 # Utility functions
├── stores/              # Zustand store
```

### Features

- **Mock API Integration**:

  - The application utilizes Next.js API routes to simulate a backend with mock endpoints.
  - Axios is used for making API calls, with responses managed via TanStack Query.

- **Dynamic Charts**:

  - Visualize mock data interactively using Recharts.

- **Forms with Validation**:

  - React-hook-form combined with Zod ensures robust and user-friendly forms.

- **State Management**:

  - Global state is managed seamlessly using Zustand.

- **Responsive Design**:

  - Ensures compatibility across devices.

- **Carousel**:
  - A smooth and responsive content slider powered by embla-carousel-react.

## Additional Notes

- **Code Quality**: ESLint is configured to maintain code standards.
- **Performance**: Leveraging Next.js optimizations and TanStack Query caching.
- **Development Tools**:
  - Used tools like `@svgr/webpack` for SVG handling.
  - Configured with Tailwind CSS animations for smoother UI interactions.

Feel free to explore and provide feedback!

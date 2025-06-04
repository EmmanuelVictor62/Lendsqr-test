# Lendsqr Frontend Assessment

This repository contains the implementation of a frontend technical assessment for Lendsqr. The goal was to rebuild selected parts of the Lendsqr Admin Console based on a provided Figma design. The solution was built with a focus on visual accuracy, performance, responsiveness, accessibility, and code quality.

## Live Link

[https://emmanuel-victor-lendsqr-fe-test.netlify.app](https://emmanuel-victor-lendsqr-fe-test.netlify.app)

## Figma Design Reference

[Figma URL](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend?type=design&node-id=5530-0)

---

## Pages Implemented

- **Login Page** – Authentication UI built per design.
- **Users Page** – Paginated and filterable user list from a mock API.
- **User Details Page** – Displays detailed info retrieved from local storage based on selected user.

---

## Features

- **Pixel-perfect Implementation**: Close adherence to Figma design in layout, typography, and spacing.
- **Mocked API with 500 Users**: Generated and served locally for testing and performance simulation.
- **User Persistence**: Clicking a user on the user list saves their full detail to localStorage. The detail page reads from there.
- **Responsive Design**: Mobile and desktop breakpoints implemented using SCSS and modern layout techniques.
- **Accessibility Considerations**: Proper ARIA attributes and semantic HTML used.
- **Unit Testing**: Coverage includes positive and negative scenarios for components and pagination.
- **Consistent Code Style**: Modular, well-named, and readable components with TypeScript and SCSS modules.

---

## Technologies Used

- **Framework**: Next.js (React + SSR)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Testing**: Jest, React Testing Library
- **API Simulation**: JSON file mocked within the app (local file, could easily be replaced by external mock server)
- **State & Routing**: React hooks and Next.js routing
- **Storage**: localStorage (for user details page)

---

## Folder Structure Overview

```
user-management/
│
├── components/        # Reusable UI components like Pagination, Cards, etc.
├── constants/         # Static values and config
├── public/            # Static files (images, favicons, etc.)
├── services/          # API mocking and service calls
├── styles/            # SCSS modules and global styles
├── types/             # TypeScript interfaces and types
├── utils/             # Utility functions (e.g., date formatters, constants)
├── __mocks__/         # Jest mock files for SVG and other static assets
├── src/               # Application-specific pages and features
├── jest.config.ts     # Jest configuration for testing
├── next.config.ts     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # This documentation
```

---

## How to Run the App Locally

1. **Clone the repository**

```bash
git clone https://github.com/EmmanuelVictor62/lendsqr-fe-test.git
cd lendsqr-fe-test
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The app will be accessible at `http://localhost:3000`

---

## How to Run Tests

```bash
npm run test
```

Jest is configured to handle module aliasing and SVG mocks via the `__mocks__/svgMock.tsx` file. Tests include interaction and rendering validation for key components.

---

## Architectural Decisions

- **Next.js** was chosen for its optimized performance, routing, and support for TypeScript and SCSS out of the box.
- **localStorage** was used to persist user data across pages without needing a full backend.
- **Manual mocking** of the user dataset allowed control over API structure and performance.

---

## Notes

- Mock API data is served from an endpoint stored on mocky.io and mimics paginated API behavior.
- Unit tests include pagination functionality, and mock components are handled appropriately in Jest config.
- Design was matched to the Figma spec, including responsiveness and visual hierarchy.

---

## Video Review

\_A video review can be found [here](https://www.loom.com/share/805af895530942bd8bbbdd829a43493e?sid=821d07a4-d165-4b5a-8668-03a20668d537).

---

## Final Thoughts

This project showcases not only technical capability but also judgment in interpreting and implementing design and behavior details that were intentionally omitted from the instructions. The solution aims to reflect both fidelity to the design and sound engineering practices.

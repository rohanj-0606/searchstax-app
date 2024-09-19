# SearchStax App

This repository contains a dynamic search application built with React and TypeScript, integrated with the SearchStax API to provide search functionalities, including sorting, pagination, and facets. The app features a modern UI with customizable components and is built using modern front-end technologies.

## Features

- **Search Input with Autocomplete**: A search input component that dynamically fetches suggestions.
- **Search Sorting**: Allows sorting of search results by different criteria.
- **Faceted Search**: Supports filtering search results using facets.
- **Pagination**: Pagination support to navigate through search results.
- **Modular Components**: Components for each part of the search (input, sorting, pagination, facets) for easy customization.
- **Responsive UI**: Built with a responsive design, adaptable to various screen sizes.
- **SCSS Styling**: Custom SCSS for styling flexibility.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Type-safe JavaScript for better code quality.
- **SearchStax API**: API for handling search operations.
- **SCSS**: For styling and customization.
- **Vite**: Fast build tool for modern web projects.

## Folder Structure

```
/src
  ├── App.tsx                      # Main app component
  ├── main.tsx                     # Entry point of the application
  ├── /components
  │   ├── Header.tsx               # Header component
  │   ├── Footer.tsx               # Footer component
  │   ├── inputTemplates.tsx       # Input component for search input
  │   ├── facetTemplates.tsx       # Facet component for filtering
  │   ├── resultsTemplates.tsx     # Component for displaying search results
  │   ├── paginationTemplates.tsx  # Pagination component
  │   ├── searchSortingTemplate.tsx# Search sorting component
  └── /styles
      └── App.scss                 # SCSS styles for the entire application
```

## Installation

To set up the project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/rohanj-0606/searchstax-app.git
```

### 2. Navigate into the project directory

```bash
cd searchstax-app
```

### 3. Install dependencies

```bash
npm install
```

## Usage

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can access the application at `http://localhost:5173`.

### Build for Production

To create an optimized production build, run:

```bash
npm run build
```

This will create a `dist` folder containing the production-ready build of the app.

### Preview Production Build

After building the app, you can preview the production build locally by running:

```bash
npm run preview
```

## Customization

### SCSS Styling

You can modify the SCSS file located at `src/styles/App.scss` to customize the look and feel of the application. The app uses SCSS for easy-to-manage and scalable styles.

### Component Customization

Each part of the search app (input, sorting, pagination, facets) is broken down into individual components for easy customization. You can edit or extend these components to add additional functionality or modify their behavior.

- **Input Component**: `inputTemplates.tsx`
- **Search Results Component**: `resultsTemplates.tsx`
- **Pagination Component**: `paginationTemplates.tsx`
- **Facet Component**: `facetTemplates.tsx`
- **Sorting Component**: `searchSortingTemplate.tsx`
  s

## Contact

For any questions or inquiries, please contact:

- **Name**: Rohan Jain
- **Email**: rohan.jain@example.com
- **GitHub**: [github.com/rohanj-0606](https://github.com/rohanj-0606)
- **LinkedIn**: [linkedin.com/in/rohanjain0606](https://www.linkedin.com/in/rohanjain0606/)
- **Portfolio**: [www.rohansjain.info](http://www.rohansjain.info)

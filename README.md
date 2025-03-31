# Howl's Moving Castle Website

This project is a Next.js application built with TypeScript, inspired by the theme of Hayao Miyazaki's "Howl's Moving Castle." The website features a clean and whimsical design, reflecting the enchanting world of the film.

## Project Structure

The project is organized as follows:

```
howls-moving-castle-website
├── src
│   ├── components
│   │   ├── Layout
│   │   │   ├── Header.tsx       # Navigation menu component
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   └── Layout.tsx       # Main layout component
│   │   ├── ui
│   │   │   ├── Button.tsx       # Reusable button component
│   │   │   └── Card.tsx         # Card component for displaying content
│   │   └── Home
│   │       └── Hero.tsx         # Hero component for the homepage
│   ├── pages
│   │   ├── index.tsx            # Homepage
│   │   ├── projects.tsx         # Projects template page
│   │   ├── articles
│   │   │   ├── index.tsx        # Articles list page
│   │   │   └── [slug].tsx       # Dynamic article page
│   │   └── services.tsx         # Services page
│   ├── styles
│   │   ├── globals.css          # Global CSS styles
│   │   └── theme.ts             # Theme colors and styles
│   ├── utils
│   │   └── helpers.ts           # Utility functions
│   └── types
│       └── index.ts             # TypeScript types and interfaces
├── public
│   └── images
│       └── logo.svg             # Logo image
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
├── next.config.js                # Next.js configuration file
└── README.md                     # Project documentation
```

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Dynamic Routing**: The articles page supports dynamic routing, allowing users to navigate to specific articles.
- **Reusable Components**: The project utilizes reusable components for buttons and cards, promoting code efficiency and maintainability.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/howls-moving-castle-website.git
   ```

2. Navigate to the project directory:
   ```
   cd howls-moving-castle-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the website in action.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
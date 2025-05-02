# Data Sort & Filter Demo

A Next.js application demonstrating advanced data table functionality using TanStack Table and shadcn/ui components. This project showcases a modern, type-safe approach to building interactive data tables with features like sorting, filtering, and real-time search.

## Features

- 📊 Sortable columns with clear visual indicators
- 🔍 Real-time global search across all columns
- 🎨 Modern UI using shadcn/ui components
- 💪 Fully type-safe with TypeScript
- ⚡ Built with Next.js for optimal performance
- 🎯 Zero-dependency data handling with TanStack Table

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CuriouslyCory/data-sort-filter-demo.git
cd data-sort-filter-demo
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage

The data table component provides the following features:

### Sorting
- Click on any column header to sort by that column
- Click again to reverse the sort order
- Visual indicators show the current sort direction

### Searching
- Use the search box above the table to filter results
- Search works across all columns simultaneously
- Results update in real-time as you type

## Project Structure

```
src/
├── app/
│   └── page.tsx           # Main page component
├── components/
│   └── data-table/        # Data table components
│       ├── columns.tsx    # Column definitions
│       ├── data-table.tsx # Main table component
│       ├── search.tsx     # Search component
│       └── index.ts       # Component exports
└── schemas/
    └── data.ts           # Type definitions
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TanStack Table](https://tanstack.com/table/v8) - Headless table management
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

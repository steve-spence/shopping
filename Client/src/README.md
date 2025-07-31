# ShopEasy - Project Structure

This document outlines the refactored project structure for better maintainability and organization.

## Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── AnimatedTitle.tsx    # Animated app title with center-to-top transition
│   ├── Header.tsx           # Top navigation with cart and profile dropdown
│   ├── SearchBar.tsx        # Product search input component
│   ├── CategoryCard.tsx     # Individual category display card
│   ├── ProductCard.tsx      # Individual product display card
│   ├── PromoBanner.tsx      # Promotional offer banner
│   └── index.ts             # Component exports
├── data/                # Mock data and constants
│   └── mockData.ts          # Categories and products data
├── types/               # TypeScript type definitions
│   └── index.ts             # Category and Product interfaces
└── README.md           # This documentation
```

## Components Overview

### AnimatedTitle

- Handles the 2-second delay and smooth animation from center to top
- Accepts `onAnimationComplete` callback to trigger next phase
- Self-contained animation logic with proper cleanup

### Header

- Sticky header with cart and profile buttons
- Profile dropdown with wishlist and orders
- Animated opacity for smooth appearance
- Responsive design with proper touch targets

### SearchBar

- Reusable search input with button
- Controlled component pattern
- Consistent styling with shadow effects

### CategoryCard & ProductCard

- Individual item components for lists
- Consistent styling and layout
- Proper TypeScript typing

### PromoBanner

- Static promotional content
- Reusable for different offers
- Clean visual design

## Benefits of This Structure

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused across screens
3. **Type Safety**: Centralized type definitions
4. **Testability**: Individual components can be tested in isolation
5. **Scalability**: Easy to add new components and features
6. **Clean Code**: Main App.tsx is now focused on layout and state management

## Usage

Import components from the centralized index:

```typescript
import { AnimatedTitle, Header, SearchBar } from "./src/components";
```

Import types:

```typescript
import { Category, Product } from "./src/types";
```

Import data:

```typescript
import { categories, featuredProducts } from "./src/data/mockData";
```

# Checkbox Card Component

## Overview

Welcome to the Checkbox Card Component project. This project showcases a React-based UI component designed to handle a list of checkboxes within a stylized card layout. It emphasizes modern design principles and user interaction, built with React and styled using Tailwind CSS. This project demonstrates a clean, functional UI with attention to detail, ensuring a responsive and engaging user experience. 
The project is part of test assignment from ellty.

## Technologies Used

- **React:** A JavaScript library for building user interfaces, enabling component-based architecture for efficient and reusable code.
- **Tailwind CSS:** A utility-first CSS framework that provides low-level utility classes to construct custom designs without leaving your HTML.
- **JavaScript (ES6+):** Utilized for implementing modern JavaScript features and ensuring code efficiency and readability.
- **HTML5:** Provides the structure for the web components and ensures semantic markup.
- **CSS3:** Used for styling and enhancing the visual appeal of the components.

## Project Features

- **Custom Checkboxes:** Interactive checkboxes with distinctive styles and responsive behaviors.
- **Stylized Card Layout:** A visually appealing card that houses checkboxes and action buttons.
- **Responsive Design:** Adaptive layout to ensure usability across various screen sizes.
- **Seamless User Interaction:** Hover effects and transitions for an enhanced user experience.

## Components

### `App.js`

- **Purpose:** Serves as the entry point of the application, rendering the main `CheckboxCard` component.
- **Features:** 
  - Centers the `CheckboxCard` component within the viewport.
  - Uses Tailwind CSS for layout and spacing.

### `CheckboxCard.js`

- **Purpose:** Contains the primary content of the card including the list of checkboxes and the action button.
- **Features:**
  - Encapsulates `CheckboxItems` and `Button` components.
  - Styled with a border, shadow, and rounded corners for a polished look.

### `CheckboxItems.js`

- **Purpose:** Displays a list of checkboxes with labels.
- **Features:**
  - Includes an “All pages” label and individual page labels.
  - Integrates horizontal dividers to separate sections visually.
  - Ensures smooth scrolling for a list of items.

### `CustomCheckbox.js`

- **Purpose:** Provides a custom-styled checkbox component.
- **Features:**
  - Uses SVG icons for the checked state.
  - Employs hover and checked state styles for dynamic feedback.
  - Provides transition effects for smooth visual changes.

### `Button.js`

- **Purpose:** Renders an action button at the bottom of the card.
- **Features:**
  - Styled with Tailwind CSS for color and hover effects.
  - Includes a hover transition to enhance user interaction.

### `Divider.js`

- **Purpose:** Adds visual separation between sections within the `CheckboxItems` component.
- **Features:**
  - Simple horizontal line styled to match the card design.
  - Ensures consistent spacing and alignment.

## Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

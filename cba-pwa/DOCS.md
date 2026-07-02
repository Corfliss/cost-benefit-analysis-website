# CBA PWA Documentation

## Overview
This is a lightweight Progressive Web Application (PWA) designed for performing two types of Cost-Benefit Analysis (CBA). It requires no login or credentials, prioritizing immediate utility and ease of use.

## Use Cases

### 1. Simple Version (Makanya Mikir approach)
Used for qualitative decision scenarios where you compare different paths by calculating weighted expected values.
* **Input**: Scenarios with Probabilities, Benefits (+), and Costs (-).
* **Logic**: $\sum (\text{Benefit} \times \text{Probability}) - \sum (\text{Cost} \times \text{Probability})$.

### 2. Advanced Version (Asana/Financial approach)
Used for quantitative project feasibility analysis.
* **Input**: Lists of direct/indirect benefits and costs in monetary values.
* **Logic**: 
    * **Net Benefit**: $\sum \text{Benefits} - \sum \text{Costs}$
    * **Benefit-Cost Ratio (BCR)**: $\frac{\sum \text{Benefits}}{\sum \text{Costs}}$

## Maintenance Guide
### Code Structure
The project follows the "Grouping by features" convention to ensure scalability and ease of navigation.
* **src/features/**: Contains all logic, components, and styles for a specific functionality (e.g., , ). This promotes **colocation**.
* **src/components/**: Shared UI components.
* **src/utils/**: Reusable utility functions.

### Best Practices
1. **Avoid Deep Nesting**: Keep the directory structure shallow (max 3-4 levels).
2. **Colocation**: Keep files that change together (styles, tests, logic) in the same feature folder.
3. **Simple Imports**: Use  pattern if a folder grows large to keep imports clean.
4. **Data Accuracy**: Always verify input types (ensure numbers are parsed correctly).

## Technologies
* **Preact**: Lightweight UI library.
* **Chakra UI**: Component library for rapid, consistent styling.
* **Vite**: Build tool and dev server.

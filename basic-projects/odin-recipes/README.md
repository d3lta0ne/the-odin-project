# Odin Recipes - Enhanced Iteration

## Introduction

This project is an enhanced iteration of the original Odin Recipes project. It aims to build upon the foundational HTML structure by introducing new features and improvements. The goal is to refine both the functionality and appearance of the recipe website, paving the way for future styling with CSS.

## Project Structure

The website consists of a main index page linking to several individual recipe pages. This iteration introduces improvements such as additional recipes, structured content, and basic navigation features.

## Features

- **Multiple Recipe Pages:** Expanded to include a variety of recipes with detailed descriptions, ingredients, and preparation steps.
- **Improved Navigation:** Organized links for better user experience.
- **Enhanced Content:** Each recipe page now includes images and detailed sections for descriptions, ingredients, and steps.

## Development Process

### Iteration 1: Initial Setup

- Create an `index.html` file with the standard HTML boilerplate.
- Add an `<h1>` heading titled "Odin Recipes".

### Iteration 2: Recipe Page Creation

1. **Create a `recipes` directory** within the `odin-recipes` directory.
2. **Add a new HTML file** for each recipe, named after the dish, e.g., `lasagna.html`.
3. **Add an `<h1>` heading** with the recipe's name.
4. **Link the recipe page** in `index.html`:
   ```html
   <a href="recipes/recipename.html">Recipe Title</a>
   ```

### Iteration 3: Detailed Recipe Content

- **Add an image** of the finished dish under the `<h1>` heading.
- Include a "Description" section with a paragraph or two about the recipe.
- Create an "Ingredients" section with an unordered list of ingredients.
- Add a "Steps" section with an ordered list of preparation steps.

### Iteration 4: Add More Recipes

1. **Include at least two more recipes** following the same structure.
2. **Link all recipes** on the index page, organizing them in an unordered list:
   ```html
   <ul>
     <li><a href="recipes/recipe1.html">Recipe Title 1</a></li>
     <li><a href="recipes/recipe2.html">Recipe Title 2</a></li>
     <li><a href="recipes/recipe3.html">Recipe Title 3</a></li>
   </ul>
   ```

## Conclusion

This iteration of the Odin Recipes project showcases a deeper understanding of HTML and prepares the foundation for future styling enhancements.
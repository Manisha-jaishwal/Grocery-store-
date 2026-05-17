# Grocery Ordering App

## Description
This is a simple grocery ordering web application built using React. Users can browse products, filter them by category, add items to the cart, and place an order.

## Features
- Product listing with category filter
- Add to cart with quantity management
- Increase, decrease, and remove items from cart
- Order summary with subtotal, delivery charge (₹40), and total
- Out of stock items are disabled
- Place order clears cart and shows confirmation message

## Tech Stack
- React
- JavaScript
- CSS

## How to Run Locally
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the local server link in your browser

## Project Structure
- Components are divided into:
  - ProductList
  - Cart
  - OrderSummary
- Data is stored in a separate file (`products.js`)
- State is managed in `App.jsx` to share data across components

## Order Logic
- Adding the same item increases its quantity instead of duplicating it
- Cart updates dynamically when items are added or removed
- Quantity cannot go below 1
- Delivery charge is fixed at ₹40
- Total amount updates automatically
- Clicking "Place Order" clears the cart and shows a confirmation message
- Order button is disabled when cart is empty

## Reasoning
A component-based structure is used to keep the code modular and maintainable. The cart state is managed centrally in the main component to ensure consistent updates across the application.
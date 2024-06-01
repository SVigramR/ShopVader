# ShopVader
Welcome to ShopVader, a dynamic and interactive shopping cart application built to showcase my React skills. This single-page application (SPA) uses React Router for smooth navigation and the DummyJSON API for product data.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages](#pages)
    - [Home](#home)
    - [Shop](#shop)
    - [Cart](#cart)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#License)

## Features

- Single Page Application (SPA) using React Router.
- Fetches data from DummyJSON API.
- Dynamic product categories and product listings.
- Add to Cart functionality with quantity management.
- Shopping Cart details displayed using HTML tables.
- Smooth navigation between Home, Shop, and Cart pages.

## Technologies Used
- React
- React Router
- DummyJSON API

## Project Structure
The project is structured into several components to ensure modularity and reusability:
- Header and Footer components serve as the base structure.
- Page components (Home, Shop, Cart) are routed dynamically.
- Separate state management for shopping cart functionality.

## Pages
### Home
The Home page consists of a hero section and a category section. Clicking on a category will navigate to the Shop page, displaying products from the selected category.
### Shop
The Shop page displays a list of categories and their respective products. Users can increase the quantity of a product and add it to their cart. This action creates and updates an object in a separate state variable, allowing the shopping cart list to be rendered.

### Cart
The Cart page displays the details of the shopping cart using HTML tables. It includes a checkout button to proceed with the purchase.

## Getting Started
Follow these steps to get a local copy of the project up and running

Clone the repo:
```text
git clone https://github.com/SVigramR/ShopVader.git
```
Install:
```text
npm install
```
Run it using:
```text
npm run dev
```

The app will be available at http://localhost:5173.

## Usage
- Navigate to different pages using the links in the Header.
- Browse products by category on the Shop page.
- Add products to the cart and manage quantities.
- View cart details and proceed to checkout.

## Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository.
- Create your feature branch: git checkout -b feature/YourFeature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin feature/YourFeature
- Open a pull request.

### License

Distributed under the MIT License. See LICENSE for more information.

---

Feel free to customize this README to better fit your project. Happy coding!
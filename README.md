# Fast React Pizza Co. 🍕

A modern, responsive, and feature-rich single-page application for ordering pizzas online. This project demonstrates proficiency in building dynamic user interfaces with React, managing application state with Redux Toolkit, and handling client-side routing with React Router. The application fetches menu data and submits orders to a third-party API.

## Features

- **Browse Menu**: View a complete list of available pizzas fetched from an API.
- **Dynamic Cart**: Add or remove pizzas from the cart, and update item quantities on the fly.
- **Order Placement**: A streamlined, multi-step form to place new orders.
- **Geolocation**: Automatically fetch the user's address using their browser's geolocation to pre-fill the address field.
- **Priority Ordering**: Option to mark an order as a priority for an additional fee.
- **Order Tracking**: Users can look up their order status using a unique order ID.
- **State Management**: Centralized and predictable state management using Redux Toolkit.
- **Client-Side Routing**: A seamless, single-page application experience powered by React Router 6.

## Technologies Used

| Technology                                         | Description                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [**React**](https://reactjs.org/)                  | A JavaScript library for building user interfaces.                                              |
| [**Vite**](https://vitejs.dev/)                    | Next-generation frontend tooling for rapid development.                                         |
| [**Redux Toolkit**](https://redux-toolkit.js.org/) | The official, opinionated toolset for efficient Redux development.                              |
| [**React Router**](https://reactrouter.com/)       | Declarative routing for React applications.                                                     |
| [**Tailwind CSS**](https://tailwindcss.com/)       | A utility-first CSS framework for rapid UI development.                                         |
| [**ESLint**](https://eslint.org/)                  | Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. |
| [**Prettier**](https://prettier.io/)               | An opinionated code formatter.                                                                  |

## Installation

To get a local copy up and running, follow these simple steps.

➡️ **Prerequisites**

- You need to have Node.js and npm (or yarn) installed on your machine.

➡️ **Setup**

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/DreadTsx/react-pizza-app.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd react-pizza-app
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## Usage

Once the application is running, you can explore its features:

1.  **Enter Your Name**: On the homepage, enter your name to personalize the experience and proceed to the menu.
2.  **Browse the Menu**: You will be redirected to the menu page where all available pizzas are listed.
3.  **Add to Cart**: Click the "Add to cart" button on any pizza to add it to your order.
4.  **Manage Your Cart**: You can view your cart by clicking the "Open cart" link in the footer. From there, you can increase or decrease the quantity of each pizza or remove them entirely.
5.  **Place an Order**: Proceed to checkout by clicking "Order pizza". Fill in your details, use the "Get Position" button to autofill your address, and place the order.
6.  **Track Your Order**: After placing an order, you will receive an Order ID. Use the search bar in the header to check the status of your order at any time.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

## License

This project is licensed under the MIT License.

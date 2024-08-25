
![Alt text](/src/app.PNG)

# DCommerce

DCommerce is an e-commerce platform built with React, Tailwind CSS, FontAwesome, and other technologies. It provides users with a seamless shopping experience, allowing them to browse through a variety of products and easily add items to their cart.

### Features

- **Product Listing**: Display a list of products available for purchase.
- **Product Details**: View detailed information about each product, including images,prices.
- **Add to Cart**: Add products to the shopping cart with a single click.
- **Cart Management**: View and manage items in the shopping cart, including checking out.
- **Navigation**: Navigate between different sections of the application using React Router DOM.
- **Product Search**: Implemented a search feature that allows users to search for products by name / title
- **Category Selection**: Implemented a category selection feature that allows users to filter products by specific categories, such as electronics, clothing, and more.
- **Price Selection**: a price selection feature that allows users to filter products by specific price ranges, making it easier to find items within their budget.
- **Login and Registration** : Implement user authentication with login and registration functionality to manage user accounts and secure access to the application.
- 
### Technologies Used

- **React**: A JavaScript library for building user interfaces, utilizing hooks such as `useState`, `useEffect`, `useReducer`, and `useContext` for state management and side effects.

- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

- **FontAwesome**: A popular icon set and toolkit for web development, utilized for adding icons to the user interface.

- **React Router DOM**: Declarative routing for React applications, used for handling navigation between different components.

- **AOS**: Animate On Scroll library for adding animations to elements when they come into view.

- **PostgreSQL**: An open-source relational database management system known for its extensibility and SQL compliance.

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

- **Prisma ORM**: An open-source ORM for Node.js and TypeScript, used for connecting NestJS to PostgreSQL, enabling type-safe database queries and migrations.

## Prerequisites

Before running the project, ensure that you have the following installed:

- **Node.js**: Make sure you have Node.js installed on your system. You can download and install it from [https://nodejs.org/](https://nodejs.org/).
- **npm or Yarn**: npm comes bundled with Node.js, but you can also use Yarn as an alternative package manager. Install Yarn from [https://yarnpkg.com/](https://yarnpkg.com/) if you prefer.

## Getting Started



To run the project locally, follow these steps:

### Front End

1. Clone the repository:

   ```bash
   git clone https://github.com/LinkBroken/D-commerce.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dcommerce
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn add
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```


5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173 ) to view the application.

### Backend

#### Add Database URl


1- navigate to the backend folder

```bash
cd dcommerce/backend
```

2- Create a ".env" file in the backend folder, open it and add the following variable:

```env
DATABASE_URL="postgresql://YOUR_DATABASE_URL_GOES_RIGHT_HERE"
```



3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn add
   ```
4- Starting the development server:

```bash
nest start
```

#### Congratulations

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository and create your branch (`git checkout -b feature/my-feature`).
2. Commit your changes (`git commit -am 'Add my feature'`).
3. Push to the branch (`git push origin feature/my-feature`).
4. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

---

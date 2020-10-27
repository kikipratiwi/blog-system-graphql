# Blog System
This is a Blog System site that fetch data from [GraphQL API](https://graphqlzero.almansi.me/#examples). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo
Open [Blog System Live](https://blog-system-live.herokuapp.com/) to view it live. But, since this site  just simulate the basic CRUD API without any authorization, you have to access admin page manually by add `/admin` after base url, or access this [Admin Page](https://blog-system-live.herokuapp.com/admin/) for live mode.

## Project Dependencies
- **antd** as React UI library 
- **eslint** with basic react configuration
- **graphql-hooks** minimal hooks-first library for GraphQL client
- **node-sass** library to make scss available in react
- **node.js** version 12.14.1
- **npm** version 6.10.0
- **react-helmet** to manage document head
- **react-loading-overlay** for loading overlay with spinner and transitions
- **react-router-dom** DOM bindings library for React Router
- **tachyons** css design system

## Running Project
 
### `npm install && npm start` 

For first install the dependecies required in this project and then start the project in the development mode. Commonly it serve on [http://localhost:3000](http://localhost:3000), open it to view in the browser. You have to access admin page manually by add `/admin` after base url, it might be look like this [http://localhost:3000/admin](http://localhost:3000/admin).

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

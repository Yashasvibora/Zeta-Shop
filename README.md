# Zeta-Shop

**Zeta-Shop is an online marketplace wherein Zeta users can buy products using their Zeta Reward points. 
The recommended products on the user screen will be shown on the basis of the Zeta reward points in the customer's Zeta account.**

We are trying to provide an option to the customer, to make their purchase hassle free since they wont have to toggle from one brand to another to redeem their Zeta Rewards. 
They can see all the products which can be redeemed using Zeta Rewards just like they browse products in e-commerce shopping website.

![HomeScreen](https://user-images.githubusercontent.com/54465662/129514987-2305a179-4e56-4863-992d-2c0ecd86e53a.JPG)

Customers can sign in using their email ids and passwords and order products. 

![Sign In page](https://user-images.githubusercontent.com/54465662/129515003-6f6c8a5e-ddb2-4887-932a-d9c0219a3447.JPG)

##The Main Concept

The idea behind this project is, that after the customer signs in, only those products are shown on his recommended screen, whose Zeta Reward
points are less than that of the customer's Zeta Reward points.
In this way, customers can get a first preview of the products they can afford using their Zeta Rewards.

![Recommended Section](https://user-images.githubusercontent.com/54465662/129515012-35ff328d-99d9-4054-ad49-52dbc0dde815.JPG)

***The Zeta Rewards alloted to each customer will be derived from the customer's account according to the company policies.** 

In this way, customer saves time and products of wide variety can be shown at an instance. 
This is basically a simple search engine which maps the products' and the customers' data.


Products can be viewed separately too, and you can review them, read their description and rate them.

![ProductScreen](https://user-images.githubusercontent.com/54465662/129516973-1f48f014-81c0-4336-bef7-970804bf2762.JPG)

Customer can also check out his profile screen for order history and information related to the account and edit them.

![Profile Screen](https://user-images.githubusercontent.com/54465662/129515014-d62dfffa-4609-4b6d-8c36-2cb1976e5e9f.JPG)

Shopping Cart can be viewed and you can order products after filling in your address and payment details.

![ShoppingCart](https://user-images.githubusercontent.com/54465662/129517025-02ae26f4-3a05-45d6-967c-c0cdb2642ba7.JPG)


# Usage

## Environment Variables
Create a .env file in then root and add the following

```NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
## Install Dependencies (frontend & backend)
```
npm install
cd frontend
npm install
```

## Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```






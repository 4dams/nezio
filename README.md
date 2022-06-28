# NEZIO

**`nezio`** is a web client for the well known calorie and nutrition tracking app [**YAZIO**](https://www.yazio.com/en).

Made and maintained with 💚 by [@4dams – Juri Adams](https://github.com/4dams)

## Preview

![preview](/public/images/preview.png)

## Disclaimer

This project is still under heavy construction and currently serves more as a proof of concept.

## Features

-   [x] Display User Profile
-   [x] Display Calorie Goals
-   [x] Display Nutrition Goals
-   [x] Display Different Meal Types
-   [ ] View Food Items in Meals
-   [ ] Search Food Items
-   [ ] Add Food Items to Meals
-   [ ] Create new Food Items
-   [ ] ... other features from the YAZIO app

## Getting Started

### 1. Clone this repository

```bash
git clone git@github.com:4dams/nezio.git nezio
```

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 4. Create `.env.local`

You need to create a file called `.env.local` in the project root. This file has to contain the following two environment variables:

```.env
YAZIO_EMAIL="email@domain.com"
YAZIO_PASSWORD="sTrOnGeRtHaNtHiS"
```

### 4. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Disclosure

This project has nothing to do with the actual [YAZIO](https://www.yazio.com/en) app.

I have been using their mobile app for more than three years now and have always wanted a web client to track my nutritional intake.

If anyone from [YAZIO](https://www.yazio.com/en) is reading this and you would like me to take this project down, feel free to reach out to me. 🤙🏻

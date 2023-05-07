# Feedback Widget

>The idea of this project consists of a widget that can be used in web and mobile apps to collect user feedback.

The project was divided into 3 repositories:

💻 [Web](https://github.com/diego5f5/feedback-widget-web)

📱 [Mobile](https://github.com/diego5f5/feedback-widget-mobile)

⚙️ [Server](https://github.com/diego5f5/feedback-widget-server)

## About the server:

When a feedback request is triggered from apps(mobile or web), the server processes the JSON, stores it in a table in the database(postgresql) and then sends an email containing the feedback information to a mailbox.

## Getting Started

The following instructions will provide you information to get the project up and running on your local machine for development purposes.

#### Prerequisites

- Node.JS min version 14.x
- Yarn

#### Libraries and Frameworks

This project uses mainly the following libraries and frameworks:

- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Mailtrap](https://mailtrap.io/)
- [Jest](https://jestjs.io/)

## Installing dependencies

```
yarn install
```

## Running

```
yarn dev
```

## Building

```
yarn build
```

## Testing

```
yarn test
```

<h3 align="center">
  
  Back End Repository For Rentors Main App
</h5>

<p align="center">
Gelaskaca Production is a company engaged in the field of Event Organizer, Digital marketing, Marketing, Event equipment rental, and Production Stand Both. Rental of event equipment that we provide such as Sound system, Ligting, Genset, Stage, Tents, etc. to help meet the needs of the event. This is a project in Institutional Support System, a Internship Program from Kampus Merdeka.
</p>

<div id="top"></div>

# Table of Contents

<ol>
  <li><a href="#built-with">Built With</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#database-migration">Database Migration</a></li>
      <li><a href="#undoing-database-migration">Undoing Database Migration</a></li>
    </ul>
  </li>
  <li><a href="#deployment-and-documentation">Deployment and Documentation</a></li>
  <li><a href="#features-roadmap">Features Roadmap</a></li>
  <li><a href="#authors">Authors</a></li>
</ol>

# Built With

- Node.js: 14.17.6^
- NPM: 6.14.15^

<p align="right">(<a href="#top">back to table of contents</a>)</p>

# Project Structure

#### `/.github/workflows`
GitHub action folder for Continous Deployment (CD) this repository.

#### `/app/config`
Environment configuration.

#### `/app/controllers`
Directory for functions that process request from routes.

#### `/app/middleware`
Directory for authentication function.

#### `/app/migrations`
Sequelize migration table.

#### `/app/models`
Sequelize model that related to database server.

#### `/app/routes`
Routes for all API endpoint.

#### `/app/seeders`
Sequelize seeder for dummy data.

<p align="right">(<a href="#top">back to table of contents</a>)</p>

# Getting Started

## Prerequisites

1. First we need to clone the repo into our local machine

```
git clone https://github.com/latifis/be-icyl-gelaskaca-express-postgre.git
```

2. then move to folder just created

```
cd be-icyl-gelaskaca-express-postgre/
```

3. then install npm

```
npm install
```

4. then start npm

```
npm start
```

Run Project in Development Environment
```
npm run start:dev
```

## Database Migration

1. Make file .env and copy content from .env.example

2. Update DB_NAME_DEV, DB_USERNAME_DEV, and DB_PASSWORD_DEV based on your local

3. Run migration script

```
npx sequelize-cli db:migrate
```

4. Run seeder script

```
npx sequelize-cli db:seed:all
```

## Undoing Database Migration

1. Run undoing seeder script

```
npx sequelize-cli db:seed:undo:all
```

2. Run undoing migration script

```
npx sequelize-cli db:migrate:undo:all
```

<p align="right">(<a href="#top">back to table of contents</a>)</p>

## Deployment and Documentation

- [API Documentation (Postman)](https://documenter.getpostman.com/)
- [Database Documentation](https://docs.google.com/spreadsheets/)
- [Database Scheme](https://drive.google.com/drive/folders/)
- [Deployment](https://be-server.gelaskaca.com/)

<p align="right">(<a href="#top">back to table of contents</a>)</p>

## Features Roadmap

- [x] Authentication
- [x] Authorization
- [x] Profile
- [x] Listing Product and Categories
- [x] Rentals
- [x] History

<p align="right">(<a href="#top">back to table of contents</a>)</p>

## Authors
- [Latief Irfansyah](mailto:latifirfansyah@gmail.com)

<p align="right">(<a href="#top">back to table of contents</a>)</p>

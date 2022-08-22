# 14-Challenge-Tech-Blog


## Table of Contents
- [Description](#Description)
- [Links](#Links)
- [Technologies](#Technologies)
- [Screenshots](#Screenshots)
- [Installation Instructions](#Installation-Instructions)
- [License](#License)
- [Acknowledgements](#Acknowledgements)
- [Questions](#Questions)

## Description

Tech Blog is a full stack application that provides users with the ability to create accounts, publish posts, and generate comments. 

## Links
[URL to deployed application](https://polar-taiga-62842.herokuapp.com/)<br>
[URL to GitHub repository](https://github.com/VN135766/14-Challenge-Tech-Blog)

## Technologies
Made with Javascript, Handelbars, NodeJS, Sequalize, and MySQL.

## Screenshots
![webpage screenshot](./public/images/Screenshot%20(63).png)
![webpage screenshot](./public/images/Screenshot%20(64).png)
![webpage screenshot](./public/images/Screenshot%20(65).png)
![webpage screenshot](./public/images/Screenshot%20(66).png)
![webpage screenshot](./public/images/Screenshot%20(67).png)

## Installation Instructions

1. So this application is a NodeJS application, you must have NodeJS downloaded. Please download [here](https://nodejs.org/en/download/) if you have not done so previously.

<br>

2. To create and seed the database, you must have MySQL installed.  Please download [here](https://www.mysql.com/downloads/) if you have not done so previously.  To create and seed the tech_blog_db database, please follow these instructions...
<hr>
<br>

1. Log into MySQL into your command-line while be located in Employee-Tracker's repository.
```
mysql -u root -p
```
2. Once logged in, enter the following commands...
```
SOURCE main/db/schema.sql;
```
3. Exit the MySQL CLI by entering the following command...
```
quit
```

<hr>
<br>

3. Create a .env file and input the following information
```
DB_NAME=user_db
DB_USER={ENTER MYSQL USER HERE}
DB_PASSWORD={ENTER MYSQL PASSWORD HERE}
```

<br>

4. Install all necessary packages by typing in the following command into your command-line...
```
npm i
```
<br>

5. To seed the database with dummy data, please enter the following command in your command-line...
```
npm run seed
```
<br>

6. You are then able to run your server by entering the following command into your command-line...
```
npm start
```

## License

This project is licensed under the terms of [MIT](https://opensource.org/licenses/MIT).

## Acknowledgements
Original design of application originated from example given by the University of Michigan Bootcamp curriculum. 
## Questions?

If you have any questions, please contact us via:

| Name | Github | Email |
| ----------- | ----------- | ----------- |
| Victor Nunez | [@vn135766](https://github.com/VN135766) | vn135766@gmail.com |

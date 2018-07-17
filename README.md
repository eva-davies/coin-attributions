# Coin Attributions API 

Express application that stores, and fetches coin attributions using a MySQL db.

# Node

Install the latest LTS version of [Node](https://nodejs.org/en/)

# MySQL

Install [MySQL](https://dev.mysql.com/downloads/mysql/)

Create MySQL DB

```
create database <database_name>;
```

# Setup Application

1. Clone the repository and navigate to project root

```
$ git clone https://github.com/eva-chipana/coin-attributions.git && cd coin-attributions
```

2. Install depenencies

```
$ npm install
```

3. Copy the .env.sample file to .env

```
cp .env.sample .env
```

# How to Run Application

1. Start the application

```
$ npm run start
```

2. Migrations 

```
# Run Migrations
node_modules/.bin/sequelize db:migrate

# Undo Migrations
node_modules/.bin/sequelize db:migrate:undo:all
```




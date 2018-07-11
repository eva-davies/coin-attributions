# Coin Attributions API 

Express application that stores, and fetches coin attributions using a MySQL db.

# Node

Install the latest LTS version of [Node](https://nodejs.org/en/)

# MySQL

Install [MySQL](https://dev.mysql.com/downloads/mysql/)

# How to run application

1. Clone the repository and navigate to project root

```
$ git clone https://github.com/eva-chipana/coin-attributions.git && cd coin-attributions
```

2. Install depenencies

```
$ npm install
```

3. Start the application

```
$ npm run start
```

4. Create MySQL DB

```
create database coins;
```

5. Run Migrations 

```
node_modules/.bin/sequelize db:migrate
```

```
# Undo migrate
node_modules/.bin/sequelize db:migrate:undo:all
```



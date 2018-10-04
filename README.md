# Coin Attributions API 

Express application that stores, and fetches coin attributions using a MySQL db.

# Node

Install the latest LTS version of [Node](https://nodejs.org/en/)

# MySQL

Installation steps using [Homebrew](https://brew.sh/)

1. Install MySQL

```
brew install mysql
```

2. Verify MySQL is installed:

```
mysql -V
```

3. MySQL configuration

```
Binary files are installed under: /usr/local/opt/mysql/bin
Main configuration file is created at: /usr/local/etc/my.cnf
```

4. Install brew services:

```
brew tap homebrew/services
```

5. Load and start the MySQL service:

```
brew services start mysql
```

6. Set root password

```
mysql_secure_installation
```

7. Connect to the MySQl server

```
mysql -u root -p
```

8. Create MySQL DB

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

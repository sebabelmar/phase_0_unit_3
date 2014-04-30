# U3.W7: Intro to SQLite


## Release 0: Create a dummy database
SQLite version 3.7.13 2012-07-17 17:46:21
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );
sqlite> 


## Release 1: Insert Data 
id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-30 08:10:37  2014-04-30 08:10:37  
2           Seba        Belmar      si.belmar@gmail.com    2014-04-30 08:16:02  2014-04-30 08:16:02


## Release 2: Multi-line commands
Error: column email is not unique  

id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-30 08:10:37  2014-04-30 08:10:37  
2           Seba        Belmar      si.belmar@gmail.com    2014-04-30 08:16:02  2014-04-30 08:16:02


## Release 3: Add a column
id          first_name  last_name   email                  created_at           updated_at           nicknames 
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-30 08:46:39  2014-04-30 08:46:39  Kimli       
2           Seba        Belmar      si.belmar@gmail.com    2014-04-30 08:47:13  2014-04-30 08:47:13  Capo    


## Release 4: Change a value
id          first_name  last_name   email                  created_at           updated_at           nicknames  
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmy       Lin         kimmy@devbootcamp.com  2014-04-30 08:46:39  2014-04-30 08:46:39  Ninja Coder  
2           Seba        Belmar      si.belmar@gmail.com    2014-04-30 08:47:13  2014-04-30 08:47:13  Capo    

## Release 5: Reflect
Because learning how to use SQL Workbench last week this challenge was easy to understand. It is always hard to remember the syntax. I have my notes for last week and I use them a lot. I think with time and practice this will get more intuitive and natural.
It is amazing that we can do what ever we want from terminal. I need to use it more. Good thing is that these last two weeks are terminal intensive.
I didn't have time to solve the tricky part of this challenge. Adding a Column with default value null where there are rows already created in the table. Seems like there is a trick for that but I delete the table, add the column then add values without the nicknames (default null) and then I update each row.
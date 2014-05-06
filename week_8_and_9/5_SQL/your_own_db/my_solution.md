.schema  
CREATE TABLE 'bank_statements' (  
  'id' INTEGER AUTO_INCREMENT,  
  'bank_account' VARCHAR NULL DEFAULT NULL,  
  'date' DATE NULL DEFAULT NULL,   
  'amount' INTEGER NULL DEFAULT NULL,  
  'transaction_data1' INTEGER NULL DEFAULT NULL,  
  'transaction_data2' INTEGER NULL DEFAULT NULL,  
  'date_created' DATETIME NULL DEFAULT NULL,  
  'date_updated' DATETIME NULL DEFAULT NULL,  
  PRIMARY KEY ('id')  
);  
CREATE TABLE `card_holders` (  
  `id` INTEGER AUTO_INCREMENT DEFAULT NULL,  
  `name` VARCHAR NULL DEFAULT NULL,  
  `date_created` INTEGER NULL DEFAULT NULL,  
  `date_updated` INTEGER NULL DEFAULT NULL,  
  PRIMARY KEY (`id`)  
);  
  
  
SELECT * FROM bank_statements;  
id          bank_account  date        amount      transaction_data1  transaction_data2  date_created  date_updated
----------  ------------  ----------  ----------  -----------------  -----------------  ------------  ------------
1           AR            5062014     100         DEPOSIT            1002               1012012       5062014     
2           AR            5062014     200         DEPOSIT            1001               1012012       5062014     
3           AR            5062014     300         DEPOSIT            1003               1012012       5062014     
4           AR            5062014     140         DEPOSIT            1001               1012012       5062014     
5           AR            5062014     150         DEPOSIT            1002               1012012       5062014     
6           AP            5062014     160         CHECK CRD PURCHAS  1001               1012012       5062014     
7           AP            5062014     120         CHECK CRD PURCHAS  1001               1012012       5062014     
8           AP            5062014     40          CHECK CRD PURCHAS  1003               1012012       5062014     
9           AP            5062014     50          CHECK CRD PURCHAS  1001               1012012       5062014     
10          AP            5062014     770         CHECK CRD PURCHAS  1001               1012012       5062014     
11          AP            5062014     650         CHECK CRD PURCHAS  1003               1012012       5062014     
  
  
SELECT * FROM card_holders;  
id          name        date_created  date_updated
----------  ----------  ------------  ------------
1001        LAURA       1012012       1012012     
1002        MIKE        1012012       1012012     
1003        MORGAN      1012012       1012012  
  
  
SELECT bank_account,date,amount, name FROM bank_statements JOIN card_holders ON (`transaction_data2` = card_holders.id) ORDER BY name;  
bank_account  date        amount      name      
------------  ----------  ----------  ----------
AR            5062014     200         LAURA     
AR            5062014     140         LAURA     
AP            5062014     160         LAURA     
AP            5062014     120         LAURA     
AP            5062014     50          LAURA     
AP            5062014     770         LAURA     
AR            5062014     100         MIKE      
AR            5062014     150         MIKE      
AR            5062014     300         MORGAN    
AP            5062014     40          MORGAN 
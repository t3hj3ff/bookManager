How to run:

Execute `books.sql` file in MySQL client.


run > `npm install`


Create `.env` file in root directory with following parameters:

Example:

DB_NAME=books

DB_USER=root

DB_PASS=root

DB_HOST=localhost

JWT_SECRET=jwtsecretkeyromelicaravinaricis123$


For running server install nodemon or run it with `node app.js` command.


Demo user login and password is `admin/admin`


For API documentation import `bookManager.postman_collection.json` collection in postman. or access it directly with postman API (https://api.postman.com/collections/6542859-272715cb-b81b-4cc9-8973-85363968fb16?access_key=PMAT-01HTBP2M3X3SVK754GR0AENZ84)



In POSTMAN variables are not exported so after auth copy generated token and add it manually in headers with "Authorization":"Bearer <token>"



In order to run tests just run `npm run test` (I made one example test)
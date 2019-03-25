# Triplelift example

This is a challenge for build a single micro service for "Brands" and "Categories" using [Universal Pattern](https://www.npmjs.com/package/universal-pattern).
Powered by: [César Casas](https://www.linkedin.com/in/cesarcasas)

# Install
## Before to Install
For run this example we need install before [MongoDB](https://www.mongodb.com/download-center).
Redis server.

## Installing
```bash
$ git clone https://github.com/lortmorris/triplelift-example.git
$ cd triplelift-example
$ npm install
$ npm run watch
```

Then, open your browser http://localhost:5000/services/docs

## Using Swagger
All project is based on swagger, so, for do searching into getter endpoint, you need use 'q' param.
[Universal Patter](https://www.npmjs.com/package/universal-pattern#search)



## Creating one million brands and categories.
For play with this example, we can create first one million of Brands and one millions of categories.

Important: the mocks will create object into database calling directly to "localhost" instance service. So, yes, is a "testing" in real time while the mocks are inserting.

### brands
```bash
DEBUG=triplelift* node mocks/brands.js
```

### categories

```bash
DEBUG=triplelift* node mocks/categories.js
```

## Create Indexes

Now, is time for create all indexes into MongoDB for search speed.

```javascript
// for brands
db.getCollection('brands').createIndex({ 'added' : 1 });
db.getCollection('brands').createIndex({ 'updated' : 1 });
db.getCollection('brands').createIndex({ 'name' : 1 });

//for categories
db.getCollection('categories').createIndex({ 'added' : 1 });
db.getCollection('categories').createIndex({ 'updated' : 1 });
db.getCollection('categories').createIndex({ 'name' : 1 });

```

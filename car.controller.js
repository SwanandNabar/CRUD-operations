(function() {
  'use strict';

  angular
    .module('app')
    .controller('myController', myController);

  myController.$inject = [];


  function myController() {
    var carVm = this;

    var demStates = ['OR', 'ME'];

   /* carVm.isDem = function(driver) {
      return demStates.indexOf(driver.address.state) > -1;
    };*/

    carVm.make = 'Tesla';
    carVm.model = 'Model X';

    carVm.drive = function() {
      console.log(carVm.make + ' ' + carVm.model);
    };

    /*carVm.log = function() {
      alert('You have pressed the log button');
    };*/
    
    carVm.addDriver =function(){
      carVm.users.push(carVm.newDriver);
      carVm.newDriver = null;
    };
    
    /*deletes one user data from the table*/
    carVm.remove = function (driver){
        var index = carVm.users.indexOf(driver);
        carVm.users.splice(index,1);
      return carVm.users; 
    };

    carVm.users = [
  {
    "id": "5fbcb631-3fab-4fb4-8a01-f1fc1cb308b2",
    "firstName": "Bertram",
    "lastName": "Davis",
    "email": "Triston_Sawayn93@yahoo.com",
    "address": {
      "street": "336 Florida Gardens",
      "city": "Wilkinsonburgh",
      "zip": "73597",
      "state": "WI",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T19:00:53.745Z",
    "company": {
      "name": "Schamberger, Denesik and Zemlak",
      "website": "http://armand.net"
    },
    "profilePic": "http://lorempixel.com/640/480/cats"
  },
  {
    "id": "7c8c8808-2017-471e-8eda-b3f5a37f7533",
    "firstName": "Abdiel",
    "lastName": "Pagac",
    "email": "Ezra29@hotmail.com",
    "address": {
      "street": "205 Wyman Dale",
      "city": "Chazchester",
      "zip": "35278",
      "state": "WY",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T09:54:10.555Z",
    "company": {
      "name": "Zulauf Inc",
      "website": "https://cheyenne.info"
    },
    "profilePic": "http://lorempixel.com/640/480/city"
  },
  {
    "id": "bcbb19f8-4e90-40c5-bdb5-47935f8fdbe2",
    "firstName": "Hipolito",
    "lastName": "Gerhold",
    "email": "Delilah.Brown24@gmail.com",
    "address": {
      "street": "791 O'Keefe Landing",
      "city": "New Jonasport",
      "zip": "10658",
      "state": "KS",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T02:17:33.284Z",
    "company": {
      "name": "Kling - MacGyver",
      "website": "https://gracie.org"
    },
    "profilePic": "http://lorempixel.com/640/480/technics"
  },
  {
    "id": "0cafe70b-62ae-4ee7-a608-2cb79fa7f0e0",
    "firstName": "Winifred",
    "lastName": "Ullrich",
    "email": "Adolf.Hansen71@hotmail.com",
    "address": {
      "street": "44515 Veum Square",
      "city": "West Kenny",
      "zip": "02251-4133",
      "state": "ID",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T02:18:13.808Z",
    "company": {
      "name": "Koelpin, Ernser and Green",
      "website": "https://stephon.name"
    },
    "profilePic": "http://lorempixel.com/640/480/nature"
  },
  {
    "id": "12698d6e-ec61-4e8e-ae47-9ddc9440f5c1",
    "firstName": "Aileen",
    "lastName": "Koepp",
    "email": "Santa20@hotmail.com",
    "address": {
      "street": "2076 Solon Spring",
      "city": "North Reanna",
      "zip": "14624",
      "state": "OR",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T16:40:57.845Z",
    "company": {
      "name": "Frami, Fritsch and Considine",
      "website": "http://brady.com"
    },
    "profilePic": "http://lorempixel.com/640/480/transport"
  },
  {
    "id": "45e41d1b-cec8-41dd-b5e6-c832b8352a09",
    "firstName": "Era",
    "lastName": "Lynch",
    "email": "Jefferey.Champlin@yahoo.com",
    "address": {
      "street": "3913 Batz Village",
      "city": "Braulioland",
      "zip": "19934",
      "state": "HI",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T07:15:47.474Z",
    "company": {
      "name": "Yost, Huels and Lemke",
      "website": "https://jasmin.net"
    },
    "profilePic": "http://lorempixel.com/640/480/food"
  },
  {
    "id": "c11d83c9-e8d7-48a6-afd1-7a7ff1439ffb",
    "firstName": "Freddie",
    "lastName": "Emmerich",
    "email": "Jamir.Corkery55@yahoo.com",
    "address": {
      "street": "2094 Schiller Valley",
      "city": "Shyannport",
      "zip": "63610",
      "state": "ME",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T13:42:24.102Z",
    "company": {
      "name": "Toy, Dooley and Zulauf",
      "website": "https://julia.net"
    },
    "profilePic": "http://lorempixel.com/640/480/technics"
  },
  {
    "id": "96492dee-c33d-465b-b3e3-8cef2b3d48d7",
    "firstName": "Grayce",
    "lastName": "O'Keefe",
    "email": "Angus_Goldner@hotmail.com",
    "address": {
      "street": "72903 Wilkinson Branch",
      "city": "South Guillermo",
      "zip": "38786-8647",
      "state": "OH",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T03:18:09.217Z",
    "company": {
      "name": "Lynch - Leffler",
      "website": "https://krystal.net"
    },
    "profilePic": "http://lorempixel.com/640/480/food"
  },
  {
    "id": "4a98cb60-028b-474b-9bdc-50e64447dd62",
    "firstName": "Alta",
    "lastName": "Dach",
    "email": "Julien.Fahey20@gmail.com",
    "address": {
      "street": "892 O'Reilly Keys",
      "city": "Port Lizzie",
      "zip": "20083",
      "state": "IN",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T02:53:30.008Z",
    "company": {
      "name": "Crist, Kiehn and Christiansen",
      "website": "http://brando.biz"
    },
    "profilePic": "http://lorempixel.com/640/480/business"
  },
  {
    "id": "d6c6223c-100e-455b-87ad-54d5c7ead582",
    "firstName": "Dannie",
    "lastName": "Kirlin",
    "email": "Barney_Nolan79@yahoo.com",
    "address": {
      "street": "994 Pfeffer Walks",
      "city": "Marcelleview",
      "zip": "36082",
      "state": "AZ",
      "country": "USA"
    },
    "dateCreated": "2017-01-25T12:25:00.322Z",
    "company": {
      "name": "Wilderman - Hegmann",
      "website": "http://dereck.biz"
    },
    "profilePic": "http://lorempixel.com/640/480/sports"
  }
]
  }
})();

const ironhacker = {
    firstName: 'Marko',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    'works at': null,
    isRemote: false,
    address: {
      country: 'Portugal',
      city: 'Lisbon',
    },
  };
  
  // 1: Update age to 40 and console.log the new value
  // ... your code here

  ironhacker.age = 40;
  console.log(ironhacker.age);
  
  // 2: Update ironhacker's place of work to 'Google' and console.log the new value
  // ... your code here
  ironhacker.placeofwork = "Google"; 

 console.log(ironhacker.placeofwork)
  
  // 3: Remove the 'isRemote' property and console.log the new value of 'isRemote' to make sure it is undefined
  // ... your code here
  delete ironhacker.isRemote; 
  console.log(ironhacker.isRemote)

  // 4: Add a new property: 'didGraduate' and set it to a valid boolean value and console.log the new value
  // ... your code here
  ironhacker.didGraduate = true; 
  console.log(ironhacker.didGraduate)

  // 5: console.log all keys (property names) of the ironhacker object (you can print them as an array or as individual console.logs)
  // ... your code here
  console.log(ironhacker)
  
  // 6: check if ironhacker has property 'favoriteLanguage'. Console.log a boolean true or false depending if 'favoriteLanguage' exists as a preperty
  // ... your code here
  const hasfavoriteLanguage = ironhacker.hasOwnProperty("favoriteLanguage");
  console.log(hasfavoriteLanguage);


  // 7: BONUS: update the property city to be 'Porto' and console.log the new value
  // - Note that it is nested inside another object.

  
  
  // 8: BONUS: Complete the following function:
  // it should print the country and city of the person with the following string structure:
  // Our ironhacker FIRST_NAME is from CITY, COUNTRY
  
  function countryAndCity(person) {
    // make sure to use the parameter person for their properties and to return the string
  }
  
  console.log('Bonus 8.', countryAndCity(ironhacker));
  
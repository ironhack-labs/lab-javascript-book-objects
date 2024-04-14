const dictionary = {
    "J. K. Rowling": [
      ["Harry Potter and the Philosopher's Stone", 223],
      ["Harry Potter and the Chamber of Secrets", 251],
      ["Harry Potter and the Prisoner of Azkaban", 317],
      ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
      ["Cryptonomicon", 928],
      ["Anathem", 1008],
      ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
      ["Outliers", 320],
      ["Blink", 287],
    ],
  };

  function averagePageCount (dictionary) {
    let bookNumber = [];
    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < dictionary[i].length; j++) {
            bookNumber.push(dictionary[i][j])
        }
    }
    return bookNumber
  }
  console.log(averagePageCount(dictionary))
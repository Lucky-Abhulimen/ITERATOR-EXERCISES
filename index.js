var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

  // Write a function called printEmails which console.log's each email for the users
  function printEmails(usersArr){
      let emails = [];
      usersArr.forEach(function(val){
          emails.push(val.email);
          
      })
      return emails;
  }
 //console.log(printEmails(users));

 //Write a function called printHobbies which console.log's each hobby for each user
 function printHobbies(usersArr){
    let hobbies = [];
    usersArr.forEach(function(val){
        hobbies.push(val.hobbies);
        
    })
    return hobbies;
}
//console.log(printHobbies(users));

//Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

function findHomeTownByState(homeState){
  
    let state = [];
    users.forEach(function(obj){
      if(obj.hometown.state === homeState){
          console.log(state.push(obj));
      }
    })
  return state[0];
}

//console.log(findHomeTownByState("CA"));

//Write a function called allLanguages which returns an array of all of the unique values

function allLanguages(arr){
  let list = [];
  arr.map(function(obj){
    list.push(obj.favoriteLanguages);
    
  })
  return [... new Set(list.join(",").split(','))];
}

//console.log(allLanguages(users));

//Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
function hasFavoriteEditor(favourite){
    return users.some(function(obj){
      return obj.favoriteEditor === favourite;
      
    })
}
//console.log(hasFavoriteEditor('VS Code'));
//console.log(hasFavoriteEditor('Eclipse'));

//Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
function findByUsername(userName){
  return users.filter(obj => 
    obj.username === userName
    
)}
//console.log(findByUsername('david'));

//Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
function vowelCount(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return word.split('').reduce(function(obj, val) {
    if (vowels.indexOf(val) > -1) {
      obj[val] = (obj[val] || 0) + 1;
    }
    return obj;
  }, {});

}
//console.log(vowelCount('incredible'));
//console.log(vowelCount('awesome'));


//Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
function removeVowels(str){
  let strings = str.split("").map(x=>x.replace( /[aeiou]/g, "")).join("");
  return strings.split('');
  
}
console.log(removeVowels('amazing'));
console.log(removeVowels('fun'));
console.log(removeVowels('silly'));
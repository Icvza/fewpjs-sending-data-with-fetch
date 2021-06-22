// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   // method: "POST" is missing from the object below
//   let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     }); 


function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name, email })
    }
  
    return fetch(url, config)
    .then(res =>  res.json())
    .then(json => document.body.innerHTML += json.id)
    .catch(err => document.body.innerHTML += err.message)
  
  }
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (let key in data) {
      console.log(`${data[key].name}  -  ${data[key].email}  -  ${data[key].address.zipcode} `);
    }
  })
  .catch(error => { console.error(error); });


fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    data.forEach(function (element) {
      console.log(data);
    });
  });

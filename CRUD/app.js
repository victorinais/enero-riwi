//se guarda la dirección de la api en una variable
const api = "https://memin.io/public/api/v2/users";

//se llama al metodo fetch para mostrar los datos de la api mediante una peticion GET que el metodo hace por defecto
fetch(api)
  .then((respuesta) => respuesta.json())//se convierte de json a objeto para que js pueda leeerlo
  .then((data) => {
    let tbody = document.getElementById("tbody");//se hace referencia al id donde ubicaremos la información
    data.data.forEach((element) => {//se rrecorren los elementos que contiene el array de la api

      let tr = document.createElement("tr");//se crea la fila 
      tbody.appendChild(tr);//se le asigna como hija de tbody

      let td_id = document.createElement("td");//se crea la columna
      td_id.innerText = element.id;//se le asigna el valor que tiene id en la api
      tr.appendChild(td_id);//se le asigna como hija de la fila

      let td_name = document.createElement("td");
      td_name.innerText = element.name;
      tr.appendChild(td_name);

      let td_email = document.createElement("td");
      td_email.innerText = element.email;
      tr.appendChild(td_email);

      let td_button = document.createElement("td");
      tr.appendChild(td_button);

      let button_eliminar = document.createElement("button");
      button_eliminar.classList.add("btn", "btn-danger", "btn-sm");
      button_eliminar.innerText = "Eliminar";
      button_eliminar.setAttribute("onclick", "destroy(" + element.id + ")");
      td_button.appendChild(button_eliminar);

      let button_editar = document.createElement("button");
      button_editar.classList.add("btn", "btn-warning", "btn-sm", "mx-2");
      button_editar.innerText = "Editar";
      button_editar.setAttribute("onclick", "edit(" + element.id + ")");
      td_button.appendChild(button_editar);
    });
  });

  //función para guardar usuarios
function guardarUsuario() {
  let name = document.getElementById("name_create");
  let email = document.getElementById("email_create");
  let password = document.getElementById("password_create");

  let data_user = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  fetch(api, {
    method: "POST",
    body: JSON.stringify(data_user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resolver) => resolver.json())
    .then(data => {
    location.href = "";
    console.log(data);
  })
}

//funcion para eliminar usuarios
function destroy(id) {
  fetch("https://memin.io/public/api/v2/users/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      location.href = "";
    });
}

//función para editar
function edit(id) {
  fetch("https://memin.io/public/api/v2/users/" + id,)
    .then(result => result.json()).then(data => {
      document.getElementById("name-edit").value = data.name;
      document.getElementById("email-edit").value = data.email;
      document.getElementById("password-edit").value = data.password;
      document.getElementById("id_edit").value = data.id;
  })
}

//funcion para actualizar
function update() {
  let name = document.getElementById("name-edit");
  let email = document.getElementById("email-edit");
  let password = document.getElementById("password-edit");
  let id = document.getElementById("id_edit");

  let data_user = {
    name: name.value,
    email: email.value,
    password: password.value
  };

  fetch("https://memin.io/public/api/v2/users/" + id.value, {
    method: "PUT",
    body: JSON.stringify(data_user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(result => result.json())
    .then(data => {
      location.href = "";
    })
}

function search() {
  q = document.getElementById("search").value;

  fetch("https://memin.io/public/api/v2/users/search/" + q)
    .then(result => result.json())
    .then(data => {

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "" 
    data.forEach((element) => {
      
      let tr = document.createElement("tr"); 
      tbody.appendChild(tr); 

      let td_id = document.createElement("td"); 
      td_id.innerText = element.id; 
      tr.appendChild(td_id); 

      let td_name = document.createElement("td");
      td_name.innerText = element.name;
      tr.appendChild(td_name);

      let td_email = document.createElement("td");
      td_email.innerText = element.email;
      tr.appendChild(td_email);

      let td_button = document.createElement("td");
      tr.appendChild(td_button);

      let button_eliminar = document.createElement("button");
      button_eliminar.classList.add("btn", "btn-danger", "btn-sm");
      button_eliminar.innerText = "Eliminar";
      button_eliminar.setAttribute("onclick", "destroy(" + element.id + ")");
      td_button.appendChild(button_eliminar);

      let button_editar = document.createElement("button");
      button_editar.classList.add("btn", "btn-warning", "btn-sm", "mx-2");
      button_editar.innerText = "Editar";
      button_editar.setAttribute("onclick", "edit(" + element.id + ")");
      td_button.appendChild(button_editar);
    });
  })
}
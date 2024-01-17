const api = "https://memin.io/public/api/v2/users";

fetch(api)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    let tbody = document.getElementById("tbody");
    data.data.forEach((element) => {
      console.log(element);

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
      td_button.appendChild(button_eliminar);
    });
  });

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
  }).then((resolver) => console.log(resolver));
}

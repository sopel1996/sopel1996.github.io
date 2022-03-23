import * as modal from './modal.js';

export function createUserCard(user) {
  let userCard = document.createElement("div");
  userCard.classList.add("userCard");
  userCard.id = user.id;
  // добавление аватара
  let photo = document.createElement("img");
  photo.classList.add("photo");
  photo.src = `img/png/${user.id}.png`;
  photo.alt = `photo user ${user.id}`;
  // ======================

  // добавление блока информации
  let infoWrapper = document.createElement("div");
  infoWrapper.classList.add("infoWrapper");

  let name = document.createElement("div");
  name.classList.add("name");
  name.innerText = user.name;

  let userName = document.createElement("div");
  userName.classList.add("userName");
  userName.innerText = user.username;

  let email = document.createElement("a");
  email.classList.add("email");
  email.mailto = user.email;
  email.innerText = user.email;

  let addressWrapper = document.createElement("div");
  addressWrapper.classList.add("addressWrapper");

  let street = document.createElement("div");
  street.classList.add("street");
  street.innerText = user.address.street;

  let suite = document.createElement("div");
  suite.classList.add("suite");
  suite.innerText = user.address.suite;

  let city = document.createElement("div");
  city.classList.add("city");
  city.innerText = user.address.city;

  let zipcode = document.createElement("div");
  zipcode.classList.add("zipcode");
  zipcode.innerText = user.address.zipcode;

  addressWrapper.append(street);
  addressWrapper.append(suite);
  addressWrapper.append(city);
  addressWrapper.append(zipcode);

  let phone = document.createElement("a");
  phone.classList.add("phone");
  phone.href = `tel=+${user.phone.replace(/[-]/gi, "")}`;
  phone.innerText = user.phone;

  let website = document.createElement("a");
  website.classList.add("website");
  website.href = `http://${user.website}`;
  website.innerText = user.website;

  let companyWrapper = document.createElement("div");
  companyWrapper.classList.add("companyWrapper");

  let companyName = document.createElement("div");
  companyName.classList.add("companyName");
  companyName.innerText = user.company.companyName;

  let catchPhrase = document.createElement("div");
  catchPhrase.classList.add("catchPhrase");
  catchPhrase.innerText = user.company.catchPhrase;

  let bs = document.createElement("div");
  bs.classList.add("bs");
  bs.innerText = user.company.bs;

  companyWrapper.append(companyName);
  companyWrapper.append(catchPhrase);
  companyWrapper.append(bs);

  infoWrapper.append(name);
  infoWrapper.append(userName);
  infoWrapper.append(email);
  infoWrapper.append(addressWrapper);
  infoWrapper.append(phone);
  infoWrapper.append(website);
  infoWrapper.append(companyWrapper);
  // ========================

  // добавление блока кнопок
  let btnWrapper = document.createElement("div");
  btnWrapper.classList.add("btnWrapper");
  let editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", (el) => {
    updateUser(user.id);
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerText = "Delete";
  deleteBtn.value = "deleteUser";

  deleteBtn.addEventListener("click", (el) => {
    deleteUser(user.id);
  });

  btnWrapper.append(editBtn);
  btnWrapper.append(deleteBtn);
  // =============================

  userCard.append(photo);
  userCard.append(infoWrapper);
  userCard.append(btnWrapper);

  document.querySelector(".usersCardList").append(userCard);
}
export function updateUserSubmit(id) {
  let [
    name,
    username,
    email,
    street,
    suite,
    city,
    zipcode,
    phone,
    website,
    companyName,
    catchPhrase,
    bs,
  ] = modal.updateForm.querySelectorAll("input");

  document.getElementById(`${id}`).querySelector(".name").innerText =
    name.value;
  document.getElementById(`${id}`).querySelector(".userName").innerText =
    username.value;
  document.getElementById(`${id}`).querySelector(".email").innerText =
    email.value;
  document.getElementById(`${id}`).querySelector(".street").innerText =
    street.value;
  document.getElementById(`${id}`).querySelector(".suite").innerText =
    suite.value;
  document.getElementById(`${id}`).querySelector(".city").innerText =
    city.value;
  document.getElementById(`${id}`).querySelector(".zipcode").innerText =
    zipcode.value;
  document.getElementById(`${id}`).querySelector(".phone").innerText =
    phone.value;
  document.getElementById(`${id}`).querySelector(".website").innerText =
    website.value;
  document.getElementById(`${id}`).querySelector(".companyName").innerText =
    companyName.value;
  document.getElementById(`${id}`).querySelector(".catchPhrase").innerText =
    catchPhrase.value;
  document.getElementById(`${id}`).querySelector(".bs").innerText = bs.value;

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
      },
      phone: phone,
      website: website,
      company: {
        name: companyName,
        catchPhrase: catchPhrase,
        bs: bs,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    if (res.ok) {
      alert("Data update!");
    }
  });
}
function deleteUser(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      document.getElementById(`${id}`).remove();
      alert("User delete!");
    }
  });
}
function updateUser(id) {
  modal.modal.style.display = "flex";
  modal.updateForm.setAttribute("userId", id);
}
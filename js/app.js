const loadPhones = () => {
  const searchField = document.getElementById("input-field");
  const searchInput = searchField.value;
  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchInput}`)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
  // clear input value
  searchField.value = "";
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  //   create phone cards
  phones.forEach((phone) => {
    const phoneImage = phone.image;
    const phoneName = phone.phone_name;
    const phoneBrand = phone.brand;
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `
      <div class="col">
          <div class="card">
              <img src="${phoneImage}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${phoneName}</h5>
                  <h5 class="card-title">${phoneBrand}</h5>
                  <button onclick="phoneDetails()" class="btn btn-primary">Details</button>
              </div>
          </div>
      </div>
      `;
    phoneContainer.appendChild(phoneDiv);
    console.log(phoneImage);
  });
  console.log(phones);
};

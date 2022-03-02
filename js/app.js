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
  //  clear previous search results
  phoneContainer.textContent = "";

  //   create phone cards
  phones.forEach((phone) => {
    const phoneImage = phone.image;
    const phoneName = phone.phone_name;
    const phoneBrand = phone.brand;

    // phone unique id
    const phoneUniqueId = phone.slug;
    // console.log(phoneUniqueId);
    //
    //
    //
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `
      <div class="col">
          <div class="card">
              <img src="${phoneImage}" class="card-img-top phone-image" alt="..." >
              <div class="card-body">
                  <h5 class="card-title">${phoneName}</h5>
                  <h5 class="card-title">${phoneBrand}</h5>
                  <button onclick="loadPhoneDetails()" class="btn btn-primary">Details</button>
              </div>
          </div>
      </div>
      `;
    phoneContainer.appendChild(phoneDiv);
    // console.log(phone);
  });
};

const loadPhoneDetails = (phoneUniqueId) => {
  fetch(
    `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`
  )
    .then((res) => res.json())
    .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = (details) => {
  const detailsContainer = document.getElementById("detail-box");
  const phoneImage = details.image;
  const mainFeatures = details.mainFeatures;
  const cheapSet = mainFeatures.chipSet;
  const phoneStorage = mainFeatures.storage;
  const releaseDate = details.releaseDate;

  const detailsDiv = document.createElement("div");
  detailsDiv.innerHTML = `
  <div class="col">
      <div class="card">
          <img src="${phoneImage}" class="card-img-top phone-image" alt="...">
          <div class="card-body">
              <p class="card-text">Chip: ${cheapSet}</p>
              <p class="card-text">Storage: ${phoneStorage}</p>    
              <p class="card-text">${releaseDate}</p>    
          </div>
      </div>
  </div>
  `;
  detailsContainer.appendChild(detailsDiv);
  console.log(details);
};

const loadPhones = () => {
  const searchField = document.getElementById("input-field");
  const searchInput = searchField.value;
  // clear input value
  searchField.value = "";

  if (searchInput == "") {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = `
    <h1>Please Write Something to Display</h1>
    `;
  } else {
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchInput}`
    )
      .then((res) => res.json())
      .then((data) => displayPhone(data.data));
  }
};

const displayPhone = (phones) => {
  // show not more than 20 result
  phones.length = 20;

  const phoneContainer = document.getElementById("phone-container");
  //  clear previous search results
  phoneContainer.textContent = "";

  //   create phone cards
  phones.forEach((phone) => {
    const phoneImage = phone.image;
    const phoneName = phone.phone_name;
    const phoneBrand = phone.brand;

    //! phone unique id
    const phoneUniqueId = phone.slug;

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

// fetching phone details
const loadPhoneDetails = () => {
  fetch(
    `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`
  )
    .then((res) => res.json())
    .then((data) => showPhoneDetails(data.data));
};

// showing phone details
const showPhoneDetails = (details) => {
  const detailsContainer = document.getElementById("detail-box");
  const phoneImage = details.image;
  const mainFeatures = details.mainFeatures;
  const cheapSet = mainFeatures.chipSet;
  const phoneDisplay = mainFeatures.displaySize;
  const memory = mainFeatures.memory;
  const phoneStorage = mainFeatures.storage;
  const releaseDate = details.releaseDate;
  const otherInfo = details.others;
  const Bluetooth = otherInfo.Bluetooth;
  const GPS = otherInfo.GPS;
  const NFC = otherInfo.NFC;
  const Radio = otherInfo.Radio;
  const USB = otherInfo.USB;
  const WLAN = otherInfo.WLAN;

  const detailsDiv = document.createElement("div");
  detailsDiv.innerHTML = `
  <div class="col">
      <div class="card">
          <img src="${phoneImage}" class="card-img-top phone-image" alt="...">
          <div class="card-body">
            <p class="card-text"><strong>Chip:</strong> ${cheapSet}</p>
              <p class="card-text"><strong>Display:</strong> ${phoneDisplay}</p>
              <p class="card-text"><strong>Memory:</strong> ${memory}</p>
              <p class="card-text"><strong>Storage:</strong> ${phoneStorage}</p>                  
              <br>
              <p class="card-text"><strong>BlueTooth:</strong> ${Bluetooth}</p>  
              <p class="card-text"><strong>GPS:</strong> ${GPS}</p>  
              <p class="card-text"><strong>NFC:</strong> ${NFC}</p>  
              <p class="card-text"><strong>Radio:</strong> ${Radio}</p>  
              <p class="card-text"><strong>USB:</strong> ${USB}</p>  
              <p class="card-text"><strong>WLAN:</strong> ${WLAN}</p>  
              <br><br>
              <p class="card-text">${releaseDate}</p> 
          </div>
      </div>
  </div>
  `;
  detailsContainer.appendChild(detailsDiv);
  console.log(details);
};

const loadPhones = () => {
  const searchField = document.getElementById("input-field");
  const searchInput = searchField.value;
  fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then((res) => res.json())
    .then((data) => displayPhone(data));
};

const displayPhone = (phone) => {
  console.log(phone);
};

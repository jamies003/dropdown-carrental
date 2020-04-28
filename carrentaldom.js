document.getElementById("CarRentalName").innerText = "JS Car Rental";
document.getElementById("slogan").innerText = "Top Luxury Cars!";


let rentalCars = ["Nissan", "Benz", "Mercedes", "Audi"];
let dropDownList = "<select id = cars>";
for (let i = 0; i < rentalCars.length; i++) {
    dropDownList = dropDownList + `<option value="${rentalCars[i]}">${rentalCars[i]}</option>`;  
}

dropDownList = dropDownList + "</select>";

document.getElementById("newSelection").innerHTML = dropDownList;
const foodTypeSelect = document.getElementById("select-food-type");
const foodSelect = document.getElementById("select-food");
const priceSelect = document.getElementById("food-price");

// Define food options with prices
const foodOptions = {
  fdt1: [
    { name: "Classic Burger (Large)", price: "LKR : 750.00" },
    { name: "Classic Burger (Regular)", price: "LKR : 1500.00" },
    { name: "Turkeyburger", price: "LKR : 1600.00 " },
    { name: "Chicken Burger (Large)", price: "LKR : 1400.00" },
    { name: "Chicken Burger (Regular)", price: "LKR : 800.00" },
    { name: "Cheese Burger (Large)", price: "LKR : 1000.00" },
    { name: "Cheese Burger (Regular)", price: "LKR : 600.00" },
    { name: "Bacon Burger", price: "LKR : 650.00" },
    { name: "Shawarma Burger", price: "LKR : 800.00" },
    { name: "Olive Burger", price: "LKR : 1800.00" },
    { name: "Double-Cheese Burger ", price: "LKR : 1250.00" },
    { name: "Crispy Chicken Burger (Regular)", price: "LKR : 1200.00" },
    { name: "Crispy Chicken Burger (Large)", price: "LKR : 1600.00" },
    { name: "Paneer Burger", price: "LKR : 900.00" },
  ],
  fdt2: [
    // Submarines
    { name: "Crispy Chicken Submarine (Large)", price: "LKR : 2000.00" },
    { name: "Crispy Chicken Submarine (Regular)", price: "LKR : 1500.00" },
    { name: "Chicken Submarine (Large)", price: "LKR : 1800.00" },
    { name: "Chicken Submarine (Regular)", price: "LKR : 1400.00" },
    { name: "Grinder Submarine", price: "LKR : 2300.00" },
    { name: "Cheese Submarine", price: "LKR : 2200.00" },
    { name: "Double Cheese n Chicken Submarine", price: "LKR : 1900.00" },
    { name: "Special Horgie Submarine", price: "LKR : 2800.00" },
    { name: "MOS Special Submarine", price: "LKR : 3000.00" },
  ],
  fdt3: [
    // Fries
    { name: "Steak Fries (Large)", price: "LKR : 1200.00" },
    { name: "Steak Fries (Medium)", price: "LKR : 600.00" },
    { name: "French Fries (Large)", price: "LKR : 800.00" },
    { name: "French Fries (Medium)", price: "LKR : 650.00" },
    { name: "French Fries (Small)", price: "LKR : 450.00" },
    { name: "Sweet Potato Fries (Large)", price: "LKR : 600.00" },
  ],
  fdt4: [
    // Pasta
    { name: "Chicken n Cheese Pasta", price: "LKR : 1600.00" },
    { name: "Chicken Penne Pasta", price: "LKR : 1700.00" },
    { name: "Ground Turkey Pasta Bake", price: "LKR : 2900.00" },
    { name: "Creamy Shrimp Pasta", price: "LKR : 2000.00" },
    { name: "Lemon Butter Pasta", price: "LKR : 1950.00" },
    { name: "Tagliatelle Pasta", price: "LKR : 2400.00" },
    { name: "Baked Ravioli", price: "LKR : 2000.00" },
  ],
  fdt5: [
    // Chicken
    { name: "Fried Chicken (Small)", price: "LKR : 1200.00" },
    { name: "Fried Chicken (Regular)", price: "LKR : 2300.00" },
    { name: "Fried Chicken (Large)", price: "LKR : 3100.00" },
    { name: "Hot Wings (Large)", price: "LKR : 2400.00" },
    { name: "Devilled Chicken (Large)", price: "LKR : 900.00" },
    { name: "BBQ Chicken (Regular)", price: "LKR : 2100.00" },
  ],
  fdt6: [
    // Beverages
    { name: "Pepsi (330ml)", price: "LKR : 990.00" },
    { name: "Coca-Cola (330ml)", price: "LKR : 1230.00" },
    { name: "Sprite (330ml)", price: "LKR : 1500.00 " },
    { name: "Mirinda (330ml)", price: "LKR : 850.00" },
  ],
};

// Update food dropdown based on food type selection
foodTypeSelect.addEventListener("change", () => {
  const selectedFoodType = foodTypeSelect.value;

  // Clear existing options
  foodSelect.innerHTML =
    '<option value="" selected disabled>Select a food item</option>';
  priceSelect.innerHTML = '<option value="">Price will appear here</option>';

  // Populate food options
  if (foodOptions[selectedFoodType]) {
    foodOptions[selectedFoodType].forEach((item) => {
      const option = document.createElement("option");
      option.value = item.name.toLowerCase(); // Use lowercase as the value
      option.textContent = item.name; // Display name
      option.dataset.price = item.price; // Store price in a data attribute
      foodSelect.appendChild(option);
    });
  }
});

// Display price when a food item is selected
foodSelect.addEventListener("change", () => {
  const selectedOption = foodSelect.options[foodSelect.selectedIndex];
  const price = selectedOption.dataset.price || "";

  // Update price dropdown
  priceSelect.innerHTML = "";
  const priceOption = document.createElement("option");
  priceOption.textContent = price ? `${price}` : "Price not available";
  priceSelect.appendChild(priceOption);
});

let stepNumber = 1;

function nextStepProgress() {
  for (let i = 1; i <= 5; i++) {
    document.getElementById("steps-progress" + i).style.backgroundColor =
      "azure";
  }

  const currentStep = document.getElementById("steps-progress" + stepNumber);
  currentStep.style.backgroundColor = "blue";

  stepNumber++;

  if (stepNumber == 2) {
    document.getElementById("canvas-header").innerHTML = "User Details";
    document.getElementById("select-food-type").style.display = "none";
    document.getElementById("select-food").style.display = "none";
    document.getElementById("food-price").style.display = "none";
    document.getElementById("steps-progress2").style.backgroundColor = "blue";
    document.getElementById("steps-progress1").style.backgroundColor = "azure";
    document.getElementById("page-2").style.display = "block";
  }

  if (stepNumber == 3) {
    document.getElementById("canvas-header").innerHTML = "Payment Details";
    document.getElementById("select-food-type").style.display = "none";
    document.getElementById("select-food").style.display = "none";
    document.getElementById("food-price").style.display = "none";
    document.getElementById("steps-progress3").style.backgroundColor = "blue";
    document.getElementById("steps-progress2").style.backgroundColor = "azure";
    document.getElementById("steps-progress1").style.backgroundColor = "azure";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "block";
  }

  if (stepNumber == 4) {
    document.getElementById("canvas-header").innerHTML = "Stars And Bonus";
    document.getElementById("select-food-type").style.display = "none";
    document.getElementById("select-food").style.display = "none";
    document.getElementById("food-price").style.display = "none";
    document.getElementById("steps-progress4").style.backgroundColor = "blue";
    document.getElementById("steps-progress3").style.backgroundColor = "azure";
    document.getElementById("steps-progress2").style.backgroundColor = "azure";
    document.getElementById("steps-progress1").style.backgroundColor = "azure";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "none";
    document.getElementById("page-4").style.display = "block";
  }

  if (stepNumber == 5) {
    document.getElementById("canvas-header").innerHTML = "Finalize Your Order";
    document.getElementById("select-food-type").style.display = "none";
    document.getElementById("food-price").style.display = "none";
    document.getElementById("select-food").style.display = "none";
    document.getElementById("steps-progress5").style.backgroundColor = "blue";
    document.getElementById("steps-progress4").style.backgroundColor = "azure";
    document.getElementById("steps-progress3").style.backgroundColor = "azure";
    document.getElementById("steps-progress2").style.backgroundColor = "azure";
    document.getElementById("steps-progress1").style.backgroundColor = "azure";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "none";
    document.getElementById("page-4").style.display = "none";
    document.getElementById("page-5").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("next").style.display = "none";
  }
}

function subfunction() {
  window.location = "home.html";
}

let paymentselector = ""; // Stores the text of the selected payment method

// This function is defined before being used to avoid ReferenceError
function updateDetails() {
  // Get input values with fallback
  let customerName = document.getElementById("cusname")?.value.trim() || "N/A";
  let customerPhone =
    document.getElementById("cusphnum")?.value.trim() || "N/A";
  let customerCountry =
    document.getElementById("cuscountry")?.value.trim() || "N/A";
  let customerAddress =
    document.getElementById("cusadd")?.value.trim() || "N/A";

  // Get selected dropdown options with validation
  let selectedFood =
    document.getElementById("select-food")?.value || "Select Food";
  let selectedPrice =
    document.getElementById("food-price")?.value || "Price will appear here";
  let deliveryMethod = document.getElementById("select-how")?.value || "N/A";

  // Use the `paymentselector` text directly
  let payingMethod = paymentselector || "N/A";
  console.log("Payment Method in Details: " + payingMethod); // Debugging log

  // Update final display elements
  document.getElementById(
    "fin-food-name"
  ).innerText = `Food Name: ${selectedFood}`;
  document.getElementById(
    "fin-food-price"
  ).innerText = `Price: ${selectedPrice}`;
  document.getElementById(
    "fin-food-cusname"
  ).innerText = `Name: ${customerName}`;
  document.getElementById(
    "fin-food-cusphnumber"
  ).innerText = `Phone: ${customerPhone}`;
  document.getElementById(
    "fin-food-cuscountry"
  ).innerText = `Country: ${customerCountry}`;
  document.getElementById(
    "fin-food-cusaddress"
  ).innerText = `Address: ${customerAddress}`;
  document.getElementById(
    "fin-food-cusaddhw"
  ).innerText = `Delivery/Pickup: ${deliveryMethod}`;
  document.getElementById(
    "fin-food-paymenttype"
  ).innerText = `Payment Method: ${payingMethod}`;
}

function page3option1() {
  // Set payment method text for option 1
  paymentselector = document.getElementById("pay1-text").innerText;
  console.log("Selected Payment Method: " + paymentselector); // Debugging log

  // Update styles for selected card
  document.getElementById("card-credit1").style.borderWidth = "5px";
  document.getElementById("card-credit1").style.borderColor = "blue";

  // Reset styles for other cards
  document.getElementById("card-credit2").style.borderColor = "azure";
  document.getElementById("card-credit2").style.borderWidth = "0px";
  document.getElementById("card-credit3").style.borderColor = "azure";
  document.getElementById("card-credit3").style.borderWidth = "0px";

  // Update details dynamically
  updateDetails();
}

function page3option2() {
  // Set payment method text for option 2
  paymentselector = document.getElementById("pay2-text").innerText;
  console.log("Selected Payment Method: " + paymentselector); // Debugging log

  // Update styles for selected card
  document.getElementById("card-credit2").style.borderWidth = "5px";
  document.getElementById("card-credit2").style.borderColor = "blue";

  // Reset styles for other cards
  document.getElementById("card-credit1").style.borderColor = "azure";
  document.getElementById("card-credit1").style.borderWidth = "0px";
  document.getElementById("card-credit3").style.borderColor = "azure";
  document.getElementById("card-credit3").style.borderWidth = "0px";

  // Update details dynamically
  updateDetails();
}

function page3option3() {
  // Set payment method text for option 3
  paymentselector = document.getElementById("pay3-text").innerText;
  console.log("Selected Payment Method: " + paymentselector); // Debugging log

  // Update styles for selected card
  document.getElementById("card-credit3").style.borderWidth = "5px";
  document.getElementById("card-credit3").style.borderColor = "blue";

  // Reset styles for other cards
  document.getElementById("card-credit2").style.borderColor = "azure";
  document.getElementById("card-credit2").style.borderWidth = "0px";
  document.getElementById("card-credit1").style.borderColor = "azure";
  document.getElementById("card-credit1").style.borderWidth = "0px";

  // Update details dynamically
  updateDetails();
}

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners for live updates
  document.getElementById("cusname").addEventListener("input", updateDetails);
  document.getElementById("cusphnum").addEventListener("input", updateDetails);
  document
    .getElementById("cuscountry")
    .addEventListener("input", updateDetails);
  document.getElementById("cusadd").addEventListener("input", updateDetails);
  document
    .getElementById("select-food")
    .addEventListener("change", updateDetails);
  document
    .getElementById("food-price")
    .addEventListener("change", updateDetails);
  document
    .getElementById("select-how")
    .addEventListener("change", updateDetails);

  // Initial update to populate fields on page load
  updateDetails();

  let mphp = document
    .getElementById("cusphnum")
    .addEventListener("input", updateDetails);
});

//Testing....

let pointsBalance = 0;

// DOM elements
const pointsBalanceElement = document.getElementById("points-balance");
const messageElement = document.getElementById("message");
const earnPointsBtn = document.getElementById("earn-points-btn");
const redeemPointsBtn = document.getElementById("redeem-points-btn");

// Function to update points balance display
function updatePointsDisplay() {
  pointsBalanceElement.textContent = pointsBalance;
}

// Function to earn points
earnPointsBtn.addEventListener("click", () => {
  pointsBalance += 50; // Add 50 points
  messageElement.textContent = "You earned 50 points!";
  updatePointsDisplay();
});

// Function to redeem points
redeemPointsBtn.addEventListener("click", () => {
  if (pointsBalance >= 100) {
    pointsBalance -= 100; // Deduct 100 points
    messageElement.textContent = "You redeemed 100 points!";
  } else {
    messageElement.textContent = "Not enough points to redeem!";
  }
  updatePointsDisplay();
});

// Initial display update
updatePointsDisplay();
 { name: 'Crispy Chicken Burger (Large)', price: 'LKR : 1600.00' },
        { name: 'Paneer Burger', price: 'LKR : 900.00' },

    ],
    fdt2: [ // Submarines
        { name: 'Crispy Chicken Submarine (Large)', price: 'LKR : 2000.00' },
        { name: 'Crispy Chicken Submarine (Regular)', price: 'LKR : 1500.00' },
        { name: 'Chicken Submarine (Large)', price: 'LKR : 1800.00' },
        { name: 'Chicken Submarine (Regular)', price: 'LKR : 1400.00' },
        { name: 'Grinder Submarine', price: 'LKR : 2300.00' },
        { name: 'Cheese Submarine', price: 'LKR : 2200.00' },
        { name: 'Double Cheese n Chicken Submarine', price: 'LKR : 1900.00' },
        { name: 'Special Horgie Submarine', price: 'LKR : 2800.00' },
        { name: 'MOS Special Submarine', price: 'LKR : 3000.00' }
    ],
    fdt3: [ // Fries
        { name: 'Steak Fries (Large)', price: 'LKR : 1200.00' },
        { name: 'Steak Fries (Medium)', price: 'LKR : 600.00' },
        { name: 'French Fries (Large)', price: 'LKR : 800.00' },
        { name: 'French Fries (Medium)', price: 'LKR : 650.00' },
        { name: 'French Fries (Small)', price: 'LKR : 450.00' },
        { name: 'Sweet Potato Fries (Large)', price: 'LKR : 600.00' }
    ],
    fdt4: [ // Pasta
        { name: 'Chicken n Cheese Pasta', price: 'LKR : 1600.00' },
        { name: 'Chicken Penne Pasta', price: 'LKR : 1700.00' },
        { name: 'Ground Turkey Pasta Bake', price: 'LKR : 2900.00' },
        { name: 'Creamy Shrimp Pasta', price: 'LKR : 2000.00' },
        { name: 'Lemon Butter Pasta', price: 'LKR : 1950.00' },
        { name: 'Tagliatelle Pasta', price: 'LKR : 2400.00' },
        { name: 'Baked Ravioli', price: 'LKR : 2000.00' }
    ],
    fdt5: [ // Chicken
        { name: 'Fried Chicken (Small)', price: 'LKR : 1200.00' },
        { name: 'Fried Chicken (Regular)', price: 'LKR : 2300.00' },
        { name: 'Fried Chicken (Large)', price: 'LKR : 3100.00' },
        { name: 'Hot Wings (Large)', price: 'LKR : 2400.00' },
        { name: 'Devilled Chicken (Large)', price: 'LKR : 900.00' },
        { name: 'BBQ Chicken (Regular)', price: 'LKR : 2100.00' }
    ],
    fdt6: [ // Beverages
        { name: 'Pepsi (330ml)', price: 'LKR : 990.00' },
        { name: 'Coca-Cola (330ml)', price: 'LKR : 1230.00' },
        { name: 'Sprite (330ml)', price: 'LKR : 1500.00 ' },
        { name: 'Mirinda (330ml)', price: 'LKR : 850.00' }
    ]
};

// Update food dropdown based on food type selection
foodTypeSelect.addEventListener('change', () => {
    const selectedFoodType = foodTypeSelect.value;

    // Clear existing options
    foodSelect.innerHTML = '<option value="" selected disabled>Select a food item</option>';
    priceSelect.innerHTML = '<option value="">Price will appear here</option>';

    // Populate food options
    if (foodOptions[selectedFoodType]) {
        foodOptions[selectedFoodType].forEach(item => {
            const option = document.createElement('option');
            option.value = item.name.toLowerCase(); // Use lowercase as the value
            option.textContent = item.name; // Display name
            option.dataset.price = item.price; // Store price in a data attribute
            foodSelect.appendChild(option);
        });
    }
});

// Display price when a food item is selected
foodSelect.addEventListener('change', () => {
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];
    const price = selectedOption.dataset.price || '';

    // Update price dropdown
    priceSelect.innerHTML = '';
    const priceOption = document.createElement('option');
    priceOption.textContent = price ? `${price}` : 'Price not available';
    priceSelect.appendChild(priceOption);
});


let stepNumber = 1; 

function nextStepProgress() {

    for (let i = 1; i <= 5; i++) { 
        document.getElementById("steps-progress" + i).style.backgroundColor = "azure";
    }

    const currentStep = document.getElementById("steps-progress" + stepNumber);
    currentStep.style.backgroundColor = "blue";

   
    stepNumber++;

    if (stepNumber == 2) {

        document.getElementById("canvas-header").innerHTML = "User Details";
        document.getElementById("select-food-type").style.display = "none";
        document.getElementById("select-food").style.display = "none";
        document.getElementById("food-price").style.display = "none";
        document.getElementById("steps-progress2").style.backgroundColor = "blue";
        document.getElementById("steps-progress1").style.backgroundColor = "azure";
        document.getElementById("page-2").style.display = "block";


    }



    if (stepNumber == 3) {

        document.getElementById("canvas-header").innerHTML = "Payment Details";
        document.getElementById("select-food-type").style.display = "none";
        document.getElementById("select-food").style.display = "none";
        document.getElementById("food-price").style.display = "none";
        document.getElementById("steps-progress3").style.backgroundColor = "blue";
        document.getElementById("steps-progress2").style.backgroundColor = "azure";
        document.getElementById("steps-progress1").style.backgroundColor = "azure";
        document.getElementById("page-2").style.display = "none";
        document.getElementById("page-3").style.display = "block";


    }

    
    if (stepNumber == 4) {

        document.getElementById("canvas-header").innerHTML = "Stars And Bonus";
        document.getElementById("select-food-type").style.display = "none";
        document.getElementById("select-food").style.display = "none";
        document.getElementById("food-price").style.display = "none";
        document.getElementById("steps-progress4").style.backgroundColor = "blue";
        document.getElementById("steps-progress3").style.backgroundColor = "azure";
        document.getElementById("steps-progress2").style.backgroundColor = "azure";
        document.getElementById("steps-progress1").style.backgroundColor = "azure";
        document.getElementById("page-2").style.display = "none";
        document.getElementById("page-3").style.display = "none";
        document.getElementById("page-4").style.display = "block";


    }


    

    if (stepNumber == 5) {

        document.getElementById("canvas-header").innerHTML = "Finalize Your Order";
        document.getElementById("select-food-type").style.display = "none";
        document.getElementById("food-price").style.display = "none";
        document.getElementById("select-food").style.display = "none";
        document.getElementById("steps-progress5").style.backgroundColor = "blue";
        document.getElementById("steps-progress4").style.backgroundColor = "azure";
        document.getElementById("steps-progress3").style.backgroundColor = "azure";
        document.getElementById("steps-progress2").style.backgroundColor = "azure";
        document.getElementById("steps-progress1").style.backgroundColor = "azure";
        document.getElementById("page-2").style.display = "none";
        document.getElementById("page-3").style.display = "none";
        document.getElementById("page-4").style.display = "none";
        document.getElementById("page-5").style.display = "block";
        document.getElementById("submit").style.display = "block";
        document.getElementById("next").style.display = "none";
        

    }
 
}












function subfunction(){
    window.location='home.html';
}














let paymentselector = ""; // Stores the text of the selected payment method

// This function is defined before being used to avoid ReferenceError
function updateDetails() {
    // Get input values with fallback
    let customerName = document.getElementById("cusname")?.value.trim() || "N/A";
    let customerPhone = document.getElementById("cusphnum")?.value.trim() || "N/A";
    let customerCountry = document.getElementById("cuscountry")?.value.trim() || "N/A";
    let customerAddress = document.getElementById("cusadd")?.value.trim() || "N/A";

    // Get selected dropdown options with validation
    let selectedFood = document.getElementById("select-food")?.value || "Select Food";
    let selectedPrice = document.getElementById("food-price")?.value || "Price will appear here";
    let deliveryMethod = document.getElementById("select-how")?.value || "N/A";

    // Use the `paymentselector` text directly
    let payingMethod = paymentselector || "N/A";
    console.log("Payment Method in Details: " + payingMethod); // Debugging log

    // Update final display elements
    document.getElementById("fin-food-name").innerText = `Food Name: ${selectedFood}`;
    document.getElementById("fin-food-price").innerText = `Price: ${selectedPrice}`;
    document.getElementById("fin-food-cusname").innerText = `Name: ${customerName}`;
    document.getElementById("fin-food-cusphnumber").innerText = `Phone: ${customerPhone}`;
    document.getElementById("fin-food-cuscountry").innerText = `Country: ${customerCountry}`;
    document.getElementById("fin-food-cusaddress").innerText = `Address: ${customerAddress}`;
    document.getElementById("fin-food-cusaddhw").innerText = `Delivery/Pickup: ${deliveryMethod}`;
    document.getElementById("fin-food-paymenttype").innerText = `Payment Method: ${payingMethod}`;
}

function page3option1() {
    // Set payment method text for option 1
    paymentselector = document.getElementById("pay1-text").innerText;
    console.log("Selected Payment Method: " + paymentselector); // Debugging log

    // Update styles for selected card
    document.getElementById("card-credit1").style.borderWidth = "5px";
    document.getElementById("card-credit1").style.borderColor = "blue";

    // Reset styles for other cards
    document.getElementById("card-credit2").style.borderColor = "azure";
    document.getElementById("card-credit2").style.borderWidth = "0px";
    document.getElementById("card-credit3").style.borderColor = "azure";
    document.getElementById("card-credit3").style.borderWidth = "0px";

    // Update details dynamically
    updateDetails();
}

function page3option2() {
    // Set payment method text for option 2
    paymentselector = document.getElementById("pay2-text").innerText;
    console.log("Selected Payment Method: " + paymentselector); // Debugging log

    // Update styles for selected card
    document.getElementById("card-credit2").style.borderWidth = "5px";
    document.getElementById("card-credit2").style.borderColor = "blue";

    // Reset styles for other cards
    document.getElementById("card-credit1").style.borderColor = "azure";
    document.getElementById("card-credit1").style.borderWidth = "0px";
    document.getElementById("card-credit3").style.borderColor = "azure";
    document.getElementById("card-credit3").style.borderWidth = "0px";

    // Update details dynamically
    updateDetails();
}

function page3option3() {
    // Set payment method text for option 3
    paymentselector = document.getElementById("pay3-text").innerText;
    console.log("Selected Payment Method: " + paymentselector); // Debugging log

    // Update styles for selected card
    document.getElementById("card-credit3").style.borderWidth = "5px";
    document.getElementById("card-credit3").style.borderColor = "blue";

    // Reset styles for other cards
    document.getElementById("card-credit2").style.borderColor = "azure";
    document.getElementById("card-credit2").style.borderWidth = "0px";
    document.getElementById("card-credit1").style.borderColor = "azure";
    document.getElementById("card-credit1").style.borderWidth = "0px";

    // Update details dynamically
    updateDetails();
}

document.addEventListener("DOMContentLoaded", () => {
    // Attach event listeners for live updates
    document.getElementById("cusname").addEventListener("input", updateDetails);
    document.getElementById("cusphnum").addEventListener("input", updateDetails);
    document.getElementById("cuscountry").addEventListener("input", updateDetails);
    document.getElementById("cusadd").addEventListener("input", updateDetails);
    document.getElementById("select-food").addEventListener("change", updateDetails);
    document.getElementById("food-price").addEventListener("change", updateDetails);
    document.getElementById("select-how").addEventListener("change", updateDetails);
    
    // Initial update to populate fields on page load
    updateDetails();
  
    let mphp = document.getElementById("cusphnum").addEventListener("input", updateDetails);

});
























//Testing....


let pointsBalance = 0;

// DOM elements
const pointsBalanceElement = document.getElementById("points-balance");
const messageElement = document.getElementById("message");
const earnPointsBtn = document.getElementById("earn-points-btn");
const redeemPointsBtn = document.getElementById("redeem-points-btn");

// Function to update points balance display
function updatePointsDisplay() {
    pointsBalanceElement.textContent = pointsBalance;
}

// Function to earn points
earnPointsBtn.addEventListener("click", () => {
    pointsBalance += 50; // Add 50 points
    messageElement.textContent = "You earned 50 points!";
    updatePointsDisplay();
});

// Function to redeem points
redeemPointsBtn.addEventListener("click", () => {
    if (pointsBalance >= 100) {
        pointsBalance -= 100; // Deduct 100 points
        messageElement.textContent = "You redeemed 100 points!";
    } else {
        messageElement.textContent = "Not enough points to redeem!";
    }
    updatePointsDisplay();
});

// Initial display update
updatePointsDisplay();









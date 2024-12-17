// Data
const Burger = [
    { itemCode: "B1002", image:"https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg" , itemName: "Classic Burger (Regular)", category: "Burgers", price: 1500, discount: 15 },
    { itemCode: "B1003", image:"https://thespiceway.com/cdn/shop/files/Signature_Savory_Classic_Burger.jpg?v=1712161801" , itemName: "Turkey Burger", category: "Burgers", price: 1600, discount: null },
    { itemCode: "B1004", image:"https://www.killingthyme.net/wp-content/uploads/2021/11/best-turkey-burger-recipe-5.jpg" , itemName: "Chicken Burger (Large)", category: "Burgers", price: 1400, discount: null },
    { itemCode: "B1005", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7JJbSrwAT62mYx84YBjyRtqCTomlNSFXhQ&s" , itemName: "Chicken Burger (Regular)", category: "Burgers", price: 800, discount: 20 },
    { itemCode: "B1006", image:"https://burgerrepublic.com/wp-content/uploads/2023/09/big-cheeseburger.jpeg" , itemName: "Cheese Burger (Large)", category: "Burgers", price: 1000, discount: null },
    { itemCode: "B1007", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTun8RtUzFNaOCtOAMjE-k41XIfr5zN38PuxA&s" , itemName: "Cheese Burger (Regular)", category: "Burgers", price: 600, discount: null },
    { itemCode: "B1008", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4NehledkoNTv8XzV4RAMg67rGNpQSLOanw&s" , itemName: "Bacon Burger", category: "Burgers", price: 650, discount: 15 },
    { itemCode: "B1009", image:"https://cdn3.didevelop.com/public/product_images/2805/533_f6d25d5ff88f2cec931cd069c72d6e44.jpg" , itemName: "Shawarma Burger", category: "Burgers", price: 800, discount: null },
    { itemCode: "B1010", image:"https://cdn.tasteatlas.com/images/dishes/835427166e184350a75a4f2a799a2ba9.jpg?w=600" , itemName: "Olive Burger", category: "Burgers", price: 1800, discount: null },
    { itemCode: "B1012", image:"https://buona.com/wp-content/uploads/2021/09/burger_double_cheese.jpg" , itemName: "Double-Cheese Burger", category: "Burgers", price: 1250, discount: 20 },
    { itemCode: "B1013", image:"https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/crispy-fried-chicken-burger/main-header.jpg" , itemName: "Crispy Chicken Burger (Regular)", category: "Burgers", price: 1200, discount: null },
    { itemCode: "B1014", image:"https://www.recipetineats.com/uploads/2023/09/Crispy-fried-chicken-burgers_5.jpg" , itemName: "Crispy Chicken Burger (Large)", category: "Burgers", price: 1600, discount: 10 },
    { itemCode: "B1015", image:"https://storage.googleapis.com/shy-pub/296683/1706723880582_SKU-0153_0.jpg" , itemName: "Paneer Burger", category: "Burgers", price: 900, discount: null },
];

const Submarine = [
    { itemCode: "B1016", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAt5h4P7Zq7Ajo09laPhc5m2IsdHNdnwZl2Q&s" , itemName: "Crispy Chicken Submarine (Large)", category: "Submarines", price: 2000, discount: null },
    { itemCode: "B1017", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-BTELpKBagzglZAn49zRilgMXyBCmm_Rhg&s" , itemName: "Crispy Chicken Submarine (Regular)", category: "Submarines", price: 1500, discount: null },
    { itemCode: "B1018", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELz1IBTKqp1l0YTMMYMzDYAi8Fl5SUBuuTQ&s" , itemName: "Chicken Submarine (Large)", category: "Submarines", price: 1800, discount: 3 },
    { itemCode: "B1019", image:"https://dinemoreonline.com/wp-content/uploads/2021/05/Submarine.jpg" , itemName: "Chicken Submarine (Regular)", category: "Submarines", price: 1400, discount: null },
    { itemCode: "B1020", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3m3XHpTNAORyHIfR6mJkAPF14xpP9-r2Bg&s" , itemName: "Grinder Submarine", category: "Submarines", price: 2300, discount: null },
    { itemCode: "B1021", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUOYEpFyaPrv25S6vF9F7JHQSbLoYrw8hIg&s" , itemName: "Cheese Submarine", category: "Submarines", price: 2200, discount: null },
    { itemCode: "B1022", image:"https://www.shutterstock.com/image-photo/two-baguette-sandwiches-submarine-toasted-600nw-2017216700.jpg" , itemName: "Double Cheese n Chicken Submarine", category: "Submarines", price: 1900, discount: 16 },
    { itemCode: "B1023", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi46saTtidtcJo8XkIEJ2ePHmMAmeXCBVgM-7wlLTKQkWh4fK4UUMJLVDymRkqrKSJz9c&usqp=CAU" , itemName: "Special Horgie Submarine", category: "Submarines", price: 2800, discount: null },
    { itemCode: "B1024", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplQlE-w4JCPIRQcwMjdkkFzx8Pz-70gDNIg&s" , itemName: "MOS Special Submarine", category: "Submarines", price: 3000, discount: null }
];

const Fries = [
    { itemCode: "B1025", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFz-SSLbxrdKXv5c8xXuCHRSkr6R3atOQ8w&s" , itemName: "Steak Fries (Large)", category: "Fries", price: 1200, discount: null },
    { itemCode: "B1026", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzi-b8TGEjkDEo3Ju9xJXBxagaRu4HknBiA&s" , itemName: "Steak Fries (Medium)", category: "Fries", price: 600, discount: null },
    { itemCode: "B1027", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlsHrMlk2E1ErYZsBn1bgRByZCYkUu7J0WYg&s" , itemName: "French Fries (Large)", category: "Fries", price: 800, discount: null },
    { itemCode: "B1028", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgsbd38dROvfq-AtgCbcnJ0IhKrY6_YM5cw&s" , itemName: "French Fries (Medium)", category: "Fries", price: 650, discount: null },
    { itemCode: "B1029", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrzHe_6IztkYkgtD7hqiuXndDNxs2dZ9qWg&s" , itemName: "French Fries (Small)", category: "Fries", price: 450, discount: null },
    { itemCode: "B1030", image:"https://www.simplyrecipes.com/thmb/N6mx33bePy2rL9Nuw6lxzj0Alx4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Sweet-Potato-Fries-METHOD-LEAD-seo-v2-f3f5d040c93d43ecaf15b2a5f0a9844e.jpg" , itemName: "Sweet Potato Fries (Large)", category: "Fries", price: 600, discount: null }
];

const Pastas = [
    { itemCode: "B1031", image:"https://www.kitchensanctuary.com/wp-content/uploads/2018/07/chicken-bacon-mac-and-cheese-square1-600x600.jpg" , itemName: "Chicken n Cheese Pasta", category: "Pastas", price: 1600, discount: 15 },
    { itemCode: "B1032", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eoJJZ_vjqXtBSz133gV3IUmgDXu_o7IZaw&s" , itemName: "Chicken Penne Pasta", category: "Pastas", price: 1700, discount: null },
    { itemCode: "B1033", image:"https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Cheesy_Ground_Turkey_Pasta.jpg" , itemName: "Ground Turkey Pasta Bake", category: "Pastas", price: 2900, discount: 10 },
    { itemCode: "B1034", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLgzMtNHVCsotp2BURSScO_3_DtsVe8af-Q&s" , itemName: "Creamy Shrimp Pasta", category: "Pastas", price: 2000, discount: null },
    { itemCode: "B1035", image:"https://www.cookingclassy.com/wp-content/uploads/2012/11/browned+butter+lemon+pasta3.jpg" , itemName: "Lemon Butter Pasta", category: "Pastas", price: 1950, discount: null },
    { itemCode: "B1036", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0Ckj-empdyGIhLz0OGw0aG7Ni3DATR7wdQ&s" , itemName: "Tagliatelle Pasta", category: "Pastas", price: 2400, discount: 1 },
    { itemCode: "B1037", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugZF_-bEnSlcEC6h96N1thdiwnU_Ao2mrQA&s" , itemName: "Baked Ravioli", category: "Pastas", price: 2000, discount: 1 }
];

const Chickens = [
    { itemCode: "B1038", image:"https://i.ytimg.com/vi/YCNzz1wytkE/maxresdefault.jpg" , itemName: "Fried Chicken (Small)", category: "Chickens", price: 1200, discount: null },
    { itemCode: "B1039", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaTfD53CTJyGOsmLgrxLUPRH7TQe969cL6g&s" , itemName: "Fried Chicken (Regular)", category: "Chickens", price: 2300, discount: 10 },
    { itemCode: "B1040", image:"https://www.allrecipes.com/thmb/CsWr1HzbN0FqzaXTALOKAJflaEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-161469-the-best-ever-chicken-nuggets-DDMFS-2x1-6b97bd972d2c41979751dfa24bbe18da.jpg" , itemName: "Fried Chicken (Large)", category: "Chickens", price: 3100, discount: 5 },
    { itemCode: "B1041", image:"https://www.thespruceeats.com/thmb/gQcfuQ-0hD9pbnqJCZKQf7yDbCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-panfried-southern-chicken-5095624-hero-04-cc13f268291645eaaa1bed22f10f7f67.jpg" , itemName: "Hot Wings (Large)", category: "Chickens", price: 2400, discount: null },
    { itemCode: "B1042", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEcgI5H_1MpzPZjtgBSshCFhg-Jsn0w_0pg&s" , itemName: "Devilled Chicken (Large)", category: "Chickens", price: 900, discount: null },
    { itemCode: "B1043", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdc3g8-WSv2ZMcdc7Fp0p1yfMykss1KB6sQ&s" , itemName: "BBQ Chicken (Regular)", category: "Chickens", price: 2100, discount: null }
];

const Beverages = [
    { itemCode: "B1044", image:"https://thumbs.dreamstime.com/b/pepsi-christmas-edition-novyy-urengoy-russia-may-aluminium-cans-isolated-over-white-background-247726605.jpg" , itemName: "Pepsi (330ml)", category: "Beverages", price: 990, discount: 5 },
    { itemCode: "B1045", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHE5gjOy8UPjG2a2yIMmJE6Wnv10_cN0cThA&s" , itemName: "Coca-Cola (330ml)", category: "Beverages", price: 1230, discount: null },
    { itemCode: "B1046", image:"https://do3ujptrj0wby.cloudfront.net/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/s/p/sprite_drink_can_330ml.jpg" , itemName: "Sprite (330ml)", category: "Beverages", price: 1500, discount: 3 },
    { itemCode: "B1047", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLzXfpqWjWAU49IbgVghHikKPXSE_wIIEqPb5bWG0akDvtTRfx_y26pOeKioRCE8iRYo&usqp=CAU" , itemName: "Mirinda (330ml)", category: "Beverages", price: 850, discount: 7 }
];

// Menu Categories
const menuCategories = {
    Burgers: Burger,
    Submarines: Submarine,
    Fries: Fries,
    Pasta: Pastas,
    Chicken: Chickens,
    Beverages: Beverages
};




// Calculate the final price
function calculateFinalPrice(item) {
    return item.discount ? item.price - (item.price * (item.discount / 100)) : item.price;
}

// DOM Manipulation to display menu items
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    if (!menuContainer) {
        console.error("Menu container not found!");
        return;
    }

    // Clear container
    menuContainer.innerHTML = "";

    // Loop through each category
    for (const [category, items] of Object.entries(menuCategories)) {
        // Add heading
        const heading = document.createElement("h2");
        heading.className = "food-name"; // Add spacing
        heading.textContent = category;
        menuContainer.appendChild(heading);

        // Render each menu item in the category
        const row = document.createElement("div");
        row.className = "row"; // Bootstrap row class

        items.forEach(item => {
            const finalPrice = calculateFinalPrice(item);

            const card = document.createElement("div");
            card.className = "col-md-4 mb-4"; // Bootstrap grid classes
            card.innerHTML = `
                <br>
                <div id="full-food-card" class="card shadow-sm">
                    <img id="bd-placeholder-img" src="${item.image}" width="100%" height="225"
                        class="bd-placeholder-img card-img-top" alt="${item.itemName}" />
                    <div class="card-body">
                        <p class="card-text">${item.itemName} (${item.category})</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="order.html">
                                  <button id="buy-button" onclick="buy()" type="button" class="btn btn-sm btn-outline-success">Buy 🛒</button>
                                </a>
                                <button onclick="addtofav()" id="fav" type="button" class="btn btn-sm btn-outline-danger">Favourites ❤</button>
                            </div>
                            <small class="text-muted">${finalPrice}.00 ${
                item.discount ? `(Dis:${item.discount}%)` : ""
            }</small>
                        </div>
                    </div>
                </div>
                <br><br>
            `;
            row.appendChild(card);
        });

        // Add the row to the container
        menuContainer.appendChild(row);

        // Add 3 <br> tags and an <hr> tag after each section
        menuContainer.innerHTML += `<br><br><br><hr>`;
    }
});











//Move UP


let mybutton = document.getElementById("move-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}














function addtofav(){

    document.getElement("fav").style.backgroundColor = "lightpink";

}
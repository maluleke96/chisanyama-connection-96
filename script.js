let order = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= MENU ================= */
const menu = {
    "chicken dust menu": [
        { name: "Full Chicken meal", price: 120, img: "imgaes/chicken dust/full.JPG", options: { sauce: true, pap: true } },
        { name: "Half Chicken meal", price: 80, img: "imgaes/chicken dust/full.JPG", options: { sauce: true, pap: true } },
        { name: "Quater Chicken meal", price: 50, img: "imgaes/chicken dust/full.JPG", options: { sauce: true, pap: true } }
    ],

    "wors": [
        { name: "Wors Meal", price: 40, img: "imgaes/wors/IMG_9857.JPG", options: { sauce: true, pap: true } }
    ],

    "stews": [
        { name: "full Beef Stew Meal", price: 80, img: "imgaes/stews/IMG_9757.JPG", options: { pap: true } },
        { name: "half Beef Stew Meal", price: 55, img: "imgaes/stews/IMG_9757.JPG", options: { pap: true } },
        { name: "full magulu Meal", price: 80, img: "imgaes/stews/IMG_9770.JPG", options: { pap: true } },
        { name: "half magulu Meal", price: 55, img: "imgaes/stews/IMG_9770.JPG", options: { pap: true } },
        { name: "Chicken Stew Meal", price: 50, img: "imgaes/stews/IMG_9862.JPG", options: { pap: true } }
    ],

    "steak": [
        { name: "steak Meal", price: 55, img: "imgaes/steak/IMG_9865.JPG", options: { sauce: true, pap: true } }
    ],

    "mambo": [
        { name: "Mambo Fish Meal", price: 50, img: "imgaes/mambo fish/IMG_9885.JPG", options: { sauce: true, pap: true } }
    ],

    "chips": [
        { name: "medium Chips", price: 20, img: "imgaes/chips/shoestring.jpg" },
        { name: "large Chips", price: 30, img: "imgaes/chips/shoestring.jpg" }
    ],

    "kota": [
        { name: "R15 Kota", price: 15, img: "imgaes/kota/IMG_9836.JPG" },
        { name: "R20 Kota", price: 20, img: "imgaes/kota/IMG_9836.JPG" },
        { name: "R45 Kota", price: 45, img: "imgaes/kota/IMG_9830.JPG" }
    ],

    "rice": [
        { name: "golden rice meal", price: 45, img: "imgaes/rice menu/WhatsApp Image 2026-03-17 at 9.38.09 PM.jpeg" },
        { name: "Half Golden rice meal", price: 65, img: "imgaes/rice menu/WhatsApp Image 2026-03-17 at 9.38.27 PM (1).jpeg" },
        { name: "wors and rice meal", price: 60, img: "imgaes/rice menu/WhatsApp Image 2026-03-17 at 9.38.08 PM.jpeg" }
    ],

    "special": [
        { name: "Royal meal", price: 50, img: "imgaes/specail meal/IMG_9796.JPG" },
        { name: "Hake meal", price: 40, img: "imgaes/specail meal/IMG_9811.JPG" },
        { name: "happy burger meal", price: 50, img: "imgaes/specail meal/IMG_9803.JPG", options: { sauce: true, pap: true } },
        { name: "King meal", price: 60, img: "imgaes/specail meal/IMG_9828.JPG" },
        { name: "Kota comb meal", price: 45, img: "imgaes/kota/IMG_9830.JPG" },
        { name: "Me4u meal", price: 85, img: "imgaes/specail meal/IMG_9817.JPG" },
        { name: "Woza meal", price: 50, img: "imgaes/specail meal/IMG_9781 - Copy.JPG" }
    ],

    "drinks": [
        { name: "any 2 litre drink", price: 35, img: "imgaes/drinks/WhatsApp Image 2024-10-15 at 00.03.46_c7cff3b1.jpg" },
        { name: "any can drink", price: 20, img: "imgaes/drinks/OIP (2).webp" },
        { name: "any my size drink", price: 15, img: "imgaes/drinks/10631548EA-checkers515Wx515H.png" }
    ],

    "fried": [
        { name: "Fried Chicken meal", price: 45, img: "imgaes/fried chicken/IMG_9723.JPG" }
    ],

    "sides": [
        { name: "Large pap", price: 20, img: "imgaes/sides/IMG_9870.JPG" },
        { name: "Medium pap", price: 15, img: "imgaes/sides/IMG_9870.JPG" },
        { name: "Russian", price: 15, img: "imgaes/sides/WhatsApp Image 2024-08-23 at 10.04.01_d05e0250.jpg" },
        { name: "Chakalaka", price: 15, img: "imgaes/sides/WhatsApp Image 2024-08-23 at 10.04.03_74545c4d.jpg" },
        { name: "Cabbage", price: 10, img: "imgaes/sides/WhatsApp Image 2024-08-23 at 10.04.03_569172ec - Copy.jpg" }
    ],

    "fish": [
        { name: "Fish", price: 25, img: "imgaes/fish/WhatsApp Image 2026-01-24 at 6.56.40 PM.jpeg" }
    ]
};

/* ================= LOAD CATEGORY ================= */
function loadCategory(category) {

    const container = document.getElementById("menuItems");
    const items = menu[category];

    if (!container) return;

    if (!items) {
        container.innerHTML = "<p>No items found</p>";
        return;
    }

    container.innerHTML = "";

    items.forEach((item, index) => {

        const id = `${category}-${index}`;
        const opt = item.options || {};

        let optionsHTML = "";

        if (opt.sauce) {
            optionsHTML += `
                <div class="option-box">
                    <select id="sauce-${id}" class="option-select">
                        <option value="">Select sauce</option>
                        <option value="BBQ">BBQ</option>
                        <option value="Mild">Mild</option>
                        <option value="Hot">Hot</option>
                        <option value="No sauce">No sauce</option>
                    </select>
                </div>
            `;
        }

        if (opt.pap) {
            optionsHTML += `
                <div class="option-box">
                    <select id="pap-${id}" class="option-select">
                        <option value="">Select pap</option>
                        <option value="With pap">With pap</option>
                        <option value="Without pap">Without pap (-R10)</option>
                    </select>
                </div>
            `;
        }

        container.innerHTML += `
            <div class="menu-item">
                <img src="${item.img}">
                <h3>${item.name}</h3>
                <p>R${item.price}</p>

                ${optionsHTML}

                <button onclick="addToCart('${category}', ${index})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

/* ================= ADD TO CART ================= */
function addToCart(category, index) {

    const item = menu[category][index];
    const id = `${category}-${index}`;
    const opt = item.options || {};

    let sauce = "N/A";
    let pap = "N/A";

    if (opt.sauce) {
        const s = document.getElementById(`sauce-${id}`);
        if (!s || !s.value) return alert("🔥 Select sauce");
        sauce = s.value;
    }

    if (opt.pap) {
        const p = document.getElementById(`pap-${id}`);
        if (!p || !p.value) return alert("🍽️ Select pap");
        pap = p.value;
    }

    let price = Number(item.price);

    if (pap === "Without pap") {
        price -= 10;
    }

    let existing = order.find(i =>
        i.name === item.name &&
        i.sauce === sauce &&
        i.pap === pap
    );

    if (existing) {
        existing.qty++;
    } else {
        order.push({
            name: item.name,
            price: price,
            qty: 1,
            sauce: sauce,
            pap: pap
        });
    }

    saveCart();
    updateCart();
}

/* ================= SAVE ================= */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(order));
}

/* ================= UPDATE CART ================= */
function updateCart() {

    let total = 0;
    let count = 0;

    order.forEach(i => {
        total += i.price * i.qty;
        count += i.qty;
    });

    const t = document.getElementById("cartTotal");
    const c = document.getElementById("cartCount");

    if (t) t.innerText = total;
    if (c) c.innerText = count;
}

/* ================= SCROLL ================= */
function scrollCategories(val) {
    document.getElementById("categoriesScroll")
        .scrollBy({ left: val, behavior: "smooth" });
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {

    updateCart();

    document.querySelectorAll(".category").forEach(btn => {
        btn.addEventListener("click", () => {

            document.querySelectorAll(".category")
                .forEach(c => c.classList.remove("active"));

            btn.classList.add("active");

            loadCategory(btn.dataset.category);
        });
    });

    const first = document.querySelector(".category");
    if (first) first.click();

    document.getElementById("cartBtn").onclick = () => {
        window.location.href = "checkout.html";
    };
});

/* ================= JOBS ================= */
function openJobs() {
    window.location.href = "job.html";
}
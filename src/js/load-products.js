// window.onload = function() {
//     fetch("products.xml")
//         .then(response => response.text())
//         .then(data => {
//             const parser = new DOMParser();
//             const xml = parser.parseFromString(data, "application/xml");
//             const products = xml.querySelectorAll("product");
//             const container = document.getElementById("product-list");

//             products.forEach(product => {
//                 const img = product.querySelector("img").textContent.trim();
//                 const title = product.querySelector("title").textContent.trim();
//                 const price = product.querySelector("price").textContent.trim();
//                 const oldprice = product.querySelector("oldprice")?.textContent.trim() || "";

//                 const div = document.createElement("div");
//                 div.className = "col-lg-3 col-md-6";
//                 div.innerHTML = `
//                     <div class="single-product">
//                         <img class="img-fluid" src="${img}" alt="">
//                         <div class="product-details">
//                             <h6>${title}</h6>
//                             <div class="price">
//                                 <h6>${price}</h6>
//                                 ${oldprice ? `<h6 class="l-through">${oldprice}</h6>` : ""}
//                             </div>
//                         </div>
//                     </div>`;
//                 container.appendChild(div);
//             });
//         })
//         .catch(err => console.error("Erro carregando XML:", err));
// };


// In load-products.js or within <script> tags
document.addEventListener('DOMContentLoaded', function() {
    fetch("products.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const products = xml.querySelectorAll("product");
            const container = document.getElementById("product-list");

            products.forEach(product => {
                const img = product.querySelector("img").textContent.trim();
                const title = product.querySelector("title").textContent.trim();
                const price = product.querySelector("price").textContent.trim();
                const oldprice = product.querySelector("oldprice")?.textContent.trim() || "";
                const link = product.querySelector("link").textContent.trim();

                const div = document.createElement("div");
                div.className = "col-lg-3 col-md-6";
                div.innerHTML =
                `<div class="single-product">
                    <a href="${link}" target="_blank" rel="nofollow">
                        <img class="img-fluid" src="${img}" alt="">
                        <div class="product-details">
                            <h6>${title}</h6>
                            <div class="price">
                                <h6>${price}</h6>
                                ${oldprice ? `<h6 class="l-through">${oldprice}</h6>` : ""}
                            </div>
                        </div>
                    </a>
                </div>`;
                container.appendChild(div);
            });
        })
        .catch(err => console.error("Error loading XML:", err));
});

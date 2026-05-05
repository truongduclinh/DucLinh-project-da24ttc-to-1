const products = [
    {id:"01", name:"Bóng đá loại A", price:290, image:"../assets/images/bongloaia.JPG", productLink:"product-detail.html"},
    {id:"02", name:"Bóng đá loại B", price:350, image:"../assets/images/bongloaib.JPG", productLink:"product-detail.html"},
    {id:"03", name:"Bóng chuyền loại A", price:320, image:"../assets/images/bongchuyenA.JPG", productLink:"product-detail.html"},
    {id:"04", name:"Bóng chuyền loại B", price:380, image:"../assets/images/bongchuyenB.JPG", productLink:"product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class","product-item col m-2");

    const productImage = document.createElement("div");
    productImage.setAttribute("class","product-image h-75 ratio ratio-1x1 overflow-hidden");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", image);
    Image.setAttribute("class", "img-fluid object-fit-cover");

    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info h-25 text-center");

    const productName = document.createElement("p");
    productName.appendChild(document.createTextNode(name));

    const productPrice = document.createElement("p");
    productPrice.appendChild(document.createTextNode(price + "k"));

    const productLink = document.createElement("a");
    productLink.appendChild(document.createTextNode("Xem chi tiết"));
    productLink.setAttribute("href", hyperLink);

    // ===== THÊM SỐ LƯỢNG =====
    const quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.setAttribute("class", "form-control w-50 mx-auto mb-2");

    // ===== THÊM NÚT MUA =====
    const buyButton = document.createElement("button");
    buyButton.innerText = "Mua";
    buyButton.setAttribute("class", "btn btn-primary btn-sm");

    buyButton.onclick = function() {
        alert("Bạn đã mua " + quantityInput.value + " sản phẩm " + name);
    };

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);
    productInfo.appendChild(quantityInput);
    productInfo.appendChild(buyButton);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}

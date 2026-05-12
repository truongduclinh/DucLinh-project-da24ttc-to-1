const products = [
    {id:"01", name:"Bóng đá loại A", price:290, image:"../assets/images/bongloaia.JPG", description:"Bóng đá loại A chất liệu cao cấp, độ nảy tốt, phù hợp tập luyện và thi đấu Chất liệu PU cao cấp, đường kính 22cm, trọng lượng 420g.", productLink:"detail.html"},
    {id:"02", name:"Bóng đá loại B", price:350, image:"../assets/images/bongloaib.JPG", description:"Bóng đá loại B thiết kế bền đẹp, kiểm soát tốt và phù hợp cho mọi cấp độ Chất liệu da tổng hợp, đường kính 22cm, phù hợp sân cỏ nhân tạo.", productLink:"detail.html"},
    {id:"03", name:"Bóng chuyền loại A", price:320, image:"../assets/images/bongchuyena.JPG", description:"Bóng chuyền loại A êm tay, độ bền cao, dành cho tập luyện và thi đấu chuyên nghiệp Chất liệu composite, đường kính 21cm, trọng lượng 260g.", productLink:"detail.html"},
    {id:"04", name:"Bóng chuyền loại B", price:380, image:"../assets/images/bongchuyenb.JPG", description:"Bóng chuyền loại B chống mài mòn tốt, thiết kế đẹp mắt và bám tay tốt Chất liệu microfiber, đường kính 21cm, phù hợp sân trong nhà.", productLink:"detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col");

    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover");

    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center p-3 d-flex flex-column align-items-center gap-2");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name mb-1 fw-bold");
    productName.appendChild(document.createTextNode(name));

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price mb-2 text-danger fw-semibold");
    productPrice.appendChild(document.createTextNode(price + "k"));

    const quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.setAttribute("class", "form-control w-50 mx-auto mb-2 text-center");

    const buyButton = document.createElement("button");
    buyButton.innerText = "Mua";
    buyButton.setAttribute("class", "btn buy-btn btn-primary btn-sm w-100");

    buyButton.onclick = function() {
        alert("Bạn đã mua " + quantityInput.value + " sản phẩm " + name);
    };

    const productLink = document.createElement("a");
    productLink.appendChild(document.createTextNode("Xem chi tiết"));
    productLink.setAttribute("href", `${hyperLink}?id=${encodeURIComponent(id)}`);
    productLink.setAttribute("class", "btn btn-outline-secondary btn-sm w-100");

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(quantityInput);
    productInfo.appendChild(buyButton);
    productInfo.appendChild(productLink);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}

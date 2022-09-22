let send = JSON.parse(localStorage.getItem("send"));

let orderImg = JSON.parse(localStorage.getItem("orderImg"));
// console.log(makeup)

let appendData = (data, inner) => {
    let container = document.getElementById(inner);
    container.innerHTML = null;
    data.forEach(function (el) {
        let div = document.createElement("div");

        let div2 = document.createElement("div");

        let div3 = document.createElement("div");

        let div4 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("h2");
        name.innerText = el.name;

        let detail = document.createElement("p");
        detail.innerText = el.details

        let latest = document.createElement("h4");
        latest.innerText = "Get Latest Price";
        latest.setAttribute("data-bs-toggle", "modal");
        latest.setAttribute("data-bs-target", "#exampleModal");
        latest.addEventListener("click", function () {
            storeElement(el);
          });
          latest.style.cursor = "pointer"

        let button = document.createElement("button");
        button.innerText = "Yes, I am Interested!";
        button.setAttribute("data-bs-toggle", "modal");
        button.setAttribute("data-bs-target", "#exampleModal");
        button.addEventListener("click", function () {
            storeElement(el);
          });

        let interest = document.createElement("p")
        interest.innerText = "Interested in this product?";

        let get = document.createElement("h6");
        get.innerText = "Get Best Quote";
        get.setAttribute("data-bs-toggle", "modal");
        get.setAttribute("data-bs-target", "#exampleModal");
        get.addEventListener("click", function () {
            storeElement(el);
          });
          get.style.cursor = "pointer"

        div2.append(image);

        div4.append(div2, interest, get)

        div3.append(name, latest, detail, button);

        div.append(div4, div3);

        container.append(div);
    })
}

appendData(send, "right_inner")

let appendDataUpper = (data, inner) => {
    let container = document.getElementById(inner);

    data.forEach(function (el) {
        let div = document.createElement("div");

        let div2 = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = "Ask Price"
        price.setAttribute("class", "priceapp");

        div2.append(img);

        div.append(div2, name, price);


        container.append(div);
    })
}

appendDataUpper(send, "upper_right");

import { bsorder } from "../components/bsorder.js";

document.getElementById("bootstrap").innerHTML = bsorder();

// on clicking button or anchor tag passing  particular element as parameter;
function storeElement(element) {
    localStorage.setItem("orderImg",JSON.stringify(element));
  let obj = {
    image: element.image,
    name: element.name,
  };

  let image = document.querySelector(".image_img");
  image.innerHTML = null;
  let order_img = document.createElement("img");
  order_img.setAttribute("src", obj.image);

  let order_name = document.createElement("p");
  order_name.textContent = obj.name;

  image.append(order_img, order_name);

  // for modal 2
  let image1 = document.querySelector(".image1_img");
  image1.innerHTML = null;
  let order1_img = document.createElement("img");
  order1_img.setAttribute("src", obj.image);

  let order1_name = document.createElement("p");
  order1_name.textContent = obj.name;

  image1.append(order1_img, order1_name);

  // for modal 3
  let image2 = document.querySelector(".image2_img");
  image2.innerHTML = null;
  let order2_img = document.createElement("img");
  order2_img.setAttribute("src", obj.image);

  let order2_name = document.createElement("p");
  order2_name.textContent = obj.name;

  image2.append(order2_img, order2_name);
}
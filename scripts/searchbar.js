let id;

async function getData() {
  let query = document.getElementById("searchProduct").value;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '05bea23c7bmsh6430f34a47559fep1db096jsna3dd413b8d1f',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
    }
  };

  let res = await fetch(`https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=${query}&country=IN`, options)

  let data = await res.json();

  console.log(data.docs);

  // append(data.results);

  return data.docs
}



function append(data) {
  let container = document.getElementById("results");
  container.innerHTML = null
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      proPage(el);
    })
    div.style.cursor = "pointer";


    let image = document.createElement("img");
    image.src = el.product_main_image_url

    let div2 = document.createElement("div");

    let name = document.createElement('h6');
    name.innerText = el.product_title;

    let rating = document.createElement("h5");
    rating.innerText = `⭐ ${el.evaluate_rate}`;

    div2.append(name, rating)

    div.append(image, div2);

    container.append(div);
  })
}

async function main() {
  let data = await getData();

  append(data);
}

function debouncing(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

let proPage = (el) => {
  localStorage.setItem("proData", JSON.stringify(el));
}
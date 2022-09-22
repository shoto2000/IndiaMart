let appendData = (data, inner) => {
    let container = document.getElementById(inner);

    data.forEach(function (el) {
        let div = document.createElement("div");

        let div2 = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("h5");
        name.innerText = el.name;

        div2.append(image);

        div.append(div2, name);

        container.append(div);
    })
}

appendData(makeup, "innerdiv1");
appendData(lipstick, "innerdiv2");
appendData(lipsProduct, "innerdiv3");
appendData(bleach, "innerdiv4");
appendData(scrubs, "innerdiv5");
appendData(eyespro, "innerdiv6");
appendData(lipCare, "innerdiv7");
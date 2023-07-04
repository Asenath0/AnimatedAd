window.onload = () => {
    const offers = [
        {
            city: "Kair",
            country: "Egypt",
            price: "399",
            currency: "USD",
            priceText: "from",
            imgURL: './egypt.png'
        },
        {
            city: "Ankara",
            country: "Turkey",
            price: "295",
            currency: "USD",
            priceText: "from",
            imgURL: "./Ankara.jpg"
        },
        {
            city: "Lyon",
            country: "France",
            price: "350",
            currency: "USD",
            priceText: "from",
            imgURL: "./Lyon.png"
        }
    ]


    document.querySelector(".bg-photo-1").style.backgroundImage =
        "url(" + offers[0].imgURL + ")";
    document.querySelector(".bg-photo-2").style.backgroundImage =
        "url(" + offers[1].imgURL + ")";
    document.querySelector(".bg-photo-3").style.backgroundImage =
        "url(" + offers[2].imgURL + ")";

    const countries = Array.from(document.querySelectorAll(".country-name"));

    countries.map((countryName, id) => {
        countryName.innerHTML = offers[id].country;
        if (countryName.clientWidth > 228) {
            resizeToFit(countryName, 228, 17);
        }
    });

    const cities = Array.from(document.querySelectorAll(".city-name"));

    cities.map((cityName, id) => {
        cityName.innerHTML = offers[id].city;
        if (cityName.clientWidth > 228) {
            resizeToFit(cityName, 228, 39);
        }
    });

    const prices = Array.from(document.querySelectorAll(".price"));

    prices.map((priceBox, id) => {
        priceBox.innerHTML = offers[id].price + " " + offers[id].currency;
    });
}
function resizeToFit(element, width, fontSize) {
  while (element.clientWidth > width) {
    fontSize -= 1;
    element.style.fontSize = fontSize + "px";
  }
}

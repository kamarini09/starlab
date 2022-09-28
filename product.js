

const url = `https://kea22w-6c02.restdb.io/rest/starlab`;
const options = {
    headers: {
         "x-apikey": "6331a2f932330102d591d1ed"   }
}
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
console.log(_id);

//fetch the data
   fetch(url)
      .then((res) => res.json())
      .then((data)=> showProduct(data));

//populate the page

function showProduct(product) {
    console.log(product);
    document.querySelector(".breadcrumbs .brand").textContent = product.name;

    document.querySelector(".breadcrumbs .productname").textContent = product.description;
    document.querySelector("img .productimage").src= `https://kamarini.dk/photosstarlab/bikini${product.id}.jpg
    



    document.querySelector("img.productimage").alt= product.productdisplayname;
}
const url= "https://kea22w-6c02.restdb.io/rest/starlab?q={%22_id%22:%22632dc3ec5057d14f0003c867%22}"  
const options = {
      headers: {
           "x-apikey": "6331a2f932330102d591d1ed"   }
}

//fetch the data 
fetch(url, options)
    .then((response) => {
       if(!response.ok) {
           throw Error(response.statusText);
       }
       return response.json();
    })

    .then((data) => {
        // console.log(data);
        showProduct(data);
    })

    .catch((e) => {
        console.error("an error occured: ", e.message);
    });

    //populate the data 
    function showProduct(product) {
        console.log(product);
        document.querySelector(".breadcrumbs .brands").textContent = product.subcategory;
        document.querySelector(" .productname").textContent = product.name;
        document.querySelector(".productname").textContent = product.name;
        document.querySelector("img.productimage").src = product.img_url;
        document.querySelector("img.productimage").alt = product.name;
        

    }
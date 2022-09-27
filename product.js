const url= "https://kea22w-6c02.restdb.io/rest/starlab"  
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
    function showProduct(product){
        console.log(product);
        document.querySelector(".breadcrumbs .brand").textContent=product.subcategory;
        document.querySelector(".breadcrumbs .brand").textContent=product.name;
        document.querySelector("img.productimage").src=product.img_url;
        document.querySelector("img.productimage").alt=product.name;
    }
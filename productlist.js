const url= "https://kea22w-6c02.restdb.io/rest/starlab" ;
const options = {
      headers: {
           "x-apikey": "6331a2f932330102d591d1ed"   }
}

fetch(url, options)
    .then((response) => {
       if(!response.ok) {
           throw Error(response.statusText);
       }
       return response.json();
    })

    .then((data) => {
         //console.log(data);
        handleProductList(data);
    })

    .catch((e) => {
        console.error("an error occured: ", e.message);
    });


    function handleProductList(data){
        console.log(data);
       data.forEach(showProduct);
    }



    function showProduct(product){
        console.log(product);
        //grab the template
        const template = document.querySelector("#smallProductTemplate").content;
    
        //clone it
        const copy = template.cloneNode(true);
        //change content
        copy.querySelector(".name").textContent = `${product.name}`;
        copy.querySelector("a").href = `./product.html?id=${product._id}`;
        copy.querySelector("img").src = `${product.img_url}`;
        copy.querySelector("img").alt = `${product.name}`;
        copy.querySelector(".price").textContent = `${product.price}`;
        copy.querySelector(".description").textContent = `${product.description}`;
        copy.querySelector(".size").textContent = `${product.size}`;


        //grab parent
        const parent = document.querySelector("main");
        //append it
        parent.appendChild(copy);
    }
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
{/* 
        
       
        
        <p class="bottom"></p>
        <a href="product.html?id=1530"
          >Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            class="bi bi-chevron-double-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a> */}


    function showProduct(product){
        console.log(product);
        //grab the template
        const template = document.querySelector("#smallProductTemplate").content;
    
        //clone it
        const copy = template.cloneNode(true);
        //change content
        copy.querySelector("img.image").src = `${product.img_url}`;
        copy.querySelector("img.image").alt = `${product.name}`;

        copy.querySelector(".bikininame").textContent = `${product.name}`;
        copy.querySelector(".price").textContent = `${product.price}`;
        copy.querySelector(".description").textContent = `${product.description}`;
        copy.querySelector(".cup").textContent = `${product.size}`;

        copy.querySelector("a").href = `./product.html?id=${product._id}`;
        
       
        
       


        //grab parent
        const parent = document.querySelector("main");
        //append it
        parent.appendChild(copy);
    }
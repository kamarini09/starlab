const url= 'https://kea22w-6c02.restdb.io/rest/starlab?q={"category":"Rent"}' 
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
        // console.log(data);
        handleData(data);
    })

    .catch((e) => {
        console.error("an error occured: ", e.message);
    });


    function handleData(starlab){
      starlab.forEach(bikini => {
            console.log(bikini);
            // 1 make a template
            // 2 grab it 
            const template = document.querySelector("template").content;
            // 3 clone it
            const clone = template.cloneNode(true);
            // 4 populate with data
            clone.querySelector(".grid .price").textContent= bikini.price;

            
            clone.querySelector("img").src = bikini.img_url;
            clone.querySelector(".grid .bikininame").textContent= bikini.name;
            clone.querySelector(".grid .description").textContent= bikini.description;
            clone.querySelector(".grid .cup").textContent= bikini.size;
         
            

           
         
              //5 append it to the DOM

            const mainEl = document.querySelector("main");
            mainEl.appendChild(clone);
          

        });

    }
    // for (let i = 0; i < 20; i++) {
    //     let div = document.createElement('div')
    //     document.body.appendChild(div)
    //     div.textContent = i
    //   }
    // function getDepthValue() {
    //     let clone;
    //     if (typeof clone === "rent") return clone;
     
       
    //     } 

    // if (category.textContent=="rent") 
    // return 1; 
    // else null; 


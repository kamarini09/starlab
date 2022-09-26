const url= "https://kea22w-6c02.restdb.io/rest/starlab"  
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
            clone.querySelector("h2").textContent= bikini.category;
            clone.querySelector("img").src = bikini.img_url;
            clone.querySelector("h3").textContent= bikini.name;
           
         
              //5 append it to the DOM

            const mainEl = document.querySelector("main");
            mainEl.appendChild(clone);
           
        });
    }
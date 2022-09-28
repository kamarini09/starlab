//fetch the content
const url= `https://kea22w-6c02.restdb.io/rest/starlab` ;
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
        goThroughEach(data);
    })

    .catch((e) => {
        console.error("an error occured: ", e.message);
    });

//foreach
function goThroughEach(data){
    // console.log(data);
    data.forEach(showCategory)

}

//that function

function showCategory(oneCategory){
    console.log(oneCategory);
    //grab the template
    const template = document.querySelector("template").content;

    //clone it
    const myCopy = template.cloneNode(true);

    //change content
    myCopy.querySelector("a").textContent = oneCategory.category;
    myCopy.querySelector("a").href = `productlist.html?id={"category" : "${oneCategory.category}"}`;
    //find the parent
   const parent = document.querySelector("#thisCategory ol ");
    //append it
    parent.appendChild(myCopy);
}
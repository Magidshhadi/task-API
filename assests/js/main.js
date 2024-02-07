async function getData(){
const response= await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
const pizza=response.data.recipes;

const result = pizza.map(function(ele) {
   
    return `
         <class name="piz">
         <h2>${ele.title}</h2>
         
         <a href="details.html?id=${ele.recipe_id}" ><img src="${ele.image_url}" /></a>
         </class>    
    `
}).join('')
document.querySelector('.pizza').innerHTML = result;
}

getData();
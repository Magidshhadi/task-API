async function getData(){
    const url = new URLSearchParams(window.location.search);
    const id= url.get('id');
    console.log(id);
    const response= await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    const pizza=response.data.recipe;
    document.querySelector('.header').textContent=pizza.title ;
    const int= pizza.ingredients;
    ingredients=int.map(function(ele) {
        return `
        <ul>
        <li>${ele}</li>
        </ul>
        
        `
    }).join('');
    document.querySelector('.details').innerHTML =ingredients;
}
getData();
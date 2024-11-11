const app_id = '410b085d';
const app_key = '83fdb0b52a55bd9f0758746791f9e26d';

document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('query').value;
    searchRecipes(query);
});

async function searchRecipes(query) {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
        const data = await response.json();
        console.log(data);
        displayResults(data.hits);
    } catch (error) {
        console.error('Error:', error);
    }
}


function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const recipe = result.recipe;
        const recipeElem = document.createElement('div');
        recipeElem.className = 'recipe';
        recipeElem.innerHTML = `
            <h2>${recipe.label}</h2>
            <img src="${recipe.image}" alt="${recipe.label}" />
            <p>Source: ${recipe.source}</p>
         
           
           
            <a class="view-recipe-btn" href="${recipe.url}" target="_blank">View Recipe</a>
        `;
        resultsContainer.appendChild(recipeElem);
    });
}

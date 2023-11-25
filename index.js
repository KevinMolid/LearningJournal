import { articlesArr } from '/articles.js'

// Section elements
const articlesSection = document.getElementById('articles-section')

articlesSection.innerHTML = articlesArr.map(function(article){
    return `
    <article>
        <img class="article-img" src="images/${article.img}">
        <small class="article-date">${article.date}</small>
        <h2 class="article-title">${article.title}</h2>
        <p class="article-txt">${article.ingress}</p>
    </article>
    `
}).join('')



articlesSection.innerHTML += `<button class="view-more-btn">View More</button>`
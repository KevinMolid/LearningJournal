const articles = [
    {   
        title: 'My journey as a Scrimba student.',
        img: 'ComputerBg.jpg',
        date: 'NOVEMBER 25, 2023',
        ingress: `After several months of learning in the Frontend Developer Career Path,
        I've made the big jump over to the Bootcamp to get expert code reviews of
        my Solo Projects projects and meet like-minded peers.`,
        content: `
            <h4>How I stay committed to learning</h4>

            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, 
            then try to create simple projects using what I learned or work new techniques into existing 
            projects.</p>
        
            <p>While that was fun, I felt like it would be helpful to share what I was learning and most 
            things about my journey with the world.</p>
        
            <h4>How I got started</h4>
        
            <p>I started simple and gradually grew my learning journal site. I would take notes about what 
            I was learning. After each learning session, I'd use my notes to not only reflect on what I 
            learned but also write short summaries of what I learned using my own words.</p>
        
            <p>That helped me grok what I was learning, and I realized that posting my learning summaries
            was also helping others learn and stay motivated.</p>
        `
    }
]

const articlesSection = document.getElementById('articles-section')

for (let i=0; i < 10; i++){
    articlesSection.innerHTML += `
    <article>
        <img class="article-img" src="images/Mac.jpg">
        <small class="article-date">NOVEMBER 25, 2023</small>
        <h2 class="article-title">Blog one</h2>
        <p class="article-txt">I'm excited to start a new learning journey as a Scrimba Bootcamp
            student! After several months of learning in the Frontend Developer Career Path.</p>
    </article>
    `
}


articlesSection.innerHTML += `<button class="view-more-btn">View More</button>`
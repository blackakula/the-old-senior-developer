// Blog posts data
const posts = [
    {
        id: 1,
        title: 'The Art of Saying No',
        date: 'June 5, 2026',
        excerpt: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, every scope expansion. I thought it showed enthusiasm and dedication.',
        content: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, every scope expansion. I thought it showed enthusiasm and dedication.\n\nWhat I actually did was dilute my focus, burn myself out, and deliver mediocre results across too many things instead of excellence in a few.\n\nNow, after decades in this field, I understand that saying no is saying yes to quality. It\'s protecting your team\'s capacity. It\'s being honest about constraints.\n\nThe best engineers aren\'t the busiest—they\'re the most effective.'
    },
    {
        id: 2,
        title: 'Code Reviews: Teaching Moments',
        date: 'May 28, 2026',
        excerpt: 'Code reviews aren\'t just about finding bugs. They\'re not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding that emerges.',
        content: 'Code reviews aren\'t just about finding bugs. They\'re not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding that emerges.\n\nWhen I review junior developers\' code, I\'m not looking to criticize. I\'m looking to understand their reasoning, to share patterns I\'ve seen work well, and to learn about fresh perspectives they might bring.\n\nA good code review comment asks questions. It helps the author understand why a change matters, not just what to change.\n\nThe best teams I\'ve worked in treated code reviews as mentorship sessions, not gatekeeping.'
    },
    {
        id: 3,
        title: 'Simple > Clever',
        date: 'May 15, 2026',
        excerpt: 'Early in my career, I loved writing clever code. One-liners that did magical things. Patterns that showed off my knowledge of the language. Looking back, most of that code was a maintenance nightmare.',
        content: 'Early in my career, I loved writing clever code. One-liners that did magical things. Patterns that showed off my knowledge of the language. Looking back, most of that code was a maintenance nightmare.\n\nThe best code I\'ve written in recent years is almost boring. It\'s readable. It\'s straightforward. Someone who\'s never seen it before can understand it quickly.\n\nThis is a hard lesson to learn because at first it feels like settling. But then you realize: code that six months from now you can understand without digging through documentation is more valuable than code that saves three lines.\n\nWrite for the person reading your code, not for yourself.'
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    setupNavigation();
});

// Render blog posts
function renderPosts() {
    const container = document.getElementById('posts-container');
    
    posts.forEach(post => {
        const postCard = document.createElement('article');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <div class="post-date">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" onclick="viewPost(${post.id}); return false;">Read more →</a>
        `;
        container.appendChild(postCard);
    });
}

// View full post (modal or expand)
function viewPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    // Simple implementation: alert with full content
    // You can enhance this with a modal popup
    alert(`${post.title}\n\n${post.date}\n\n${post.content}`);
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const section = this.getAttribute('data-section');
            showSection(section);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Show section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

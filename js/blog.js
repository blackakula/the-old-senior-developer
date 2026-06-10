// Blog posts data
const posts = [
    {
        id: 1,
        title: 'The Art of Saying No',
        date: 'June 5, 2026',
        excerpt: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, everything. It felt good to be needed, to be the person who could solve problems. But over time, I realized that saying yes to everything means saying no to the things that matter most.',
        content: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, everything. It felt good to be needed, to be the person who could solve problems. But over time, I realized that saying yes to everything means saying no to the things that matter most.'
    },
    {
        id: 2,
        title: 'Code Reviews: Teaching Moments',
        date: 'May 28, 2026',
        excerpt: 'Code reviews aren\'t just about finding bugs. They\'re not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding that comes from examining code together. I\'ve learned more from thoughtful code reviews than from almost any other practice in my career.',
        content: 'Code reviews aren\'t just about finding bugs. They\'re not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding that comes from examining code together. I\'ve learned more from thoughtful code reviews than from almost any other practice in my career.'
    },
    {
        id: 3,
        title: 'Simple > Clever',
        date: 'May 15, 2026',
        excerpt: 'Early in my career, I loved writing clever code. One-liners that did magical things. Patterns that showed off my knowledge of the language. Looking back, most of that code was a mistake. Simple, readable code is more valuable than clever code. It\'s easier to maintain, easier to debug, and easier for others to understand.',
        content: 'Early in my career, I loved writing clever code. One-liners that did magical things. Patterns that showed off my knowledge of the language. Looking back, most of that code was a mistake. Simple, readable code is more valuable than clever code. It\'s easier to maintain, easier to debug, and easier for others to understand.'
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
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

// View full post - display on page
function viewPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    // Create a modal or expand the post
    alert(`${post.title}\n\n${post.date}\n\n${post.content}`);
}

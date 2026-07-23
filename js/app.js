// Blog posts data
const posts = [
    {
        id: 1,
        title: 'The Art of Saying No',
        date: 'June 5, 2026',
        excerpt: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, every meeting.',
        content: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, every meeting. I thought saying no would make me look lazy or uncommitted. I was wrong.\n\nThe truth is, saying yes to everything means you\'re really saying no to the things that matter. You\'re saying no to quality. You\'re saying no to sustainability. You\'re saying no to your own well-being.\n\nI learned this lesson the hard way, after years of burnout and watching projects suffer because they were unfocused. When you say yes to every request, you dilute your effort across too many things. Nothing gets your full attention. Nothing gets done well.\n\nNow, I\'m selective. I say no to things that don\'t align with my priorities or values. I say no to meetings that don\'t need me. I say no to features that add complexity without clear benefit. And here\'s the thing—people respect it more. They know that when I say yes, I mean it. They know I\'ll deliver.\n\nThe art of saying no isn\'t about being difficult. It\'s about being honest about your capacity and respectful of your commitments. It\'s about protecting quality. It\'s about sustainability.'
    },
    {
        id: 2,
        title: 'Code Reviews: Teaching Moments',
        date: 'May 28, 2026',
        excerpt: 'Code reviews aren\'t just about finding bugs. They\'re not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding.',
        content: 'Code reviews aren\'t just about finding bugs. They\'re not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding that emerges.\n\nI\'ve seen code reviews done wrong—as gatekeeping exercises where senior developers shoot down junior developers\' work. I\'ve also seen them done beautifully—as conversations where both parties learn something.\n\nThe difference is mindset. A good code review starts with curiosity, not judgment. "Why did you choose this approach?" is a different question than "This is wrong." One invites explanation and dialogue. The other invites defensiveness.\n\nWhen I review code, I\'m looking for opportunities to help the author grow. If I see a pattern they\'ve used that could be simplified, I\'ll ask them if they\'ve considered another approach. If I see code that works but is hard to understand, I\'ll ask them to explain their thinking—sometimes they\'ll realize it needs clarification.\n\nThe best code reviews I\'ve been part of end with both parties understanding the problem better than when they started. The author learns something about the craft. The reviewer learns something about how someone else thinks. And the team ends up with better code and better developers.'
    },
    {
        id: 3,
        title: 'Simple > Clever',
        date: 'May 15, 2026',
        excerpt: 'Early in my career, I loved writing clever code. Looking back, most of that code was a mistake.',
        content: 'Early in my career, I loved writing clever code. One-liners that did magical things. Patterns that showed off my knowledge of the language. Recursive algorithms instead of loops.\n\nLooking back, most of that code was a mistake.\n\nNot because it didn\'t work. It worked fine. But because it was expensive—expensive to maintain, expensive to modify, expensive to teach to new team members. Clever code is code that only the author understands.\n\nI learned this lesson when I had to debug my own code from six months earlier and couldn\'t figure out what I was thinking. I learned it again when I had to teach new developers to maintain code I\'d written.\n\nNow, I optimize for clarity. I write code that a junior developer could understand. I use explicit variable names. I break complex logic into smaller, understandable functions. I write comments not for what the code does—that\'s obvious—but for why it does it that way.\n\nThe best code I\'ve ever written is the code that others can easily understand and modify. It\'s not clever. It\'s simple. It solves the problem. It\'s easy to maintain.'
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    setupNavigation();
    loadPostDetail();
});

// Render blog posts
function renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;
    
    posts.forEach(post => {
        const postCard = document.createElement('article');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <div class="post-date">${post.date}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="read-more">Read more →</a>
        `;
        container.appendChild(postCard);
    });
}

// Get post by ID
function getPostById(postId) {
    return posts.find(p => p.id === parseInt(postId));
}

// Load post details on post.html page
function loadPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) return; // Not on post detail page
    
    const post = getPostById(postId);
    if (post) {
        document.title = `${post.title} - The Old Senior Developer`;
        const postTitle = document.getElementById('post-title');
        const postDate = document.getElementById('post-date');
        const postContent = document.getElementById('post-content');
        
        if (postTitle) postTitle.textContent = post.title;
        if (postDate) postDate.textContent = post.date;
        if (postContent) postContent.textContent = post.content;
    }
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
    
    // Set active link based on current page
    setActiveNavLink();
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        let isActive = false;
        
        if (href === './' || href === 'index.html') {
            isActive = currentPath.endsWith('/') || currentPath.includes('index');
        } else if (href === 'blog.html') {
            isActive = currentPath.includes('blog') && !currentPath.includes('post');
        } else if (href === 'about.html') {
            isActive = currentPath.includes('about');
        }
        
        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

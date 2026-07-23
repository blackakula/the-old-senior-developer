// Blog posts data with full content
const posts = [
    {
        id: 1,
        title: 'The Art of Saying No',
        date: 'June 5, 2026',
        excerpt: 'One of the most valuable skills I\'ve learned over the years is knowing when to say no.',
        content: `One of the most valuable skills I've learned over the years is knowing when to say no. Early in my career, I said yes to everything—every feature request, every urgent task, every meeting. I thought saying no would make me look lazy or uncommitted. I was wrong.

The truth is, saying yes to everything means you're really saying no to the things that matter. You're saying no to quality. You're saying no to sustainability. You're saying no to your own well-being.

I learned this lesson the hard way, after years of burnout and watching projects suffer because they were unfocused. When you say yes to every request, you dilute your effort across too many things. Nothing gets your full attention. Nothing gets done well.

Now, I'm selective. I say no to things that don't align with my priorities or values. I say no to meetings that don't need me. I say no to features that add complexity without clear benefit. And here's the thing—people respect it more. They know that when I say yes, I mean it. They know I'll deliver.

The art of saying no isn't about being difficult. It's about being honest about your capacity and respectful of your commitments. It's about protecting quality. It's about sustainability.

So next time someone asks you for something, before you say yes, ask yourself: "What am I saying no to?" The answer might surprise you.`
    },
    {
        id: 2,
        title: 'Code Reviews: Teaching Moments',
        date: 'May 28, 2026',
        excerpt: 'Code reviews aren\'t just about finding bugs. They\'re about dialogue, teaching, and shared understanding.',
        content: `Code reviews aren't just about finding bugs. They're not even primarily about that. The real value of a good code review is the dialogue, the teaching, and the shared understanding that emerges.

I've seen code reviews done wrong—as gatekeeping exercises where senior developers shoot down junior developers' work. I've also seen them done beautifully—as conversations where both parties learn something.

The difference is mindset. A good code review starts with curiosity, not judgment. "Why did you choose this approach?" is a different question than "This is wrong." One invites explanation and dialogue. The other invites defensiveness.

When I review code, I'm looking for opportunities to help the author grow. If I see a pattern they've used that could be simplified, I'll ask them if they've considered another approach. If I see code that works but is hard to understand, I'll ask them to explain their thinking—sometimes they'll realize it needs clarification.

The best code reviews I've been part of end with both parties understanding the problem better than when they started. The author learns something about the craft. The reviewer learns something about how someone else thinks. And the team ends up with better code and better developers.

Code reviews are teaching moments. Treat them that way, and everything else follows.`
    },
    {
        id: 3,
        title: 'Simple > Clever',
        date: 'May 15, 2026',
        excerpt: 'Early in my career, I loved writing clever code. Looking back, most of that code was a mistake.',
        content: `Early in my career, I loved writing clever code. One-liners that did magical things. Patterns that showed off my knowledge of the language. Recursive algorithms instead of loops. Nested ternaries instead of if-statements.

Looking back, most of that code was a mistake.

Not because it didn't work. It worked fine. But because it was expensive—expensive to maintain, expensive to modify, expensive to teach to new team members. Clever code is code that only the author understands, and sometimes only the author understands it in the moment they wrote it.

I learned this lesson when I had to debug my own code from six months earlier and couldn't figure out what I was thinking. I learned it again when I had to teach new developers to maintain code I'd written. I learned it again when a simple bug fix turned into hours of work because I had to untangle the clever logic.

Now, I optimize for clarity. I write code that a junior developer could understand. I use explicit variable names. I break complex logic into smaller, understandable functions. I write comments not for what the code does—that's obvious—but for why it does it that way.

The best code I've ever written is the code that others can easily understand and modify. It's not clever. It's simple. It solves the problem. It's easy to maintain. And paradoxically, it was harder to write than the clever code would have been. Simplicity is a discipline.

So the next time you're tempted to write that clever one-liner, stop. Ask yourself: "Will someone else understand this?" If the answer is no, that's a good sign you should make it simpler.`
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    setupNavigation();
    loadPostDetail();
});

// Render blog posts list
function renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content
    
    posts.forEach(post => {
        const postCard = document.createElement('article');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3>${escapeHtml(post.title)}</h3>
            <div class="post-date">${escapeHtml(post.date)}</div>
            <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
            <a href="post.html?id=${post.id}" class="read-more">Read more →</a>
        `;
        container.appendChild(postCard);
    });
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

// Get post by ID
function getPostById(postId) {
    return posts.find(p => p.id === parseInt(postId));
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set active nav link based on current page
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

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

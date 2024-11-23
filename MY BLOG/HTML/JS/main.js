// Comment Form Validation
document.getElementById('commentForm').addEventListener('submit', function(event) {
    const name = document.getElementById('commentName').value.trim();
    const message = document.getElementById('commentMessage').value.trim();

    if (!name || !message) {
        event.preventDefault(); 
        alert('Please fill out both the name and message!');
    }
});

// Search Posts Functionality
function searchPosts() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase().trim();
    const posts = document.querySelectorAll(".post-list article");

    posts.forEach(post => {
        const title = post.getAttribute("data-title").toLowerCase();

        if (title.includes(searchTerm)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// Scroll to top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑ Scroll to Top';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

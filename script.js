document.addEventListener('DOMContentLoaded', function () {
    // Trigger every 9 seconds, but only if user actually has page mounted
  if (document.visibilityState === 'visible') {
    setInterval(createRandomSupernova, 9000);
  } else {
    console.log('The tab is not active.');
  }
    // Call the function to create stars initially
    createStars();
});

function createRandomSupernova() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const scale = Math.random() * 20; // Scale from 0 to 20

    const fireworkElement = document.createElement("div");
  const headerContainer = document.getElementById('header-container');

    fireworkElement.className = 'firework';
    fireworkElement.style.left = `${x}px`;
    fireworkElement.style.top = `${y}px`;

    // Add an event listener to remove the element once the animation is done
    fireworkElement.addEventListener('animationend', function () {
        fireworkElement.remove();
    });

    console.log('Creating firework at:', x, y);

    headerContainer.appendChild(fireworkElement);

    // Adding back the class for animation
    setTimeout(() => {
        fireworkElement.classList.add('random-explode');
        fireworkElement.style.setProperty('--scale', scale); // Setting CSS variable
    }, 10);
}

function createStars() {
    const container = document.getElementById('content-container');
    
    // Clear existing stars if any
    document.querySelectorAll('.star').forEach(star => star.remove());
    
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div');
      star.className = 'star';
  
      // Generate random x and y positions
      const x = Math.floor(Math.random() * container.clientWidth);
      const y = Math.floor(Math.random() * container.clientHeight);
  
      const speed = Math.random(); // Generating a random speed factor between 0 and 1
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.dataset.speed = speed; // Attach speed data to the star
  
      container.appendChild(star);
    }
  }
  
  

document.addEventListener("DOMContentLoaded", function () {
 
    // Disable scrolling initially
    document.body.style.overflow = 'hidden';

    const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Wait until the scroll is done, and then enable scrolling
                setTimeout(() => {
                    // Re-enable scrolling
                    document.body.style.overflow = "";
                }, 1000);  // Assuming 1 second to reach there, adjust time as necessary

                // Start smooth scrolling
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Show the button when user scrolls down 100px
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    if (window.scrollY > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }

    document.querySelectorAll('.star').forEach(star => {
        const speed = star.dataset.speed;
        const newY = scrolled * speed; // New Y position based on scroll
        star.style.transform = `translateY(${newY}px)`;
      });

  });
  
  // Scroll to the top when the button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });







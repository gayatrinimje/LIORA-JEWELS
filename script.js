// Simple Animation for Text
    const heroText = document.querySelector('.hero-content');
    window.addEventListener('load', () => {
      heroText.style.opacity = '0';
      heroText.style.transform = 'translateY(50px)';
      setTimeout(() => {
        heroText.style.transition = 'all 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
      }, 500);
    });

     // Mobile dropdown toggle
    const dropdownParents = document.querySelectorAll(".navbar ul li");

    dropdownParents.forEach(parent => {
      parent.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          parent.classList.toggle("open");
        }
      });
    });
    
      const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const nextBtn = document.querySelector('.arrow.right');
    const prevBtn = document.querySelector('.arrow.left');
    let index = 0;

    function showSlide(i) {
      index = (i + slideCount) % slideCount;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => showSlide(index + 1));
    prevBtn.addEventListener('click', () => showSlide(index - 1));

    // Auto Slide every 5 seconds
    setInterval(() => showSlide(index + 1), 5000);

    // circular item
  // function scrollCategories(distance) {
  //     const container = document.getElementById("categoryWrapper");
  //     container.scrollBy({ left: distance, behavior: 'smooth' });
  //   }

    // Optional: Newsletter alert
  document.querySelector(".newsletter button").addEventListener("click", () => {
    alert("Thank you for subscribing!");
  });

  //SELECTED FOR YOU
   // Simple click functionality (can be linked to pages)
    document.querySelectorAll('.gender-card').forEach(card => {
      card.addEventListener('click', () => {
        alert("You selected: " + card.dataset.category);
        // Example: window.location.href = '/women.html'; (to navigate)
      });
    });

   //gifting 
       // Optional JS: Click alert for each item
    document.querySelectorAll('.grid-item').forEach(item => {
      item.addEventListener('click', () => {
        alert(`You clicked on: ${item.querySelector('span').innerText}`);
      });
    });

     

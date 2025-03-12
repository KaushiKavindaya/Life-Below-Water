
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.program-card');
  const totalSlides = slides.length;
  const visibleSlides = 3; // Number of slides visible at once
  let currentIndex = 0;
  let intervalId; // Store the interval ID for pausing/resuming

  function updateSlider() {
      // Calculate the translation distance based on current index and width
      const slideWidth = slides[0].offsetWidth; // Get the width of a single slide.  Important for responsiveness.
      const translateX = -currentIndex * slideWidth;
      slider.style.transform = `translateX(${translateX}px)`; // Use pixels for smoother transition
  }

  function moveSlide(step) {
      currentIndex = (currentIndex + step + totalSlides) % totalSlides;
      updateSlider();
  }

  function startAutoSlide() {
      intervalId = setInterval(() => {
          moveSlide(1);
      }, 2000); // Change slide every 2 seconds
  }

  function stopAutoSlide() {
      clearInterval(intervalId);
  }

  // Optional: Pause on hover
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);

  // Initial setup and start the auto-slide
  updateSlider();
  startAutoSlide();

  /*Auto-scroll script for review section**/

  const reviewContainer = document.querySelector('.review-cards-container');
  const cardWidth = 320; // Width of a single card, including padding and margin.  Adjust as needed.
  const cardGap = 20; //Adjust as need
  const scrollDistance = cardWidth + cardGap;
  let currentPosition = 0;

  function autoScrollReviews() {
      currentPosition += scrollDistance; // Scroll by the width of one card

      // If we've reached the end, loop back to the beginning
      if (currentPosition >= reviewContainer.scrollWidth - reviewContainer.clientWidth) {
          currentPosition = 0;
      }

      reviewContainer.scrollTo({
          left: currentPosition,
          behavior: 'smooth'
      });
  }

  setInterval(autoScrollReviews, 3000); // Adjust the time interval as needed (milliseconds)

  // Shark click handling
  const sharkBoxes = document.querySelectorAll('.shark-container .box');
  sharkBoxes.forEach(box => {
      box.addEventListener('click', function() {
          const feeling = this.dataset.feeling;
          showFeedback(feeling);
      });
  });

  // Star rating handling
  const starButtons = document.querySelectorAll('.rating-input button');
  starButtons.forEach(button => {
      button.addEventListener('click', function() {
          const rating = parseInt(this.dataset.rating);
          rate(rating);
      });
  });


});

function showFeedback(feeling) {
  Swal.fire({
      title: feeling,
      text: "You selected " + feeling + " face!",
      icon: "info",
      confirmButtonText: "OK"
  });
}

function rate(stars) {
  alert(`You rated this ${stars} stars!`);
}
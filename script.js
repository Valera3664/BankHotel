
// Modal functionality for image gallery
var modal = document.getElementById("myModal");
var images = document.querySelectorAll(".gallery-item img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach(function (image) {
  image.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// Smooth scroll to section
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Scroll to Top Button functionality
var scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

scrollToTopButton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

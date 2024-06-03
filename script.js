const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('profile'); // Show profile section by default
});

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  var images = document.querySelectorAll('.certificate-image');
  var span = document.getElementsByClassName('close')[0];

  images.forEach(function(img) {
      img.onclick = function() {
          modal.style.display = 'block';
          modalImg.src = this.src;
      }
  });

  span.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});

function openModal(imagePath) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = imagePath;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  var profilePhotoLink = document.getElementById('profilePhotoLink');
  var span = document.getElementsByClassName('close')[0];

  // Open modal when clicking on the profile photo link
  profilePhotoLink.onclick = function() {
      modal.style.display = 'block';
      modalImg.src = this.href;
      return false; // Prevent the default link behavior
  };

  // Close modal when clicking on the close button
  span.onclick = function() {
      modal.style.display = 'none';
  }

  // Close modal when clicking outside the modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});

const navbar1 = document.querySelectorAll('.nav-items');

  // Add click event listeners to each breadcrumb item
  navbar1.forEach(item => {
    item.addEventListener('click', function() {
      // Remove the "active" class from all items
      navbar1.forEach(item => item.classList.remove('active'));

      // Add the "active" class to the clicked item
      this.classList.add('active');
    });
  });
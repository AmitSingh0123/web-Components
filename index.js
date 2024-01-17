let modeBtn = document.querySelector('.nav-mode');
modeBtn.addEventListener('click',()=>{
  document.querySelector('.bxs-circle').classList.toggle('active');
  modeBtn.classList.toggle('active');
document.querySelector('body').classList.toggle('dark-mode')
});


const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');

  // Add click event listeners to each breadcrumb item
  breadcrumbItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove the "active" class from all items
      breadcrumbItems.forEach(item => item.classList.remove('active'));

      // Add the "active" class to the clicked item
      this.classList.add('active');
    });
  });

  let navMenuBtn = document.querySelector('.bx-menu');

  navMenuBtn.addEventListener('click',()=>{
    let navContainer = document.querySelector('.nav-contants');
    navMenuBtn.classList.toggle('active');
    navContainer.classList.toggle('active');
  });


  // const codeBTns = document.querySelectorAll('.html-code');

  // // Add click event listeners to each breadcrumb item
  // codeBTns.forEach(item => {
  //   item.addEventListener('click', function() {
  //     // Remove the "active" class from all items
  //     codeBTns.forEach(item => item.classList.remove('active'));

  //     // Add the "active" class to the clicked item
  //     this.classList.add('active');
  //   });
  // });


  function codeBtns(){
    document.querySelector('#html-btn').addEventListener('click',()=>{
      document.querySelector('.code-container-1').classList.toggle('active')
    });
    document.querySelector('#js-btn').addEventListener('click',()=>{
      document.querySelector('.code-container-3').classList.toggle('active')
    });
    document.querySelector('#css-btn').addEventListener('click',()=>{
      document.querySelector('.code-container-2').classList.toggle('active')
    });
  }
  codeBtns();
  
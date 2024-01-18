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
  
  function codeBtns1(){
    document.querySelector('#html-btn-1').addEventListener('click',()=>{
      document.querySelector('.code-container-4').classList.toggle('active')
    });
    document.querySelector('#js-btn-1').addEventListener('click',()=>{
      document.querySelector('.code-container-6').classList.toggle('active')
    });
    document.querySelector('#css-btn-1').addEventListener('click',()=>{
      document.querySelector('.code-container-5').classList.toggle('active')
    });
  }
  function codeBtns2(){
    document.querySelector('#html-btn-2').addEventListener('click',()=>{
      document.querySelector('.code-container-7').classList.toggle('active')
    });
    document.querySelector('#js-btn-2').addEventListener('click',()=>{
      document.querySelector('.code-container-9').classList.toggle('active')
    });
    document.querySelector('#css-btn-2').addEventListener('click',()=>{
      document.querySelector('.code-container-8').classList.toggle('active')
    });
  }
  codeBtns();
  codeBtns1();
  codeBtns2();
  
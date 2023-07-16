function ibg(){

    let ibg = document.querySelectorAll(".ibg");

    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
ibg();


// slider images

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });



  // slider ползунок
  const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }

// Burger menu

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
  const menuNav = document.querySelector('.menu__nav');

  iconMenu.addEventListener('click', function(e){
       document.body.classList.toggle('lock');
       iconMenu.classList.add('active');
       menuNav.classList.add('active');
  })
}

  
    
    



    
    
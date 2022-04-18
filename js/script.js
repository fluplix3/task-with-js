// Slider

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 70,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 4000,
  },
});

// Tabs

document.querySelectorAll('.work__tabs-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.work__tabs-btn').forEach(function (btn) {
      btn.classList.remove('work_one-tab')
    });
    e.currentTarget.classList.add('work_one-tab');
    document.querySelectorAll('.work__tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('work__tabs-item-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__tabs-item-active');
  });
});

// Accordion

$(function () {
  $("#accordion").accordion({
    autoHeight: true,
    scroll: false,
    collapsible: true,
    active: false
  });
});

// Burger

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelectorAll('.text').forEach(function(el) {
    el.addEventListener('click', function(event) {
      event.target.classList.toggle('alert')
    })
  })
})

document.querySelector("#burger").addEventListener("click", function() {
  this.classList.toggle("active");
})

//search

document.querySelector('.header__search').addEventListener('click', function() {
  document.querySelector('.header__search-form').classList.toggle('search-active')
})

document.querySelector('.header__form-btn-close').addEventListener('click', function() {
  document.querySelector('.header__search-form').classList.toggle('search-active')
})







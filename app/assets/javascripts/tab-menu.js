$(document).on('click', '.tab-menu__item', function() {
  var target = $(this).attr('target');
  $(this).parent('.tab-menu').find('.tab-menu__item').removeClass('selected');
  $(this).addClass('selected');

  $(this).parent('.tab-menu').parent('.tabs').find('.tab-content').addClass('hidden');
  $(target).removeClass('hidden');
})

$(document).on('click', '.unselected', function() {

  $(this).removeClass('unselected');
  $(this).parent('#search-result-container').find('.open').removeClass('open').addClass('unselected');
  $(this).addClass('open');

  //persisting opened tab on page reload
  let tabId = $(this).attr('id')
  localStorage.setItem("openTab", tabId);
})

$(document).on('click', '.fa-icon-wrapper', function () {
  $(this).parents('.open').removeClass('open').addClass('unselected')
  
  //removing locally stored video Id if none are open
  localStorage.setItem("openTab", '');
})

// Youtube Search AJAX Call 
$(document).on('click', '#search', ()=> {
  let searchTerm = $('#search-input').val()
  console.log(searchTerm)
  localStorage.setItem("searchTerm", searchTerm)
  
  //persist search without reloading page 
  window.history.pushState("obj or string", "persist-search", `/page?searchTerm=${searchTerm}`)

  $.ajax({
    url: '/search',
    method: 'GET',
    data: {searchTerm},
  }).then( data => {
    $('#search-header').html(searchTerm)
    $('#search-result-container').html(data.html)
  }).fail( error => {
    console.log(error)
  })
})

$(document).on('click', '#reset', () => {

  window.history.pushState("obj or string", "persist-search", `/page`)
  localStorage.setItem("searchTerm", 'Ruby on Rails')

  $.ajax({
    url: '/search',
    method: 'GET',
    data: { searchTerm: 'Ruby on Rails' },
  }).then(data => {
    $('#search-header').html('Ruby on Rails')
    $('#search-result-container').html(data.html)
  }).fail(error => {
    console.log(error)
  })
})

$(document).on('click', '#name', () => {
  localStorage.setItem("searchTerm", 'Ruby on Rails')

  $.ajax({
    url: '/search',
    method: 'GET',
    data: { searchTerm: 'Ruby on Rails' },
  }).then(data => {
    $('#search-header').html('Ruby on Rails')
    $('#search-result-container').html(data.html)
  }).fail(error => {
    console.log(error)
  })
})

// persisting opened tab on page reload
let openedTab = localStorage.getItem('openTab')
let lastSearch = localStorage.getItem('searchTerm')

window.addEventListener('DOMContentLoaded', () => {
  // if( lastSearch != null ){
  //   Rails.ajax({
  //     url: '/search',
  //     type: 'get',
  //     searchTerm: lastSearch,
  //     success: function (data) {
  //       $('#search-result-container').html(data.html)
  //     },
  //     failure: function (error) {
  //       console.log(error)
  //     }
  //   }).then(() => {
  //     $('.unselected').each(function () {
  //       if ($(this).attr("id") == openedTab) {
  //         $(this).removeClass('unselected').addClass('open')
  //       }
  //     }); 
  //   })
  // } else {
    $('.unselected').each(function () {
      if ($(this).attr("id") == openedTab) {
        $(this).removeClass('unselected').addClass('open')
      }
    }); 
  // }

});


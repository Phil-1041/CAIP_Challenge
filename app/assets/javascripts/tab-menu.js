$(document).on('click', '.tab-menu__item', function() {
  var target = $(this).attr('target');
  $(this).parent('.tab-menu').find('.tab-menu__item').removeClass('selected');
  $(this).addClass('selected');

  $(this).parent('.tab-menu').parent('.tabs').find('.tab-content').addClass('hidden');
  $(target).removeClass('hidden');
})

$(document).on('click', '.unselected', function() {

  $(this).removeClass('unselected');

  $(this).parent('.card').find('.open').removeClass('open').addClass('unselected');

  $(this).addClass('open');
})

$(document).on('click', '.fa-icon-wrapper', function () {
  $(this).parents('.open').removeClass('open').addClass('unselected')
})

$(document).on('click', '#reset', () => {
  $('#search-input').val('Ruby on Rails')
  $('#search-bar').submit()
})
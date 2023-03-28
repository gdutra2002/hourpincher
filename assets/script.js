//The document is the entry point for the browser to use this file. 
$(document).ready(function () { 
      
//Next the saveBtn is specified in both html and css with it's variables distinguished as a value and attribute. 
//The variables are designated for local storage.  Additionally, the class method specifies 
//a timed function to display the added message for 5 secconds on the top of the calendar.  This
// is realized thru html and css, afterwards the data is found thru the console, localStorage. 
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
    $('.noticias').addClass('apptime');
    setTimeout(function () {
      $('.noticias').removeClass('apptime');
    }, 5000);
    console.log(value, time);
  });
    
// Next we use dayjs to lookup the current time.
// The time-block's are constructed to color coordinate thru html, css, and the dayjs.
// Verified by (this) to update the color by current hour of the day, using jquery class.
  function hourUpdater() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

// Make this a clock in real time in the future, as the time is
// updated on a 10 seccond interval.
  hourUpdater();
  setInterval(hourUpdater, 10000);
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
 
// Finally, dayjs calls the current date, before we close the initial function.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
    
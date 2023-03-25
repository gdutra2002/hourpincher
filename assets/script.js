
    $(document).ready(function () {      
// listen for save button clicks^^^^^fn.....all over CSS/html .saveBtn
      $('.saveBtn').on('click', function () {
// get nearby values,,,,,delta value ->numb..nope, method .siblings (none) .description all files .val->num..nope
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
// save in localStorage,,,,<- time (varies) time-block ubu ....method
        localStorage.setItem(time, value);
// Show notification that item was saved to localStorage by adding class method 'show'
        $('.noticias').addClass('apptime');    
// Verify timeout to remove in 5 seconds  ->noticias show->appttime
        setTimeout(function () {
          $('.noticias').removeClass('apptime');
        }, 5000);
        console.log(value, time);
      });
    
      function hourUpdater() {
  // Get the current hours,,,,build function,,,,
        var currentHour = dayjs().hour();
    
  // Make the time blocks update color to the current hour.
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);  
  // Check if we've moved past this time,,,,,this -> hourpin.....
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
  // Make this a clock in real time in the future
      hourUpdater();
  // Set up interval for current time to be updated
      setInterval(hourUpdater, 15000);    
  // load any saved data from localStorage, this is in the console
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
 // dayjs displays the current date
      $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
    });
    
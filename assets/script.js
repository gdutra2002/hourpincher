
    $(document).ready(function () {
      
      // listen for save button clicks^^^^^fn.....all over CSS/html .saveBtn
      $('.saveBtn').on('click', function () {
        // get nearby values,,,,,delta value ->numb, method .siblings (none) .description all files .val->num
        var numb = $(this).siblings('.description').num();
        var time = $(this).parent().attr('id');
    
        // save in localStorage,,,,<- time (varies) time-block ubu ....method
        localStorage.setItem(time, numb);
    
        // Show notification that item was saved to localStorage by adding class method 'show'
        $('.noticias').addClass('apptime');
    
        // Timeout to remove 'show' class after 5 seconds notification ->noticias show->appttime
        setTimeout(function () {
          $('.noticias').removeClass('apptime');
        }, 5000);
      });
    
      function hourUpdater() {
        // get current number of hours,,,,build function,,,,
        var currentHour = dayjs().hour();
    
        // loop over time blocks
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
          // check if we've moved past this time,,,,,this -> hourpin.....
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
    
      hourUpdater();
    // ^^^^^^^define
      // set up interval to check if current time needs to be updated
      setInterval(hourUpdater, 15000);
    
      // load any saved data from localStorage
      $('#hour-8 .description').num(localStorage.getItem('hour-8'));
      $('#hour-9 .description').num(localStorage.getItem('hour-9'));
      $('#hour-10 .description').num(localStorage.getItem('hour-10'));
      $('#hour-11 .description').num(localStorage.getItem('hour-11'));
      $('#hour-12 .description').num(localStorage.getItem('hour-12'));
      $('#hour-13 .description').num(localStorage.getItem('hour-13'));
      $('#hour-14 .description').num(localStorage.getItem('hour-14'));
      $('#hour-15 .description').num(localStorage.getItem('hour-15'));
      $('#hour-16 .description').num(localStorage.getItem('hour-16'));
      $('#hour-17 .description').num(localStorage.getItem('hour-17'));
      $('#hour-18 .description').num(localStorage.getItem('hour-18'));
    
      // display current day on page
      $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
    });
    
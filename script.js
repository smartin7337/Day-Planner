$(document).ready(function(){
    /* display current time/day at the top of page */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    var hourlyBlock = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
    var localTime = moment().format("h A");
    
    
    /* set each block to the correct hour between 9-5 */
    $(".Hour").each(function(i){
        $(this).text(moment().hour(i+9).format("h A"))
        
    })
    console.log(localTime);
    
    /* if/else statements for contents of each block */
    $('.HourRow').each(function(i) {
        console.log(hourlyBlock.indexOf(localTime));
        if (hourlyBlock.indexOf(localTime) > i) {
          $(`#${i}`).addClass('past');
          $(`#saveToDo-${i}`).prop('disabled', true);
          $(`#saveToDo-${i}`).addClass('past');
          $(`#hour-${i}`).addClass('past');
        } else if (hourlyBlock.indexOf(localTime) == i) {
          $(`#${i}`).addClass('present');
          $(`#saveToDo-${i}`).addClass('present');
          $(`#saveToDo-${i}`).prop('disabled', false);
          $(`#hour-${i}`).addClass('present');
        } else if (hourlyBlock.indexOf(localTime) < i) {
          $(`#${i}`).addClass('future');
          $(`#saveToDo-${i}`).addClass('future');
          $(`#saveToDo-${i}`).prop('disabled', false);
          $(`#hour-${i}`).addClass('future');
        }
      });

    });
  
    $("button").on("click", function(){
        $('input, select, textarea').each(function() {
         var value = $(this).val(),
             name = $(this).attr('name');
         localStorage[name] = value;
                 
    })});
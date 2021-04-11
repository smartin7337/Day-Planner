$(document).ready(function(){
    /* Display the current day of the week and date
    at the top of the page */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
    var currentTime = moment().format("h A");
    
    
    // Set each span text to the correct hour between 9am and 5pm
    $(".Hour").each(function(i){
        $(this).text(moment().hour(i+9).format("h A"))
        
    })
    console.log(currentTime);
    
    
    
//clock
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

//local storage
var addLocation = (selectedLocation) => {
    recentLocations.push(selectedLocation);
    console.log(recentLocations)
  
    localStorage.setItem("recentLocations", JSON.stringify(recentLocations));
  }

  var options = {
    startHour: 9,
    endHour: 17,
  }

function updateTimeallocations() {
    var currentHour = moment().hour();
    $('.time-block').each(function (index, element){
        var hour = $(element).attr('data-hour');

        if (hour < currentHour) {
            $(element).find('description').addClass('past');
        }
        else if (hour == currentHour) {
            $(element).find('description').addClass('present');
        }
        else {
            $(element).find('description').addClass('future');  
        }
    });
}

function onSaveTask(e) {
    var hour = $(e.target).parent().parent().attr('data-hour');
    var task = $(e.target).parent().prev().children().val();


    localStorage.setItem(hour,Task);
    console.log('saved')

}


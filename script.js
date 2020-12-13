document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
setInterval(function(){
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000); 

const TOTAL_HOURS = 9; 
var all_hours = []; // 9am to 5pm is 9 seperate blocks
var STARTING_HOUR = 9; 
var tasks=[];

for (var i = 0; i < TOTAL_HOURS; i++){

    if (STARTING_HOUR + i > 12) {
        all_hours.push(((STARTING_HOUR + i)% 12)+ "pm");
    }else {
        if (STARTING_HOUR + i === 12){
            all_hours.push(((STARTING_HOUR + i))+ "pm"); // otherwise its 13 ocklck
        }else {
            all_hours.push(((STARTING_HOUR + i))+ "am");
        }
    }
    

}

var htmlEvent = {
        currentHour: "9am",
        getHour: function() {
            return `<p> ${this.currentHour}</p>`; 
        }
}; 



var html = `<div class="row">
<div class="col-md-1">9am</div>
<div class="col-md-10">col-sm-10  So busy with bootcamp!</div>
<div class="col-md-1">Save</div>
</div>`; 

for (const time of all_hours){
    var html = `<div class="row">
<div class="col-md-1">${time}</div>
<div class="col-md-10">col-sm-10 So busy with bootcamp!</div>
<div class="col-md-1">Save</div>
</div>`; 
    $(".container").append(html);
}
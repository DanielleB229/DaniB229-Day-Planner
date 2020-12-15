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



function SchedEvent(time){ // time = 9am
    return {
        currentHour: time,
        description:"",
        colorRow: function(){
                time = time.toLowerCase(); 
                var momentTime = moment().format('LT'); /// 8:06 am
                momementTime = momentTime.replace(" ", "").toLowerCase(); 
                var varTime = moment(time, 'ha');
                var currentTime = moment(momementTime, 'ha'); // 8am                
                return varTime.isSame(currentTime) ? "bg-warning" : varTime.isAfter(currentTime) ? "bg-info": "bg-secondary"; 
        }, 
        getDescription:function(){
            var exists = localStorage.getItem(this.currentHour) != null ? true: false; 
            if (exists){
                this.description = localStorage.getItem(this.currentHour);
            }else {
                this.description = ""; 
            }
            return `<div class="col-md-10"><input size="65%" class="form-control" value="${this.description}" onchange="setDescription('${time}',this.value)"></div>`;
        },
        getHour: function() {
            return `<div class="col-md-1"> ${this.currentHour}</div>`; 
        }, 
        getSaveBtn: function(){
            return `<div class="col-md-1"><button class="btn btn-danger" onclick="saveEvent()">Save</button></div>`;
        }
        , toString: function(){
            return `<div class="row ${this.colorRow()}" >${this.getHour()+this.getDescription() + this.getSaveBtn()}</div>`; 
        }
    }   
}


function setDescription(currH, val){
    localStorage.setItem(currH, val == "" ? null : val); 
}

function saveEvent(){
    alert("This has been updated!"); 
}
var html = `<div class="row">
<div class="col-md-1">9am</div>
<div class="col-md-10">col-sm-10  So busy with bootcamp!</div>
<div class="col-md-1">Save</div>
</div>`; 

for (const time of all_hours){
   /* var html = `<div class="row">
<div class="col-md-1"$>{time}</div>
<div class="col-md-10">So busy with bootcamp!</div>
<div class="col-md-1">Save</div>
</div>`; */ 
    var eve = new SchedEvent(time); 
    $(".container").append(eve.toString());
}


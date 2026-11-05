
document.addEventListener('DOMContentLoaded', function() {

var calendarEl = document.getElementById('calendar');
var selectedDateInput = document.getElementById('selectedDate');
var timeSelect = document.getElementById('timeSelect');

var blockedDates = ["2026-03-10", "2026-03-15", "2026-03-22", "2026-03-28", "2026-04-02", "2026-04-07", "2026-04-14", "2026-04-21", "2026-04-29", "2026-05-05", "2026-05-12", "2026-05-19", "2026-05-27", "2026-06-03", "2026-06-10", "2026-06-18", "2026-06-25", "2026-07-01", "2026-07-08", "2026-07-16", "2026-07-23", "2026-07-30", "2026-08-06", "2026-08-13", "2026-08-20", "2026-08-27", "2026-09-03", "2026-09-10", "2026-09-17", "2026-09-24", "2026-10-01", "2026-10-08", "2026-10-15", "2026-10-22", "2026-10-29", "2026-11-05", "2026-11-12", "2026-11-19", "2026-11-26", "2026-12-03", "2026-12-10", "2026-12-17", "2026-12-22", "2026-12-29"];

function loadTimes() {
timeSelect.innerHTML = '<option value="">Válasszon időpontot</option>';
var times = ['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00'];
times.forEach(t => {
var opt = document.createElement('option');
opt.value = t;
opt.textContent = t;
timeSelect.appendChild(opt);
});
}

if(calendarEl){
var calendar = new FullCalendar.Calendar(calendarEl, {
initialView: 'dayGridMonth',
dateClick: function(info) {
if(blockedDates.includes(info.dateStr)){
alert("Ez a nap már foglalt!");
return;
}
selectedDateInput.value = info.dateStr;
loadTimes();
},
events: blockedDates.map(d => ({ start: d, display: 'background', color: '#ff0000' }))
});
calendar.render();
}

});

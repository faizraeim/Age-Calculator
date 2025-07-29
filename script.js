// import datepicker from "js-datepicker";
// import {DateTime} from "luxon";

const picker = datepicker ('#date-input', {
     showAllDates: true,
    formatter: (input, date) => {
       
        const value = date.toLocaleDateString(); 
        input.value = value;
    },
    onSelect: (instance, date) => {
        console.log(date);
    }
}) ;


var DateTime = luxon.DateTime;

document.getElementById('calculate').addEventListener('click', function() {
    const input = document.getElementById('date-input').value;
    // Try to parse the input date using Luxon (assuming locale date format)
    let birthDate = DateTime.fromFormat(input, 'M/d/yyyy');
    if (!birthDate.isValid) {
        // Try alternative format (for some browsers/regions)
        birthDate = DateTime.fromFormat(input, 'd/M/yyyy');
    }
    if (!birthDate.isValid) {
        document.getElementById('result').textContent = 'Invalid date format!';
        return;
    }
    const now = DateTime.now();
    const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days);
    document.getElementById('result').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});


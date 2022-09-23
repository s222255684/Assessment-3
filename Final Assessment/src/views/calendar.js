export function getDate() {
    const lang = navigator.language;
    let date = new Date();

    let dayNumber = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString(lang, { weekday: 'long' });
    let monthName = date.toLocaleString(lang, { month: 'long' });
    let year = date.getFullYear();
    let hours = date.getHours();

    document.getElementById('monthName').innerHTML = monthName;
    document.getElementById('dayName').innerHTML = dayName;
    document.getElementById('dayNumber').innerHTML = dayNumber;
    document.getElementById('year').innerHTML = year;

    if(hours < 12){
        document.getElementById('hours').innerHTML = "Good Morning User"
    }
    if(hours > 12){
        document.getElementById('hours').innerHTML = "Good Afternoon User"
    }
    if(hours > 18){
        document.getElementById('hours').innerHTML = "Good Evening User"
    }
}
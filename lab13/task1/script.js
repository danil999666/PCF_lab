function showCurrentDate() {
    let currentDate = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric' };
    let formattedDate = currentDate.toLocaleDateString('uk-UA', options);
    document.getElementById('currentDate').innerHTML = formattedDate;
}

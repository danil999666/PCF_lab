function formatDate() {
    let userInput = document.getElementById('dateInput').value;
    let userDate = new Date(userInput.replace(/(\d{2})[.\/-](\d{2})[.\/-](\d{4})/, '$3-$2-$1'));
    let today = new Date();
    let diff = Math.floor((today - userDate) / (1000 * 60 * 60 * 24));
    let formattedDate;

    if (diff === 0) {
        formattedDate = 'Сьогодні';
    } else if (diff === 1) {
        formattedDate = 'Вчора';
    } else if (diff >= 2 && diff <= 6) {
        formattedDate = diff + ' дні тому';
    } else if (diff === 7) {
        formattedDate = 'Тиждень тому';
    } else if (today.getFullYear() - userDate.getFullYear() === 1) {
        formattedDate = 'Рік тому';
    } else {
        let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        formattedDate = userDate.toLocaleDateString('uk-UA', options);
    }

    document.getElementById('formattedDate').innerHTML = formattedDate;
}

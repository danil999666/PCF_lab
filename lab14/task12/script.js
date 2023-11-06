function unique(arr) {
    return Array.from(new Set(arr));
}

let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];

alert( unique(strings) );

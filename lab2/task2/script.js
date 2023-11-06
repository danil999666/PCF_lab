var table = document.getElementById("myTable");

for (var i = 0; i < 5; i++) {
    var row = table.insertRow();
    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell();
        cell.addEventListener("click", function() {
            this.classList.toggle("selected");
        });
    }
}
function createTable() {
    let rows = [];
  
    while (true) {
      let row = prompt("Введіть рядок (або натисніть 'Скасувати' для завершення):");
      if (row === null) break;
      rows.push(row.split(','));
    }
  
    let tableHTML = '<table border="1">';
    for (let i = 0; i < rows.length; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < rows[i].length; j++) {
        tableHTML += `<td>${rows[i][j]}</td>`;
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.write(tableHTML);
  }
  
  createTable();
  
function createHeaders() {
    let N = prompt("Введіть кількість заголовків другого рівня:");
    for (let i = 1; i <= N; i++) {
      document.write(`<h2>Header${i}</h2>`);
    }
  }
  
  createHeaders();
  

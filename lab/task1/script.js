function calculateBurgers() {
    let moneyInWallet = parseFloat(prompt("Введіть суму грошей у гаманці:"));
    let burgerPrice = parseFloat(prompt("Введіть ціну одного бургера:"));

    let burgersCanBuy = Math.floor(moneyInWallet / burgerPrice);
    let change = moneyInWallet - (burgersCanBuy * burgerPrice);

    alert(`Ви можете купити ${burgersCanBuy} бургерів і у вас залишиться ${change.toFixed(2)} грн.`);
}

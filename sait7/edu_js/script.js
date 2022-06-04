let money = window.document.getElementById("money");
let display = window.document.getElementById("display");
function GetCoffee(coffeName, coffeePrice) {
    if (money.value >= coffeePrice) {
        money.value = money.value - coffeePrice;
        display.innerText = ("Ваш " + coffeName + " готов");
        display.innerText = (money.value);
    } else {
        display.innerText = ("Недостаточно средств");
    }
}
setInterval(() => {
    money.classList.add('shadow-green');
}, 1000);
setInterval(() => {
    money.classList.remove('shadow-green');
}, 2000);
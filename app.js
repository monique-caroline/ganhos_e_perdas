// Perguntar as entradas
var income = prompt("Qual é o valor da entrada?");

// saídas 
var costs = prompt("Qual é o valor da saída?");

// porcentagem dos impostos
var textPercent = prompt("Qual a porcentagem dos impostos?");

// calcular a renda bruta
var grossProfit = income - costs;

// obtendo o valor dos impostos
var tax = grossProfit*textPercent/100;

// renda líquida
var netIncome = grossProfit - tax;

// mostrar na página web
document.write("Sua renda líquida é de $ " + netIncome);

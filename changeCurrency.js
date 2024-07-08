function changeCurrency() {
  const currencyName = document.getElementById("currency-name");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
  }

  currencySelect.addEventListener("change", changeCurrency);
  convertButton.addEventListener("click", convertValues);
}

const postalCodeInput = document.getElementById('postal_code');

postalCodeInput.addEventListener('input', async event => {
  const postalCode = postalCodeInput.value;

  if(postalCode.length == 8) {
    const viaCep = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`);
    const address = await viaCep.json();

    document.getElementById("address").value = address.logradouro;
    document.getElementById("district").value = address.bairro;
    document.getElementById("city").value = address.localidade;
  }

})

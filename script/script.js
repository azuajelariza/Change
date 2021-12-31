function convertir() {
  let valor = parseFloat(document.getElementById("cantidad").value);
  document.getElementById("valor").innerHTML = "<b>" + valor + "</b>";
  var de = document.getElementById("de").value;
  var a = document.getElementById("a").value;
  var PesoMexicano = 20.56;
  var PesoColombiano = 4.038;
  var Euro = 0.88;
  var LibraEsterlina = 0.74;
  var dolar = 23.81
  resultado = 0;
  //dolar a Peso Mexicano
  if (de == 1 && a == 2) {
    resultado = valor * PesoMexicano;
    //dolar a Peso Colombiano
  } else if (de == 1 && a == 3) {
    resultado = valor * PesoColombiano;
    //dolar a Euro
  } else if (de == 1 && a == 4) {
    resultado = valor*(dolar/Euro);
    //dolar a Libra Esterlina
  } else if (de == 1 && a == 5) {
    resultado = valor / LibraEsterlina;
    //peso mexicano a dolar
  } else if (de == 2 && a == 1) {
    resultado = valor / dolar;
    //Peso Mexicano a Peso Colombiano
  } else if (de == 2 && a == 3) {
    resultado = valor * PesoColombiano;
    //Peso Mexicano a Euro
  } else if (de == 2 && a == 4) {
    resultado = valor / Euro;
    //Peso Mexicano a Libra Esterlina
  } else if (de == 2 && a == 5) {
    resultado = valor / LibraEsterlina;
    // peso comlombiano a dolar
  } else if (de == 3 && a == 1) {
    resultado = valor / dolar;
    //Peso Colombiano a Peso Mexicano
  } else if (de == 3 && a == 2) {
    resultado = valor / PesoMexicano;
    //Peso Colombiano a Euro
  } else if (de == 3 && a == 4) {
    resultado = valor / Euro;
    //Peso Colombiano a Libra Esterlina
  } else if (de == 3 && a == 5) {
    resultado = valor / LibraEsterlina;
    //Euro a dolar
  } else if (de == 4 && a == 1) {
    resultado = valor *(Euro/dolar);
    //Euro a Peso Mexicano
  } else if (de == 4 && a == 2) {
    resultado = valor * PesoMexicano;
    //Euro a Peso Colombiano
  } else if (de == 4 && a == 3) {
    resultado = valor * PesoColombiano;
    //Euro a Libra Esterlina
  } else if (de == 4 && a == 5) {
    resultado = valor / LibraEsterlina;
    //Libra Esterlina a dolar
  } else if (de == 5 && a == 1) {
    resultado = valor * dolar;
    //Libra Esterlina a Peso Mexicano
  } else if (de == 5 && a == 2) {
    resultado = valor * PesoMexicano;
    //Libra Esterlina a Peso Colombiano
  } else if (de == 5 && a == 3) {
    resultado = valor * PesoColombiano;
    //Libra Esterlina a Euro
  } else if (de == 5 && a == 4) {
    resultado = valor * LibraEsterlina;
  }
  // dolar a dolar, peso mexicano a peso mexicano, peso colombiano a peso colombianoo, euro a euro y libra esterlina a libra esterlina
  else {
    resultado = valor;
  }

  const fragment = document.createDocumentFragment();

  const newDiv = document.createElement("div");

  const newContent = document.createTextNode(
    `Resultado: $${resultado.toFixed(2)}`
  );

  newDiv.appendChild(newContent);
  fragment.appendChild(newDiv);

  const el = document.getElementById("resultado");

  el.replaceChild(fragment, el.children[0]);
}

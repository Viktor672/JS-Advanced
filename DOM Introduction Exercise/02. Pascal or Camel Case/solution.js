function solve() {
  let text = document.querySelector("#text").value;
  let namingConvention = document.querySelector("#naming-convention").value;
  let result = document.querySelector("#result");
  let tokens = text.split(" ");
  let arr = [];
  if (text == "" || namingConvention == "" || (namingConvention != "Camel Case" && namingConvention != "Pascal Case")) {
    result.textContent = 'Error!';
    return;
  }
  else if (namingConvention == "Camel Case") {
    for (let i = 0; i < tokens.length; i++) {
      if (i == 0) {
        arr.push(tokens[i].toLowerCase());
      }
      else {
        tokens[i] = tokens[i][0].toUpperCase() + tokens[i].substring(1).toLowerCase();
        arr.push(tokens[i]);
      }
    }
  }
  else if (namingConvention == "Pascal Case") {
    for (let i = 0; i < tokens.length; i++) {
      tokens[i] = tokens[i][0].toUpperCase() + tokens[i].substring(1).toLowerCase();
      arr.push(tokens[i]);
    }
  }
  result.textContent = arr.join("");
}
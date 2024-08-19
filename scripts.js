function func1() {
  const input = document.getElementById("inp").value;
  const converter = document.getElementById("conv");
  const result = document.getElementById("result");
  const ronEur = input / 4.95;
  const eurRon = input * 4.95;
  const ronUsd = input / 4.45;
  const usdRon = input * 4.45;

  if (converter.value === "roneur") {
    result.value = ronEur;
  } else if (converter.value === "eurron") {
    result.value = eurRon;
  } else if (converter.value === "ronusd") {
    result.value = ronUsd;
  } else if (converter.value === "usdron") {
    result.value = usdRon;
  } else {
    return "No input added";
  }
}
function func2() {
  const input1 = document.getElementById("inp1").value;
  const converter1 = document.getElementById("conv1");
  const result1 = document.getElementById("result1");
  const kmMt = input1 / 1000;
  const mtKm = input1 * 1000;
  const kmMl = input1 / 1.609;
  const mlKm = input1 * 1.609;
  const mtFt = input1 * 3.2808;
  const ftMt = input1 / 3.2808;
  const mtIn = input1 * 39.37;
  const inMt = input1 / 39.37;

  if (converter1.value === "kmmeters") {
    result1.value = kmMt;
  } else if (converter1.value === "meterskm") {
    result1.value = mtKm;
  } else if (converter1.value === "kmmiles") {
    result1.value = kmMl;
  } else if (converter1.value === "mileskm") {
    result1.value = mlKm;
  } else if (converter1.value === "metersfeet") {
    result1.value = mtFt;
  } else if (converter1.value === "feetmeters") {
    result1.value = ftMt;
  } else if (converter1.value === "metersinch") {
    result1.value = mtIn;
  } else if (converter1.value === "inchmeters") {
    result1.value = inMt;
  } else {
    return "No input added";
  }
}

function one() {
  let cm = document.getElementById("cm").value;
  let meter = document.getElementById("meter");
  let kilometer = document.getElementById("kilometer");
  let melimeter = document.getElementById("melimeter");
  let inch = document.getElementById("inch");
  let foot = document.getElementById("foot");
  let miles = document.getElementById("miles");

  let cmToMeter = cm / 100;
  let cmTokm = cm * 1.0e-5;
  let cmToMm = cm * 10;
  let cmToInch = parseFloat(cm * 0.3937007874).toFixed(7);
  let cmToFoot = parseFloat(cm * 0.032808399).toFixed(7);
  let cmToMiles = parseFloat(cm * 6.2137119223733e-6).toFixed(7);

  // VALUE RESULTS
  meter.value = cmToMeter;
  kilometer.value = cmTokm;
  melimeter.value = cmToMm;
  inch.value = cmToInch;
  foot.value = cmToFoot;
  miles.value = cmToMiles;
}

function two() {
  let cm = document.getElementById("cm");
  let meter = document.getElementById("meter").value;
  let kilometer = document.getElementById("kilometer");
  let melimeter = document.getElementById("melimeter");
  let inch = document.getElementById("inch");
  let foot = document.getElementById("foot");
  let miles = document.getElementById("miles");

  let mToCm = meter * 100;
  let mTokm = meter * 0.001;
  let mToMm = meter * 1000;
  let mToInch = parseFloat(meter / 0.0254).toFixed(7);
  let mToFoot = parseFloat(meter * 3.280839895).toFixed(7);
  let mToMiles = parseFloat(meter * 0.0006213712).toFixed(7);

  // VALUE RESULTS
  cm.value = mToCm;
  kilometer.value = mTokm;
  melimeter.value = mToMm;
  inch.value = mToInch;
  foot.value = mToFoot;
  miles.value = mToMiles;
}

function three() {
  let cm = document.getElementById("cm");
  let meter = document.getElementById("meter");
  let kilometer = document.getElementById("kilometer").value;
  let melimeter = document.getElementById("melimeter");
  let inch = document.getElementById("inch");
  let foot = document.getElementById("foot");
  let miles = document.getElementById("miles");

  let kmToCm = kilometer * 100000;
  let kmTometer = kilometer * 1000;
  let kmToMm = kilometer * 1000000;
  let kmToInch = parseFloat(kilometer / 39370.078740157).toFixed(7);
  let kmToFoot = parseFloat(kilometer * 3280.8398950131).toFixed(7);
  let kmToMiles = parseFloat(kilometer * 0.6213711922).toFixed(7);

  // VALUE RESULTS
  cm.value = kmToCm;
  meter.value = kmTometer;
  melimeter.value = kmToMm;
  inch.value = kmToInch;
  foot.value = kmToFoot;
  miles.value = kmToMiles;
}

function melimeter() {
  let cm = document.getElementById("cm");
  let meter = document.getElementById("meter");
  let kilometer = document.getElementById("kilometer");
  let melimeter = document.getElementById("melimeter").value;
  let inch = document.getElementById("inch");
  let foot = document.getElementById("foot");
  let miles = document.getElementById("miles");

  let mmToCm = melimeter * 0.1;
  let mmTometer = melimeter * 0.001;
  let mmTokm = melimeter * 1.0e-6;
  let mmToInch = parseFloat(melimeter * 0.0393700787).toFixed(7);
  let mmToFoot = parseFloat(melimeter * 0.0032808399).toFixed(7);
  let mmToMiles = parseFloat(melimeter * 6.2137119223733e-7).toFixed(7);

  // VALUE RESULTS
  cm.value = mmToCm;
  meter.value = mmTometer;
  kilometer.value = mmTokm;
  inch.value = mmToInch;
  foot.value = mmToFoot;
  miles.value = mmToMiles;
}

function inch() {
  let cm = document.getElementById("cm");
  let meter = document.getElementById("meter");
  let kilometer = document.getElementById("kilometer");
  let melimeter = document.getElementById("melimeter");
  let inch = document.getElementById("inch").value;
  let foot = document.getElementById("foot");
  let miles = document.getElementById("miles");

  let inchToCm = inch * 2.54;
  let inchTometer = inch * 0.0254;
  let inchTokm = inch * 2.54e-5;
  let inchTomm = parseFloat(inch * 25.4).toFixed(7);
  let inchToFoot = parseFloat(inch * 0.0833333333).toFixed(7);
  let inchToMiles = parseFloat(inch * 1.57828e-5).toFixed(7);

  // VALUE RESULTS
  cm.value = inchToCm;
  meter.value = inchTometer;
  kilometer.value = inchTokm;
  melimeter.value = inchTomm;
  foot.value = inchToFoot;
  miles.value = inchToMiles;
}

function foot() {
  let cm = document.getElementById("cm");
  let meter = document.getElementById("meter");
  let kilometer = document.getElementById("kilometer");
  let melimeter = document.getElementById("melimeter");
  let inch = document.getElementById("inch");
  let foot = document.getElementById("foot").value;
  let miles = document.getElementById("miles");

  let footToCm = foot * 30.48;
  let footTometer = foot * 0.3048;
  let footTokm = foot * 0.0003048;
  let footTomm = parseFloat(foot * 304.8).toFixed(7);
  let footToinch = parseFloat(foot * 12).toFixed(7);
  let footToMiles = parseFloat(foot * 0.0001893939).toFixed(7);

  // VALUE RESULTS
  cm.value = footToCm;
  meter.value = footTometer;
  kilometer.value = footTokm;
  melimeter.value = footTomm;
  inch.value = footToinch;
  miles.value = footToMiles;
}

function miles() {
  let cm = document.getElementById("cm");
  let meter = document.getElementById("meter");
  let kilometer = document.getElementById("kilometer");
  let melimeter = document.getElementById("melimeter");
  let inch = document.getElementById("inch");
  let foot = document.getElementById("foot");
  let miles = document.getElementById("miles").value;

  let milesToCm = miles * 160934.4;
  let milesTometer = miles * 1609.344;
  let milesTokm = miles * 1.609344;
  let milesTomm = parseFloat(miles * 1609344).toFixed(7);
  let milesToinch = parseFloat(miles * 63360).toFixed(7);
  let milesTofoot = parseFloat(miles * 5280).toFixed(7);

  // VALUE RESULTS
  cm.value = milesToCm;
  meter.value = milesTometer;
  kilometer.value = milesTokm;
  melimeter.value = milesTomm;
  inch.value = milesToinch;
  foot.value = milesTofoot;
}

// Basic JavaScript Exercises

function getCounterValue() {
  const el = document.getElementById("counter");
  return parseInt(el.textContent, 10) || 0;
}

function setCounterValue(val) {
  document.getElementById("counter").textContent = String(val);
}

function tickUp() {
  const current = getCounterValue();
  setCounterValue(current + 1);
}

function tickDown() {
  const current = getCounterValue();
  setCounterValue(current - 1);
}

function runForLoop() {
  const counter = getCounterValue();
  let out = [];

  for (let i = 0; i <= counter; i++) {
    out.push(i);
  }

  document.getElementById("forLoopResult").textContent = out.join(" ");
}

function showOddNumbers() {
  const counter = getCounterValue();
  let out = [];

  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) out.push(i);
  }

  document.getElementById("oddNumberResult").textContent = out.join(" ");
}

function addMultiplesToArray() {
  const counter = getCounterValue();
  let arr = [];

  for (let i = 5; i <= counter; i += 5) {
    arr.push(i);
  }

  arr.reverse();
  console.log(arr);
}

function readCarFields() {
  const type = document.getElementById("carType").value;
  const mpg = document.getElementById("carMPG").value;
  const color = document.getElementById("carColor").value;

  return { cType: type, cMPG: mpg, cColor: color };
}

function printCarObject() {
  const carObj = readCarFields();
  console.log(carObj);
}

function loadCar(which) {
  let obj = null;

  if (which === 1 && typeof carObject1 !== "undefined") obj = carObject1;
  if (which === 2 && typeof carObject2 !== "undefined") obj = carObject2;
  if (which === 3 && typeof carObject3 !== "undefined") obj = carObject3;

  if (!obj) return;

  document.getElementById("carType").value = obj.cType;
  document.getElementById("carMPG").value = obj.cMPG;
  document.getElementById("carColor").value = obj.cColor;
}

function changeColor(which) {
  const p = document.getElementById("styleParagraph");

  if (which === 1) p.style.color = "red";
  if (which === 2) p.style.color = "green";
  if (which === 3) p.style.color = "blue";
}

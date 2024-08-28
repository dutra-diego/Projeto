import {
  verifyChange,
  verifyMinValueCheckbox,
  verifyMaxValueCheckbox,
  getSearch,
} from "./functions.js";
const checkboxSale = document.getElementById("sale");
checkboxSale.addEventListener("click", () => {
  const verifySaleCheckBox = checkboxSale.checked;
  if (verifySaleCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxFreeShip = document.getElementById("freeship");
checkboxFreeShip.addEventListener("click", () => {
  const verifyFreeShipCheckBox = checkboxFreeShip.checked;
  if (verifyFreeShipCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxEvga = document.getElementById("evga");
checkboxEvga.addEventListener("click", () => {
  const verifyEvgaCheckBox = checkboxEvga.checked;
  if (verifyEvgaCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxRedgragon = document.getElementById("redgragon");
checkboxRedgragon.addEventListener("click", () => {
  const verifyRedgragonCheckBox = checkboxRedgragon.checked;
  if (verifyRedgragonCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});
const checkboxHyperfury = document.getElementById("hyperfury");
checkboxHyperfury.addEventListener("click", () => {
  const verifyHyperfuryCheckBox = checkboxHyperfury.checked;
  if (verifyHyperfuryCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxOther = document.getElementById("other");
checkboxOther.addEventListener("click", () => {
  const verifyOtherCheckBox = checkboxOther.checked;
  if (verifyOtherCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxRedragon = document.getElementById("redragon");
checkboxRedragon.addEventListener("click", () => {
  const verifyRedragonCheckBox = checkboxRedragon.checked;
  if (verifyRedragonCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxMsi = document.getElementById("msi");
checkboxMsi.addEventListener("click", () => {
  const verifyMsiCheckBox = checkboxMsi.checked;
  if (verifyMsiCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkboxCorsair = document.getElementById("corsair");
checkboxCorsair.addEventListener("click", () => {
  const verifyCorsairCheckBox = checkboxCorsair.checked;
  if (verifyCorsairCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

const checkBoxNew = document.getElementById("new");
checkBoxNew.addEventListener("click", () => {
  const verifyNewCheckBox = checkBoxNew.checked;
  if (verifyNewCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});
const checkBoxSemi = document.getElementById("semi");
checkBoxSemi.addEventListener("click", () => {
  const verifySemiCheckBox = checkBoxSemi.checked;
  if (verifySemiCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});
const checkBoxGraphicCard = document.getElementById("graphiccard");
checkBoxGraphicCard.addEventListener("click", () => {
  const verifyGraphicCardCheckBox = checkBoxGraphicCard.checked;
  if (verifyGraphicCardCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});
const checkBoxKeyboard = document.getElementById("keyboard");
checkBoxKeyboard.addEventListener("click", () => {
  const verifyKeyboardheckBox = checkBoxKeyboard.checked;
  if (verifyKeyboardheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});
const checkboxHeadset = document.getElementById("headset");
checkboxHeadset.addEventListener("click", () => {
  const verifyHeadsetCheckBox = checkboxHeadset.checked;
  if (verifyHeadsetCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});
const checkboxGame = document.getElementById("game");
checkboxGame.addEventListener("click", () => {
  const verifycheckboxGameCheckBox = checkboxGame.checked;
  if (verifycheckboxGameCheckBox === true) {
    verifyChange();
  } else {
    verifyChange();
  }
});

priceMin.addEventListener("change", () => {
  verifyMinValueCheckbox();
});

priceMax.addEventListener("change", () => {
  verifyMaxValueCheckbox();
});

search.addEventListener("keyup", () => {
  getSearch();
});

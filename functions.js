import { items } from "./items.js";
function applyDiscount(price, sale) {
  const discount = price * (sale / 100);
  const pricewithDiscount = price - discount;
  return pricewithDiscount.toFixed(2);
}

function createACard() {
  const card = document.getElementById("items");
  card.innerHTML = "";
  items.forEach((item) => {
    const cardItem = document.createElement("div");
    cardItem.id = item.id;

    const content = `
        <img src="${item.img}" width="240px" height="160px"/>
        <h3>${item.title}</h3>
        <p><s>R$${item.price
          .toFixed(2)
          .replace(".", ",")}</s><span class="porcentage"> ${
      item.sale > 1 ? item.sale + "%" : " "
    }</span></p> 
        <div class="shipping" >
        <span class="currentValue">R$ ${applyDiscount(
          item.price,
          item.sale
        ).replace(".", ",")}</span>
      
          <span  class="greenValue">${
            item.freeship
              ? `Entrega grátis.
          <img src="./icons/shipping.svg" alt="">    `
              : "   "
          }     
          </span>
        </div>
        
        <div>
        <p class="description" id="d${item.id}">${item.description}</p>
        <button class="cartShop" id="b${item.id}">Adicionar ao carrinho</button>
        </div>
        `;

    cardItem.innerHTML = content;

    card.appendChild(cardItem);

    const button = document.getElementById(`${cardItem.id}`);

    button.addEventListener("mouseenter", function () {
      const button1 = document.getElementById(`b${item.id}`);
      button1.style.display = "flex";
      const desc = document.getElementById(`d${item.id}`);
      desc.style.display = "none";
    });

    button.addEventListener("mouseleave", function () {
      const button1 = document.getElementById(`b${item.id}`);
      button1.style.display = "none";
      const desc = document.getElementById(`d${item.id}`);
      desc.style.display = "block";
    });
  });
}
createACard();

export function verifyChange() {
  const checkboxSale = document.getElementById("sale");
  const verifySaleCheckBox = checkboxSale.checked;
  const checkboxFreeShip = document.getElementById("freeship");
  const verifyFreeShipCheckBox = checkboxFreeShip.checked;
  const checkboxEVGA = document.getElementById("evga");
  const verifyEvgaCheckBox = checkboxEVGA.checked;
  const checkboxRedgragon = document.getElementById("redgragon");
  const verifyRedgragonCheckBox = checkboxRedgragon.checked;
  const checkboxHyperfury = document.getElementById("hyperfury");
  const verifyHyperfuryCheckBox = checkboxHyperfury.checked;
  const checkboxOther = document.getElementById("other");
  const verifyOtherCheckBox = checkboxOther.checked;
  const checkboxRedragon = document.getElementById("redragon");
  const verifyRedragonCheckBox = checkboxRedragon.checked;
  const checkboxMsi = document.getElementById("msi");
  const verifyMsiCheckBox = checkboxMsi.checked;
  const checkboxCorsair = document.getElementById("corsair");
  const verifyCorsairCheckBox = checkboxCorsair.checked;
  const checkboxNew = document.getElementById("new");
  const verifyNewCheckBox = checkboxNew.checked;
  const checkboxSemi = document.getElementById("semi");
  const verifySemiCheckBox = checkboxSemi.checked;
  const checkboxGraphicCard = document.getElementById("graphiccard");
  const verifyGraphicCardCheckBox = checkboxGraphicCard.checked;
  const checkboxKeyboard = document.getElementById("keyboard");
  const verifyKeyboardCheckBox = checkboxKeyboard.checked;
  const checkboxHeadset = document.getElementById("headset");
  const verifyHeadsetCheckBox = checkboxHeadset.checked;
  const checkboxGame = document.getElementById("game");
  const verifyGameCheckBox = checkboxGame.checked;

  if (
    verifySaleCheckBox ||
    verifyFreeShipCheckBox ||
    verifyEvgaCheckBox ||
    verifyRedgragonCheckBox ||
    verifyHyperfuryCheckBox ||
    verifyOtherCheckBox ||
    verifyRedragonCheckBox ||
    verifyMsiCheckBox ||
    verifyCorsairCheckBox ||
    verifyNewCheckBox ||
    verifySemiCheckBox ||
    verifyGraphicCardCheckBox ||
    verifyKeyboardCheckBox ||
    verifyHeadsetCheckBox ||
    verifyGameCheckBox == true
  ) {
    const card = document.getElementById("items");
    card.innerHTML = "";
  } else {
    createACard();
  }

  verifySaleCheckBox ? createOnlySale() : null;
  verifyFreeShipCheckBox ? createOnlyFreeShip() : null;
  verifyEvgaCheckBox ? createOnlyBrand("evga") : null;
  verifyRedgragonCheckBox ? createOnlyBrand("redgragon") : null;
  verifyHyperfuryCheckBox ? createOnlyBrand("hyperfury") : null;
  verifyOtherCheckBox ? createOnlyBrand("other") : null;
  verifyRedragonCheckBox ? createOnlyBrand("redragon") : null;
  verifyMsiCheckBox ? createOnlyBrand("msi") : null;
  verifyCorsairCheckBox ? createOnlyBrand("corsair") : null;
  verifyNewCheckBox ? createOnlyCondition("new") : null;
  verifySemiCheckBox ? createOnlyCondition("semi") : null;
  verifyGraphicCardCheckBox ? createOnlyProduct("graphiccard") : null;
  verifyKeyboardCheckBox ? createOnlyProduct("keyboard") : null;
  verifyHeadsetCheckBox ? createOnlyProduct("headset") : null;
  verifyGameCheckBox ? createOnlyProduct("game") : null;
}

function createOnlySale() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.sale > 0) {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
        <img src="${item.img}" width="240px" height="160px"/>
        <h3>${item.title}</h3>
        <p><s>R$${item.price
          .toFixed(2)
          .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
        <div class="shipping">
        <span class="currentValue">R$ ${applyDiscount(
          item.price,
          item.sale
        ).replace(".", ",")}</span>
      
          <span  class="greenValue">${
            item.freeship
              ? `Entrega grátis.
          <img src="./icons/shipping.svg" alt="">    `
              : "   "
          }     
          </span>
        </div>
        
        <div>
        <p class="description" id="d${item.id}">${item.description}</p>
        <button class="cartShop" id="b${item.id}">Adicionar ao carrinho</button>
        </div>
        `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    }
  });
}

function createOnlyFreeShip() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.freeship === true) {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
        <img src="${item.img}" width="240px" height="160px"/>
        <h3>${item.title}</h3>
        <p><s>R$${item.price
          .toFixed(2)
          .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
        <div class="shipping"">
        <span class="currentValue">R$ ${applyDiscount(
          item.price,
          item.sale
        ).replace(".", ",")}</span>
      
          <span  class="greenValue">${
            item.freeship
              ? `Entrega grátis.
          <img src="./icons/shipping.svg" alt="">    `
              : "   "
          }     
          </span>
        </div>
        
        <div>
        <p class="description" id="d${item.id}">${item.description}</p>
        <button class="cartShop" id="b${item.id}">Adicionar ao carrinho</button>
        </div>
        `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    }
  });
}

function createOnlyBrand(brand) {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand == brand) {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
        <img src="${item.img}" width="240px" height="160px"/>
        <h3>${item.title}</h3>
        <p><s>R$${item.price
          .toFixed(2)
          .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
        <div class="shipping">
        <span class="currentValue">R$ ${applyDiscount(
          item.price,
          item.sale
        ).replace(".", ",")}</span>
      
          <span  class="greenValue">${
            item.freeship
              ? `Entrega grátis.
          <img src="./icons/shipping.svg" alt="">    `
              : "   "
          }     
          </span>
        </div>
        
        <div>
        <p class="description" id="d${item.id}">${item.description}</p>
        <button class="cartShop" id="b${item.id}">Adicionar ao carrinho</button>
        </div>
        `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    }
  });
}

function createOnlyCondition(condition) {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.condition === condition) {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
        <img src="${item.img}" width="240px" height="160px"/>
        <h3>${item.title}</h3>
        <p><s>R$${item.price
          .toFixed(2)
          .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
        <div class="shipping">
        <span class="currentValue">R$ ${applyDiscount(
          item.price,
          item.sale
        ).replace(".", ",")}</span>
      
          <span  class="greenValue">${
            item.freeship
              ? `Entrega grátis.
          <img src="./icons/shipping.svg" alt="">    `
              : "   "
          }     
          </span>
        </div>
        
        <div>
        <p class="description" id="d${item.id}">${item.description}</p>
        <button class="cartShop" id="b${item.id}">Adicionar ao carrinho</button>
        </div>
        `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    }
  });
}

function createOnlyProduct(product) {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.product === product) {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
        <img src="${item.img}" width="240px" height="160px"/>
        <h3>${item.title}</h3>
        <p><s>R$${item.price
          .toFixed(2)
          .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
        <div class="shipping"">
        <span class="currentValue">R$ ${applyDiscount(
          item.price,
          item.sale
        ).replace(".", ",")}</span>
      
          <span  class="greenValue">${
            item.freeship
              ? `Entrega grátis.
          <img src="./icons/shipping.svg" alt="">    `
              : "   "
          }     
          </span>
        </div>
        
        <div>
        <p class="description" id="d${item.id}">${item.description}</p>
        <button class="cartShop" id="b${item.id}">Adicionar ao carrinho</button>
        </div>
        `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    }
  });
}

export function verifyMinValueCheckbox() {
  const checkbox = document.getElementById("priceMin").value;

  if (checkbox > 0) {
    const card = document.getElementById("items");
    card.innerHTML = "";

    items.forEach((item) => {
      if (item.price > checkbox) {
        const cardItem = document.createElement("div");
        cardItem.id = item.id;

        const content = `
            <img src="${item.img}" width="240px" height="160px"/>
            <h3>${item.title}</h3>
            <p><s>R$${item.price
              .toFixed(2)
              .replace(".", ",")}</s><span class="porcentage"> ${
          item.sale > 1 ? item.sale + "%" : " "
        }</span></p> 
            <div class="shipping"">
            <span class="currentValue">R$ ${applyDiscount(
              item.price,
              item.sale
            ).replace(".", ",")}</span>
          
              <span  class="greenValue">${
                item.freeship
                  ? `Entrega grátis.
              <img src="./icons/shipping.svg" alt="">    `
                  : "   "
              }     
              </span>
            </div>
            
            <div>
            <p class="description" id="d${item.id}">${item.description}</p>
            <button class="cartShop" id="b${
              item.id
            }">Adicionar ao carrinho</button>
            </div>
            `;

        cardItem.innerHTML = content;

        card.appendChild(cardItem);

        const button = document.getElementById(`${cardItem.id}`);

        button.addEventListener("mouseenter", function () {
          const button1 = document.getElementById(`b${item.id}`);
          button1.style.display = "block";
          const desc = document.getElementById(`d${item.id}`);
          desc.style.display = "none";
        });

        button.addEventListener("mouseleave", function () {
          const button1 = document.getElementById(`b${item.id}`);
          button1.style.display = "none";
          const desc = document.getElementById(`d${item.id}`);
          desc.style.display = "block";
        });
      }
    });
  }
}

export function verifyMaxValueCheckbox() {
  const checkbox = document.getElementById("priceMax").value;

  const card = document.getElementById("items");
  card.innerHTML = "";

  items.forEach((item) => {
    if (item.price <= checkbox) {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
            <img src="${item.img}" width="240px" height="160px"/>
            <h3>${item.title}</h3>
            <p><s>R$${item.price
              .toFixed(2)
              .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
            <div class="shipping"">
            <span class="currentValue">R$ ${applyDiscount(
              item.price,
              item.sale
            ).replace(".", ",")}</span>
          
              <span  class="greenValue">${
                item.freeship
                  ? `Entrega grátis.
              <img src="./icons/shipping.svg" alt="">    `
                  : "   "
              }     
              </span>
            </div>
            
            <div>
            <p class="description" id="d${item.id}">${item.description}</p>
            <button class="cartShop" id="b${
              item.id
            }">Adicionar ao carrinho</button>
            </div>
            `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    }
  });

  if (checkbox.length < 1) {
    createACard();
  }
}

export function getSearch() {
  const search = document.getElementById("search").value;

  if (search.length >= 1) {
    let pickByTitle = items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    const card = document.getElementById("items");
    card.innerHTML = "";

    pickByTitle.forEach((item) => {
      const cardItem = document.createElement("div");
      cardItem.id = item.id;

      const content = `
          <img src="${item.img}" width="240px" height="160px"/>
          <h3>${item.title}</h3>
          <p><s>R$${item.price
            .toFixed(2)
            .replace(".", ",")}</s><span class="porcentage"> ${
        item.sale > 1 ? item.sale + "%" : " "
      }</span></p> 
          <div class="shipping"">
          <span class="currentValue">R$ ${applyDiscount(
            item.price,
            item.sale
          ).replace(".", ",")}</span>
        
            <span  class="greenValue">${
              item.freeship
                ? `Entrega grátis.
            <img src="./icons/shipping.svg" alt="">    `
                : "   "
            }     
            </span>
          </div>
          
          <div>
          <p class="description" id="d${item.id}">${item.description}</p>
          <button class="cartShop" id="b${
            item.id
          }">Adicionar ao carrinho</button>
          </div>
          `;

      cardItem.innerHTML = content;

      card.appendChild(cardItem);

      const button = document.getElementById(`${cardItem.id}`);

      button.addEventListener("mouseenter", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "block";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "none";
      });

      button.addEventListener("mouseleave", function () {
        const button1 = document.getElementById(`b${item.id}`);
        button1.style.display = "none";
        const desc = document.getElementById(`d${item.id}`);
        desc.style.display = "block";
      });
    });
  }

  if (search.length < 1) {
    createACard();
  }
}

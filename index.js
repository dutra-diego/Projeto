const items = [
  {
    id: 1,
    img: "./images/placadevideo.jpeg",
    title: "Product name A",
    brand: "evga",
    condition: "new",
    product: "graphiccard",
    sale: 30,
    freeship: true,
    price: 4500.0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 2,
    img: "./images/placadevideo.jpeg",
    title: "Product name A",
    brand: "evga",
    condition: "new",
    product: "graphiccard",
    sale: 0,
    freeship: true,
    price: 4500.0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 3,
    img: "./images/placadevideo.jpeg",
    title: "Product name A",
    brand: "evga",
    condition: "semi",
    product: "graphiccard",
    sale: 30,
    freeship: false,
    price: 4500.0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 4,
    img: "./images/redragon.jpg",
    title: "Keyboard redragon",
    brand: "redragon",
    condition: "new",
    product: "keyboard",
    sale: 9,
    freeship: false,
    price: 530.0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 5,
    img: "./images/redragon.jpg",
    title: "Keyboard redragon",
    brand: "redragon",
    condition: "semi",
    product: "keyboard",
    sale: 0,
    freeship: true,
    price: 480.0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 6,
    img: "./images/redragon.jpg",
    title: "Keyboard redragon",
    brand: "redragon",
    condition: "new",
    product: "keyboard",
    sale: 0,
    freeship: false,
    price: 480.0,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 7,
    img: "./images/hyperx.jpg",
    title: "Headset Gamer Cloud Stinger Core",
    brand: "hyperx",
    condition: "semi",
    product: "headset",
    sale: 20,
    freeship: true,
    price: 281.99,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 8,
    img: "./images/hyperx.jpg",
    title: "Headset Gamer Cloud Stinger Core",
    brand: "hyperx",
    condition: "new",
    product: "headset",
    sale: 0,
    freeship: true,
    price: 281.99,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 9,
    img: "./images/hyperx.jpg",
    title: "Headset Gamer Cloud Stinger Core",
    brand: "hyperx",
    condition: "new",
    product: "headset",
    sale: 0,
    freeship: false,
    price: 281.99,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },

  {
    id: 10,
    img: "./images/Thewitcher.png",
    title: "The witcher 3 - Wild Hunt",
    brand: "other",
    condition: "new",
    product: "game",
    sale: 4,
    freeship: false,
    price: 124.99,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 11,
    img: "./images/Thewitcher.png",
    title: "The witcher 3 - Wild Hunt",
    brand: "other",
    condition: "new",
    product: "game",
    sale: 0,
    freeship: true,
    price: 124.99,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
  {
    id: 12,
    img: "./images/Thewitcher.png",
    title: "The witcher 3 - Wild Hunt",
    brand: "other",
    condition: "semi",
    product: "game",
    sale: 0,
    freeship: false,
    price: 124.99,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ex, error earum quidem magni dolorum delectus!",
  },
];
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

function verifyChange() {
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

  if (verifySaleCheckBox === true) {
    createOnlySale();
  }

  if (verifyFreeShipCheckBox === true) {
    createOnlyFreeShip();
  }

  if (verifyEvgaCheckBox === true) {
    createOnlyEvga();
  }

  if (verifyRedgragonCheckBox === true) {
    createOnlyRedgragon();
  }

  if (verifyHyperfuryCheckBox === true) {
    createOnlyHyperFury();
  }
  if (verifyOtherCheckBox === true) {
    createOnlyOther();
  }
  if (verifyRedragonCheckBox === true) {
    createOnlyRedragon();
  }
  if (verifyMsiCheckBox === true) {
    createOnlyMsi();
  }

  if (verifyCorsairCheckBox === true) {
    createOnlyCorsair();
  }

  if (verifyNewCheckBox === true) {
    createOnlyNew();
  }
  if (verifySemiCheckBox === true) {
    createOnlySemi();
  }
  if (verifyGraphicCardCheckBox === true) {
    createOnlyGraphicCard();
  }
  if (verifyKeyboardCheckBox === true) {
    createOnlyKeyboard();
  }
  if (verifyHeadsetCheckBox === true) {
    createOnlyHeadset();
  }
  if (verifyGameCheckBox === true) {
    createOnlyGame();
  }
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

function createOnlyEvga() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "evga") {
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

function createOnlyRedgragon() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "redgragon") {
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

function createOnlyHyperFury() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "hyperfury") {
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

function createOnlyOther() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "other") {
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

function createOnlyRedragon() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "redragon") {
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
              ? `Entrega grátis.<img src="./icons/shipping.svg" alt=""/>`
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

function createOnlyMsi() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "msi") {
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

function createOnlyCorsair() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "corsair") {
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

function createOnlyCorsair() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.brand === "corsair") {
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

function createOnlyNew() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.condition === "new") {
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

function createOnlySemi() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.condition === "semi") {
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

function createOnlyGraphicCard() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.product === "graphiccard") {
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

function createOnlyKeyboard() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.product === "keyboard") {
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
function createOnlyHeadset() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.product === "headset") {
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

function createOnlyGame() {
  const card = document.getElementById("items");

  items.forEach((item) => {
    if (item.product === "game") {
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

function verifyMinValueCheckbox() {
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

function verifyMaxValueCheckbox() {
  const checkbox = document.getElementById("priceMax").value;

  const card = document.getElementById("items");
  card.innerHTML = "";

  items.forEach((item) => {
    if (item.price < checkbox) {
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

function getSearch() {
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

function applyDiscount(price, sale) {
  const discount = price * (sale / 100);
  const pricewithDiscount = price - discount;
  return pricewithDiscount.toFixed(2);
}

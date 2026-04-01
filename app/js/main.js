/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_cart.js"
/*!*************************!*\
  !*** ./src/js/_cart.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// import { pizzas } from './_data.js';

// const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');
// const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

// const createCartPage = (onNavigate) => {
//   const page = document.createElement('div');
//   page.className = 'cart-page min-h-screen flex flex-col items-center bg-white py-10';

//   const cart = getCart();

//   if (cart.length === 0) {
//     renderEmptyCart(page, onNavigate);
//   } else {
//     renderCartLayout(page, cart, onNavigate);
//   }

//   return page;
// };

// const renderEmptyCart = (page, onNavigate) => {
//   page.innerHTML = `
//     <div class="max-w-[800px] mx-auto flex flex-col items-center text-center">
//       <h1 class="text-4xl font-black mb-4">Корзина пустая 😕</h1>
//       <p class="text-[#777] text-lg mb-10">Вероятнее всего, вы не заказывали ещё пиццу.<br>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
//       <img src="./img/empty-cart.png" alt="Empty" class="w-[300px] mb-10">
//       <a href="/" id="backToCatalog" class="bg-[#282828] text-white px-8 py-3 rounded-full font-bold">Вернуться назад</a>
//     </div>`;

//   page.classList.toggle('justify-center')
//   page.querySelector('#backToCatalog').onclick = (e) => {
//     e.preventDefault();
//     onNavigate('main');
//   };
// };

// // Отрисовка основного каркаса
// const renderCartLayout = (page, cart, onNavigate) => {
//   page.innerHTML = `
//     <div class="max-w-[968px] w-full px-4 py-8 flex flex-col flex-grow">
//       <div class="flex items-center justify-between mb-8">
//         <div class="flex items-center gap-2 sm:gap-4">
//           <button id="backToCatalog" class="w-10 h-10 bg-[#f9f9f9] rounded-full flex items-center justify-center hover:bg-[#fe5f1e]/5 transition">
//             <img src="./img/cart-black.svg" class="w-5 h-5">
//           </button>
//           <h1 class="text-3xl sm:text-4xl font-black">Корзина</h1>
//         </div>
//         <button id="clearCartBtn" class="text-[#b6b6b6] hover:text-[#fe5f00] flex items-center gap-2 transition">
//           <span>Очистить корзину</span>
//         </button>
//       </div>

//       <div id="cartItemsList" class="flex-grow"></div>

//       <div> 
//         <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-8">
//           <p class="text-xl">Всего пицц: <b id="totalQty"></b></p>
//           <p class="text-xl">Сумма заказа: <b class="text-[#fe5f00]" id="totalPrice"></b></p>
//         </div>

//         <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-6 mt-8 bg-[#f6f6f6] py-6 px-6 rounded-2xl">
//           <button id="footerBack" class="px-8 py-4 border border-[#e2e2e2] rounded-full text-[#cacaca] font-bold hover:bg-[#282828] hover:text-white transition">Вернуться назад</button>
//           <button id="checkoutBtn" class="px-8 py-4 bg-[#fe5f00] text-white rounded-full font-bold hover:bg-[#e25600] transition">Оплатить сейчас</button>
//         </div>
//       </div>
//     </div>
//   `;

//   setupListeners(page, onNavigate);
//   updateDynamicParts(page, onNavigate);
// };

// // Обновление списка товаров и цифр
// const updateDynamicParts = (page, onNavigate) => {
//   const cart = getCart();
//   if (cart.length === 0) {
//     renderEmptyCart(page, onNavigate);
//     return;
//   }

//   const listContainer = page.querySelector('#cartItemsList');
//   const totalQtyEl = page.querySelector('#totalQty');
//   const totalPriceEl = page.querySelector('#totalPrice');

//   const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
//   const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

//   totalQtyEl.textContent = `${totalQty} шт.`;
//   totalPriceEl.textContent = `${totalPrice} ₽`;

//   listContainer.innerHTML = cart.map((item, idx) => {
//     const pizzaData = pizzas.find(p => p.id === item.id);
//     const imageSrc = pizzaData?.image ? pizzaData.image : './img/empty-cart.png';

//     return `
//     <div class="flex items-center justify-between w-full py-8 border-t border-[#f6f6f6]">

//       <!-- Левая часть: крупное фото и текст -->
//       <div class="flex items-center gap-6 flex-1">
//         <img src="${imageSrc}" class="w-24 h-24 object-contain flex-shrink-0" alt="${item.name}">
//         <div class="flex flex-col">
//           <h3 class="font-bold text-2xl tracking-tight">${item.name}</h3>
//           <p class="text-[#8d8d8d] text-lg">
//             ${item.type === 'thin' ? 'тонкое' : 'традиционное'} тесто, ${item.size} см.
//           </p>
//         </div>
//       </div>

//       <!-- Правая часть: Управление -->
//       <div class="flex items-center gap-20">

//         <!-- Кнопки +/- (Увеличенные) -->
//         <div class="flex items-center gap-3">
//           <button data-idx="${idx}" data-action="minus" class="w-9 h-9 rounded-full border-2 border-[#fe5f00] text-[#fe5f00] font-bold hover:bg-[#fe5f00] hover:text-white transition flex items-center justify-center text-xl">
//             -
//           </button>
//           <b class="text-2xl w-8 text-center">${item.qty}</b>
//           <button data-idx="${idx}" data-action="plus" class="w-9 h-9 rounded-full border-2 border-[#fe5f00] text-[#fe5f00] font-bold hover:bg-[#fe5f00] hover:text-white transition flex items-center justify-center text-xl">
//             +
//           </button>
//         </div>

//         <!-- Цена (Увеличенная) -->
//         <div class="w-28 text-center">
//           <b class="text-2xl whitespace-nowrap">${item.price * item.qty} ₽</b>
//         </div>

//         <!-- Кнопка удалить (Увеличенная) -->
//         <button data-idx="${idx}" data-action="remove" class="w-9 h-9 rounded-full border-2 border-[#e2e2e2] text-[#d3d3d3] hover:border-[#282828] hover:text-[#282828] transition flex items-center justify-center text-xl">
//           ×
//         </button>
//       </div>

//     </div>`;
//   }).join('');
// };

// const setupListeners = (page, onNavigate) => {
//   const goToMain = (e) => {
//     if (e) e.preventDefault();
//     onNavigate('main');
//   };

//   page.querySelector('#backToCatalog').onclick = goToMain;
//   page.querySelector('#footerBack').onclick = goToMain;

//   page.querySelector('#clearCartBtn').onclick = () => {
//     if (confirm('Очистить корзину?')) {
//       saveCart([]);
//       updateDynamicParts(page, onNavigate);
//     }
//   };

//   page.querySelector('#cartItemsList').onclick = (e) => {
//     const btn = e.target.closest('button');
//     if (!btn || btn.dataset.idx === undefined) return;

//     const idx = parseInt(btn.dataset.idx);
//     const action = btn.dataset.action;
//     let currentCart = getCart();

//     if (action === 'plus') currentCart[idx].qty += 1;
//     else if (action === 'minus') {
//       if (currentCart[idx].qty > 1) currentCart[idx].qty -= 1;
//       else currentCart.splice(idx, 1);
//     }
//     else if (action === 'remove') currentCart.splice(idx, 1);

//     saveCart(currentCart);
//     updateDynamicParts(page, onNavigate);
//   };

//   page.querySelector('#checkoutBtn').onclick = () => {
//     alert('Заказ принят!');
//     saveCart([]);
//     onNavigate('main');
//   };
// };

// export { createCartPage };

/***/ },

/***/ "./src/js/_components.js"
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ },

/***/ "./src/js/_data.js"
/*!*************************!*\
  !*** ./src/js/_data.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pizzas: () => (/* binding */ pizzas)
/* harmony export */ });
const pizzas = [{
  id: 1,
  name: "Чизбургер-пицца",
  price: 395,
  category: "Мясные",
  image: "./img/pizza-data/1.jpg",
  description: "Говядина, бекон, маринованные огурчики, томаты, красный лук, соус бургерный и сыр моцарелла"
}, {
  id: 2,
  name: "Сырная",
  price: 450,
  category: "Вегетарианская",
  image: "./img/pizza-data/2.jpg",
  description: "Микс сыров (моцарелла, чеддер, пармезан и сливочный сыр), нежный сливочный соус и ароматные специи"
}, {
  id: 3,
  name: "Креветки по-азиатски",
  price: 290,
  category: "Гриль",
  image: "./img/pizza-data/3.jpg",
  description: "Креветки, сладко-острый азиатский соус, кунжут, зеленый лук, болгарский перец и моцарелла"
}, {
  id: 4,
  name: "Сырный цыпленок",
  price: 385,
  category: "Мясные",
  image: "./img/pizza-data/4.jpg",
  description: "Куриное филе, моцарелла, сливочно-сырный соус, томаты и щепотка специй для яркого вкуса"
}, {
  id: 5,
  name: "Чизбургер-пицца",
  price: 395,
  category: "Мясные",
  image: "./img/pizza-data/5.jpg",
  description: "Говядина, бекон, маринованные огурчики, томаты, красный лук, соус бургерный и сыр моцарелла"
}, {
  id: 6,
  name: "Сырная",
  price: 450,
  category: "Вегетарианская",
  image: "./img/pizza-data/6.jpg",
  description: "Микс сыров (моцарелла, чеддер, пармезан и сливочный сыр), нежный сливочный соус и ароматные специи"
}, {
  id: 7,
  name: "Креветки по-азиатски",
  price: 290,
  category: "Гриль",
  image: "./img/pizza-data/7.jpg",
  description: "Креветки, сладко-острый азиатский соус, кунжут, зеленый лук, болгарский перец и моцарелла"
}, {
  id: 8,
  name: "Сырный цыпленок",
  price: 385,
  category: "Мясные",
  image: "./img/pizza-data/8.jpg",
  description: "Куриное филе, моцарелла, сливочно-сырный соус, томаты и щепотка специй для яркого вкуса"
}];

/***/ },

/***/ "./src/js/_filters.js"
/*!****************************!*\
  !*** ./src/js/_filters.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ },

/***/ "./src/js/_render.js"
/*!***************************!*\
  !*** ./src/js/_render.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_data.js */ "./src/js/_data.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_filters.js */ "./src/js/_filters.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cart.js */ "./src/js/_cart.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_render.js */ "./src/js/_render.js");






// import { createCartPage } from './_cart.js';

const root = document.querySelector('[data-js-root]');
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

/////////// CARD-PAGE START ////////////////////////////////////////////////////
const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');
const saveCart = cart => localStorage.setItem('cart', JSON.stringify(cart));
const createCartPage = onNavigate => {
  const page = document.createElement('div');
  page.className = 'cart-page min-h-screen flex flex-col items-center bg-white py-10';
  const cart = getCart();
  if (cart.length === 0) {
    renderEmptyCart(page, onNavigate);
  } else {
    renderCartLayout(page, cart, onNavigate);
  }
  return page;
};
const renderEmptyCart = (page, onNavigate) => {
  page.innerHTML = `
    <div class="max-w-[800px] mx-auto flex flex-col items-center text-center">
      <h1 class="text-4xl font-black mb-4">Корзина пустая 😕</h1>
      <p class="text-[#777] text-lg mb-10">Вероятнее всего, вы не заказывали ещё пиццу.<br>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src="./img/empty-cart.png" alt="Empty" class="w-[300px] mb-10">
      <a href="/" id="backToCatalog" class="bg-[#282828] text-white px-8 py-3 rounded-full font-bold">Вернуться назад</a>
    </div>`;
  page.classList.toggle('justify-center');
  page.querySelector('#backToCatalog').onclick = e => {
    e.preventDefault();
    onNavigate('main');
  };
};

// Отрисовка основного каркаса
const renderCartLayout = (page, cart, onNavigate) => {
  page.innerHTML = `
    <div class="max-w-[968px] w-full px-4 py-8 flex flex-col flex-grow">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-2 sm:gap-4">
          <button id="backToCatalog" class="w-10 h-10 bg-[#f9f9f9] rounded-full flex items-center justify-center hover:bg-[#fe5f1e]/5 transition">
            <img src="./img/cart-black.svg" class="w-5 h-5">
          </button>
          <h1 class="text-3xl sm:text-4xl font-black">Корзина</h1>
        </div>
        <button id="clearCartBtn" class="text-[#b6b6b6] hover:text-[#fe5f00] flex items-center gap-2 transition">
          <span>Очистить корзину</span>
        </button>
      </div>

      <div id="cartItemsList" class="flex-grow"></div>

      <div> 
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-8">
          <p class="text-xl">Всего пицц: <b id="totalQty"></b></p>
          <p class="text-xl">Сумма заказа: <b class="text-[#fe5f00]" id="totalPrice"></b></p>
        </div>

        <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-6 mt-8 bg-[#f6f6f6] py-6 px-6 rounded-2xl">
          <button id="footerBack" class="px-8 py-4 border border-[#e2e2e2] rounded-full text-[#cacaca] font-bold hover:bg-[#282828] hover:text-white transition">Вернуться назад</button>
          <button id="checkoutBtn" class="px-8 py-4 bg-[#fe5f00] text-white rounded-full font-bold hover:bg-[#e25600] transition">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  `;
  setupListeners(page, onNavigate);
  updateDynamicParts(page, onNavigate);
};

// Обновление списка товаров и цифр
const updateDynamicParts = (page, onNavigate) => {
  const cart = getCart();
  if (cart.length === 0) {
    renderEmptyCart(page, onNavigate);
    return;
  }
  const listContainer = page.querySelector('#cartItemsList');
  const totalQtyEl = page.querySelector('#totalQty');
  const totalPriceEl = page.querySelector('#totalPrice');
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalQtyEl.textContent = `${totalQty} шт.`;
  totalPriceEl.textContent = `${totalPrice} ₽`;
  listContainer.innerHTML = cart.map((item, idx) => {
    const pizzaData = _data_js__WEBPACK_IMPORTED_MODULE_1__.pizzas.find(p => p.id === item.id);
    const imageSrc = pizzaData?.image ? pizzaData.image : './img/empty-cart.png';
    return `
    <div class="cart-item flex flex-col lg:flex-row lg:items-center justify-between w-full py-6 lg:py-8 border-t border-[#f6f6f6]">
      
      <!-- Левая часть: фото и текст -->
      <div class="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-0 flex-1">
        <img src="${imageSrc}" class="w-16 h-16 lg:w-24 lg:h-24 object-contain flex-shrink-0" alt="${item.name}">
        <div class="flex flex-col">
          <h3 class="font-bold text-lg lg:text-2xl tracking-tight">${item.name}</h3>
          <p class="text-[#8d8d8d] text-sm lg:text-lg">
            ${item.type === 'thin' ? 'тонкое' : 'традиционное'} тесто, ${item.size} см.
          </p>
        </div>
      </div>

      <!-- Правая часть: Управление -->
      <div class="flex items-center justify-between lg:justify-end gap-4 lg:gap-8 xl:gap-20 w-full lg:w-auto">
        
        <!-- Кнопки +/- -->
        <div class="flex items-center gap-2 lg:gap-3">
          <button data-idx="${idx}" data-action="minus" class="w-7 h-7 lg:w-9 lg:h-9 rounded-full border-2 border-[#fe5f00] text-[#fe5f00] font-bold hover:bg-[#fe5f00] hover:text-white transition flex items-center justify-center text-base lg:text-xl">
            -
          </button>
          <b class="text-lg lg:text-2xl w-6 lg:w-8 text-center">${item.qty}</b>
          <button data-idx="${idx}" data-action="plus" class="w-7 h-7 lg:w-9 lg:h-9 rounded-full border-2 border-[#fe5f00] text-[#fe5f00] font-bold hover:bg-[#fe5f00] hover:text-white transition flex items-center justify-center text-base lg:text-xl">
            +
          </button>
        </div>

        <!-- Цена -->
        <div class="w-20 lg:w-28 text-center ml-auto">
        <b class="text-lg lg:text-2xl whitespace-nowrap">${item.price * item.qty} ₽</b>
        </div>

        <!-- Кнопка удалить -->
        <button data-idx="${idx}" data-action="remove" class="w-7 h-7 lg:w-9 lg:h-9 rounded-full border-2 border-[#e2e2e2] text-[#d3d3d3] hover:border-[#282828] hover:text-[#282828] transition flex items-center justify-center text-base lg:text-xl">
          ×
        </button>
      </div>

    </div>`;
  }).join('');
};
const setupListeners = (page, onNavigate) => {
  const goToMain = e => {
    if (e) e.preventDefault();
    onNavigate('main');
  };
  page.querySelector('#backToCatalog').onclick = goToMain;
  page.querySelector('#footerBack').onclick = goToMain;
  page.querySelector('#clearCartBtn').onclick = () => {
    if (confirm('Очистить корзину?')) {
      saveCart([]);
      updateDynamicParts(page, onNavigate);
    }
  };
  page.querySelector('#cartItemsList').onclick = e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.idx === undefined) return;
    const idx = parseInt(btn.dataset.idx);
    const action = btn.dataset.action;
    let currentCart = getCart();
    if (action === 'plus') currentCart[idx].qty += 1;else if (action === 'minus') {
      if (currentCart[idx].qty > 1) currentCart[idx].qty -= 1;else currentCart.splice(idx, 1);
    } else if (action === 'remove') currentCart.splice(idx, 1);
    saveCart(currentCart);
    updateDynamicParts(page, onNavigate);
  };
  page.querySelector('#checkoutBtn').onclick = () => {
    alert('Заказ принят!');
    saveCart([]);
    onNavigate('main');
  };
};

/////////// CARD-PAGE END ////////////////////////////////////////////////////

// Получение текущего варианта из формы
const getCurrentVariant = form => {
  const data = new FormData(form);
  const basePrice = Number(data.get('base-price'));
  const size = Number(data.get('size'));
  const type = data.get('type');
  let finalPrice = basePrice;
  if (type === 'traditional') finalPrice += 100;
  if (size === 30) finalPrice += 100;
  if (size === 40) finalPrice += 200;
  return {
    id: Number(data.get('id')),
    size: size,
    type: type,
    name: data.get('name'),
    price: finalPrice
  };
};

// Добавление в корзину
const addToCart = pizza => {
  const existingIndex = cart.findIndex(item => item.id === pizza.id && item.size === pizza.size && item.type === pizza.type);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      ...pizza,
      image: pizza.image,
      qty: 1
    });
  }
  saveAndRefresh();
};

// Удаление из корзины
const decrementCart = pizza => {
  const index = cart.findIndex(item => item.id === pizza.id && item.size === pizza.size && item.type === pizza.type);
  if (index > -1) {
    if (cart[index].qty > 1) {
      cart[index].qty -= 1;
    } else {
      cart.splice(index, 1);
    }
    saveAndRefresh();
  }
};

// Удаление пиццы по id
const removeFromCart = pizzaId => {
  cart = cart.filter(item => item.id !== Number(pizzaId));
  saveAndRefresh();
};

// Очищение корзины
const clearCart = () => {
  cart = [];
  saveAndRefresh();
};
const navigate = pageName => {
  if (pageName === 'main') {
    window.location.hash = ''; // Очищаем хэш
    showMainPage();
  } else if (pageName === 'cart') {
    window.location.hash = 'cart'; // Устанавливаем хэш #cart
    root.innerHTML = '';
    root.append(createHeader(false));
    root.append(createCartPage(navigate));
  }
};
window.addEventListener('hashchange', () => {
  const page = window.location.hash === '#cart' ? 'cart' : 'main';
  if (page === 'cart') {
    root.innerHTML = '';
    root.append(createHeader(false));
    root.append(createCartPage(navigate));
  } else {
    showMainPage();
  }
});

// Функция сохранения и обновления UI
const saveAndRefresh = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
};

// Количество пиццы для бейджа
const getCartQty = pizzaId => {
  return cart.filter(item => item.id === Number(pizzaId)).reduce((sum, item) => sum + item.qty, 0);
};

// Обновление всех UI элементов
const updateCartUI = () => {
  updateCartBtn();
  updateAllPizzaButtons();
};

// Обновление кнопки корзины в хедере
const updateCartBtn = () => {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.querySelector('span:first-child').textContent = `${totalPrice} ₽`;
    const qtySpan = cartBtn.querySelector('span:last-child');
    qtySpan.textContent = totalQty || '0';
  }
};

// Обновление ВСЕХ кнопок карточек на странице
const updateAllPizzaButtons = () => {
  document.querySelectorAll('[data-pizza-id]').forEach(form => {
    const pizzaId = Number(form.getAttribute('data-pizza-id'));
    const qty = getCartQty(pizzaId);
    const footer = form.querySelector('.footer');
    const addBtn = footer.querySelector('.add-btn');
    const oldMinus = footer.querySelector('.minus-btn');
    const oldBadge = addBtn.querySelector('.qty-badge');
    if (oldMinus) oldMinus.remove();
    if (oldBadge) oldBadge.remove();
    addBtn.classList.remove('pl-2', 'pr-4');
    addBtn.classList.add('px-6');
    addBtn.style.position = 'relative';
    if (qty > 0) {
      addBtn.classList.remove('px-6');
      addBtn.classList.add('pl-2', 'pr-4');
      const minusBtn = el('button', 'minus-btn w-9 h-9 bg-white border border-[#fe5f00] text-[#fe5f00] rounded-full flex items-center justify-center hover:bg-[#fe5f00] hover:text-white transition-all font-bold flex-shrink-0', '−');
      minusBtn.type = 'button';
      minusBtn.onclick = e => {
        e.preventDefault();
        decrementCart(getCurrentVariant(form));
      };
      addBtn.before(minusBtn);
      const badge = el('span', 'qty-badge absolute -top-2 -right-2 bg-[#fe5f00] text-white text-[12px] rounded-full w-6 h-6 flex items-center justify-center font-bold border-2 border-white shadow-sm', qty);
      addBtn.appendChild(badge);
    }
  });
};

// Функция создания элементов
function el(tag, classes = '', content = '', attributes = {}) {
  const element = document.createElement(tag);
  if (classes) element.className = classes;
  if (content !== undefined) element.innerHTML = content;
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined) element.setAttribute(key, value);
  });
  return element;
}

// --- КОМПОНЕНТЫ ИНТЕРФЕЙСА ---

function createHeader(showCartBtn = true) {
  const header = el('header', 'flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-10 mb-10 gap-4 sm:gap-0');
  const logoWrapper = el('a', 'flex items-center gap-4');
  logoWrapper.href = "#";
  logoWrapper.innerHTML = `
        <img src="./img/logo.svg" alt="Logo" class="w-10 h-10">
        <div>
            <h1 class="text-2xl font-black uppercase tracking-[0.01em] leading-none">React Pizza</h1>
            <p class="text-[#7b7b7b] text-base">самая вкусная пицца во вселенной</p>
        </div>
    `;
  header.append(logoWrapper);
  if (showCartBtn) {
    const cartBtn = el('button', 'cart-btn flex-none bg-[#fe5f00] text-white px-6 py-3 rounded-full flex items-center gap-4 font-bold hover:bg-[#e25600] transition cursor-pointer');
    cartBtn.innerHTML = `<span>0 ₽</span><div class="w-[1px] h-6 bg-white/30"></div><div class="flex items-center gap-2"><img src="./img/cart-icon.svg" class="w-4 h-4"><span>0</span></div>`;
    cartBtn.onclick = e => {
      e.preventDefault();
      navigate('cart');
    };
    header.append(cartBtn);
  }
  return header;
}
let currentSort = 'popular';
let currentFilter = 'Все';
function createFilters() {
  const wrapper = el('div', 'flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0');
  const nav = el('nav', 'flex gap-2 flex-wrap');
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  categories.forEach((cat, i) => {
    const btn = el('button', `category-btn px-7 py-3 rounded-full font-bold transition cursor-pointer ${i === 0 ? 'bg-[#282828] text-white' : 'bg-[#f9f9f9] text-[#2c2c2c]'}`, cat);
    btn.onclick = () => filterPizzas(cat);
    nav.append(btn);
  });
  const sort = el('div', 'relative flex items-center gap-2 cursor-pointer');
  sort.innerHTML = `
    <img id="sortIcon" src="./img/arrow-up.svg" class="w-2 transition-transform duration-200">
    <span class="font-bold text-sm">Сортировка по:</span>
    <span id="selectedSortText" class="text-[#fe5f00] border-b border-dashed border-[#fe5f00] text-sm">популярности</span>
    <div id="sortPopup" class="hidden absolute right-0 top-full mt-3 w-[132px] bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.09)] overflow-hidden z-10">
      <ul class="py-2">
        <li class="sort-item px-3 py-2 text-sm cursor-pointer hover:bg-[#fe5f1e]/5 active font-bold text-[#fe5f1e]" data-sort="popular">популярности</li>
        <li class="sort-item px-3 py-2 text-sm cursor-pointer hover:bg-[#fe5f1e]/5" data-sort="price">цене</li>
        <li class="sort-item px-3 py-2 text-sm cursor-pointer hover:bg-[#fe5f1e]/5" data-sort="alphabet">алфавиту</li>
      </ul>
    </div>
  `;
  const sortIcon = sort.querySelector('#sortIcon');
  const sortPopup = sort.querySelector('#sortPopup');
  const selectedSortText = sort.querySelector('#selectedSortText');
  const sortItems = sort.querySelectorAll('.sort-item');
  sort.onclick = e => {
    if (e.target.closest('.sort-item')) return;
    const isHidden = sortPopup.classList.toggle('hidden');
    sortIcon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
  };
  sortItems.forEach(item => {
    item.onclick = () => {
      selectedSortText.textContent = item.textContent;
      sortItems.forEach(el => el.classList.remove('active', 'font-bold', 'text-[#fe5f1e]'));
      item.classList.add('active', 'font-bold', 'text-[#fe5f1e]');
      currentSort = item.dataset.sort;
      filterPizzas(currentFilter);
    };
  });
  document.addEventListener('click', e => {
    if (!sort.contains(e.target)) {
      sortPopup.classList.add('hidden');
      sortIcon.style.transform = 'rotate(0deg)';
    }
  });
  wrapper.append(nav, sort);
  return wrapper;
}
const DISABLED_CLASSES = 'bg-[#f3f3f3] text-[#b6b6b6]';
const ACTIVE_CLASSES = 'bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-[#e5e7eb]';
function updateOptionStyles(scope, form) {
  scope.querySelectorAll('input[type="radio"]').forEach(radio => {
    const label = scope.querySelector(`label[for="${radio.id}"]`);
    if (!label) return;
    label.className = `flex-1 py-2 text-sm font-bold rounded-md transition cursor-pointer ${radio.checked ? ACTIVE_CLASSES : DISABLED_CLASSES}`;
  });
  const variant = getCurrentVariant(form);
  const priceDisplay = form.querySelector('.pizza-price');
  if (priceDisplay) {
    priceDisplay.textContent = `${variant.price} ₽`;
  }
}
function createPizzaCard(pizza) {
  const card = el('div', 'flex flex-col items-center text-center w-[280px]');
  const form = el('form', 'flex flex-col items-center flex-1 w-full h-full');
  form.setAttribute('data-pizza-id', pizza.id);
  form.innerHTML = `
    <input type="hidden" name="id" value="${pizza.id}">
    <input type="hidden" name="name" value="${pizza.name}">
    <input type="hidden" name="base-price" value="${pizza.price}">
  `;
  const imgWrapper = el('div', 'flex justify-center items-center w-[260px] h-[260px] mb-3');
  const img = el('img', 'max-w-full max-h-full object-contain');
  img.src = pizza.image;
  imgWrapper.append(img);
  const title = el('h4', 'text-xl font-extrabold mb-5', pizza.name);
  const selector = el('div', 'bg-[#f3f3f3] rounded-xl p-2 w-full mb-4');
  const doughRow = el('div', 'flex gap-1 mb-1');
  const types = [{
    v: 'thin',
    t: 'тонкое'
  }, {
    v: 'traditional',
    t: 'традиционное'
  }];
  types.forEach((opt, i) => {
    const id = `${pizza.id}-d-${opt.v}`;
    const input = el('input', 'sr-only', '', {
      type: 'radio',
      name: 'type',
      value: opt.v,
      id
    });
    if (i === 0) input.checked = true;
    doughRow.append(input);
    doughRow.append(el('label', '', opt.t, {
      for: id
    }));
  });
  const sizeRow = el('div', 'flex gap-1');
  [26, 30, 40].forEach((size, i) => {
    const id = `${pizza.id}-s-${size}`;
    const input = el('input', 'sr-only', '', {
      type: 'radio',
      name: 'size',
      value: size,
      id
    });
    if (i === 0) input.checked = true;
    sizeRow.append(input);
    sizeRow.append(el('label', '', `${size} см.`, {
      for: id
    }));
  });
  selector.append(doughRow, sizeRow);
  const footer = el('div', 'footer flex justify-between items-center w-full mt-auto gap-4');
  footer.innerHTML = `
    <div class="pizza-price text-xl font-bold min-w-[80px] text-left">${pizza.price} ₽</div>
    <button type="submit" class="add-btn group flex items-center gap-2 bg-white border border-[#fe5f00] text-[#fe5f00] px-6 py-2 rounded-full font-bold hover:bg-[#fe5f00] hover:text-white transition-all duration-200 flex-1 justify-center shadow-sm hover:shadow-md">
      <span class="text-xl">+</span><span>Добавить</span>
    </button>`;
  form.append(imgWrapper, title, selector, footer);
  updateOptionStyles(selector, form);
  selector.onchange = () => updateOptionStyles(selector, form);
  form.onsubmit = e => {
    e.preventDefault();
    addToCart(getCurrentVariant(form));
  };
  card.append(form);
  return card;
}

// --- УПРАВЛЕНИЕ СЕТКОЙ ---

const filterPizzas = category => {
  currentFilter = category;
  const grid = document.querySelector('#pizza-grid');
  if (grid) {
    grid.querySelectorAll('img[src*="img/"]').forEach(img => img.remove());
  }
  const title = document.querySelector('h2');
  if (title) title.textContent = category === 'Все' ? 'Все пиццы' : `${category} пиццы`;
  document.querySelectorAll('.category-btn').forEach(btn => {
    const isActive = btn.textContent === category;
    btn.classList.toggle('bg-[#282828]', isActive);
    btn.classList.toggle('text-white', isActive);
    btn.classList.toggle('bg-[#f9f9f9]', !isActive);
    btn.classList.toggle('text-[#2c2c2c]', !isActive);
  });
  let filtered = category === 'Все' ? [..._data_js__WEBPACK_IMPORTED_MODULE_1__.pizzas] : _data_js__WEBPACK_IMPORTED_MODULE_1__.pizzas.filter(p => p.category === category);
  if (currentSort === 'price') filtered.sort((a, b) => a.price - b.price);else if (currentSort === 'alphabet') filtered.sort((a, b) => a.name.localeCompare(b.name));else filtered.sort((a, b) => a.id - b.id);
  if (filtered.length === 0) {
    showNoPizzas(category);
  } else {
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-x-[35px] gap-y-[65px] justify-items-center';
    grid.innerHTML = '';
    filtered.forEach(p => grid.append(createPizzaCard(p)));
    updateAllPizzaButtons();
  }
};
const showNoPizzas = category => {
  const grid = document.querySelector('#pizza-grid');
  grid.className = 'flex justify-center items-center min-h-[400px] w-full';
  grid.innerHTML = `
    <div class="flex flex-col items-center text-center max-w-[520px] px-4 py-6">
      <div class="w-24 h-24 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6">
        <span class="text-4xl">😕</span>
      </div>

      <h2 class="text-3xl md:text-4xl font-black text-[#fe5f00] mb-4">
        ${category} пиццы временно недоступны
      </h2>

      <p class="text-[#5c5c5c] text-base leading-relaxed mb-8">
        К сожалению, все пиццы из этой категории закончились.<br>
        Мы уже готовим новые партии!
      </p>

      <button id="backToAllBtn"
        class="bg-[#282828] text-white px-6 py-2 rounded-full font-bold hover:bg-black transition">
        Вернуться ко всем
      </button>
    </div>
  `;
  const backBtn = grid.querySelector('#backToAllBtn');
  if (backBtn) backBtn.onclick = () => filterPizzas('Все');
};
const showMainPage = () => {
  cart = JSON.parse(localStorage.getItem('cart') || '[]');
  root.innerHTML = '';
  root.append(createHeader(true));
  root.append(createFilters());
  root.append(el('h2', 'text-[32px] font-bold mb-8', 'Все пиццы'));
  const grid = el('div', 'grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-x-8 gap-y-12 justify-items-center');
  grid.id = 'pizza-grid';
  root.append(grid);
  filterPizzas('Все');
  updateCartUI();
};
showMainPage();
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#cart') {
    navigate('cart');
  } else {
    showMainPage();
  }
});

// export { cart }
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
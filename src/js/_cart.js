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
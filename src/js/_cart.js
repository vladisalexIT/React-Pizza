// // Добавление в корзину
// const addToCart = (pizza) => {
//     const existingIndex = cart.findIndex(item =>
//         item.id === pizza.id &&
//         item.size === pizza.size &&
//         item.type === pizza.type
//     );
//     if (existingIndex > -1) {
//         cart[existingIndex].qty += 1;
//     } else {
//         cart.push({ ...pizza, qty: 1 });
//     }
//     saveAndRefresh();
// };
// // Удаление из корзины
// const decrementCart = (pizza) => {
//     const index = cart.findIndex(item =>
//         item.id === pizza.id &&
//         item.size === pizza.size &&
//         item.type === pizza.type
//     );
//     if (index > -1) {
//         if (cart[index].qty > 1) {
//             cart[index].qty -= 1;
//         } else {
//             cart.splice(index, 1);
//         }
//         saveAndRefresh();
//     }
// };
// // Удаление пиццы по id
// const removeFromCart = (pizzaId) => {
//     cart = cart.filter(item => item.id !== Number(pizzaId));
//     saveAndRefresh();
// };
// // Очищение корзины
// const clearCart = () => {
//     cart = [];
//     saveAndRefresh();
// };
// // Функция сохранения и обновления UI
// const saveAndRefresh = () => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartUI();
// };
// // Количество пиццы для бейджа
// const getCartQty = (pizzaId) => {
//     return cart
//         .filter(item => item.id === Number(pizzaId))
//         .reduce((sum, item) => sum + item.qty, 0);
// };
// // Обновление всех UI элементов
// const updateCartUI = () => {
//     updateCartBtn();
//     updateAllPizzaButtons();
// };
// // Обновление кнопки корзины в хедере
// const updateCartBtn = () => {
//     const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
//     const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
//     const cartBtn = document.querySelector('.cart-btn');
//     if (cartBtn) {
//         cartBtn.querySelector('span:first-child').textContent = ${ totalPrice } ₽;
//         const qtySpan = cartBtn.querySelector('span:last-child');
//         qtySpan.textContent = totalQty || '0';
//     }
// };
// // Обновление ВСЕХ кнопок карточек на странице
// const updateAllPizzaButtons = () => {
//     document.querySelectorAll('[data-pizza-id]').forEach(form => {
//         const pizzaId = Number(form.getAttribute('data-pizza-id'));
//         const qty = getCartQty(pizzaId);
//         const footer = form.querySelector('.footer');
//         const addBtn = footer.querySelector('.add-btn');

//         const oldMinus = footer.querySelector('.minus-btn');
//         const oldBadge = addBtn.querySelector('.qty-badge');
//         if (oldMinus) oldMinus.remove();
//         if (oldBadge) oldBadge.remove();

//         addBtn.classList.remove('pl-2', 'pr-4');
//         addBtn.classList.add('px-6');
//         addBtn.style.position = 'relative';

//         if (qty > 0) {
//             addBtn.classList.remove('px-6');
//             addBtn.classList.add('pl-2', 'pr-4');

//             const minusBtn = el('button', 'minus-btn w-9 h-9 bg-white border border-[#fe5f00] text-[#fe5f00] rounded-full flex items-center justify-center hover:bg-[#fe5f00] hover:text-white transition-all font-bold flex-shrink-0', '−');
//             minusBtn.type = 'button';
//             minusBtn.onclick = (e) => {
//                 e.preventDefault();
//                 decrementCart(getCurrentVariant(form));
//             };
//             addBtn.before(minusBtn);

//             const badge = el('span', 'qty-badge absolute -top-2 -right-2 bg-[#fe5f00] text-white text-[12px] rounded-full w-6 h-6 flex items-center justify-center font-bold border-2 border-white shadow-sm', qty);
//             addBtn.appendChild(badge);
//         }
//     });
// };
import './_components.js';
import './_data.js';
import './_filters.js';
import './_cart.js';
import './_render.js';
import { pizzas } from './_data.js';
import { createCartPage } from './_cart-page.js';

const root = document.querySelector('[data-js-root]');

let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Получение текущего варианта из формы
const getCurrentVariant = (form) => {
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
const addToCart = (pizza) => {
  const existingIndex = cart.findIndex(item =>
    item.id === pizza.id &&
    item.size === pizza.size &&
    item.type === pizza.type
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({ ...pizza, qty: 1 });
  }

  saveAndRefresh();
};

// Удаление из корзины
const decrementCart = (pizza) => {
  const index = cart.findIndex(item =>
    item.id === pizza.id &&
    item.size === pizza.size &&
    item.type === pizza.type
  );

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
const removeFromCart = (pizzaId) => {
  cart = cart.filter(item => item.id !== Number(pizzaId));
  saveAndRefresh();
};

// Очищение корзины
const clearCart = () => {
  cart = [];
  saveAndRefresh();
};

const navigate = (pageName) => {
  if (pageName === 'main') {
    history.pushState({ page: 'main' }, '', '/');
    showMainPage();
  } else if (pageName === 'cart') {
    history.pushState({ page: 'cart' }, '', '/cart');
    root.innerHTML = '';
    root.append(createHeader(false));
    root.append(createCartPage(navigate));
  }
};

// Обработка кнопки "назад" браузера
window.addEventListener('popstate', (e) => {
  const page = e.state?.page || 'main';

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
const getCartQty = (pizzaId) => {
  return cart
    .filter(item => item.id === Number(pizzaId))
    .reduce((sum, item) => sum + item.qty, 0);
};

// Обновление всех UI элементов
const updateCartUI = () => {
  updateCartBtn();
  updateAllPizzaButtons();
};

// Обновление кнопки корзины в хедере
const updateCartBtn = () => {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

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
      minusBtn.onclick = (e) => {
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

    cartBtn.onclick = (e) => {
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

  sort.onclick = (e) => {
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

  document.addEventListener('click', (e) => {
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
  const types = [{ v: 'thin', t: 'тонкое' }, { v: 'traditional', t: 'традиционное' }];
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
    doughRow.append(el('label', '', opt.t, { for: id }));
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
    sizeRow.append(el('label', '', `${size} см.`, { for: id }));
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

  form.onsubmit = (e) => {
    e.preventDefault();
    addToCart(getCurrentVariant(form));
  };

  card.append(form);
  return card;
}

// --- УПРАВЛЕНИЕ СЕТКОЙ ---

const filterPizzas = (category) => {
  currentFilter = category;
  const title = document.querySelector('h2');
  if (title) title.textContent = category === 'Все' ? 'Все пиццы' : `${category} пиццы`;

  document.querySelectorAll('.category-btn').forEach(btn => {
    const isActive = btn.textContent === category;
    btn.classList.toggle('bg-[#282828]', isActive);
    btn.classList.toggle('text-white', isActive);
    btn.classList.toggle('bg-[#f9f9f9]', !isActive);
    btn.classList.toggle('text-[#2c2c2c]', !isActive);
  });

  let filtered = category === 'Все' ? [...pizzas] : pizzas.filter(p => p.category === category);

  if (currentSort === 'price') filtered.sort((a, b) => a.price - b.price);
  else if (currentSort === 'alphabet') filtered.sort((a, b) => a.name.localeCompare(b.name));
  else filtered.sort((a, b) => a.id - b.id);

  const grid = document.querySelector('#pizza-grid');
  if (filtered.length === 0) {
    showNoPizzas(category);
  } else {
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-x-[35px] gap-y-[65px] justify-items-center';
    grid.innerHTML = '';
    filtered.forEach(p => grid.append(createPizzaCard(p)));
    updateAllPizzaButtons();
  }
};

const showNoPizzas = (category) => {
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


export { cart }
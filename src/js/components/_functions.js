// // Получение текущего варианта из формы
// const getCurrentVariant = (form) => {
//   const data = new FormData(form);
//   const basePrice = Number(data.get('base-price'));
//   const size = Number(data.get('size'));
//   const type = data.get('type');
//   let finalPrice = basePrice;
//   if (type === 'traditional') finalPrice += 100;
//   if (size === 30) finalPrice += 100;
//   if (size === 40) finalPrice += 200;
//   return {
//     id: Number(data.get('id')),
//     size: size,
//     type: type,
//     name: data.get('name'),
//     price: finalPrice
//   };
// };
// // Функция создания элементов
// function el(tag, classes = '', content = '', attributes = {}) {
//   const element = document.createElement(tag);
//   if (classes) element.className = classes;
//   if (content !== undefined) element.innerHTML = content;
//   Object.entries(attributes).forEach(([key, value]) => {
//     if (value !== undefined) element.setAttribute(key, value);
//   });
//   return element;
// }
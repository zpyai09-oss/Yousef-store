const products = document.querySelectorAll('.product');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const waLink = document.getElementById('waLink');
const closePopup = document.getElementById('closePopup');

products.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const name = img.getAttribute('data-name');
    popupImage.src = src;
    popupTitle.textContent = name;
    waLink.href = https://wa.me/218918209144?text=${encodeURIComponent(`مرحباً، أرغب بشراء ${name})}`;
    popup.classList.remove('hidden');
  });
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

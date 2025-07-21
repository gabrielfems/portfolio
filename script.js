
document.addEventListener('DOMContentLoaded', function () {
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu');
  const container = document.querySelector('.certificacoes');
  const images = document.querySelectorAll('.certificacoes img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function updateCarrossel() {
    const imgWidth = images[0].clientWidth;
    container.style.transform = `translateX(-${index * imgWidth}px)`;
    updateButtons();
  }

  function updateButtons() {
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === images.length - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (index < images.length - 1) {
      index++;
      updateCarrossel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarrossel();
    }
  });

  window.addEventListener('resize', updateCarrossel);
  updateButtons();

  // Modal (novo)
  const modal = document.getElementById('modal-certificado');
  const modalImg = document.getElementById('imagem-expandida');
  const fechar = document.querySelector('.fechar-modal');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  fechar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  /* 'Menu 'Hamburguer' */
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});
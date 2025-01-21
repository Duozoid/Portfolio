document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".clickable-image"); // Все кликабельные изображения
    const closeButtons = document.querySelectorAll(".close-button"); // Все кнопки "Close"
  
    // Показать соответствующий overlay при нажатии на картинку
    images.forEach((image) => {
      image.addEventListener("click", () => {
        const overlayId = image.dataset.overlay; // Получаем ID overlay из data-overlay
        const overlay = document.getElementById(overlayId);
        overlay.classList.remove("hidden");
      });
    });
  
    // Закрыть соответствующий overlay при нажатии на кнопку "Close"
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const overlayId = button.dataset.close; // Получаем ID overlay из data-close
        const overlay = document.getElementById(overlayId);
        overlay.classList.add("hidden");
      });
    });
  
    // Закрытие overlay при клике на область за его пределами
    document.querySelectorAll(".overlay").forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.add("hidden");
        }
      });
    });
  });
  
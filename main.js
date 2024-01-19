document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
    const modal = document.getElementById("modal");

    openModalButton.addEventListener("click", function () {
        modal.style.display = "flex";
        setTimeout(function () {
            modal.style.transform = "translateX(0)"; /* Анимация сдвига вправо */
        }, 0);
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.transform = "translateX(-100%)"; /* Анимация сдвига вправо */
        setTimeout(function () {
            modal.style.display = "none";
        }, 300); /* Задержка, чтобы анимация завершилась перед скрытием */
    });
});
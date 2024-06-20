const button = document.querySelector(".Bars") as HTMLButtonElement;
const nav = document.querySelector(".Header-nav") as HTMLElement;

// button.addEventListener("click", (): void => {
//     nav.classList.toggle("isActive");
//     button.classList.toggle('TransformBars')
// });

button.addEventListener("click", (event: MouseEvent): void => {
    event.preventDefault(); // Evitar comportamiento predeterminado (podría evitar la navegación)
    event.stopImmediatePropagation(); // Detener la propagación del evento
    nav.classList.toggle("isActive");
    button.classList.toggle('TransformBars');
});

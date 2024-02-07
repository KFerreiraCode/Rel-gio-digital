const tempo = document.querySelector(".tempo");
const botaoTema = document.querySelector(".dark_mode_botao");

function trocarTema () {
    const temaAtual = document.documentElement.getAttribute("data-theme")

    if (temaAtual === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
     } else {
        document.documentElement.setAttribute("data-theme", "dark");
     }
}

const relogio = setInterval(() => {
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;

    tempo.textContent = `${hr}:${min}`;
}, 1000);

window.addEventListener('unload', function() {
    clearInterval(relogio);
});

botaoTema.addEventListener("click", () => {
    trocarTema();
});
const botaoMenu = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");
const linksMenu = menu.querySelectorAll("a");


botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        botaoMenu.textContent = "✕";
    } else {
        botaoMenu.textContent = "☰";
    }

});


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

        botaoMenu.textContent = "☰";

    });

});
$(document).ready(function () {
    carregarFragments();
    ativarAlterTituloCard();
    ativarTabScrollSuave();
    tabAutoClick();
});

function carregarFragments() {
    $("#js-load-projetos-de-sistemas").load('fragments/facape/facape.Projetos-De-Sistemas.html');
    $("#js-load-interacao-humano-computador").load('fragments/facape/facape.Interacao-Humano-Computador.html');
    $("#js-load-gestao-de-projetos").load('fragments/facape/facape.Gestao-De-Projetos.html');
    $("#js-load-design-de-interfaces-e-usabilidade").load('fragments/facape/facape.Design-De-Interface.html');
}

function recuperarPrimeiroGet(parametros) {
    try {
        var listaDeParametros = parametros.split("&"); // Recupera o primeiro parametro do GET
        var parametroMateria = listaDeParametros[0].split("="); // Recupera a primeira variavel
        var valorMateria = parametroMateria[1]; // Pega somente o valor da variavel

        return valorMateria;
    } catch (error) {
        return null;
    }
}

function tabAutoClick() {
    var parametrosDaUrl = window.location.search.split("?")[1];
    var materia = recuperarPrimeiroGet(parametrosDaUrl);

    switch (materia) {
        case "interacao-humano-computador":
        case "gestao-de-projetos":
        case "design-de-interfaces":
            $("#btn-" + materia).trigger('click');
            window.history.pushState("", "", "/cynara/facape.html?materia=" + materia);
            break;
        default:
            $("#btn-projetos-de-sistemas").trigger('click');
            window.history.pushState("", "", "/cynara/facape.html?materia=projetos-de-sistemas");
            break;
    }
}

function ativarAlterTituloCard() {
    $(".js-altera-titulo").stop().click(function (event) {
        event.preventDefault();

        progressAtivar();

        var btnClicado = $(event.currentTarget);

        var materia = btnClicado.data('materia');
        $(".js-materia-title").text(materia);

        var materiaUrl = btnClicado.data('materia-url');

        window.history.pushState("", "", "/cynara/facape.html?materia=" + materiaUrl);
    });
}

function ativarTabScrollSuave() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
        event.preventDefault();

        var distancia = $($(this).attr("href")).offset().top - 170;

        setTimeout(function () {
            $("html, body").animate({
                scrollTop: distancia
            }, 750);
        }, 450);
    });
}
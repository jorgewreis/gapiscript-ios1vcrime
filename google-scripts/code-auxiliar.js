// Funções auxiliares
var app = SpreadsheetApp;
var bd = app.getActiveSpreadsheet().getSheetByName("BancodeDados");
var atualID = Session.getActiveUser().getEmail();

// Declara uma mensagem de BOAS VINDAS personalizada
function msgBemVindo() {
    var infoTime = Utilities.formatDate(new Date(), "GMT-03:00", "HH");
    var message = "";
    var user = buscaUser();

    if (infoTime <= 12) {
        message = "Bom dia" + user + "!";
    } else if (infoTime < 18) {
        message = "Boa tarde" + user + "!";
    } else {
        message = "Boa noite" + user + "!";
    }
    app.getActiveSpreadsheet().toast(message, "Olá ", 7)
}

// Retorna o NOME DE USUÁRIO cadastrado no banco de dados baseado no e-mail de login
function buscaUser() {
    var atualUser = "Outro usuário";

    for (var i = 0; i < 15; i++) {
        if (bd.getRange(195 + i, 1).getValue() == atualID) {
            atualUser = bd.getRange(195 + i, 6).getValue();
        }
    }
    return atualUser;
}

// Retorna o NÍVEL DE SEGURANÇA cadastrado no banco de dados baseado no e-mail de login
function verificaSeg() {
    var nivelUser = { code: 1, desc: "Básico" };

    for (var i = 0; i < 15; i++) {
        if (bd.getRange(195 + i, 1).getValue() == atualID) {
            nivelUser.code = bd.getRange(195 + i, 11).getValue();
            nivelUser.desc = bd.getRange(195 + i, 12).getValue();
        }
    }
    return nivelUser;
}

// Abre MENU CONFIGURAÇÕES na barra de tarefas
function initMenu() {
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu("Configurações");
    menu.addItem("Calendário", abrirplanilhaCalendar());
    var sub = ui.createMenu("Banco de Dados");
    sub.addItem("Processos", "a");
    sub.addItem("Informações", abrirplanilhaBD());
    menu.addSubMenu(sub);
    menu.addSeparator();
    menu.addItem("Controle de versões", abrirplanilhaVersoes());
    menu.addToUi();
}
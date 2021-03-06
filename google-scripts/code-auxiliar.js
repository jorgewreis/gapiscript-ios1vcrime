// Declara uma mensagem de BOAS VINDAS personalizada
function msgBemVindo() {
    var app = SpreadsheetApp.getActiveSpreadsheet();;
    var infoTime = Utilities.formatDate(new Date(), "GMT-03:00", "HH");
    var message = "";
    var user = buscaUser();

    if (infoTime <= 12) {
        message = "Bom dia " + user + "!";
    } else if (infoTime < 18) {
        message = "Boa tarde " + user + "!";
    } else {
        message = "Boa noite " + user + "!";
    }
    app.toast(message, "Olá ", 7)
}

// Retorna o NOME DE USUÁRIO cadastrado no banco de dados baseado no e-mail de login
function buscaUser() {
    var app = SpreadsheetApp.getActiveSpreadsheet();;
    var bd = app.getSheetByName("BancodeDados");
    var atualID = Session.getActiveUser().getEmail();
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
    var app = SpreadsheetApp.getActiveSpreadsheet();;
    var bd = app.getSheetByName("BancodeDados");
    var atualID = Session.getActiveUser().getEmail();
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
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu('Planilhas');
    menu.addItem('Agenda', 'abrirAgenda');
    menu.addItem('Cálculo de pena de multa', 'abrirCalcMulta');
    menu.addItem('Cartas Precatórias', 'abrirCartPrec');
    menu.addItem('Consulta Zona de Mandados', 'abrirZonaMand');
    menu.addItem('Juntadas', 'abrirJuntada');
    menu.addItem('Lotação de Policiais', 'abrirLotPol');
    menu.addItem('Ofícios', 'abrirOficios');
    menu.addItem('Vistas', 'abrirVistas');
    menu.addItem('Vídeoconferências', 'abrirVidConf');
    menu.addItem('Réus Presos', 'abrirReusPresos');
    menu.addItem('Meta 2', 'abrirMeta2');
    menu.addSeparator();
    menu.addItem('Calendário', 'abrirCalendar');
    var sub = ui.createMenu('Banco de Dados');
    sub.addItem('Processos', 'abrirProcessos');
    sub.addItem('Informações', 'abrirBancoDados');
    menu.addSubMenu(sub);
    menu.addSeparator();
    menu.addItem('Controle de versões', 'abrirVersoes');
    menu.addToUi();
}
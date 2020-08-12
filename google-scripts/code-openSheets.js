// Funções executadas ao abrir planilha

function onOpen() {
    msgBemVindo();
}

var app = SpreadsheetApp;

function abrirAgenda() {
    var sheet = app.SpreadsheetApp.getSheetByName("Agenda").activate();
    sheet.getRange("A8").activate();
}

function abrirZonaMand() {
    var sheet = app.SpreadsheetApp.getSheetByName("ZonaMand").activate();
    sheet.getRange("F10").clearContent();
}

function abrirCalcMulta() {
    var sheet = app.SpreadsheetApp.getSheetByName("CalcMulta").activate();
    sheet.getRange("C10:G10").clearContent();
}

function abrirLotPol() {
    var sheet = app.SpreadsheetApp.getSheetByName("LotPol").activate();
    sheet.getRange("F12").clearContent();
}

function abrirOficios() {
    app.SpreadsheetApp.getSheetByName("Ofícios").activate();
}

function abrirJuntada() {
    app.SpreadsheetApp.getSheetByName("Juntada").activate();
}

function abrirVistas() {
    app.SpreadsheetApp.getSheetByName("Vistas").activate();
}

function abrirVidConf() {
    var sheet = app.SpreadsheetApp.getSheetByName("VidConf").activate();
    sheet.getRange("B11").activate();
}

function abrirCartPrec() {
    var sheet = app.SpreadsheetApp.getSheetByName("CartPrec").activate();
    sheet.getRange("B11").activate();
}

function abrirReusPresos() {
    app.SpreadsheetApp.getSheetByName("ReusPresos").activate();
}

function abrirBancoDados() {
    var sheet = app.SpreadsheetApp.getSheetByName("BancodeDados");
    var nivel = verificaSeg();
    if (nivel.code >= 5) { //Acesso níveis 5 e 6 - Restrict / Extreme
        sheet.activate();
    } else {
        app.getActiveSpreadsheet().toast('Seu nível de segurança é ' + nivel.code + ' - ' + nivel.desc + '. Você não tem permissão de acesso ao Banco de Dados. Permitido apenas para níveis 5 e 6', "Acess denied!", 10);
    }
}

function abrirVersoes() {
    var sheet = app.SpreadsheetApp.getSheetByName("Versoes");
    var nivel = verificaSeg();
    if (nivel.code >= 5) { //Acesso níveis 5 e 6 - Restrict / Extreme
        sheet.activate();
    } else {
        app.getActiveSpreadsheet().toast('Seu nível de segurança é ' + nivel.code + ' - ' + nivel.desc + '. Você não tem permissão de acesso ao Controle de Versionamento. Permitido apenas para níveis 5 e 6', "Acess denied!", 10);
    }
}

function abrirCalendar() {
    var sheet = app.SpreadsheetApp.getSheetByName("Calendar");
    var nivel = verificaSeg();
    if (nivel >= 4) { //Acesso níveis 4 a 6 - Exclusive - Extreme
        sheet.activate();
    } else {
        app.getActiveSpreadsheet().toast('Seu nível de segurança é ' + nivel.code + ' - ' + nivel.desc + '. Você não tem permissão de acesso aos Ajustes de Calendário. Permitido apenas para níveis 4 a 6', "Acess denied!", 10);
    }
}

function abrirProdut() {
    app.SpreadsheetApp.getSheetByName("Produt").activate();
}

function abrirProcessos() {
    app.SpreadsheetApp.getSheetByName("Processos").activate();
}

function voltarHome() {
    app.SpreadsheetApp.getSheetByName("Home").activate();
}

function voltarHomeSeg() {
    app.SpreadsheetApp.getSheetByName("Home").activate();
    app.getSheetByName("Versoes").hideSheet();
    app.getSheetByName("BancodeDados").hideSheet();
    app.getSheetByName("Calendar").hideSheet();
    app.getSheetByName("Produt").hideSheet();
}
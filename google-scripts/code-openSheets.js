// Funções executadas ao abrir planilha
function onOpen() {
    msgBemVindo();
}


// -------------------------------------------------------------------------------------
// Funções somente de abertura de Planilhas
function abrirAgenda() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("Agenda").activate();
    sheet.getRange("A8").activate();
}

function abrirZonaMand() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("ZonaMand").activate();
    sheet.getRange("F10").clearContent();
}

function abrirCalcMulta() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("CalcMulta").activate();
    sheet.getRange("C10:G10").clearContent();
}

function abrirLotPol() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("LotPol").activate();
    sheet.getRange("F12").clearContent();
}

function abrirOficios() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Ofícios").activate();
}

function abrirJuntada() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Juntada").activate();
}

function abrirVistas() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Vistas").activate();
}

function abrirVidConf() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("VidConf").activate();
    sheet.getRange("B11").activate();
}

function abrirCartPrec() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("CartPrec").activate();
    sheet.getRange("B11").activate();
}

function abrirReusPresos() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("ReusPresos").activate();
}

function abrirBancoDados() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("BancodeDados");
    var nivel = verificaSeg();
    if (nivel.code >= 5) { //Acesso níveis 5 e 6 - Restrict / Extreme
        sheet.activate();
    } else {
        app.toast('Seu nível de segurança é ' + nivel.code + ' - ' + nivel.desc + '. Você não tem permissão de acesso ao Banco de Dados. Permitido apenas para níveis 5 e 6', "Acess denied!", 10);
    }
}

function abrirVersoes() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("Versoes");
    var nivel = verificaSeg();
    if (nivel.code >= 5) { //Acesso níveis 5 e 6 - Restrict / Extreme
        sheet.activate();
    } else {
        app.toast('Seu nível de segurança é ' + nivel.code + ' - ' + nivel.desc + '. Você não tem permissão de acesso ao Controle de Versionamento. Permitido apenas para níveis 5 e 6', "Acess denied!", 10);
    }
}

function abrirCalendar() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = app.getSheetByName("Calendar");
    var nivel = verificaSeg();
    if (nivel >= 4) { //Acesso níveis 4 a 6 - Exclusive - Extreme
        sheet.activate();
    } else {
        app.toast('Seu nível de segurança é ' + nivel.code + ' - ' + nivel.desc + '. Você não tem permissão de acesso aos Ajustes de Calendário. Permitido apenas para níveis 4 a 6', "Acess denied!", 10);
    }
}

function abrirProdut() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Produt").activate();
}

function abrirProcessos() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Processos").activate();
}

function voltarHome() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Home").activate();
}

function voltarHomeSeg() {
    var app = SpreadsheetApp.getActiveSpreadsheet();
    app.getSheetByName("Home").activate();
    app.getSheetByName("Versoes").hideSheet();
    app.getSheetByName("BancodeDados").hideSheet();
    app.getSheetByName("Calendar").hideSheet();
    app.getSheetByName("Produt").hideSheet();
}
// Funções executadas ao abrir planilha

function onOpen() {
    msgBemvindo();
}

//--------------------------------------------------------------------
// Funções auxiliares
var app = SpreadsheetApp;

function msgBemvindo() {
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
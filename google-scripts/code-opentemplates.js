function abrirTemplateOficio() {
    var app = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1gEMlzRA9oyRbPloVj44-uYZspoHYaJXO1fbMe2DdtpE/edit#gid=159877427");
    var template = HtmlService.createTemplateFromFile("oficioNovo");
    var html = template.evaluate();

    html.setWidth(500);
    html.setHeight(380);

    SpreadsheetApp.getUi().showModalDialog(html, ".cadastro");

}

function abrirTemplateCalcMulta() {
    var app = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1gEMlzRA9oyRbPloVj44-uYZspoHYaJXO1fbMe2DdtpE/edit#gid=159877427");
    var template = HtmlService.createTemplateFromFile("templcalcmulta");
    var html = template.evaluate();

    html.setWidth(500);
    html.setHeight(640);

    SpreadsheetApp.getUi().showModalDialog(html, ".cálculo");

}
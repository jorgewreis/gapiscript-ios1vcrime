function abrirTemplateOficio() {
    var app = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1gEMlzRA9oyRbPloVj44-uYZspoHYaJXO1fbMe2DdtpE/edit#gid=159877427");
    var sheet = app.getSheetByName("Ofícios");
    var template = HtmlService.createTemplateFromFile("oficioNovo");
    var html = template.evaluate();
    var user = buscaUser();

    html.setWidth(500);
    html.setHeight(380);

    SpreadsheetApp.getUi().showModalDialog(html, ".cadastro");

}
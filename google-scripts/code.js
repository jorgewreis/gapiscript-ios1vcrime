function lotacaoConsulta() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("LotPol");
    let campo1 = sheet.getRange('A15').getValue();
    let campo2 = sheet.getRange('B15').getValue();
    let campo3 = sheet.getRange('C15').getValue();
    let campo4 = sheet.getRange('D15').getValue();
    let alteraLinha = sheet.getRange('G15').getValue();
    const linhaDestino = sheet.getRange('E15').getValue() + 16;
    if (sheet.getRange("Q12").getValue() == 'MOSTRAR DADOS') {
        sheet.getRange("A8").setValue('PERMITE ALTERAÇÃO DADOS');
        sheet.showRows(8, 3);
        sheet.getRange('D9').activateAsCurrentCell();
        sheet.getRange('D9').setValue(campo1);
        sheet.getRange('F9').setValue(campo2);
        sheet.getRange('K9').setValue(campo3);
        sheet.getRange('P9').setValue(campo4);
    } else if (sheet.getRange("Q12").getValue() == 'INCLUIR DADOS') {
        sheet.getRange("A8").setValue('INCLUA OS DADOS AO LADO PARA CADASTRAR');
        sheet.showRows(8, 3);
        sheet.getRange('D9').activateAsCurrentCell();
    } else if (sheet.getRange("Q12").getValue() == 'CADASTRAR') {
        sheet.getRange("A8").clearContent();
        sheet.hideRows(8, 3);
        sheet.getRange("A18").activate();
        sheet.insertRowBefore(18);
        sheet.getRange("A14").activate();
        sheet.getRange("A14:Z14").copyValuesToRange(sheet, 1, 27, 18, 18);
        sheet.getRange("A18:B18").merge();
        sheet.getRange("C18:E18").merge();
        sheet.getRange("F18:H18").merge();
        sheet.getRange("I18:Q18").merge();
        sheet.getRange("R18:T18").merge();
        sheet.getRange("U18:W18").merge();
        sheet.getRange("X18:Z18").merge();
        sheet.getRange("F12").clearContent();
        sheet.getRange("D9:S9").clearContent();
        sheet.hideRows(26, 1);
    } else if (sheet.getRange("Q12").getValue() == 'CONFIRMAR ALTERAÇÃO') {
        sheet.getRange("A8").clearContent();
        sheet.getRange(alteraLinha).activate();
        sheet.getRange("A14:Z14").copyValuesToRange(sheet, 1, 27, linhaDestino, linhaDestino);
        sheet.getRange("A18:B18").merge();
        sheet.getRange("C18:E18").merge();
        sheet.getRange("F18:H18").merge();
        sheet.getRange("I18:Q18").merge();
        sheet.getRange("R18:T18").merge();
        sheet.getRange("U18:W18").merge();
        sheet.getRange("X18:Z18").merge();
        sheet.hideRows(8, 3);
        sheet.getRange("F12").clearContent();
        sheet.getRange("D9:S9").clearContent();
    } else {
        sheet.getRange("A8").clearContent();
        sheet.getRange("F12").clearContent();
        sheet.getRange("D9:S9").clearContent();
        sheet.hideRows(8, 3);
    }
}

function oficioCad(dados) {
    const app = SpreadsheetApp;
    const activeSheet = app.getActiveSpreadsheet().getSheetByName("Ofícios");
    const infoTime = Utilities.formatDate(new Date(), "GMT-03:00", "' cadastrado em' dd/MM/YYYY 'às' HH:mm:ss");
    const infoYear = Utilities.formatDate(new Date(), "GMT-03:00", "YYYY");
    let oficio = activeSheet.getRange("F6");
    let oldYear = activeSheet.getRange("F7").getValue();
    let user = buscaUser(user);

    // Verificação de novo ano para reinicio da contagem de oficios
    if (oldYear == infoYear) {
        oficio.setValue(oficio.getValue() + 1);
    } else {
        oficio.setValue("1");
    }

    activeSheet.getRange("F4").setValue(dados.processo);
    const processo = activeSheet.getRange("F4").getValue();
    const reu = activeSheet.getRange("F5").getValue();
    activeSheet.getRange("F7").setValue(infoYear);
    activeSheet.insertRowBefore(9);
    activeSheet.getRange("A9").setValue(oficio.getValue() + "/" + infoYear);
    activeSheet.getRange("F1").setValue(oficio.getValue() + "/" + infoYear);
    activeSheet.getRange("B9").setValue("Ofício " + dados.tipo);
    activeSheet.getRange("C9").setValue(processo);
    activeSheet.getRange("D9").setValue(reu);
    activeSheet.getRange("E9").setValue("Documento" + infoTime + " por " + user);
    activeSheet.getRange("F2").setValue(infoTime + " por " + user);
    const oficioNovo = activeSheet.getRange("A9").getValue();
    activeSheet.hideRows(18, 1);
    app.getActiveSpreadsheet().toast('Ofício ' + oficioNovo + 'cadastrado com sucesso!', "Sucesso!");
}

function juntadaCadastro() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Juntada");
    if (sheet.getRange("A8").getValue() == 4) {
        sheet.getRange("A24").activate();
        sheet.insertRowBefore(24);
        sheet.getRange("A19").activate();
        sheet.getRange("A19").copyValuesToRange(sheet, 1, 1, 24, 24);
        sheet.getRange("A24:B24").merge();
        sheet.getRange("B19").activate();
        sheet.getRange("B19").copyValuesToRange(sheet, 3, 3, 24, 24);
        sheet.getRange("C24:F24").merge();
        sheet.getRange("C19").activate();
        sheet.getRange("C19").copyValuesToRange(sheet, 7, 7, 24, 24);
        sheet.getRange("G24:I24").merge();
        sheet.getRange("D19").activate();
        sheet.getRange("D19").copyValuesToRange(sheet, 10, 10, 24, 24);
        sheet.getRange("J24:P24").merge();
        sheet.getRange("Q24:V24").merge();
        sheet.getRange("W24:Z24").merge();
        sheet.getRange("W24").setValue('NOVO');
        sheet.getRange("F15:T15").clearContent();
        if (sheet.getRange("B12").getValue() == '1') {
            sheet.getRange("F12:I12").clearContent();
        }
        SpreadsheetApp.flush();
        Utilities.sleep(6000);
        SpreadsheetApp.getActiveSpreadsheet().toast('Os dados foram cadastrados com sucesso', "Movimentação realizada!");
    } else {
        SpreadsheetApp.getActiveSpreadsheet().toast('Dados não cadastrados', "Erro!");
    }
}

function juntadaConferencia() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Juntada");
    let RowDel = sheet.getActiveCell().getRow();
    let verifica = sheet.getRange("Y20").getValue();
    if (RowDel > '23') {
        sheet.getRange(RowDel, 23).setValue(verifica);
        sheet.hideRows(RowDel);
        SpreadsheetApp.getActiveSpreadsheet().toast('Documento alterado para conferido!', "Verificação de documentos");
    }
}

function vistaLimpar() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Vistas");
    if (sheet.getRange("F14").getValue() == 'limpar dados') {
        sheet.getRange("F9:S9").clearContent();
        sheet.getRange("F12:S12").clearContent();
    }
}

function vistaCadastro() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Vistas");
    if (sheet.getRange("Q14").getValue() == 'cadastrar') {
        sheet.insertRowBefore(20);
        sheet.getRange("A17").activate();
        sheet.getRange("A17:T17").copyValuesToRange(sheet, 1, 20, 20, 20);
        sheet.getRange("A20:B20").merge();
        sheet.getRange("C20:D20").merge();
        sheet.getRange("G20:N20").merge();
        sheet.getRange("O20:S20").merge();
        sheet.getRange("T20:Z20").merge();
        sheet.getRange("F9:S9").clearContent();
        sheet.getRange("F12:S12").clearContent();
    } else {
        SpreadsheetApp.getActiveSpreadsheet().toast('Informe os dados necessários para cadastrar!', "Informação");
    }
}

function vistaConfere() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Vistas");
    let RowDel = sheet.getActiveCell().getRow();
    if (RowDel > '19') {
        sheet.deleteRow(RowDel);
        SpreadsheetApp.getActiveSpreadsheet().toast('Cadastro excluído com sucesso!', "Informação");
    }
}

function presoModo() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("ReusPresos");
    if (sheet.getRange("a6").getValue() == 1) {
        sheet.hideColumns(12, 2)
        sheet.hideColumns(2, 1)
        sheet.hideColumns(4, 1)
        sheet.getRange("a6").setValue('2')
    } else {
        sheet.getRange("a6").setValue('1')
        sheet.showColumns(12, 2);
        sheet.showColumns(2, 1);
        sheet.showColumns(4, 1);
    }
}

function presoOrganiza() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("ReusPresos");
    let range = sheet.getRange("A11:P493");
    let atual = sheet.getRange("P4").getValue();
    sheet.showRows(7, 1);
    range.sort([{ column: 8, ascending: true }, { column: 4, ascending: true }]);
    SpreadsheetApp.flush();
    Utilities.sleep(2000);
    sheet.getRange("E6").setValue(atual);
    sheet.hideRows(7, 1);
    SpreadsheetApp.getActiveSpreadsheet().toast('Planilha organizada por data e tipo da prisão, com sucesso!!!', "Atualização");
    sheet.getRange("A11").activate();
}

function bdpIncluir() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Processos");
    if (sheet.getRange("A8").getValue() == '1') {
        sheet.insertRowBefore(15);
        sheet.getRange("A9:D9").copyValuesToRange(sheet, 1, 4, 15, 15);
        sheet.getRange("B8").clearContent();
        sheet.getRange("D8:F8").clearContent();
    }
}

function alteraVersao() {
    const app = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = app.getSheetByName("Versoes");

    if (sheet.getRange("U5").getValue() == 'Voltar') {
        ss.getSheetByName("HOME").activate();
        sheet.hideSheet();
    } else {
        sheet.getRange("A11").activate();
        sheet.insertRowBefore(11); //INSERIR LINHA
        sheet.getRange("A8").activate();
        sheet.getRange("A8:L8").copyValuesToRange(sheet, 1, 12, 11, 11); //INSERIR VALORES NA LISTA
        sheet.getRange("C5:S5").clearContent();
    }
}
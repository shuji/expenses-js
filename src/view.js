// init
var model = undefined;
$(function() {
    console.log('init');
    model = new EamingAndExpense();
    console.log(model);
    $('#commandline').bind('keydown', function(e){
       var code = (e.keyCode ? e.keyCode : e.which);
       if (code == 13) onEnterKey();
    });
    $('#commandline').focus();
});

function onEnterKey() {
    console.log("#onEnterKey");
    var command = $('#commandline').val();
    console.log(command);
    switch(command) {
      case 'amount':
          amount();
          break;
      case 'list':
          list();
          break;
      default:
          invalidCommand();
          break;
    }
}

function amount() {
    console.log("#amount");
    var amount = model.amount(); 
    console.log(amount, model);
    appendToScreen('現在の残高は、' + amount + 'です');
    clearCommandline();
}

function list() {
    console.log("#list");
    var list = model.list();
    console.log(list);
    if (list.length == 0) {
        appendToScreen('記録されている収支はありません');
    }
    clearCommandline();
}

function invalidCommand() {
    console.log("#invalidCommand");
    appendToScreen('無効なコマンドです');
    clearCommandline();
}

function appendToScreen(msg) {
    $('#screen').append('<div>' + msg + '</div>');   
}

function clearCommandline() {
    $('#commandline').val('');  
}

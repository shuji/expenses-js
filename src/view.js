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
    var inputs = $('#commandline').val().split(' ');
    var command = inputs[0];
    var args = inputs.slice(1);
    console.log(command);
    switch(command) {
      case 'amount':
          amount();
          break;
      case 'list':
          list();
          break;
      case 'eaming':
          eaming(args);
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

function eaming(args) {
    console.log("#eaming", args);
    var onError = function() {
      appendToScreen('不正な引数です');
      appendToScreen('使い方: eaming [YYYYMMDD] [金額] [用途]');
      clearCommandline();
      return;
    };
    if (args.length != 3) onError();
    else if (args[0].length != 8) onError();
    else if (!Number(args[1])) onError();
    else model.add(new Eaming(args[0], Number(args[1]), args[2]));
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

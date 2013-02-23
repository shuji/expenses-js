// init
var model = undefined;
var commandsUsage = {
    amount: ['amount', '現在の残高を表示します'],
    list: ['list', '収支の一覧を表示します'],
    expense: ['expense [YYYYMMDD] [金額] [用途]', '支出を追加します'],
    eaming: ['eaming [YYYYMMDD] [金額] [用途]', '収入を追加します'],
    help: ['help', 'コマンドの一覧を表示します'],
}
var commandHistory = [];
var historyIndex = -1;
$(function() {
    console.log('init');
    model = new EamingAndExpense();
    console.log(model);
    $('#commandline').bind('keydown', function(e){
       var code = (e.keyCode ? e.keyCode : e.which);
       switch (code) {
         case 13:
             onEnterKey();
             break;
         case 38:
             showCommandHistory(+1);
             break;
         case 40:
             showCommandHistory(-1);
             break;
       }
    });
    $('#commandline').focus();
});

function onEnterKey() {
    console.log("#onEnterKey");
    var line = $('#commandline').val();
    var inputs = line.split(' ');
    var command = inputs[0];
    var args = inputs.slice(1);
    commandHistory.push(line);
    console.log(line);
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
      case 'expense':
          expense(args);
          break;
      case 'list':
          list();
          break;
      case 'help':
          help();
          break;
      default:
          invalidCommand();
          break;
    }
    clearCommandline();
    historyIndex = commandHistory.length - 1;
}

function amount() {
    console.log("#amount");
    var amount = model.amount(); 
    console.log(amount, model);
    appendToScreen('現在の残高は、' + amount + 'です');
}

function list() {
    console.log("#list");
    var list = model.list();
    console.log(list);
    if (list.length == 0) {
        appendToScreen('記録されている収支はありません');
    } else {
        var table = '<table>';
        table += '<tr><td>日付</td><td>収入</td><td>支出</td><td>適用</td></tr>';
        $.each(list, function(index, value) {
            table += '<tr>';
            table += '<td>' + value.date + '</td>';
            if (value.constructor == Eaming) {
                table += '<td>' + value.amount + '</td>';
                table += '<td>-</td>';
            } else {
                table += '<td>-</td>';
                table += '<td>' + value.amount + '</td>';
            }
            table += '<td>' + value.desc + '</td>';
            table += '</tr>';
        });
        table += '</table>';
        $('#screen').append(table);   
    }
}

function eaming(args) {
    console.log("#eaming", args);
    var validate = function(args) {
        if (args.length != 3) return false;
        else if (args[0].length != 8) return false;
        else if (!Number(args[1])) return false;
        else return true;
    };
    if (validate(args)) {
        model.add(new Eaming(args[0], Number(args[1]), args[2]));
        appendToScreen(args[0] + 'の収入として、' + args[1] + '(' + args[2] + ')を追加しました');
    } else {
        onArgsError(commandsUsage['eaming'][0]);
    }
}

function expense(args) {
    console.log("#expense", args);
    var validate = function(args) {
        if (args.length != 3) return false;
        else if (args[0].length != 8) return false;
        else if (!Number(args[1])) return false;
        else return true;
    };
    if (validate(args)) {
        model.add(new Expense(args[0], Number(args[1]), args[2]));
        appendToScreen(args[0] + 'の支出として、' + args[1] + '(' + args[2] + ')を追加しました');
    } else {
        onArgsError(commandsUsage['expense'][0]);
    }
}

function help() {
    appendToScreen('ヘルプ：');
    $.each(commandsUsage, function(command, usage) {
      appendToScreen('　' + usage[0]);
      appendToScreen('　　' + usage[1]);
      appendToScreen('');
    });
}

function onArgsError(usage) {
    appendToScreen('不正な引数です');
    appendToScreen('使い方: ' + usage);
}

function invalidCommand() {
    console.log("#invalidCommand");
    appendToScreen('無効なコマンドです');
}

function appendToScreen(msg) {
    $('#screen').append('<div>' + msg + '</div>');   
}

function clearCommandline() {
    $('#commandline').val('');  
}

function showCommandHistory(count) {
    console.log("#showCommandHistory", count);
    if (commandHistory.length == 0) return;
    historyIndex = historyIndex + count;
    if (historyIndex < 0) {
        historyIndex = 0;
    } else if (commandHistory.length <= historyIndex) {
        clearCommandline();
        return;
    }
    $('#commandline').val(commandHistory[historyIndex]);
}


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
          break;
    }
}

function amount() {
    console.log("#amount");
    var amount = model.amount(); 
    console.log(amount, model);
    $('#screen').append('<div>amount=' + amount + '</div>');
    $('#commandline').val('');
}

function list() {
    console.log("#list");
    var list = model.list();
    console.log(list);
    if (list.length == 0) {
        $('#screen').append('<div>記録されている収支はありません</div>');    
    }
    $('#commandline').val('');

}

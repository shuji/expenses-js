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
});

function onEnterKey() {
    console.log("#onEnterKey");
    var command = $('#commandline').val();
    console.log(command);
    switch(command) {
      case 'amount':
          amount();
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


// init
$(function() {
    console.log('init');
    var model = new EamingAndExpense();
    console.log(model);
    $('#commandline').bind('keydown', function(e){
       var code = (e.keyCode ? e.keyCode : e.which);
       if (code == 13) onEnterKey();
    });
});

function onEnterKey() {
    console.log("#onEnterKey");
}


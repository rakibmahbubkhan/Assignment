$(document).ready(function(){
    $('#calculate').click(function(){
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();
        var result;
        
        $('#validationAlert').hide();
        $('#resultAlert').hide();
        
        if(!$.isNumeric(num1) || !$.isNumeric(num2)) {
            var errorMessage = 'Please enter valid numbers.';
            if(!$.isNumeric(num1)) {
                $('#num1').addClass('is-invalid');
            } else {
                $('#num1').removeClass('is-invalid');
            }
            
            if(!$.isNumeric(num2)) {
                $('#num2').addClass('is-invalid');
            } else {
                $('#num2').removeClass('is-invalid');
            }
            
            $('#validationAlert').text(errorMessage).show();
            return; 
        }
        
        $('#num1').removeClass('is-invalid');
        $('#num2').removeClass('is-invalid');
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        
        switch($('#eu').val()) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subs':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'divi':
                if(num2 === 0) {
                    $('#validationAlert').text('Cannot divide by zero.').show();
                    return; 
                }
                result = num1 / num2;
                break;
            default:
                $('#validationAlert').text('Invalid operation.').show();
                return;
        }
        
        $('#resultAlert').text('Result: ' + result).show();
    });
});

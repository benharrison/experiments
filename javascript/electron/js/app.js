$(document).ready(function(){
    $('input[type=button]').on('click', function(){
        // read options

        // generate
        var password = PasswordGenerator.Generate();
        var strength = PasswordGenerator.CheckStrength(password);

        // display output
        $('#output').val(password);
        //$('#strength').html(strength);
    });
});

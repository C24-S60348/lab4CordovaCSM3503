var button = $("#button_change");

$(button).click(function() {
    // Actions to take upon button click goes here.
    //get input form
    var input = $("#input_color");
    var inputValue = $(input).val();

    //get element to change the color
    var element = $(".cow_color");

    //change element color based on the inputValue
    $(element).html(inputValue);
});
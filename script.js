var textField = document.querySelector('#text_to_change');

var lowerCaseBtn = document.querySelector('#to_lower_case');
var upperCaseBtn = document.querySelector('#to_upper_case');
var properCaseBtn = document.querySelector('#to_porper_case');
var sentenceCaseBtn = document.querySelector('#to_sentence_case');

lowerCaseBtn.addEventListener('click', function(){
    var text_to_change = textField.value;
    var lowerCaseText = text_to_change.toLowerCase();
    textField.value = lowerCaseText;
})

upperCaseBtn.addEventListener('click', function(){
    var text_to_change = textField.value;
    var upperCaseText = text_to_change.toUpperCase();
    textField.value = upperCaseText;
})

properCaseBtn.addEventListener('click', function(){
    var text_to_change = textField.value.toLowerCase();
    textArray = text_to_change.split(" ").map(el => {        
        return el.charAt(0).toUpperCase() + el.substr(1);
    })
    textField.value = textArray.join(" ");
})

sentenceCaseBtn.addEventListener('click', function(){
    var text_to_change = textField.value.toLowerCase();
    var setenceCaseText = text_to_change.charAt(0).toUpperCase() + text_to_change.substr(1);
    textField.value = setenceCaseText;
})


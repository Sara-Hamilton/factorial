var factorial = function(number) {
  var result = 1;
  for (var index = 5; index > 0; index -= 1){
    result *= index;
  }
  return result;
}

$(document).ready(function(){
  $("form#factorial-form").submit(function(event){
    event.preventDefault();
    var input = $("input#input1").val();
    $(".result").append(factorial(input));
  });
});

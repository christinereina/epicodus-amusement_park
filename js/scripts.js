$(document).ready(function() {
  $("form#height-form").submit(function(event) {
    var feet = parseInt($("input#feet").val());
    var inches = parseInt($("input#inches").val());
    var totalHeight = (feet*12) + inches;
    console.log(totalHeight)
    $('.shadow').toggleClass('no-show')
    $('.btn-danger').toggleClass('no-show')
    if(totalHeight<= 60){
      $('#rollercoaster3').toggleClass('no-show')
    } else if(totalHeight > 60 && totalHeight < 72){
      $('#rollercoaster3').toggleClass('no-show')
      $('#rollercoaster2').toggleClass('no-show')
    } else{
      $('#rollercoaster3').toggleClass('no-show')
      $('#rollercoaster2').toggleClass('no-show')
      $('#rollercoaster1').toggleClass('no-show')
    }
    event.preventDefault();
  });

  $('.btn-danger').click(function(){
    location.reload();
  })

});
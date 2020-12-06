// A $( document ).ready() block.
$( document ).ready(function() {  
  //console.log( "ready!" );
  //alert('test')
  
  $(document).on('change', '#shirt', chkshirt);
  
  
  //chkshirt function
  function chkshirt() {
    
    var shirt = $('#shirt').val();
    //alert(shirt);
    
    //begin if shirt
    if(shirt == 'Custom') {
      //alert('works');
      $('#custom').removeAttr('disabled'); //remove disable
      $('#custom').attr('required', true);
    } //end if shirt
    else {
      $('#custom').attr('disabled', true); //disabled again
      $('#custom').val(''); //set value to empty
      $('#custom').removeAttr('required'); //remove required
    }
  } // end chkshirt function
  
  
});
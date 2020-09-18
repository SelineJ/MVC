
 
 // controller 
function chosen(barNo)
 { 
  
        chosenBar = barNo == chosenBar ?  null : barNo;
;          show();  
 }


 function removeStolpe()
 {
     //splice fjerner den valgte stolpen ved å bruke verdien chosenBar-1 så den finner riktig plass i arrayen
     numbers.splice(chosenBar-1, 1);
     console.log(numbers);
     show();
 }

 function addStolpe()
 {  
  if(inputValue != '' && inputValue <= 10 && inputValue >= 1)
  {
    numbers.push(inputValue);
    console.log(numbers);
    inputValue = '';
    show();
  }
  else 
  {
      alert('Ugyldig verdi');
  }
 }

 function endreStolpe()
 {
  if(inputValue != '' && inputValue <= 10 && inputValue >= 1)
  {

     numbers.splice(chosenBar-1, 1);
     numbers.splice(chosenBar-1, 0, inputValue);
     inputValue = '';
     show();

     console.log('riktig');
  }
  else 
  {
     alert('Ugyldig verdi');
  }
 }


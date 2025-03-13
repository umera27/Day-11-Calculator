const  outputDisplay=document.getElementById('inputDisplay');

//Declaration of string to append value

var array='';
var arraySecond;
let operator;
let result='';
let index=0;

//Index initialize to zero 

async function appendToDisplay(value) {
    outputDisplay.value+=value;  
   // console.log(value);
    array+=value;
    if (index) {
        
        result=result.toString()+value;
    }
//value from html will be append to array   
}

  async function calculator(opp) {
     outputDisplay.value=opp; 
     operator=opp;
     
//operator will store in opperator
//if statement to check wether the result of array will store in arraysecond
     
     if (index) {
         arraySecond=parseFloat(result);
     }
     else{
     arraySecond=parseFloat(array);
     }
     
     array='';
 //to store another value on array we should have to make it null.
 
  }
  
 //change number to percentage
 async function percentage() {
   
   if (result=='') {
       array=parseFloat(array);
      array=(array/100);
      
         outputDisplay.value=array;
   }
   else{
       
      result=(result/100);
      
      outputDisplay.value=result;
   }
      
         
         
   //   console.log(array);
 } 
  
  
async   function clearInput() {
   
    outputDisplay.value=" ";
    result='';
    array='';
    arraySecond='';
    index=0;
    console.log(result);
    console.log(array);
    
  }
  async function display() {
  
   
  
  //array is string the we change into number
      switch (operator) {
           case '+':
result=arraySecond+parseFloat(array);
   // result+=result;
   index=1;
           outputDisplay.value=result;
             
            break;
           case '-':
result=arraySecond-parseFloat(array); 
           outputDisplay.value=result;
           index=1;
           break;
           case '*':
result=arraySecond* parseFloat(array); 
         outputDisplay.value=result;
         index=1;
         break;
         case '/':
        
         if (array==0) {
       outputDisplay.value="Can't Divided by Zero";
       
   }   else{
         result=arraySecond / parseFloat(array);
         outputDisplay.value=result;
         index=1;
        // console.log(array)
         
   }
       break;
         default:outputDisplay.value="";                   
      }
    

          
      
  }

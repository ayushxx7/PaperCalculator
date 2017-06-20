
$(function() {
        $('#optionselector').change(function(){
            $('.calcoptions').hide();
            $('#' + $(this).val()).show();
        });
    });
	

function calculateWeightInInches() {
           var Length = document.getElementById("txt_weight").value;
           var width = document.getElementById("txt_width").value;
           var GSM = document.getElementById("txt_GSM").value;
           var calculate = (Length * width * GSM) / 3100;
           var result = document.getElementById("txt_Result");
           
           // if (Length < 0)
           // {
           // 	document.getElementById('err').innerHTML = 'Incorrect Length!';
           // }


           if(calculate < 0 || width > 300 || width < 1 || GSM < 5 || GSM > 800 || Length < 1 || Length > 99)
           {
           	result.value = 0;
           }

           else
           {	
           	result.value = calculate.toFixed(2);
		   }       
       }



       function calculateWeightInCm() {
           var Length = document.getElementById("txt_Lengthincm").value;
           var width = document.getElementById("txt_widthincm").value;
           var GSM = document.getElementById("txt_gsm2").value;
           var calculate = (Length * width * GSM) / 20000;
           var result = document.getElementById("txt_Result2");
           
           if(calculate < 0 || width > 762 || width < 2.54 || GSM < 5 || GSM > 800 || Length > 251.46 || Length < 1)
           {
           	result.value = 0;
           }

           else
           {	
           	result.value = calculate.toFixed(2);
		   }
       }
       function calculateGsmInInches() {
           var Weight =document.getElementById("txt_WeightPerReam").value;
           var Length =document.getElementById("txt_Lengthininches2").value;
           var Width =document.getElementById("txt_widthininches2").value;
           var calculate = (Weight * 3100) / (Length * Width);
           var result = document.getElementById("txt_gsm3");
          // result.value = calculate.toFixed(2);
            if(calculate < 0 || Width > 300 || Width < 1 || Length < 1 || Length > 99)
            {
            	result.value = 0;
            }

            else
            {	
            	result.value = calculate.toFixed(2);
		    }
       }
       function calculateGsmInCm() {
           var Weight =document.getElementById("txt_WeightPerReamCm").value;
           var Length =document.getElementById("txt_LengthOFReamCm").value;
           var Width = document.getElementById("txt_WidthOfReamCm").value;
           var calculate = (Weight * 20000) / (Length * Width);
           var result = document.getElementById("txt_Result4");
        //   result.value = calculate.toFixed(2);	

            if(calculate < 0 || Width > 762 || Width < 1 || Length > 251.46 || Length < 2.54)
            {
            	result.value = 0;
            }

            else
            {	
            	result.value = calculate.toFixed(2);
		    }
       }
       function calculateTotalWeight() {
           var GSM = document.getElementById("txt_gsm5").value;
           var Length = document.getElementById("txt_LengthReelM").value;
           var Width = document.getElementById("txt_WidthReelCm").value;
           var calculate = GSM * Width * Length / 100000;
           var result = document.getElementById("Txt_Result5");
          // result.value = calculate.toFixed(2);
            if(calculate < 0 || Width > 762 || Width < 1 || GSM < 5 || GSM > 800)
            {
            	result.value = 0;
            }

            else
            {	
            	result.value = calculate.toFixed(2);
		    }
       }
       function calculateLengthInMeter() {
           var GSM = document.getElementById("txt_gsm6").value;
           var Weight =document.getElementById("txt_ReamWeightInKg").value;
           var Width = document.getElementById("txt_ReamWidthInCm").value;
           var calculate = (Weight * 100000) / GSM * Width;
           var result = document.getElementById("txt_LenghOfReam");
          // result.value = calculate.toFixed(2);
            if(calculate < 0 || Width > 762 || Width < 1 || GSM < 5 || GSM > 800)
            {
            	result.value = 0;
            }

            else
            {	
            	result.value = calculate.toFixed(2);
		    }
       }

// // var e = document.getElementById("optionselector");
// // var value = e.options[e.selectedIndex].value;
// // var text = e.options[e.selectedIndex].text;

// text = $("#optionselector :selected").text();
// document.getElementById("demo").innerHTML = text; 



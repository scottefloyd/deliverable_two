

function wtwFunction() {
    
    do {
    
        var eventType = prompt("What type of event are you going to? Please choose either casual, semi-form, or formal.");
        
        if (eventType === null) {
            return;
        }
    
        if (eventType != "casual" && eventType != "semi-formal" && eventType != "formal") {
           // alert("Please try again and enter either casual, semi-formal, or formal.")
           // return;
            condition=false;
        }  else {
            condition=true;
        }
    }   while (condition===false);
  
        var eventClothing;
        
        switch (eventType) {
            case 'casual':
                eventClothing = "something comfy";
                break;
            case 'semi-formal':
                eventClothing = "a polo shirt";
                break;
            case 'formal':
                eventClothing = "a suit";
                break;
        }
    
    var tempFahr;
    
    do {
        tempFahr = parseInt(prompt("What is the temperature in degrees Fahrenheit today? Please enter a number value."));
        
        console.log(tempFahr);
        
        if (isNaN(tempFahr)===true) {
            return;
        }
        //try regex here.
        if (isNaN(tempFahr)===true) {
            condition=false;
        } else {
            condition=true;
        }
    } while (condition===false);
    
        var eventJacket;
    
        switch (true) {
            case (tempFahr < 54):
                eventJacket = "a coat";
                break;
                
            case (tempFahr >= 54 && tempFahr <= 70):
                eventJacket = "a jacket";
                break;
            
            case (tempFahr > 70):
                eventJacket = "no jacket";
                break;  
                
        }
    
    var result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${eventClothing} and ${eventJacket}.`;
    
    console.log(result); 
    
    document.getElementById("result").innerHTML = result;
    
}
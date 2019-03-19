

function wtwFunction() {
    
    do {
    
        var eventType;
        
        eventType = prompt("What type of event are you going to? Please enter either casual, semi-form, or formal.");
        
        if (eventType === null) {
            return;
        }
        
        eventType = eventType.toLowerCase();
    
        if (eventType != "casual" && eventType != "semi-formal" && eventType != "formal") {
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
    var Jacket;
    var result;
    var eventJacket;
    
    tempFahr = parseInt(prompt("What is the temperature in degrees Fahrenheit today? Please enter a number value."));
        
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

    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${eventClothing} and ${eventJacket}.`;
    
    console.log(result); 
    
    document.getElementById("result").innerHTML = result;
    
}
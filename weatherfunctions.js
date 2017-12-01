function calculateDewPoint (temp, humidity)
{
       
      if (humidity <= 50)
      {
         alert("You made a mistake!.");
         return("invalid");
      }
        
    var dewp;
    dewp = temp - 9 * (100 - humidity)/25;
    return dewp; 
}

function calculateWindChill (temp, wind)
{
    if (temp <= 50)
    {
        alert("Your a little short YO!!.");
        return("invalid");
    }
    var winchill;
    winchill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow (wind,0.16) ;
    return winchill;
    
}

 

function calculateDewPoint (temp, humidity)
{var dewp = parseFloat(document.getElementById('humidityBox').value);
            if (isNaN(dewp) || dewp < 50) 
                {alert("invalid");
                return
            ;}
                
            
    var dewp;
    dewp = temp - 9 * (100 - humidity)/25;
    return dewp; 
}

function calculateWindChill (temp, wind)
{
    var winchill;
    winchill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow (wind,0.16) ;
    return winchill;
    
}

 

function compute()
            {
                p = document.getElementById("principal").value;
                n = document.getElementById("years").value;
                r = document.getElementById("rate").value;
                result = document.getElementById("result");
                
                result.innerHTML =(p*n*r/100);
                
                
            }

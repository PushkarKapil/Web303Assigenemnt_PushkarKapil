// WEB303 Assignment 2

$(document).ready(function() { 
    let xhr = new XMLHttpRequest;
        

    $('#prospect').click(function(){

    
      
        xhr.open('GET', 'prospect.html', true);

             xhr.onload = function () {
           
            if (xhr.status === 200) {
                
                $('#content').slideToggle(1000).html(xhr.responseText);
              
        
            }
         }
         
         
         xhr.send();
        
        
        });

        

        $('#convert').click(function () {
 
            xhr.open('GET', 'convert.html', true);

            xhr.onload = function () {

                if ( xhr.status === 200 ){
            
                    $('#content').fadeIn(1500).html(xhr.responseText);

                }
            }
            xhr.send();

        });



    $('#retain').click(function() {
        xhr.open('GET', 'retain.html', true);
       
        xhr.onload = function () { 
           
            if ( xhr.status === 200 ){
              
                $('#content').fadeIn(1500).html(xhr.responseText);
           
            }
        }
    xhr.send();

    });
    


}); 
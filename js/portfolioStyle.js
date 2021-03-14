
        function about(){

        
        document.getElementById('experience').style.display= "none";
        document.getElementById('skill').style.display= "none";
        document.getElementById('my_canvas').style.display= "none";
        document.getElementById('about').style.cssText= "height: 1200px;";
        classDisplyNone("contact");    
        
       }
       function experience(){
        document.getElementById('skill').style.display= "none";
        document.getElementById('about').style.display= "none";
        document.getElementById('my_canvas').style.display= "none";
       document.getElementById('experience').style.display="block";
       classDisplyNone("contact");    
       }

       function skill(){
        document.getElementById('about').style.display= "none";
        document.getElementById('experience').style.display= "none";
        document.getElementById('my_canvas').style.display= "none";
        document.getElementById('skill').style.cssText= "height: 1200px;";
        classDisplyNone("contact");    
       }

       function contact(){
        document.getElementById('about').style.display= "none";
        document.getElementById('skill').style.display= "none";
        document.getElementById('my_canvas').style.display= "none";
        document.getElementById('experience').style.display= "none";
        classDisply("contact");
       }

       function home(){
        document.getElementById('my_canvas').style.display= "none";
        document.getElementById('about').style.cssText= "display: block, height:fit-content;";
        // document.getElementById('skill').style.display= "block";
        document.getElementById('skill').style.cssText= "display: block, height:fit-content;";
        document.getElementById('experience').style.cssText= "display: block, height:fit-content;";
        classDisply("contact");
        classDisplyHome("contact");
       }


       function pdfView(){
                
                document.getElementById('about').style.display= "none";
                document.getElementById('experience').style.display= "none";
                document.getElementById('skill').style.display="none";
                classDisplyNone("contact");  

                pdfjsLib.getDocument('aye.pdf').then((doc) => {
                    console.log("This file has"+ doc._pdfInfo.numPages + "Pages" );
        
                    doc.getPage(1).then(page => {
                        //nedd context and viewport for render
                        //create context from the html id or class
                        var myCanvas = document.getElementById('my_canvas');
                        var context = myCanvas.getContext("2d");
        
                        //create viewport from the page
                        var viewport= page.getViewport(2);
                        myCanvas.width = viewport.width;
                        myCanvas.height = viewport.height;
        
                     //   now view port and context are redy so do the render
        
                        page.render({
        
                            canvasContext: context,
                            viewport: viewport
                        });
        
                    });
                });
                
                document.getElementById('my_canvas').style.display= "block";
           }


       // function pdfView(){
                
       //          document.getElementById('about').style.display= "none";
       //          document.getElementById('experience').style.display= "none";
       //          document.getElementById('skill').style.display="none";
       //          classDisplyNone("contact");  

       //          pdfjsLib.getDocument('aye.pdf').then(doc=> {
       //              console.log("This file has"+ doc._pdfInfo.numPages + "Pages" );
        
       //              doc.getPage(1).then(page => {
       //                  //nedd context and viewport for render
       //                  //create context from the html id or class
       //                  var myCanvas = document.getElementById('my_canvas');
       //                  var context = myCanvas.getContext("2d");
        
       //                  //create viewport from the page
       //                  var viewport= page.getViewport(2);
       //                  myCanvas.width = viewport.width;
       //                  myCanvas.height = viewport.height;
        
       //                  now view port and context are redy so do the render
        
       //                  page.render({
        
       //                      canvasContext: context,
       //                      viewport: viewport
       //                  });
        
       //              });
       //          });
                
       //          document.getElementById('my_canvas').style.display= "block";
       //     }

       

       function classDisplyNone(className){
        var classItems = document.getElementsByClassName(className);
            
            var i;
            for (i=0; i <classItems.length; i++){
            classItems[i].style.display= "none";
            }
       }
       function classDisply(className){
        var classItems = document.getElementsByClassName(className);
            
            var i;
            for (i=0; i <classItems.length; i++){
            classItems[i].style.display= "block";
            classItems[i].style.height= "1200px";
            }
        
       }
       function classDisplyHome(className){
        var classItems = document.getElementsByClassName(className);
            
            var i;
            for (i=0; i <classItems.length; i++){
            classItems[i].style.display= "block";
            classItems[i].style.height= "auto";
            
            }
        
       }

       //copy right footer
           const MONTH= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
           var date= new Date();
           var month = MONTH[date.getMonth()];
           var year= date.getFullYear();

           document.getElementById("footer").innerHTML="Copyright &copy " + month +" "+  year + ", AyeSwe";
       
 
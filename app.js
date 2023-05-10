function initialize(){
       var html=document.getElementById("html");
       var css=document.getElementById("css");
       var js=document.getElementById("js");
  
       var code=document.getElementById("code").contentWindow.document;
       document.body.onkeyup=function(){
        code.open();
        code.writeln(
            html.value +
           
            "<style>"+css.value + " </style>" +

            "<script>"+js.value +"</script>"

        );

        code.close();
       }
  }
var code=document.getElementById("code");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");

btn1.addEventListener("click",HTML)
btn2.addEventListener("click",CSS)
btn3.addEventListener("click",JAVASCRIPT)
function HTML()
{
code.src="https://www.javatpoint.com/what-is-html"
}
function CSS()
{
code.src="https://www.javatpoint.com/css-tutorial"
}
function JAVASCRIPT()
{
code.src="https://www.javatpoint.com/javascript-tutorial"
}
function downloadFile(filename, content) {
 
    const element = document.createElement('a');
    
   
    const blob = new Blob([content], { type: 'plain/text' });
   
  
     
    const fileUrl = URL.createObjectURL(blob);
    
    
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';
    
     
    document.body.appendChild(element);
    element.click();
    
    
    document.body.removeChild(element);
  };
  
  window.onload = () => {
    document.getElementById('download').
    addEventListener('click', e => {
      
   
      const filename = document.getElementById('filename').value;
      
    
      const content = document.getElementById('html').value;

      
   
      if (filename && content) {
        downloadFile(filename, content);
      }
    });
  };
 

 
 

  var gt= document.getElementById("time");

  setInterval(function(){
  
  gt.innerText=new Date().toLocaleTimeString();
  
 
  
  })
    initialize();

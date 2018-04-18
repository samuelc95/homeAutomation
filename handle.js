<SCRIPT>
	
  var xmlHttp=createXmlHttpObject();

 function createXmlHttpObject(){
  if(window.XMLHttpRequest){
  xmlHttp=new XMLHttpRequest();
  }else{
    xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
  }
  return xmlHttp;
  }

  function process(){
  if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
    xmlHttp.open('PUT','xml',true);
    xmlHttp.onreadystatechange=handleServerResponse;
    xmlHttp.send(null);
  }
    setTimeout('process()',1000);
  }
 
  function handleServerResponse(){
    alert('Entrou response');
    if(xmlHttp.readyState==4){
      alert('if http');
      xmlResponse=xmlHttp.responseXML;
      xmldoc = xmlResponse.getElementsByTagName('relay1');
      message = xmldoc[0].firstChild.nodeValue;
      if(1 == 1){
        alert('if 1');
        document.getElementById('relay').innerHTML="<button type='button' class='btn btn-lg btn-block btn-outline-danger'>OFF</button>";
      }else if (message === '0'){
        document.getElementById('relay').innerHTML="<button type='button' class='btn btn-lg btn-block btn-outline-sccess'>ON</button>";
    
      }
    }
  }

</SCRIPT>

window.onload = () => {
    const btn = document.getElementById("search");
    let url = 'superheroes.php';
    let httpRequest = new XMLHttpRequest();
  
    btn.addEventListener('click', search);
  
    function search(){
        let ext = '?q='+ document.getElementById("field").value;
        httpRequest.onreadystatechange = requestaction;
        httpRequest.open('GET', url+ext, true);
        httpRequest.send();
    }
    
    function requestaction(){
      if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
            document.getElementById("result").innerHTML = httpRequest.responseText;
          }else{
            console.log('Error Code: ' + httpRequest.status);
            console.log('Error Message: ' + httpRequest.statusText);
          }
      }
    }
}
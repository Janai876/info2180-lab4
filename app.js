window.onload = () => {

    const btn = document.getElementById("search");
    let httpRequest = new XMLHttpRequest();
  
    btn.addEventListener('click', search);
  
    function search(){
      httpRequest.onreadystatechange = requestaction;
      httpRequest.open('GET', 'superheroes.php');
      httpRequest.send();
    }
    
    function requestaction(){
      if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
            document.getElementById("txt").innerHTML = httpRequest.responseText;
          }else{
            console.log('Error Code: ' + xhr.status);
            console.log('Error Message: ' + xhr.statusText);
          }
      }
    }
  }
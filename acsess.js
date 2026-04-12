function giveAcces(event){
    event.preventDefault();
   let username=document.getElementById("username").value;
   let password=parseInt(document.getElementById("pass").value);
   let pas=123;
   let un="viren";
    if(username==""){
      alert("please enter username");
    }
    else if(password==""){
      alert("please enter password");
    }
    else if(username==un && password==pas){
      window.location.href = "new.html";//the page wherre you want to redirect
    }
    else{
      alert("acsess denied");
    }

  }
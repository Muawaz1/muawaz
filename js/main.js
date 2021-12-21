
 var obj={
   a:document.getElementById("error-c"),
   b:document.getElementById("error-d"),
   c:document.getElementById("error-e"),
   d:document.getElementById("error-f")
}
function myFunction() {
  const myObj={
    a:document.getElementById("inp-a"),
    b:document.getElementById("inp-b"),
    c:document.getElementById("inp-c"),
    d:document.getElementById("inp-d")
  }
  if (myObj.a.checkValidity() ){
    obj.a.classList.add("error-g");
  }
  else if (myObj.b.checkValidity() ){
    obj.b.classList.add("error-g");
  }
  else if (myObj.c.checkValidity() ){
    obj.c.classList.add("error-g");
  }
  else if (myObj.d.checkValidity() ){
    obj.d.classList.add("error-g");
  }
  else if (!myObj.a.checkValidity() ){
    obj.a.classList.add("error-c");
  }
  else if (!myObj.b.checkValidity() ){
    obj.b.classList.add("error-d");
  }
  else if (!myObj.c.checkValidity() ){
    obj.c.classList.add("error-e");
  }
  else{
    obj.d.classList.add("error-f");
  }
}

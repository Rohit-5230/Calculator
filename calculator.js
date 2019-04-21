window.addEventListener("keydown",keyPress);
function insert(num){
    document.form.screen.value=document.form.screen.value + num;
}
function result(){
    var x=document.form.screen.value;
    if(x){
    document.form.screen.value=eval(x);
  }
}
function clean(){
    document.form.screen.value="";
}
function back(){
    var x=document.form.screen.value;
    document.form.screen.value=x.substring(0,x.length-1);
}
function keyPress(event){
        if(event.keyCode==13){
            result();
        }
    }
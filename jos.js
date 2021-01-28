
//<input id="id1" type="tel" inputmask="+380 (999) 999 99 99"
//clearMaskOnLostFocus = "true"></input>




//document.querySelector('.name').addEventListener('keyup', function(){
   // this.value = this.value.replace(/[\d]/g, '');
//});

function validate_form ( )
{
    let valiu = document.getElementById("nam")
      
   // alert (valiu.value)
    if(valiu.value.match(/^[A-Z][a-z]{3,16}$/g))
    {
        
        valiu.style.background="green"
        
    }
    else
    {
        alert("Введіть імя, імя повинно починатись з великої літери , в імені не повинні бути цифри ")
        valiu.style.background="red"
    }
    
}

function newFunction ( ) 
{
    let telef = document.getElementById("tele")
    if(telef.value.match(/^[0-9]/g))
    {
        telef.style.background="green"
    }
    else
    {
        alert("Введіть правельні значення  ")
        telef.style.background="red"
    }
}
function newFunction1 ( )
{
    let mail = document.getElementById("emma")
    if(mail.value.match(/^[A-Z][a-z]{3,16}$/g))
    {
        mail.style.background="green"
    }
    else
    {
        alert("Введіть правельні значення  ")
        mail.style.background="red"
    }
}
function cal_oll() 
{
    validate_form ()
    newFunction ()
    newFunction1 ()
    

}
    



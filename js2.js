function notValid(x, mesg) 
{
alert(mesg)
x.style.borderColor = "red"
}

function validEmpty(v) 
{
let some = document.getElementById(v)
let value = some.value
if (!value) 
{
notValid(some, "Поле "+ some.name +' є пустим.')
return true
}
else
{
some.style.borderColor = "grey"
return false
}
}

function validName(v){
let name = document.getElementById(v)
if(name.value.match(/^[A-Z][a-z]{3,16}$/g)){
//ALL in OK
}
else{
//NOT VALID
notValid(name,"Ваше "+name.name+" містить неправильне значення.\n"+name.value+" є неправильним!!!\
\nПерша буква повинна бути великою \
\nусі послідуючі маленькими, не повинно бути цифр і інщих спец символів\
\nНе менше 3 символа і не більше 16.\nВиключно латинські символи! ")
x.style.borderColor = "red"
}
}

function validPhone(v){
let tel = document.getElementById(v)
if(tel.value.match(/^[0-9]{10}$/g)){
//valid 
}else{
notValid(tel,"Поле "+tel.name+" містить неправильне значення.\
\nВиключно числа і небільше неменше 10.")
}
}

function Validation() {
let list = { email: "email", name: "name", sname: "sname", tel: "tel" }
for (let i in list) {
//alert("call Valid")
validEmpty(list[i])
if (list[i] == "name" ||list[i] == "sname") 
{
validName(i)
}
if(list[i]=="tel")
{
validPhone(i)
}
}
}


function iteration(i) {
    //alert("itteration: i=",i)
    let resault = true;
    if (i == "name" || i == "sname") {
    resault = validName(i)
    }
    if (i == "tel") {
    resault = validPhone(i)
    }
    return resault
    }
    function onFocus(ths) {
    ths.style.borderColor = "blue"
    ths.style.background = "#FEEAD5"
    
    }
    function FirstUP(ths) {
    if (ths.id == "name" || ths.id == "sname") { Names(ths) }
    
    // GET out error will give a some errors in console
    //ths.style.borderColor = "grey"
    let out = document.getElementById(ths.id + "E")
    out.style.display = "none"
    out.innerHTML = ""
    //alert("ths "+ths.id)
    if (iteration(ths.id, "sme")){
    ths.style.borderColor="green"
    }
    // addEventListener!!!
    function Initialization(th){
        let v = document.getElementById(th).addEventListener(onblur,FirstUP())
    }
    }
    function Names(ths) {
    ths.value = ths.value.slice(0, 1).toUpperCase() + ths.value.slice(1)
    }
    
    function notValidOutPut(x, mesg) {
    let out = x.id + "E"
    out = document.getElementById(out)
    out.style.display = "block"
    out.style.fontSize = "9px"
    out.style.borderColor = "solid 1px red"
    out.style.background = "black"
    out.style.padding = "4px"
    out.style.width = "190px"
    out.style.textAlighn = "justify"
    out.innerHTML = mesg
    }
    
    function Over(ths){
    ths.style.backgroundColor="yellow"
    ths.style.color="black"
    ths.style.border="none"
    ths.style.textAlighn="center"
    ths.style.textDecoration="none"
    ths.style.display="inline-block"
    ths.style.paddingBottom="10px"
    ths.style.paddingTop="10px"
    ths.style.marginTop="10px"
    ths.style.alighnContent="center"
    ths.style.marginLeft="15px"
    ths.style.marginRight="15px"
    ths.style.marginBottom="10px"
    ths.style.fontSize="20px"
    }
    function Out(ths){
    ths.style.backgroundColor="orange"
    ths.style.color="white"
    ths.style.border="none"
    ths.style.textAlighn="center"
    ths.style.textDecoration="none"
    ths.style.display="inline-block"
    ths.style.paddingBottom="10px"
    ths.style.paddingTop="10px"
    ths.style.marginTop="10px"
    ths.style.alighnContent="center"
    ths.style.marginLeft="15px"
    ths.style.marginRight="15px"
    ths.style.marginBottom="10px"
    ths.style.fontSize="20px"
    }
    
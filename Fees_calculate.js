let SelectTag = document.querySelector('#Sel');
let ResultTag = document.querySelector('#result');
let PTag = document.querySelector('#paid');
let DTag = document.querySelector('#due');
let btnTag = document.querySelector('#btn');
let ConcTag = document.querySelector('#conc');
let GENTag = document.querySelector('#gen');
let OBCTag = document.querySelector('#obc');
let SCTag = document.querySelector('#sc');


SelectTag.addEventListener('change',function (){
    ResultTag.value = SelectTag.value;
});

GENTag.addEventListener('change',function(){
    ConcTag.value = GENTag.value;
});
OBCTag.addEventListener('change',function(){
    ConcTag.value = OBCTag.value;
});
SCTag.addEventListener('change',function(){
    ConcTag.value = SCTag.value;
});
btnTag.addEventListener("click",function(){
    let total = ResultTag.value - ConcTag.value - PTag.value;
    DTag.value = total;
});
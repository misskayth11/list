const form=document.querySelector('#form1');
const form2=document.querySelector('#form2');
const input=document.querySelector('#listname');
const input2=document.querySelector('#input2')
const btn=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2')
const list=document.querySelector('#odlist');
const name=document.querySelector('#namel');
form.addEventListener('submit',function(e){
    e.preventDefault();
    name.innerText=input.value;
});
form2.addEventListener('submit',function(e){
    e.preventDefault();
    const content=document.createElement('li');
    content.innerText=input2.value;
    list.append(content);
})
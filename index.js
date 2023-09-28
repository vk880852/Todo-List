let x=document.querySelector('.input1');
let x2=document.querySelector('.btn');
let x3=document. querySelector('.list');
let edittodo=null
x2.addEventListener('click',()=>
{
   let p1=x.value.trim();
   if(p1.length<=0)return 0;
   if(x2.value==="edit")
   {
      edittodo.target.previousElementSibling.previousElementSibling.innerHTML=x.value;
      x2.value="add";
   }
   else 
   {
   let x5=document.createElement('li');
   let x4=document.createElement('p');
   const dltbtn=document.createElement('button');
   dltbtn.innerText="remove";
   const editbtn=document.createElement('button');
   editbtn.innerText="edit";
   x4.innerHTML=p1;
   x5.appendChild(x4);
   x5.appendChild(dltbtn);
   x5.appendChild(editbtn);
   x3.appendChild(x5);
   }
   savetodo(p1);
   x.value="";
});
const updatetodo=(e)=>
{
 
   if(e.target.innerHTML=="remove")
   {
      x3.removeChild(e.target.parentElement);
      deletetodo(e.target.parentElement);
   }
   if(e.target.innerHTML=="edit")
   {
      x.value=e.target.previousElementSibling.previousElementSibling.innerHTML;
      edittodo=e;
      x.focus();
      x2.value="edit";
   }
}
x3.addEventListener('click',updatetodo);
const savetodo=(todo)=>
{
   let arr;
   if(localStorage.getItem("todo")===null)
   {
      arr=[];
   }
   else
   {
      arr=JSON.parse(localStorage.getItem("todo"));
   }
   arr.push(todo);
   localStorage.setItem("todo",JSON.stringify(arr));
}
const gettodo=()=>
{
   let arr;
   if(localStorage.getItem("todo")===null)
   {
      arr=[];
   }
   else
   {
      arr=JSON.parse(localStorage.getItem("todo"));
      arr.forEach(x=>
         {
            let x5=document.createElement('li');
   let x4=document.createElement('p');
   const dltbtn=document.createElement('button');
   dltbtn.innerText="remove";
   const editbtn=document.createElement('button');
   editbtn.innerText="edit";
   x4.innerHTML=x;
   x5.appendChild(x4);
   x5.appendChild(dltbtn);
   x5.appendChild(editbtn);
   x3.appendChild(x5);
         });
   }
}
const deletetodo=(e)=>
{
   let arr;
   if(localStorage.getItem("todo")===null)
   {
      arr=[];
   }
   else
   {
      arr=JSON.parse(localStorage.getItem("todo"));
   }
   let child=e.children[0].innerHTML;
   let childindex=arr.indexOf(child);
   arr.splice(childindex,1);
   localStorage.setItem("todo",JSON.stringify(arr));
}
document.addEventListener('DOMContentLoaded',gettodo);
const content = document.querySelectorAll(".accordion__content");

content.forEach((item,index)=>{
    let header = item.querySelector("header");
    header.addEventListener("click",()=>{
       item.classList.toggle("open"); 


       let desc = item.querySelector('.description');
       if(item.classList.contains("open")){
        desc.style.height = `${desc.scrollHeight}px`
        item.querySelector("svg").classList.replace("fa-plus","fa-minus");
       }
       else{
        desc.style.height = "0px";
        item.querySelector("svg").classList.replace("fa-minus", "fa-plus");

       }
       removeOpen(index,desc)
    })
})
function removeOpen(index){
    content.forEach((item2,ind)=>{
       let desc = item2.querySelector(".description");
        if(index != ind){
            item2.classList.remove("open");
            desc.style.height = "0px";
        item2.querySelector("svg").classList.replace("fa-minus", "fa-plus");


        }
     
    })
}

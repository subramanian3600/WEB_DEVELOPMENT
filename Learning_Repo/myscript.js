setTimeout(function(){
        $('.loader').fadeToggle(1000);
    
    },2000);
const buttons=document.querySelectorAll('a');
buttons.forEach(btn=>{
    btn.addEventListener('click',function(e){
        let x=e.clientX-e.target.offserLeft;
        let y=e.clientY-e.target.offsetTop;

        let ripples=document.createElement('span');
        ripples.style.left=x+'px';
        ripples.style.top=y+'px';
        this.appendChild(ripples);

        setTimeout(() =>{
            ripples.remove()
        },1000);

    })
})

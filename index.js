var date=document.querySelector(".birthday");
var number=document.querySelector(".lucky-no");
var button=document.querySelector(".check");

button.addEventListener("click",function(){
    var total=calculateSum(date.value.replaceAll('-',''));
    console.log(total)
    if(total%number.value==0){
        document.querySelector(".message").innerText="lucky bday";
    }
    else{
        document.querySelector(".message").innerText="unlucky bday";
    }   
});

function calculateSum(no){
    var sum=0,dig;
    console.log(no);
    for(i=no;i>0;){   
         dig=i%10;
        sum+=dig;
        i=Math.trunc(i/10)
    }
    return sum;
}

/*validate both inputs -no is filled nd year is correct */
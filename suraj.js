function submit(){
            let button=document.getElementById("input").value;

            if (button==""){
                document.getElementById("sunil").innerHTML="Error";
                
            }else{
                document.getElementById("balu").innerHTML=button;
            }
        }
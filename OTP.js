document.querySelector(".submit-btn").addEventListener("click",OTP)
var data3=JSON.parse(localStorage.getItem("main"))
var Data= JSON.parse(localStorage.getItem("price"))
var box=document.querySelector("#rupee")
var box2=document.querySelector("#off")


Display(box,box2)
function Display(){
   
    box.innerText=Data[Data.length-1];
    box2.innerText="After 50% off Payable Amount"
    console.log(Data)
    
    
}

function OTP(event){
    event.preventDefault()
    swal({
        title: "Congratulation!",
        text: "Your payment successfull",
        icon: "success",
        buttons: true,
        dangerMode: false,
    })
    .then(function (isOkay) {
        if (isOkay) {
            
            window.location.href="https://www.zee5.com/?utm_source=GoogleSearch&utm_medium=Mark_CPA&utm_campaign=Search_SVOD_ZEE5-Brand-ZEE5-Only-Ex-Performance&utm_term=zee5&utm_content=Brand-ZEE5-Only-Ex-ETA&gclsrc=ds&gclsrc=ds"
           
        }
    });
    return false;
   

   
   
    
}
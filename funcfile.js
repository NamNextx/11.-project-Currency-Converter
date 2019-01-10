/*var gt,gt1,number;
function getin(obj) {
     gt = obj.value;
}
function getout(dataout) {
     gt1 = dataout.value;
}*/
function chuyendoi() {
    number = document.getElementById("number").value;
    var gt=document.getElementById("selectin").selectedIndex; // lay ve index cua ham select
    var gt1=document.getElementById("selectout").selectedIndex;
    if(gt==1&& gt1==2)
    {
        //document.write("VND");
        var tiendachuyen=document.getElementById("div1");
        var tinhtoan=number/22000;
        tiendachuyen.innerHTML="Result: "+tinhtoan+" $";
    }
    else  if(gt==2&& gt1==1)
    {
        //document.write("VND");
        var tiendachuyen=document.getElementById("div1");
        var tinhtoan=number*22000;
        tiendachuyen.innerHTML="Result: "+tinhtoan+" VND";
    }
    /*   else  if(gt=="USD"&& gt1=='USD')
       {
           //document.write("VND");
           var tiendachuyen=document.getElementById("div1");
           tiendachuyen.innerHTML="Result: "+"Ban can lua chon loai tien can chuyen";
       }*/
    else
    {
        //document.write("VND");
        var tiendachuyen=document.getElementById("div1");
        tiendachuyen.innerHTML="Result: "+"Ban can lua chon loai tien can chuyen";
    }





}
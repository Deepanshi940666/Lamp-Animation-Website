let lamp= document.getElementById("lamp");
let checker=0;
lamp.addEventListener("click", () => {
    if (checker==0) {
        document.body.style.backgroundImage= "url('./assets/StoreDark.png')"; 
        checker=1;
    }
    else{
         document.body.style.backgroundImage= "url('./assets/store.png')";
        checker=0;
    }
});
function generateNumber(){
    
    const min = Math.ceil(document.querySelector(".text-box1").value)
    const max= Math.floor(document.querySelector(".text-box2").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

   document.getElementById("resultado").innerText = result;
}

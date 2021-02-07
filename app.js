function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        console.log('Shorter Pin' + pin);
        return getPin();
    }
}

// display generated pin pitgeneretClick
function generetPin(){
    const pinInput = document.getElementById("pinInput");
    pinInput.value = getPin();
}

// Input Empty Content


// Handle Calculetor Button Event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            const typedInput = document.getElementById('typedPin');
            typedInput.value = '';
            var element = document.getElementById("typedPin");
            element.classList.remove("is-invalid");
            element.classList.remove("is-valid");
        }
    }
    else{
      const typedInput = document.getElementById('typedPin');
      typedInput.value = typedInput.value + digit;
    }
})

// verify Code
function verifyPin(){
    const pin = document.getElementById("pinInput").value;
    const typedPin = document.getElementById('typedPin').value;
    if(pin === typedPin){     
     var element = document.getElementById("typedPin");
     element.classList.add("is-valid");
     element.classList.remove("is-invalid");
    }
    else{
        var element = document.getElementById("typedPin");
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
}

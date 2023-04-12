function handleclick() {
    console.log ("Ouch, I have been clicked!")
}

    let btn = document.getElementById ("clickMeBtn");
    btn.addEventListener('click', handleClick)


    // Keyboard events
    function handleMyKeyEvent (e) {
    let pElem = document.getElementById ("result");

    const numeralsinAr = "٠١٢٣٤٥٦٧٨٩";
    const numeralsinEn = "0123456789";

    if (e.keyCode >=48 && e.keyCode < 57){
    let i = numeralsInAr.indexof (e.key);
    // the typed in digit is in the numeralsInAr string
    if(i> -1){
    pElem.InnerText += numeralsInEn[i]
    }
    else{
     pElem. innerText += e. key;
    }
}
    }

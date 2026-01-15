function handleNoClick(){
    const noButton=document.querySelector(".no-button");
    noButton.textContent=message[Index];
    messageIndex=(messageIndex+1)%messages.lenght;
    const currentSize=parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize='${currentSize*1.5}px';
}
function handleYesClick(){
    window.location.href="yes_page.html";
}

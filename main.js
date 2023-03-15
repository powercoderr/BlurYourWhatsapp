const TIME_INTERVAL = 100
const BLUR_STYLE = 'blur(3px)'
const MESSAGE_CLASS_NAME = '_2KKXC'

const blurWhatsappMessage =  () => {
    let chatMessages = document.getElementsByClassName(MESSAGE_CLASS_NAME);
    
    if(chatMessages.length === 0) { 
        setTimeout(blurWhatsappMessage, TIME_INTERVAL)
    }else{
        for (chatMessage of chatMessages){
            chatMessage.style.filter = BLUR_STYLE
        }

        //Required to make the message keep blured when move to archived chat or vice versa
        setTimeout(blurWhatsappMessage, TIME_INTERVAL)
    }
}

setTimeout(blurWhatsappMessage, TIME_INTERVAL)


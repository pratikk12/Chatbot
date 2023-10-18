// document.addEventListener("DOMContentLoaded", function () {
//     const responseObj = {
//         Hello: "Hey, how are you doing?"
//     };

//     const msgArea = document.getElementById("msg-area");
//     const input = document.getElementById("input");
//     const text = document.getElementById("text");
//     const send = document.getElementById("send");

//     send.addEventListener('click', sendMessage)


//     function sendMessage() {
//         const message = text.value.trim();
//         if (message !== "") {
//             displayMessage("you", message)
//             setTimeout(() => {
//                 const response = responseObj[message];
//                 if (response) {
//                     displayChatbotMsg(response);
//                 }
//             }, 1000);
//         }
//         text.value = '';

//     }


//     function displayMessage(sender, message) {
//         const messageDiv = document.createElement("div");
//         messageDiv.className = "message";
//         messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//         chatBox.appendChild(messageDiv);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }

// });

document.addEventListener("DOMContentLoaded", function () {
    const responseObj = {
        Hello: "Hey, how are you doing?"
    };

    const msgArea = document.getElementById("msg-area");
    const text = document.getElementById("text");
    const send = document.getElementById("send");
    text.addEventListener('input', adjustTextareaHeight);
    send.addEventListener('click', sendMessage);

    function adjustTextareaHeight() {
        text.style.height = 'auto';
        text.style.height = (text.scrollHeight) + 'px'
    }

    function sendMessage() {
        const message = text.value.trim();
        let response = "";
        if (message !== "") {
            displayMessage(message);
            setTimeout(() => {
                response = responseObj[message] || "Sorry, I don't have a answer for this question.";
                if (response) {
                    displayChatbotMsg(response);
                }
                else { response = "Sorry, I don't have a answer for this question." }
            }, 1000);
        }
        text.value = '';
        text.style.height = '34px'
    }

    function displayMessage(message) {
        const messageDiv = document.createElement("div");
        const para = document.createElement("p")
        messageDiv.className = "message";
        para.innerHTML = `<strong>${message}</strong>`;
        msgArea.appendChild(messageDiv);
        messageDiv.appendChild(para);
        msgArea.scrollTop = msgArea.scrollHeight;
    }

    function displayChatbotMsg(message) {
        const chatbotMsgDiv = document.createElement("div");
        const para = document.createElement("p")
        chatbotMsgDiv.className = "message-chatbot";
        para.innerHTML = `<strong>${message}</strong>`;
        msgArea.appendChild(chatbotMsgDiv);
        chatbotMsgDiv.appendChild(para);
        msgArea.scrollTop = msgArea.scrollHeight;
    }
});

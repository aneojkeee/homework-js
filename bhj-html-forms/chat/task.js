const chatWidget = document.querySelector("div.chat-widget");
const inputMessage = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let newMessage = "";
const date = new Date();
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
const hour = new Intl.DateTimeFormat('en', { hour: '2-digit', hour12: false }).format(date);
const minute = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(date);
let botMessage = [
    'Где Ваша совесть?',
    'Вы не купили ни одного товара, чтобы с нами так разговаривать',
    'Кто тут?',
    'Добрый день.  До свидания!',
    'К сожалению все операторы в данный момент заняты. Не пишите нам больше!'

];

function textMessage(e) {
    newMessage = e.target.value;
}

function submitMessage(e) {
    if (e.key === 'Enter' & newMessage !== "") {
        messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${da} ${mo} ${hour}:${minute} </div>
    <div class="message__text">
        ${newMessage}
    </div>
    </div>
    `;
        inputMessage.value = "";
        newMessage = "";
        setTimeout(submitMessageBot, 1000);

    }
}

function submitMessageBot() {
    let randNumber = Math.round(Math.random() * (botMessage.length - 1));
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${da} ${mo} ${hour}:${minute} </div>
    <div class="message__text">
        ${botMessage[randNumber]}
    </div>
    </div>
        `;
}

function openChat() {
    if (!chatWidget.classList.contains('chat-widget_active')) {
        chatWidget.classList.add('chat-widget_active');
    }
}

document.addEventListener('click', openChat);
document.addEventListener('keydown', submitMessage);
inputMessage.addEventListener('input', textMessage)
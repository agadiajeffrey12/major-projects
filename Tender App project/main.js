const setcog = document.querySelector('.setcog')
const setting = document.querySelector('.settings');
const colon = document.querySelector('.theme');
const bdb = document.querySelector('.bdb')
const main = document.querySelector('.main');
const test = document.querySelector('.close');
console.log(setting, bdb, close);

test.addEventListener('click', function(){
    colon.style.visibility ='hidden';
})

function cog() {
    setting.style.transform ='translateX(200%)'; 
    setting.style.transition = 'all 0.3s ease-in-out'
    if (colon.style.visibility = 'visible') {
        colon.style.visibility ='hidden'; 
        colon.style.transition = 'all 0.3s ease-in-out'
    }
}
function theme(){
    colon.style.visibility ='visible'; 
    // colon.style.transition = 'all 0.3s ease-in-out'
    if (setting.style.visibility = 'visible') {
        setting.style.transform ='translateX(400%)'
    }
}

// bdb.addEventListener('click', function(){
//     colon.style.visibility ='hidden'; 
// })

function partial(){
    bdb.style.backgroundColor = 'rgba(57, 44, 75, 0.562)';
    bdb.style.transition = 'all 1s ease-in-out'
}

function dark(){
    bdb.style.backgroundColor = 'rgb(15, 15, 24)';
    bdb.style.transition = 'all 1s ease-in-out'
}

function bright(){
    bdb.style.backgroundColor = '#c4c0c9';
    bdb.style.transition = 'all 1s ease-in-out'
}

function arrow(){
    setting.style.transform = 'translateX(400%)'
}

const fireShield = document.querySelector('.fire-shield');
const shieldFire = document.querySelector('.shield-response');

function shield() {
    fireShield.style.visibility = 'visible';
    fireShield.style.transition = 'all 0.3s ease-in-out';
    setting.style.transform = 'translateX(400%)';
    colon.style.visibility ='hidden'; 
}

function closeResponse() {
    fireShield.style.visibility = 'hidden'
    fireShield.style.transition = 'all 0.3s ease-in-out';
    shieldFire.style.height = '70%'
    shieldFire.style.width = '50%'
}

function enlargeResponse() {
    shieldFire.style.height = '100vh'
    shieldFire.style.width = '100vw'
    shieldFire.style.transition = 'all 0.3s ease-in-out';
    main.style.padding = '0'
}

function normalResponse() {
    shieldFire.style.height = '70%'
    shieldFire.style.width = '50%'
}

const chatSetting = document.querySelector('.chat-settings')

function showChatSetting(){
    chatSetting.style.visibility = 'visible'
    chatSetting.style.transition = 'all 0.3s ease-in-out'
}

function closeChatSetting(){
    chatSetting.style.visibility = 'hidden'
    chatSetting.style.transition = 'all 0.3s ease-in-out'
}



const addingChatNumber = document.querySelector('.adding-chats-num').value;

function displayChatValue(){
    const addingChat = document.querySelector('.adding-chats').value;
    const doc = document.createElement('div'); 
    doc.innerHTML = addingChat;
    const container = document.querySelector('.chats');
    container.appendChild(doc);
    doc.classList.add('chat-dispay');
}

const chatPopUp = document.querySelector('.chat-popup');
console.log(chatPopUp);

function openChatLog() {
    chatPopUp.style.visibility = 'visible';
    setting.style.transform ='translateX(400%)';
}

function closeChat() {
    chatPopUp.style.visibility = 'hidden'
}

function enlargeChat() {
    chatPopUp.style.height = '100vh'
    chatPopUp.style.width = '100vw';
    chatPopUp.style.top = '0'
    chatPopUp.style.left = '0'
    chatPopUp.style.transition = 'all 0.3s ease-in-out';
    main.style.padding = '0'
}

function normalChat() {
    if(chatPopUp.style.top = '0'){
        chatPopUp.style.height = '70%';
        chatPopUp.style.width = '100%';
        chatPopUp.style.top = '15%'
        chatPopUp.style.left = '60%'
    }
}

const fontPopUp = document.querySelector('.font-popup');

function openFontLog() {
    fontPopUp.style.visibility = 'visible';
    setting.style.transform ='translateX(400%)';
}

function closeFont() {
    fontPopUp.style.visibility = 'hidden'
}

const accountPopUp = document.querySelector('.account-popup');

function openAccountLog() {
    accountPopUp.style.visibility = 'visible';
    setting.style.transform ='translateX(400%)';
}

function closeAccount() {
    accountPopUp.style.visibility = 'hidden'
}

function enlargeAccount() {
    accountPopUp.style.height = '100vh'
    accountPopUp.style.width = '100vw';
    accountPopUp.style.top = '0'
    accountPopUp.style.left = '0'
    accountPopUp.style.transition = 'all 0.3s ease-in-out';
    main.style.padding = '0'
}

function normalAccount() {
    if(accountPopUp.style.top = '0'){
        accountPopUp.style.height = '70%';
        accountPopUp.style.width = '100%';
        accountPopUp.style.top = '15%'
        accountPopUp.style.left = '60%'
    }
}
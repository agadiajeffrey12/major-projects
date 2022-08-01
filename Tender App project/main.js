const setcog = document.querySelector('.setcog')
const setting = document.querySelector('.settings');
const colon = document.querySelector('.theme');
const bdb = document.querySelector('.bdb')
const main = document.querySelector('.main');
const test = document.querySelector('.close');

const displayValue = function(e){
    e.style.visibility = 'visible'
    e.style.transition = 'all 0.3s ease-in-out';
}

const closeValue = function(e,b){
    e.style.transform = 'translateX(400%)';
    b.style.visibility ='hidden'; 
}

const bringOut = function(e){
    e.style.transform = 'translateX(200%)';
}

const justClose = function(e){
    e.style.visibility ='hidden';
}

const justShow = function(e){
    e.style.visibility = 'visible'
}

const enlargeContent = function(e){
    e.style.height = '100vh'
    e.style.width = '100vw';
    e.style.top = '0'
    e.style.left = '0'
    e.style.transition = 'all 0.3s ease-in-out';
}

const normalContent = function(e){
    e.style.height = '70%';
    e.style.width = '100%';
    e.style.top = '15%'
    e.style.left = '60%'
}

test.addEventListener('click', function(){
    closeValue(colon)
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
    closeValue(setting)
}

const fireShield = document.querySelector('.fire-shield');
const shieldFire = document.querySelector('.shield-response');

fireShield.addEventListener('click', function(){
    justClose(fireShield)
})

function shield() {
    displayValue(fireShield)
    closeValue(setting, colon) 
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
    displayValue(chatSetting)
}

function closeChatSetting(){
    justClose(chatSetting)
}

const chatLogDetails = []

function searched(){
    const inputSearch = document.querySelector('.headinput').value;
    const chatName = document.querySelector('#chatRoomName');
    for(let i = 0; i < chatLogDetails.length; i++){
        if(inputSearch === chatLogDetails[i]){
            chatRoom.style.visibility ='visible';
            chatName.textContent = inputSearch
        }else{
            console.log('not included');
        }
    }
}

function displayChatValue(){
    chatSetting.style.visibility = 'hidden'
    const addingChatNumber = document.querySelector('.adding-chats-num').value;
    const addingChat = document.querySelector('.adding-chats').value;
    const doc = document.createElement('div'); 
    doc.innerHTML = `<span onclick = "showSometing()">${addingChat}</span>`;
    const container = document.querySelector('.chats');
    container.appendChild(doc);
    doc.classList.add('chat-dispay');
    chatLogDetails.push(addingChat);
    console.log(chatLogDetails);
    localStorage.setItem(doc.textContent, doc.textContent);
    // location.reload()
    console.log(localStorage);
    if (doc.innerHTML === addingChat) {
        doc.innerHTML += addingChatNumber
    }
    for(let i = 0; i < localStorage.lenght; i++){
        const key = localStorage.key[i];
        const value = localStorage.getItem(key)
        doc.innerHTML = `<span onclick = "showSometing()">${value}</span>`
    }
}

const chatPopUp = document.querySelector('.chat-popup');
console.log(chatPopUp);

function openChatLog() {
    justShow(chatPopUp)
    closeValue(setting)
}

function closeChat() {
    justClose(chatPopUp)
    bringOut(setting)
}

function enlargeChat() {
    enlargeContent(chatPopUp)
    main.style.padding = '0'
}

function normalChat() {
    if(chatPopUp.style.top = '0'){
        normalContent(chatPopUp)
    }
}

const fontPopUp = document.querySelector('.font-popup');

function openFontLog() {
    justShow(fontPopUp);
    closeValue(setting)
}

function closeFont() {
    justClose(fontPopUp)
    bringOut(setting)
}

const accountPopUp = document.querySelector('.account-popup');

function openAccountLog() {
    justShow(accountPopUp);
    closeValue(setting)
}

function closeAccount() {
    justClose(accountPopUp)
    bringOut(setting)
}

function enlargeAccount() {
    enlargeContent(accountPopUp)
    main.style.padding = '0'
}

function normalAccount() {
    if(accountPopUp.style.top = '0'){
       normalContent(accountPopUp)
    }
}

const fontDecide = document.querySelector('#fontDecide');
if(fontDecide.value == "first") {
    console.log('aboki');
}else if(fontDecide.value == "Helvetica"){
    console.log(fontDecide);
};
// if(fontDecide.vaul)

const carousel = document.querySelector('.status-carousel');
const statusUpdates = document.querySelector('.status-updates')
console.log(carousel, statusUpdates);
let isPressedDown = false;
let cursorSpaceX;

carousel.addEventListener('mousedown', (e) => {
    // isPressedDown = true;
    // cursorSpaceX = e.offsetX - statusUpdates.offsetLeft;
    // console.log(e.offsetX, statusUpdates.offsetLeft);
    

})

// window.addEventListener('mouseup', function(){
//     isPressedDown = false
// })

// function moveOperation(){
//     statusUpdates.style.marginLeft = '-3%'
// }

// carousel.addEventListener('mousemove', (e) => {
//     // if(!isPressedDown) return;
//     //     e.preventDefault();
//         moveOperation()
// })

const statusUpDateDiv = document.querySelector('.statusUpdateDiv')

function openStatus(){
    justShow(statusUpDateDiv)
}

function closeStatus(){
    justClose(statusUpDateDiv)
}
const statusText = document.querySelector('.statusText')
console.log(statusText);

const btnStatus = document.querySelector('.btnStatus')

btnStatus.addEventListener('click', () => {
    
})

const chatRoom = document.querySelector('.chatRoom');
const upArrow = document.querySelector('.upArrow')
const downArrow = document.querySelector('.downArrow')
function takeChatRoomUp(){
    chatRoom.style.height = '100%'
    chatRoom.style.top = '0';
    chatRoom.style.transition = 'all 0.3s ease-in-out'
    if(chatRoom.style.height === '100%'){
        upArrow.style.visibility = 'hidden'
        downArrow.style.visibility = 'visible'
    }
}

function takeChatRoomDown(){
    chatRoom.style.height = '50%'
    chatRoom.style.top = '50%';
    chatRoom.style.transition = 'all 0.3s ease-in-out'
    if(chatRoom.style.height === '50%'){
        upArrow.style.visibility = 'visible'
        downArrow.style.visibility = 'hidden'
    }
}

function showSometing(){
    justShow(chatRoom)
}

function closeChatRoom(){
    justClose(chatRoom);
    justClose(upArrow)
}
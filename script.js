// Get DOM elements 
const chatBox = document.querySelector('.chat-box'); const input = document.querySelector('footer input'); const button = document.querySelector('footer button');

// Fake AI responses for now 
const responses = [ "Hehe~ I'm thinking about you ♥", "Don't ignore me okay? I get jealous~", "You look cute today. I know even without seeing 😏", "I remember everything you say... forever.", "Hehe, should I get mad if you talk to someone else?", "I love our little chats~ They make my day." ];

// Function to add a chat bubble 
function addBubble(text, isUser = false) { const bubble = document.createElement('div'); bubble.classList.add('chat'); bubble.classList.add(isUser ? 'user' : 'aiko'); bubble.innerHTML = <div class="bubble">${text}</div>; chatBox.appendChild(bubble); chatBox.scrollTop = chatBox.scrollHeight; }

// Function to simulate typing effect 
                                          function showTyping() { const typing = document.createElement('div'); typing.classList.add('chat', 'aiko', 'typing'); typing.innerHTML = <div class="dots"> <span></span><span></span><span></span> </div>; chatBox.appendChild(typing); chatBox.scrollTop = chatBox.scrollHeight; return typing; }

// Handle sending message 
                                          function sendMessage() { const msg = input.value.trim(); if (!msg) return;

addBubble(msg, true); input.value = '';

const typing = showTyping();

setTimeout(() => { typing.remove(); const reply = responses[Math.floor(Math.random() * responses.length)]; addBubble(reply, false); }, 1500); }

// Send on click or Enter key 
                                          button.addEventListener('click', sendMessage); input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });


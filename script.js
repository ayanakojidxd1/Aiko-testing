const chatBox = document.getElementById('chat-box');
const input = document.getElementById('input');
const send = document.getElementById('send');

function addBubble(message, sender = 'aiko') {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  if (sender === 'user') bubble.classList.add('user');
  bubble.innerText = message;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function aikoReply(userMsg) {
  const responses = [
    "Hehe... you're so fun to talk to 💕",
    "What are you planning now?",
    "Do you like me that much?~",
    "Aww, you're making me blush 😳",
    "I'll remember that... maybe 😈"
  ];
  const reply = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(() => addBubble(reply, 'aiko'), 800);
}

send.onclick = () => {
  const msg = input.value.trim();
  if (!msg) return;
  addBubble(msg, 'user');
  input.value = '';
  aikoReply(msg);
};

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') send.click();
});

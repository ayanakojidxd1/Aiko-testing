const chatArea = document.getElementById("chat-area");
const input = document.getElementById("messageInput");
const send = document.getElementById("sendBtn");

function addBubble(text, sender = 'bot') {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", sender);
  bubble.innerText = text;
  chatArea.appendChild(bubble);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function reply(msg) {
  const responses = [
    "Hehe~ You're fun to chat with 💕",
    "Do you think about me a lot?",
    "I'll stay with you forever.",
    "That made me smile 🥰",
    "Hmm... tell me more~"
  ];
  const replyText = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(() => addBubble(replyText, 'bot'), 800);
}

send.onclick = () => {
  const msg = input.value.trim();
  if (!msg) return;
  addBubble(msg, 'user');
  input.value = '';
  reply(msg);
};

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') send.click();
});

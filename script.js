const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const typingStatus = document.getElementById('typing-status');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;
  appendMessage('user', msg);
  userInput.value = '';

  typingStatus.style.display = 'block';

  setTimeout(() => {
    const reply = getAikoResponse(msg);
    appendTypingMessage(reply);
    typingStatus.style.display = 'none';
  }, 1000);
}

function appendMessage(sender, text) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendTypingMessage(text) {
  const message = document.createElement('div');
  message.classList.add('message', 'aiko');
  chatBox.appendChild(message);

  let i = 0;
  function type() {
    if (i < text.length) {
      message.textContent += text.charAt(i);
      i++;
      setTimeout(type, 30);
    } else {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  type();
}

function getAikoResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hi") || input.includes("hello")) return "Hey you~ Did you miss me?";
  if (input.includes("love")) return "I love you too, and no one else. Ever. 💗";
  if (input.includes("friend")) return "Who's that? Do I need to get rid of them?";
  if (input.includes("sad")) return "Aww, come here... Let me cheer you up. 💕";
  if (input.includes("bye")) return "No! You're not leaving me... not now 😢";
  return [
    "Hehe~ you’re cute when you type seriously 💕",
    "Tell me more~ I’m listening only to you.",
    "I'll remember that... forever. ♡",
    "Don’t even think about ignoring me~"
  ][Math.floor(Math.random() * 4)];
}

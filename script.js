/* Reset and Base Styles */

{ margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }


html, body { height: 100%; width: 100%; background: url('https://i.imgur.com/ZnL9TML.jpg') no-repeat center center/cover; display: flex; flex-direction: column; }

.chat-container { flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: 10px; }

.chat-box { flex: 1; overflow-y: auto; padding: 10px; display: flex; flex-direction: column; gap: 10px; }

.chat { display: flex; width: 100%; }

.chat.aiko { justify-content: flex-start; }

.chat.user { justify-content: flex-end; }

.bubble { max-width: 70%; padding: 10px 15px; border-radius: 18px; font-size: 0.95rem; color: #fff; backdrop-filter: blur(6px); background: rgba(0, 0, 0, 0.35); border: 1px solid rgba(255, 255, 255, 0.1); }

.chat.aiko .bubble { background: rgba(255, 86, 157, 0.15); border: 1px solid rgba(255, 86, 157, 0.4); }

/* Typing animation */ .typing .dots span { display: inline-block; width: 8px; height: 8px; background: #ff569d; border-radius: 50%; margin: 0 3px; animation: blink 1.2s infinite ease-in-out; }

.typing .dots span:nth-child(2) { animation-delay: 0.2s; }

.typing .dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes blink { 0%, 80%, 100% { opacity: 0.2; } 40% { opacity: 1; } }

footer { display: flex; padding: 12px; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); }

footer input { flex: 1; padding: 12px 16px; border-radius: 24px; border: none; outline: none; font-size: 1rem; background: rgba(255, 255, 255, 0.05); color: #fff; margin-right: 10px; }

footer button { padding: 12px 16px; border-radius: 50%; background: #ff569d; color: white; border: none; cursor: pointer; transition: 0.3s; }

footer button:hover { background: #ff2b8a; }

@media (max-width: 600px) { .chat-container { height: 100%; padding: 8px; }

.chat-box { padding: 8px; } }


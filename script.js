const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message !== '') {
    addMessage(message, 'user');
    botResponse(message);
    userInput.value = '';
  }
});

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botResponse(userMsg) {
  const msg = userMsg.toLowerCase();

  let response = "Hmm... je capte pas encore cette question 😅 Essaye autrement.";

  // Liste de réponses simples
  if (msg.includes("bonjour") || msg.includes("salut")) {
    response = "Yo 👋 ! Bienvenue sur CoreLog.";
  } else if (msg.includes("comment ça va") || msg.includes("ça va ?")) {
    response = "Toujours au top ! Et toi ?";
  } else if (msg.includes("qui es-tu")) {
    response = "Je suis CoreBot, le bot de l'app CoreLog 🔥.";
  } else if (msg.includes("corelog")) {
    response = "CoreLog, c’est une app de gestion de logs stylée, dark et efficace !";
  } else if (msg.includes("aide") || msg.includes("help")) {
    response = "Tu peux me poser des questions sur CoreLog, l’équipe, les commandes, etc.";
  } else if (msg.includes("merci")) {
    response = "Avec plaisir 😉";
  } else if (msg.includes("site web")) {
    response = "Le site est en cours de dev par Web4Core. Reste connecté !";
  } else if (msg.includes("github")) {
    response = "Le GitHub sera bientôt public 🔧.";
  } else if (msg.includes("web4core")) {
    response = "Web4Core est l'équipe derrière CoreLog. Solide 💪.";
  } else if (msg.includes("ton créateur") || msg.includes("qui t'a créé")) {
    response = "Je suis né grâce à Enzo, le boss de Web4Core 😎.";
  } else if (msg.includes("fonctionnalités")) {
    response = "CoreLog permet de logger des événements, gérer des discussions et plus encore.";
  } else if (msg.includes("mode dark") || msg.includes("dark mode")) {
    response = "C’est mon style préféré 🖤. Full dark avec une touche néon.";
  } else if (msg.includes("langage") || msg.includes("technologie")) {
    response = "HTML, CSS, JS pour l'interface. Backend à venir 💾.";
  } else if (msg.includes("admin") || msg.includes("fondateur")) {
    response = "Le fondateur, c’est Enzo 👑.";
  } else if (msg.includes("discord")) {
    response = "Le serveur s'appelle Web4Core Hub. Rejoins-nous !";
  } else if (msg.includes("bot")) {
    response = "C’est moi 🤖. Je suis ici pour t’aider.";
  } else if (msg.includes("connexion") || msg.includes("login")) {
    response = "La page de connexion arrive très bientôt !";
  } else if (msg.includes("dashboard")) {
    response = "Le tableau de bord est en cours de design. Tu vas kiffer.";
  } else if (msg.includes("inscription") || msg.includes("register")) {
    response = "Pas encore dispo, mais ça arrive très vite ⚙️.";
  } else if (msg.includes("version") || msg.includes("v")) {
    response = "Actuellement en version 0.1 (démo dev).";
  }

  setTimeout(() => {
    addMessage(response, 'bot');
  }, 500);
}

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

  const match = (variants) => variants.some(v => msg.includes(v));

  try {
    // Calcul mathématique
    if (/^[0-9+\-*/().\s]+$/.test(userMsg)) {
      response = `Résultat : ${eval(userMsg)}`;
    } else if (match(["bonjour", "salut", "yo", "coucou"])) {
      response = "Yo 👋 ! Bienvenue sur W4Bot.";
    } else if (match(["comment ça va", "ça va ?", "tu vas bien"])) {
      response = "Toujours au top ! Et toi ?";
    } else if (match(["qui es-tu", "t'es qui", "t'es quoi", "c'est quoi ce bot"])) {
      response = "Je suis W4Bot, l’assistant de la team W4Pulse. Je suis là pour t’aider ou taper la discute 👾";
    } else if (match(["w4pulse", "c’est quoi ce site", "site web", "tu sers à quoi", "explique-moi ce site"])) {
      response = "W4Pulse est la team qui m’a créé. Moi, je suis là pour t’aider sur le site.";
    } else if (match(["aide", "help", "je suis perdu", "besoin d’aide"])) {
      response = "Tu peux me poser des questions simples pour l’instant. Tape ‘menu’ pour voir ce que je comprends !";
    } else if (match(["merci", "thanks", "thx"])) {
      response = "Avec plaisir 😉";
    } else if (match(["github"])) {
      response = "Le GitHub sera bientôt public 🔧.";
    } else if (match(["ton créateur", "qui t'a créé", "créé par", "qui t’a fait"])) {
      response = "Je suis né grâce à Enzo, le boss de W4Pulse 😎.";
    } else if (match(["fonctionnalités", "tu fais quoi", "ce que tu sais faire"])) {
      response = "Je peux répondre à certaines questions et faire des calculs simples. Tape ‘menu’ pour plus.";
    } else if (match(["mode dark", "dark mode", "thème sombre"])) {
      response = "C’est mon style préféré 🖤. Full dark avec une touche néon.";
    } else if (match(["langage", "technologie", "tech utilisé"])) {
      response = "HTML, CSS, JS. Full Front baby 💻.";
    } else if (match(["admin", "fondateur", "proprio", "créateur"])) {
      response = "Le fondateur, c’est Enzo Izinga 👑.";
    } else if (match(["discord"])) {
      response = "Le serveur s'appelle W4Pulse Hub. Il est en cours de dev !";
    } else if (match(["bot"])) {
      response = "C’est moi 🤖. Je suis ici pour t’aider.";
    } else if (match(["version", "v ", "v.", "tu es en quelle version"])) {
      response = "Actuellement en version 0.2 🚧.";
    } else if (match(["c’est payant", "je dois payer", "c’est gratos", "c’est gratuit"])) {
      response = "Pour l’instant, c’est 100% gratuit. Profite pendant que c’est open 😎";
    } else if (match(["blague", "raconte un truc marrant", "fais moi rire"])) {
      response = "Pourquoi les développeurs détestent la nature ? Parce qu’il y a trop de bugs 🐛🌳";
    } else if (match(["tu parles français", "tu comprends le français", "français ?"])) {
      response = "Bien sûr que je parle français, gros 😎";
    }
  } catch (err) {
    response = "Oups, erreur dans le calcul 😅 Essaye un truc plus simple.";
  }

  setTimeout(() => {
    addMessage(response, 'bot');
  }, 200);
}

function updateHeure() {
  const maintenant = new Date();
  const heure = maintenant.toLocaleTimeString();
  document.getElementById("heure").textContent = heure;
}

setInterval(updateHeure, 1000)

updateHeure();

// ------------------ PARAGRAFI + TITOLO FADE-IN ------------------
const lines = [
  // gruppo 1
  "Johnny e Bravo, poliziotti di Lovo,",
  "Festeggiano su una spiaggia tra sole e fregna.",
  "È il compleanno di Johnny, tutto sembra tranquillo,",
  "Tra risate, cocktail e sabbia bollente.",

  // gruppo 2
  "Dal mare arriva la nave Cotton Club,",
  "Scarica negri come un’orda senza freni.",
  "Il capitano avanza, elegante, vestito di bianco,",
  "Con un solo problema: è un negro.",

  // gruppo 3
  "La spiaggia diventa un campo di battaglia,",
  "Fondine aperte, piedi nell’acqua salata.",
  "Johnny e Bravo tengono la posizione,",
  "Il nemico viene respinto.",

  // gruppo 4
  "Il pericolo è finito, la notte torna calma,",
  "la Cotton Club sparisce all’orizzonte.",
  "La festa riparte tra brindisi e caos,",
  "Perché il compleanno di Johnny va celebrato."
];

// funzione per far comparire titolo e testo in ordine
function showTitleAndLines() {
  const title = document.querySelector('h1');
  title.classList.add('visible'); // titolo visibile

  // dopo 1s inizia il testo
  setTimeout(() => {
    fadeLines(lines);
  }, 1000);
}

function fadeLines(lines, index = 0) {
  if(index >= lines.length) return;

  const el = document.getElementById(`line${index+1}`);
  el.textContent = lines[index];

  // forza il reflow
  void el.offsetWidth;
  
  el.classList.add('visible');

  // attende 2s e passa alla prossima riga
  setTimeout(() => {
    fadeLines(lines, index + 1);
  }, 700);
}

window.addEventListener('load', () => {
  showTitleAndLines();
});

// ------------------ PULSANTI ANIMATI ------------------
const buttons = document.querySelectorAll('button, .downloadBtn');
buttons.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = "scale(1.1)";
    btn.style.boxShadow = "0 0 25px rgba(255,255,255,0.7)";
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});

// ------------------ CONFETTI ------------------
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  const colors = ['#ff595e','#ffca3a','#8ac926','#1982c4','#6a4c93'];

  for (let i = 0; i < 50; i++) {
    const confetto = document.createElement('span');

    // dimensioni e colore casuali
    const size = Math.random() * 8 + 4;
    confetto.style.width = size + 'px';
    confetto.style.height = size + 'px';
    confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // posizione orizzontale casuale
    confetto.style.left = Math.random() * window.innerWidth + 'px';

    // durata e delay casuali
    const duration = 3 + Math.random() * 3;
    confetto.style.animationDuration = duration + 's';
    confetto.style.animationDelay = Math.random() * 5 + 's';

    confettiContainer.appendChild(confetto);

    // rigenera il confetto dopo la fine dell'animazione
    confetto.addEventListener('animationiteration', () => {
      confetto.style.left = Math.random() * window.innerWidth + 'px';
      confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
  }
}

window.addEventListener('load', createConfetti);

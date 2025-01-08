const text = `
  We are Studio Dev, an independent studio,\n
  based in france and founded by \n
  two passionate developers.\n
  With our skills in Python, C++, and \n
  other languages, we create games \n
  mixing retro and modernity.`;

let index = 0;
const speed = 30; // Vitesse de frappe en millisecondes

function typeWriter() {

  if (index < text.length) {
    const typewriterElement = document.getElementById("typewriter");
    // Ajout du prochain caractère, en remplaçant "\n" par "<br>"
    const nextChar = text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
    typewriterElement.innerHTML += nextChar;
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Lance l'effet après que la page ait chargé
document.addEventListener("DOMContentLoaded", typeWriter);

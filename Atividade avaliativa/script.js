/// Efeito de digitação com loop
function ativaLetra(elemento) {
  const textoOriginal = elemento.textContent.trim();
  const frases = [
    textoOriginal,
    "Aprovados que te entendem.",
    "Foco total no que cai na prova."
  ];

  let fraseIndex = 0;
  let charIndex = 0;
  let apagando = false;

  function digitar() {
    const fraseAtual = frases[fraseIndex];

    if (!apagando) {
      elemento.textContent = fraseAtual.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === fraseAtual.length) {
        apagando = true;
        setTimeout(digitar, 2000);
        return;
      }
    } else {
      elemento.textContent = fraseAtual.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        apagando = false;
        fraseIndex = (fraseIndex + 1) % frases.length;
      }
    }
    setTimeout(digitar, apagando? 40 : 75);
  }
  digitar();
}

const titulo = document.querySelector('.digitando');
if (titulo) ativaLetra(titulo);

// Header muda ao rolar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(1, 1, 3, 1)';
  } else {
    header.style.background = 'rgba(1, 1, 3, 0.95)';
  }
});

// Animação dos cards ao aparecer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.box').forEach(box => {
  box.style.opacity = '0';
  box.style.transform = 'translateY(20px)';
  box.style.transition = '0.6s ease';
  observer.observe(box);
});

// Lojinha - Carrinho
function adicionarCarrinho(produto) {
    let notif = document.getElementById('carrinho-notif');
    if (!notif) {
        notif = document.createElement('div');
        notif.id = 'carrinho-notif';
        document.body.appendChild(notif);
    }
    notif.textContent = `✓ ${produto} adicionado ao carrinho!`;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
}

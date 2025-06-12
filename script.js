const app = document.getElementById('app');

// Exemplo: tocar depois que a pessoa clicar em algo
document.getElementById('play-audio').addEventListener('click', () => {
  const audio = document.getElementById('bg-audio');
  audio.play()
    .then(() => console.log('Áudio tocando!'))
    .catch(err => console.log('Erro ao tocar áudio:', err));
});

});

// Tela inicial
function tela1() {
  app.innerHTML = `
    <div class="fotos-flutuantes">
      <img src="images/mai1.jpg" class="flutuante" />
      <img src="images/mai2.jpg" class="flutuante delay1" />
      <img src="images/mai3.jpg" class="flutuante delay2" />
      <img src="images/mai4.jpg" class="flutuante delay3" />
    </div>

    <img src="maigegeo.jpg" alt="Mai linda" style="width: 220px; height: 220px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);" />
    <p class="frase-fofa">Seu sorriso tem mais luz que o céu inteiro estrelado.</p>
    <h1>Feliz Dia dos Namorados, Mai! 💌 </h1>
    <p>Tenho um desafio do coração pra você...</p>
    <button onclick="tela2()">Vamos lá! 💌</button>
  `;
}
// Primeira pergunta + opções certa/errada
function tela2() {
  app.innerHTML = `
    <h1>Qual flor representa o nosso amor?</h1>
    <button onclick="telaErro()">🌹 Rosa vermelha</button>
    <button onclick="tela3()">🌻 Girassol</button>
  `;
}

// Resposta errada com incentivo fofo
function telaErro() {
  app.innerHTML = `
    <div class="figurinha">😅</div>
    <h1>Quase lá, amor!</h1>
    <p>Pensa bem: qual flor sempre segue a luz do sol?</p>
    <button onclick="tela2()">Tentar de novo</button>
  `;
}

// Resposta certa com comemoração
function tela3() {
  app.innerHTML = `
    <div class="figurinha">🌻</div>
    <h1>Isso! Girassol! 💛</h1>
    <p>Nosso amor sempre buscando a luz!</p>
    <button onclick="tela4()">Clica aqui gostosa</button>
  `;
}

// Contagem regressiva e poema especial
function tela4() {
  app.innerHTML = `
    <div class="figurinha">🌻</div>
    <h1>Faltam poucos dias pro nosso encontro!</h1>
    <div id="countdown">Calculando...</div>
    <p class="texto-van-gogh">
      Crescer ao seu lado é como esperar um girassol nascer:<br>
      a cada dia, mais luz, mais cor, mais nós.<br>
    </p>
    <button onclick="telaFinal()">Clica aqui se me ama</button>
  `;
  iniciarContagem('2025-07-27T00:00:00');
}

// Função da contagem regressiva
function iniciarContagem(target) {
  const el = document.getElementById('countdown');
  const targetMs = new Date(target).getTime();

  function update() {
    const diff = targetMs - Date.now();
    if (diff <= 0) {
      el.textContent = 'Hoje é o dia! Te vejo logo, meu amor. 💞';
      return clearInterval(interval);
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

el.innerHTML = `
  <div class="count-box">
    <div class="valor">${d}</div>
    <div class="label">dias</div>
  </div>
  <div class="count-box">
    <div class="valor">${h}</div>
    <div class="label">horas</div>
  </div>
  <div class="count-box">
    <div class="valor">${m}</div>
    <div class="label">minutos</div>
  </div>
  <div class="count-box">
    <div class="valor">${s}</div>
    <div class="label">segundos</div>
  </div>
`;


  }

  update();
  const interval = setInterval(update, 1000);
}

// Tela final com mensagem e playlist
function telaFinal() {
  app.innerHTML = `
    <div class="figurinha">🌻</div>
    <h1>Tá animada, Mai?</h1>
    <p class="texto-van-gogh">
      Até 25 de julho, cada segundo é só saudade bonita e poesia no peito.<br>
      Amo você, minha princesa. 🌻💛
    </p>
    <button onclick="window.open('https://open.spotify.com/playlist/3iV5h36TRwP0Io3428IBoP?si=e44601443a0044d4&pt=0ab19f7ce93336fb9c35974df6c30d57', '_blank')">
       Playlist boiolinha que fiz pra você 🎶
    </button>
  `;
}

// Começa a jornada
tela1();
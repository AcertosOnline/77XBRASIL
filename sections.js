// sections.js
function createSections() {
  const sectionsContent = `
    <section id="cotacoes">
      <h2 class="fade-in">SUPER COTAÇÃO</h2>
      <img loading="lazy" class="fade-in" src="img/8mil.webp" alt="Cotações de 8 Mil na 77XBRASIL.COM"><br>
      <div class="expandable-container fade-in">
        <div class="expandable-title" id="expandable-title">Mostrar cotações</div>
      </div>
      <div class="cotacoes-text fade-in">
        <div class="cotacao-grid">
          <span>Cotação a cada 1 real</span>
          <span></span>
          <hr>
          <span><i class="fas fa-check-circle"></i>MILHAR</span>
          <span class="value">8.000,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>CENTENA</span>
          <span class="value">800,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>GRUPO</span>
          <span class="value">20,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>DEZENA</span>
          <span class="value">80,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>UNIDADE</span>
          <span class="value">8,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>DUQUE DE GRUPO (1º AO 2º)</span>
          <span class="value">180,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>DUQUE DE GRUPO (1º AO 5º)</span>
          <span class="value">18,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>DUQUE DE DEZENA (1º AO 5º)</span>
          <span class="value">300,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>TERNO DE GRUPO (1º AO 3º)</span>
          <span class="value">1.500,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>TERNO DE GRUPO (1º AO 5º)</span>
          <span class="value">150,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>PASSE VAI</span>
          <span class="value">90,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>PASSE VAI E VEM</span>
          <span class="value">45,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>TERNO DE DEZENA (1º AO 5º)</span>
          <span class="value">5.000,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>QUADRA DE GRUPO (1º AO 5º)</span>
          <span class="value">1.000,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>QUINA DE GRUPO (1º AO 5º)</span>
          <span class="value">1.000,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>SENA DE GRUPO (1º AO 6º)</span>
          <span class="value">1.000,00</span>
          <hr>
          <span><i class="fas fa-check-circle"></i>PALPITÃO</span>
          <span class="value">800,00</span>
        </div>
      </div>
    </section>

    <section id="bonus">
      <h2 class="fade-in">SUPER BÔNUS</h2>
      <div class="bonus-container fade-in">
        <div class="bonus-card">
          <div class="highlight">20%</div>
          <h3>Bônus de Boas-Vindas</h3>
          <p>PRIMEIRA RECARGA</p>
          <p>De R$ 10,00 até R$ 500,00</p>
        </div>
        <div class="bonus-card">
          <div class="highlight">15%</div>
          <h3>Em dia de Federal</h3>
          <p>PRIMEIRA RECARGA DO DIA!</p>
          <p>De R$ 10,00 até R$ 500,00</p>
        </div>
        <div class="bonus-card">
          <div class="highlight">10%</div>
          <h3>Todos os Dias</h3>
          <p>PRIMEIRA RECARGA DO DIA!</p>
          <p>(Exeto dia de Federal)</p>
          <p>De R$ 10,00 até R$ 500,00</p>
        </div>
      </div>
      <div class="observation fade-in">Bônus válidos apenas na modalidade LOTERIAS.</div>
    </section>

    <section id="beneficios">
      <h2 class="fade-in">CONFIRA TODOS OS BENEFÍCIOS DA NOSSA PLATAFORMA</h2>
      <ul class="fade-in">
        <li>MELHORES COTAÇÕES DE MODALIDADES</li>
        <li>APP PARA ANDROID e IPHONE IOS</li>
        <li>DEPÓSITO A PARTIR DE R$ 10,00</li>
        <li>SAQUES E RECARGAS PELO APP</li>
        <li>100% AUTOMATIZADO E RÁPIDO</li>
        <li>SEUS DADOS SEGUROS</li>
        <li>SUPORTE HUMANIZADO 14h/7</li>
      </ul>
    </section>
  `;

  // Create a container div to hold the sections
  const container = document.createElement('div');
  container.innerHTML = sectionsContent;

  // Append the sections to the main content area
  const mainContent = document.querySelector('main') || document.body;
  mainContent.appendChild(container);

  // Attach event listener for toggleCotacoes
  const expandableContainer = document.querySelector('.expandable-container');
  if (expandableContainer) {
    expandableContainer.addEventListener('click', toggleCotacoes);
  } else {
    console.error('Expandable container not found.');
  }

  // Trigger animations after content is injected
  setupSectionAnimations();
}

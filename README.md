# Genius Game [GΞΞK CΦDΞ]

## Descrição

Este projeto é uma implementação web do clássico jogo da memória "Genius" (também conhecido como Simon). O objetivo do jogo é repetir a sequência de cores e sons gerada pelo computador, que se torna progressivamente mais longa e desafiadora. Este projeto foi desenvolvido utilizando HTML, CSS e JavaScript puros.

## Funcionalidades

* **Interface Clássica:** Design inspirado no jogo Genius original, com quatro quadrantes coloridos.
* **Efeitos Sonoros:** Cada quadrante possui um som único que é tocado quando ativado, além de um som de erro.
* **Níveis de Dificuldade Crescentes:** A sequência a ser memorizada aumenta a cada turno completado com sucesso.
* **Contador de Turnos:** Exibe o nível atual do jogador.
* **Sistema de High Scores:** Salva e exibe os cinco melhores placares localmente no navegador do usuário.
* **Controles de Jogo:** Botões "Power" para ligar/desligar o jogo e "Start" para iniciar uma nova partida.
* **Feedback Visual:** Os quadrantes acendem para indicar a sequência e quando o jogador interage.
* **Responsividade:** O layout se adapta a diferentes tamanhos de tela.
* **Limite de Tempo para Jogada:** O jogador tem um tempo limitado para responder a cada passo da sequência.
* **Máximo de Turnos:** O jogo pode ser vencido ao completar 20 turnos.

## Tecnologias Utilizadas

* **HTML5:** Estrutura base da página do jogo.
* **CSS3:** Estilização e layout do jogo, incluindo animações e responsividade.
* **JavaScript (ES6+):** Lógica do jogo, manipulação do DOM, gerenciamento de eventos, áudio e placares.

## Como Jogar

1.  **Ligar o Jogo:** Clique no botão "POWER". O contador de turnos mostrará "--".
2.  **Iniciar a Partida:** Clique no botão "Start".
3.  **Observar a Sequência:** O jogo acenderá uma sequência de quadrantes coloridos, acompanhados de sons.
4.  **Repetir a Sequência:** Clique nos quadrantes na mesma ordem em que foram apresentados.
5.  **Progredir:** Se você acertar, a sequência ficará um passo mais longa no próximo turno.
6.  **Erro:** Se você errar a sequência ou demorar muito para responder, o jogo indicará um erro ("XX" no contador) e a partida terminará. Sua pontuação (turnos completados) poderá ser adicionada aos high scores.
7.  **Vencer:** Complete 20 turnos para vencer o jogo! "WIN!" será exibido no contador.

## Arquivos Incluídos

* `index.html`: A estrutura principal da página do jogo.
* `style.css`: Contém todos os estilos visuais e de layout.
* `script.js`: Responsável por toda a lógica e interatividade do jogo.
* `mesa.jpg` (opcional): Imagem de fundo referenciada no CSS (não fornecida nos arquivos, mas mencionada).

## Estrutura do Código (JavaScript - `script.js`)

O arquivo `script.js` está organizado da seguinte forma:

* **Função de Som de Erro:** `playErrorSound()` para feedback sonoro em caso de erro.
* **Variáveis Globais do Jogo:** Armazenam o estado do jogo (sequência da máquina, sequência do jogador, turno atual, etc.).
* **Seletores de Elementos DOM:** Referências aos elementos HTML para manipulação.
* **Funções do Placar (High Scores):**
    * `loadScores()`: Carrega scores do Local Storage.
    * `saveScores()`: Salva scores no Local Storage.
    * `addScore(newScore)`: Adiciona um novo score.
    * `displayScores()`: Atualiza a exibição dos scores na tela.
* **Lógica Principal e Controle de Estado:**
    * Listeners para os botões "Power" e "Start".
    * `play()`: Inicia um novo jogo.
    * `resetGameVariables(keepOnState)`: Reseta as variáveis do jogo.
    * `gameTurn()`: Controla a vez da máquina (exibição da sequência).
* **Funções Visuais/Som:**
    * `activateQuadrant(quadrantNumber, isComputerTurn)`: Acende um quadrante e toca o som.
    * `deactivateQuadrant(quadrantNumber)`: Apaga um quadrante.
    * `clearColor()`: Apaga todos os quadrantes.
    * `flashColor()`: Acende todos os quadrantes (usado em erro/vitória).
* **Lógica de Interação do Jogador:**
    * Listeners de clique para os quadrantes.
    * `handlePlayerInput(quadrantNumber)`: Processa o clique do jogador.
    * `check()`: Verifica se a jogada foi correta e controla o avanço dos turnos ou vitória.
    * `timeOut()`: Função chamada quando o jogador excede o tempo limite.
* **Fim de Jogo:**
    * `gameOver()`: Chamada quando o jogador erra ou o tempo esgota.
    * `winGame()`: Chamada quando o jogador vence.
* **Inicialização:**
    * `window.onload`: Define o estado inicial do jogo ao carregar a página.

## Possíveis Melhorias Futuras

* Adicionar diferentes níveis de velocidade.
* Permitir que o usuário escolha o número de quadrantes (ex: modo avançado com mais cores).
* Implementar um placar online global.
* Adicionar temas visuais diferentes.
* Melhorar a acessibilidade.

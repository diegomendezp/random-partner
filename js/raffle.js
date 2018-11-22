class Raffle {
  constructor() {
    this.students = _.shuffle([
      // { name: 'Giorgio', img: 'https://ca.slack-edge.com/T02CQ4EN4-U7XLHB3K8-7a3f2cd06e9a-72 ' },
      // { name: 'Gabi', img: 'https://ca.slack-edge.com/T02CQ4EN4-U9BLX83D2-204942fa65ea-72' },
      // { name: 'Juan', img: 'https://ca.slack-edge.com/T02CQ4EN4-U991LCDU4-3fed4d10a310-72' },
      // { name: 'Susi', img: 'https://ca.slack-edge.com/T02CQ4EN4-U6WSYDE4Q-617818103ce0-72' },
      // { name: 'Belt', img: 'https://ca.slack-edge.com/T02CQ4EN4-U80LW0H1D-b3e93b28c85d-72' },
      // { name: 'Marc', img: 'https://ca.slack-edge.com/T02CQ4EN4-U3WM1P708-5739b8c78531-72' },
      { name: '(Adri) The Kid 👦', img: './img/adrian.JPG' },
      { name: 'The Refactorizer 👨🏻‍💻 (Alberto)', img: './img/alberto.JPG' },
      { name: 'El gaaaaaaaaancho ⚓️ (Ángel)', img: './img/angel.JPG' },
      { name: '(Anna) Hotline Miami 🌴', img: './img/anna.JPG' },
      { name: 'Bianca, Patri y viceversa 👭 (Bianca)', img: './img/bianca.JPG' },
      { name: 'Gandia Brothers #2 (Carmen)', img: './img/carmen.JPG' },
      { name: 'El Hasha der Backend ⚔️ (Christian)', img: './img/christian.JPG' },
      { name: '(Daniel) Invaders 👾', img: './img/daniel.JPG' },
      { name: 'Duality 👐 (David D.)', img: './img/daviddiez.JPG' },
      { name: 'Zombie Warrior 🧟‍♂️ (David M.)', img: './img/davidmunoz.JPG' },
      { name: 'Gandia Brothers #1 (Edu G.)', img: './img/edugandia.JPG' },
      { name: 'Mars Attack 🚀 (Fernando)', img: './img/fernando.JPG' },
      { name: 'Ricky Rubio 🏀 (Jaime)', img: './img/jaime.JPG' },
      { name: 'Hadouken ☄️ (Yared)', img: './img/jared.JPG' },
      { name: 'Javier Pong 🏓', img: './img/javiersamper.JPG' },
      { name: 'Little Cristian 👶 (Javi L.)', img: './img/javilopez.JPG' },
      { name: 'The philosopher 🤔 (Jorge)', img: './img/jorge.JPG' },
      { name: 'The (im)posible Game 🌊 (Juan)', img: './img/juan.JPG' },
      { name: 'Luis Presley 🕺', img: './img/luis.JPG' },
      { name: 'Miami 🌴', img: './img/miami.JPG' },
      { name: '(Miguel) Rotation 🧩', img: './img/miguel.JPG' },
      { name: 'SuperWoman 🦸‍♀️ (Norma)', img: './img/norma.JPG' },
      { name: 'Bianca, Patri y viceversa 👭 (Patri)', img: './img/patricia.JPG' },
      { name: 'Tank Man 🚜 (Ricardo)', img: './img/ricardo.JPG' },
      { name: 'Rodrigo El Torero 💃', img: './img/rodrigo.JPG' },
      { name: '(Sandra) Virtual Machine 🐧', img: './img/sandra.JPG' },
      { name: 'Sergio Runner 🏃‍♂️', img: './img/sergio.JPG' },
      { name: 'Gemma 👩 (Simon)', img: './img/simon.JPG' },
      { name: '(Sito) Bárcenas 💸', img: './img/sito.JPG' },
      { name: 'Totoro 🐻 (Sofía)', img: './img/sofia.JPG' },
      { name: 'SpermKiller 🍆💦 (Sonia B.)', img: './img/soniabravo.JPG' },
      { name: 'La creadora de Three.js (Sonia R.)', img: './img/soniaruiz.JPG' },
      { name: 'Colision Master 💥 (Steven)', img: './img/steven.JPG' },


    ]);
    this.students.forEach((e) => {
      this.addCard(e);
    });

    this.finalPairs = [];

    $('.card').on('click', (e) => {
      const total = $('.card.clicked').length;
      if (!$(e.currentTarget).hasClass('clicked')) {
        $(e.currentTarget).addClass('clicked');
        const name = $(e.currentTarget).attr('attr-name');
        console.log(`Added to pairs ${name}`);
        this.addPaired(name);
      }
    });
  }

  addCard(card) {
    const card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $('#board').append(card_el);
  }

  addPaired(name) {
    this.finalPairs.push(name);
    const chunks = _.chunk(this.finalPairs, 2);
    const pairs = $('#pairs');
    pairs.empty();
    console.log('Rewriting pairs');
    console.log(chunks);
    chunks.forEach((ch) => {
      console.log('add pair');
      const pair = $(`
                <div class="pair">
                  <span>${ch[0]}</span>
                   - 
                  <span>${ch[1] ? ch[1] : '....'}</span>
                </div>
            `);
      pairs.append(pair);
    });
  }
}

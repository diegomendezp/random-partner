class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Tetris king 🎮 (Abel)', img: './img/abel.jpg' },
            { name: 'Jump Alexandra 🐉🏀', img: './img/alexandra.jpg' },
            { name: 'El niño 👶(Andres)', img: './img/andres.jpg' },
            { name: 'Lady Anna 👑', img: './img/anna.jpg' },
            { name: 'The novelist 📓 (Antonio)', img: './img/antonio.jpg' },
            { name: 'Asteroide Bruno 🚀', img: './img/bruno.jpg' },
            { name: 'Rocket David© 🚀 ', img: './img/david.jpg' },
            { name: 'Space Diego 🚀', img: './img/diego.jpg' },
            { name: 'Bender 🤖 (Dunnia)', img: './img/dunnia.jpg' },
            { name: 'Chicken assassin 🐤 (Ismael)', img: './img/ismael.jpg' },
            { name: 'Laserman 💚 (Javier)', img: './img/javier.jpg' },
            { name: 'Space2 Jesus 🚀', img: './img/jesus.jpg' },
            { name: 'Beer dude 🍺 (Jorge)', img: './img/jorge.jpg' },
            { name: 'Refactorizer 💻 (Juan)', img: './img/juan.jpg' },
            { name: 'Jäger Christer 🍾(Kike)', img: './img/kike.jpg' },
            { name: 'Sweet 💕 Laura', img: './img/laura.jpg' },
            { name: 'Mad ⚙ Mateo', img: './img/mateo.jpg' },
            { name: '3D Man 🏼 (Miguel)', img: './img/miguel.jpg' },
            { name: 'Miss Ferrari 🏎 (Minyu)', img: './img/minyu.jpg' },
            { name: 'Muscle 💪 (Niko)', img: './img/niko.jpg' },
            { name: 'Payball 💸⚽(Pablo D)', img: './img/pablod.jpg' },
            { name: 'Blockchain lover 💖 (Pablo R)', img: './img/pablor.jpg' },
            { name: 'Who the fuck is Paula❔', img: './img/paula.jpg' },
            { name: 'let Marc = Pepe ', img: './img/pepe.jpg' },
            { name: 'Ping Pong Master 🎾(Raul)', img: './img/raul.jpg' },
            { name: 'Port:3000 Killer 🗡 (Ruben)', img: './img/ruben.jpg' },
            { name: 'Magic 🎩 Sandra', img: './img/sandra.jpg' },
            { name: 'Party jeiter* 🎉 (Sarai) *hater', img: './img/sarai.jpg' },
            { name: 'L artista 🎨 (Tomas)', img: './img/tomas.jpg' },
            { name: 'Catwoman 🐈 (Veronica)', img: './img/veronica.jpg' },
            { name: 'Mathman 🔢 (Victor)', img: './img/victor.jpg' }
        ]);
        this.students.forEach(e => {
            this.addCard(e);
        });

        this.finalPairs = [];

        $(".card").on('click', e => {
            let total =  $(".card.clicked").length;
            if(!$(e.currentTarget).hasClass('clicked')){
                $(e.currentTarget).addClass('clicked');
                let name = $(e.currentTarget).attr('attr-name');
                console.log(`Added to pairs ${name}`);
                this.addPaired(name);
            }
        });
    }

    addCard(card){
        let card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
        $("#board").append(card_el)
    }

    addPaired(name){
        this.finalPairs.push(name);
        let chunks = _.chunk(this.finalPairs, 2);
        let pairs = $("#pairs");
        pairs.empty();
        console.log("Rewriting pairs");
        console.log(chunks);
        chunks.forEach(ch => {
            console.log("add pair")
            let pair = $(`
                <div class="pair">
                  <span>${ch[0]}</span>
                   - 
                  <span>${ch[1] ? ch[1] : '....'}</span>
                </div>
            `);
            pairs.append(pair);
        })
    }
}
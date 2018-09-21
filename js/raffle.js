class Raffle {
    constructor(){
        this.students = _.shuffle([
            // { name: 'Giorgio', img: 'https://ca.slack-edge.com/T02CQ4EN4-U7XLHB3K8-7a3f2cd06e9a-72 ' },
            // { name: 'Gabi', img: 'https://ca.slack-edge.com/T02CQ4EN4-U9BLX83D2-204942fa65ea-72' },
            // { name: 'Juan', img: 'https://ca.slack-edge.com/T02CQ4EN4-U991LCDU4-3fed4d10a310-72' },
            // { name: 'Susi', img: 'https://ca.slack-edge.com/T02CQ4EN4-U6WSYDE4Q-617818103ce0-72' },
            // { name: 'Belt', img: 'https://ca.slack-edge.com/T02CQ4EN4-U80LW0H1D-b3e93b28c85d-72' },
            // { name: 'Marc', img: 'https://ca.slack-edge.com/T02CQ4EN4-U3WM1P708-5739b8c78531-72' },
            { name: 'Canario🐥 (Adrian)', img: './img/adrian.jpg' },
            { name: 'Goldhunter (Alfonso)', img: './img/alfonso.jpg' },
            { name: 'La rizos (Almudena)', img: './img/almudena.jpg' },
            { name: 'grada #1 /// 円形劇場のリーダー (Celia)', img: './img/celia.jpg' },
            { name: 'grada #2 (Cesar)', img: './img/cesar.jpg' },
            { name: 'Con h (Christian)', img: './img/christian.jpg' },
            { name: 'Sin h (Cristian)', img: './img/cristian.jpg' },
            { name: 'Transformado de fourier 🤯 (David)', img: './img/david.jpg' },
            { name: 'La más larga(la coleta) 🍆 (Dennis)', img: './img/denis.jpg' },
            { name: 'De Pol en Pol (Elvira)', img: './img/elvira.jpg' },
            { name: 'Esperanzita Rita (Esperanza)', img: './img/esperanza.jpg' },
            { name: 'Paco Bond 🔫🚁 (Francis)', img: './img/francis.jpg' },
            { name: 'The Teacher 👨‍🏫 (Gonzalo)', img: './img/gonzalo.jpg' },
            { name: 'grada #5 (Jacob)', img: './img/jacob.jpg' },
            { name: '17:00:00 ⏱ (Jhon)', img: './img/jhon.jpg' },
            { name: 'grada #3 (Laura C.)', img: './img/laura-c.jpg' },
            { name: 'BOID 🧟‍♀️ (Laura M.)', img: './img/laura-m.jpg' },
            { name: 'grada #4 (Maria)', img: './img/maria.jpg' },
            { name: 'Heisenberg 👨🏻‍⚕️ (Mario)', img: './img/mario.jpg' },
            { name: 'El Catalan 🇵🇱 (Matt)', img: './img/matt.jpg' },
            { name: 'Jetpack✈️ (Miguel)', img: './img/miguel.jpg' },
            { name: 'Ludopata ♠️ 🚬 (Pablo)', img: './img/pablo.jpg' },
            { name: 'El malabarista 🤹🏻‍♂️ (Raul G.)', img: './img/raul-g.jpg' },
            { name: 'Heisenberg2 👨🏻‍⚕️ (Raul M.)', img: './img/raul-m.jpg' },
            { name: 'Blockchain (Ricardo)', img: './img/ricardo.jpg' },
            { name: 'Er Ruben 🚬 (Ruben)', img: './img/ruben.jpg' },
            { name: 'La peque 👶 (Sara)', img: './img/sara.jpg' },
            { name: 'Influencer (Teodoro)', img: './img/teodoro.jpg' },
            { name: 'Czerwony Kapturek 🇪🇨 (Weronika)', img: './img/weronika.jpg' },
            { name: 'Juan Crush 👪 (Yamilet)', img: './img/yamilet.jpg' },
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
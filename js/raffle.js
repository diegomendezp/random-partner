class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Abda', img: '../img/abda.jpg' },
            { name: 'Alejandro Aceituno', img: '../img/alejandro_aceituno.jpg' },
            { name: 'Alejandro Ibañez', img: '../img/alejandro_ibanez.jpg' },
            { name: 'Alvaro Reguera', img: '../img/alvaro_reguera.jpg' },
            { name: 'Alvaro Trancon', img: '../img/alvaro_trancon.jpg' },
            { name: 'Antea', img: '../img/antea.jpg' },
            { name: 'Beltran', img: '../img/beltran.jpg' },
            { name: 'Borja Arana', img: '../img/borja_arana.jpg' },
            { name: 'Carlos Llorente', img: '../img/carlos_llorente.jpg' },
            { name: 'David', img: '../img/david.jpg' },
            { name: 'Estanislao Tanis', img: '../img/estanislao_tanis.jpg' },
            { name: 'Esther', img: '../img/esther.jpg' },
            { name: 'Fer', img: '../img/fer.jpg' },
            { name: 'Gabriel', img: '../img/gabriel.jpg' },
            { name: 'Javier', img: '../img/javier.jpg' },
            { name: 'Jose Manuel', img: '../img/jose_manuel.jpg' },
            { name: 'Juan', img: '../img/juan_s.jpg' },
            { name: 'Luis', img: '../img/luis.jpg' },
            { name: 'Luna', img: '../img/luna.jpg' },
            { name: 'Mapi', img: '../img/mapi.jpg' },
            { name: 'Mateus', img: '../img/mateus.jpg' },
            { name: 'Miko', img: '../img/miko.jpg' },
            { name: 'Nacho', img: '../img/nacho.jpg' },
            { name: 'Pablo', img: '../img/pablo.jpg' },
            { name: 'Pedro', img: '../img/pedro.jpg' },
            { name: 'Raul', img: '../img/raul.jpg' },
            { name: 'Risto', img: '../img/risto.jpg' },
            { name: 'Yago Bitconnect', img: '../img/yago.jpg' },
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
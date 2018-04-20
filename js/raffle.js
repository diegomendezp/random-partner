class Raffle {
    constructor(){
        this.students = _.shuffle([
            { name: 'Abda', img: '../img/abda.jpg' },
            { name: 'Alejandro Aceituno', img: '../img/alejandro_aceituno.JPG' },
            { name: 'Alejandro Ibañez', img: '../img/alejandro_ibanez.JPG' },
            { name: 'Alvaro Reguera', img: '../img/alvaro_reguera.JPG' },
            { name: 'Alvaro Trancon', img: '../img/alvaro_trancon.JPG' },
            { name: 'Antea', img: '../img/antea.JPG' },
            { name: 'Beltran', img: '../img/beltran.JPG' },
            { name: 'Borja Arana', img: '../img/borja_arana.JPG' },
            { name: 'Carlos Llorente', img: '../img/carlos_llorente.JPG' },
            { name: 'David', img: '../img/david.JPG' },
            { name: 'Estanislao Tanis', img: '../img/estanislao_tanis.JPG' },
            { name: 'Esther', img: '../img/esther.JPG' },
            { name: 'Fer', img: '../img/fer.JPG' },
            { name: 'Gabriel', img: '../img/gabriel.JPG' },
            { name: 'Javier', img: '../img/javier.JPG' },
            { name: 'Jose Manuel', img: '../img/jose_manuel.JPG' },
            { name: 'Juan', img: '../img/juan_s.JPG' },
            { name: 'Luis', img: '../img/luis.JPG' },
            { name: 'Luna', img: '../img/luna.JPG' },
            { name: 'Mapi', img: '../img/mapi.JPG' },
            { name: 'Mateus', img: '../img/mateus.JPG' },
            { name: 'Miko', img: '../img/miko.JPG' },
            { name: 'Nacho', img: '../img/nacho.JPG' },
            { name: 'Pablo', img: '../img/pablo.JPG' },
            { name: 'Pedro', img: '../img/pedro.JPG' },
            { name: 'Raul', img: '../img/raul.JPG' },
            { name: 'Risto', img: '../img/risto.JPG' },
            { name: 'Yago Bitconnect', img: '../img/yago.JPG' },
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
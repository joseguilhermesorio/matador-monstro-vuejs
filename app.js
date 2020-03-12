new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        jogoIniciado: false,
        logs: []
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        iniciarJogo() {
            this.jogoIniciado   = true;
            this.monsterLife    = 100;
            this.playerLife     = 100;
            this.logs           = [];
        },
        atacar(especial) {
            let playerDano  = this.hurt('monsterLife', 5, 12, especial);
            let monsterDano = this.hurt('playerLife',8, 15);

            this.logs.push({
                player: 'O monstro recebeu '+ playerDano+ ' de dano',
                monstro: 'O jogador recebeu '+ monsterDano+ ' de dano'
            });
        },
        hurt(prop, min, max, especial) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0);
            return hurt;
        },
        heal(min, max) {
            const heal      = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            let monsterDano = this.hurt('playerLife',5,7);

            this.logs.push({
                player: 'O jogador foi curado em '+heal + ' pontos',
                monstro: 'O jogador recebeu '+ monsterDano+ ' de dano'
            });
        },
        getRandom(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        },
    },
    watch: {
        hasResult() {
            return this.jogoIniciado = false;
        }
    },
});
new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        jogoIniciado: false
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        iniciarJogo() {
            this.jogoIniciado   = true;
        },
        desistir() {
            this.jogoIniciado   = false;
            this.monsterLife    = 100;
            this.playerLife     = 100;
        }
    },
    watch: {
        
    },
});
class Nave {
    constructor(cargaAtual, cargaMaxima) {
        this.cargaAtual = Number(cargaAtual);
        this.cargaMaxima = Number(cargaMaxima);
    }
    carga() {
        return (this.cargaAtual * 100 / this.cargaMaxima).toFixed(2)

    }
}
const naveSophia= new Nave(5,100)
let porcSophia=naveSophia.carga()
const naveAmsterda= new Nave(10,14)
let porcAmsterda=naveAmsterda.carga()
const naveEstrelaAna= new Nave(4,20)
let porcEstrelaAna=naveEstrelaAna.carga()


export { porcSophia,porcAmsterda,porcEstrelaAna }

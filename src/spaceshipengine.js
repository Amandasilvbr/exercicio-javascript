import { porcSophia, porcAmsterda, porcEstrelaAna } from './spaceships.js'

class LigarNave {
    constructor(porcentagem, nome) {
        this.porcentagem = porcentagem
        this.nome = nome
    }
    cargaCondicional() {
        new Promise((resolve, reject) => {
            this.porcentagem >= 30 ? resolve(console.log(`Nave: ${this.nome}. Partida autorizada, carga atual: ${this.porcentagem}`)) : reject(`Nave: ${this.nome}. Partida não autorizada, carga atual: ${this.porcentagem}`)
        })
    }
}

new LigarNave(porcSophia, `Sophia`).cargaCondicional()
new LigarNave(porcAmsterda, `Amsterdã`).cargaCondicional()
new LigarNave(porcEstrelaAna, `Estrela Anã`).cargaCondicional()





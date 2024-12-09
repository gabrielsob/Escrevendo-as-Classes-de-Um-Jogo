class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
  }

  atacar() {
      let ataque; 

      if (this.tipo === "guerreiro") {
        ataque = "espada";
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}.`)
  }
}

function executarAventura() {
  let herois = [
      new Heroi("Gabriel", 100, "guerreiro"),
      
  ];

  for (let heroi of herois) {
      heroi.atacar()
  }
}
executarAventura()

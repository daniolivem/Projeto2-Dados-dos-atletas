class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, 4);
        let soma = notasValidas.reduce((total, atual) => total + atual, 0);
        return soma / notasValidas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }
    
    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

// --- MUDANÇAS A PARTIR DAQUI ---

// 1. Criamos um array de atletas. Cada item é uma nova instância da classe.
const atletas = [
    new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]),
    new Atleta("Fernando Puntel", 25, 75, 1.80, [8, 10, 10, 7, 9.33]),
    new Atleta("Daiane Jelinsky", 22, 58, 1.65, [7, 10, 9.5, 9.5, 8]),
    new Atleta("Bruno Castro", 28, 85, 1.78, [10, 10, 10, 9, 9.5]),
    new Atleta("Joaquim dos Santos", 14, 60, 1.72, [9, 8.5, 8.8, 9.2, 9.5]) // Atleta Intermediário
];

// 2. Usamos um laço for...of para percorrer o array de atletas
for (const atleta of atletas) {
    // 3. O bloco de código abaixo será executado para cada atleta na lista
    console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
    console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
    console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
    console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
    console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
    console.log(`Categoria: ${atleta.obtemCategoria()}`);
    console.log(`IMC: ${atleta.obtemIMC().toFixed(2)}`);
    console.log(`Média válida: ${atleta.obtemMediaValida().toFixed(2)}`);

    // Adicionamos um separador para facilitar a leitura
    console.log("--------------------");
}
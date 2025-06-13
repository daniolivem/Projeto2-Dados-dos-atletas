
# Projeto2-Dados-dos-atletas

## Resumo do Projeto

Este projeto consiste em uma aplicação capaz de receber informações de um atleta, calcular parâmetros relevantes e exibi-los para o usuário. O objetivo é criar uma solução simples, prática e de fácil entendimento, utilizando JavaScript para manipulação dos dados dos atletas.

## Introdução

Os organizadores da competição do projeto anterior gostaram da solução desenvolvida e solicitaram uma nova aplicação, dessa vez em JavaScript. O software deverá receber informações dos atletas, exibir a categoria, calcular IMC, média válida das notas e mostrar todas as informações relevantes de cada atleta.

## Especificações

O projeto é composto por uma classe chamada `Atleta`, responsável por armazenar os atributos e métodos necessários para manipular os dados dos atletas.

### Atributos da Classe

- **nome**: Nome do atleta (string)
- **idade**: Idade do atleta (número inteiro)
- **peso**: Peso do atleta (número, em kg)
- **altura**: Altura do atleta (número, em metros)
- **notas**: Array de notas recebidas pelo atleta (números)

### Métodos da Classe

- `calculaCategoria()`: Calcula a categoria do atleta de acordo com a idade
- `calculaIMC()`: Calcula o IMC do atleta usando a fórmula padrão
- `calculaMediaValida()`: Calcula a média válida das notas do atleta (descartando a maior e a menor nota)
- `obtemNomeAtleta()`: Retorna o nome do atleta
- `obtemIdadeAtleta()`: Retorna a idade do atleta
- `obtemPesoAtleta()`: Retorna o peso do atleta
- `obtemNotasAtleta()`: Retorna o array de notas do atleta
- `obtemCategoria()`: Retorna a categoria calculada do atleta
- `obtemIMC()`: Retorna o IMC calculado do atleta
- `obtemMediaValida()`: Retorna a média válida das notas do atleta

### Regras de Negócio

#### 1. Categoria do Atleta

- **Infantil**: 9 a 11 anos
- **Juvenil**: 12 e 13 anos
- **Intermediário**: 14 e 15 anos
- **Adulto**: 16 a 30 anos
- **Sem categoria**: Demais idades

#### 2. Cálculo do IMC

- Fórmula: `imc = peso / (altura * altura)`

#### 3. Cálculo da Média Válida

- Descartar a maior e a menor nota
- Calcular a média das demais notas

## Exemplo de Uso

```javascript
// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.altura);
console.log("Notas:", atleta.obtemNotasAtleta().join(","));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
```

### Exemplo de Saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.25333333
```

## Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/daniolivem/Projeto2-Dados-dos-atletas.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd Projeto2-Dados-dos-atletas
   ```
3. Execute o arquivo JavaScript em um ambiente Node.js ou no console do navegador:
   ```bash
   node dados-atletas.js
   ```

## Dicas

- Teste seu projeto antes de enviar para garantir que tudo está funcionando corretamente.
- Utilize um arquivo `README.md` bem estruturado para destacar seu projeto.
- Comente seu código para facilitar o entendimento.

## Licença

Este projeto está licenciado sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar!


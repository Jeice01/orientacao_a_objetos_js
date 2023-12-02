import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jeice", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteJeice = new ContaCorrente(1001, cliente1);
contaCorrenteJeice.depositar(500);
contaCorrenteJeice.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteJeice.tranferir(valor, conta2);

console.log(contaCorrenteJeice);
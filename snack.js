// 🏆 Snack 1
// Crea una funzione che somma due numeri.
// ✅ Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// ✅ Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile.
// ✅ Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// Funzione dichiarativa:
function somma1(num1, num2) {
	return num1 + num2;
}
// console.log(somma1(1, 2));

// Funzione anonima assegnata ad una variabile:
const somma2 = function (num1, num2) {
	return num1 + num2;
}
// console.log(somma2(1, 2));

// Funzione con sintassi Arrow Function:
const somma3 = (num1, num2) => num1 + num2;
// console.log(somma3(1, 2));

//===========================================================

// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// ✅ Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = (num) => num * num;
// console.log(quadrato(2));

//===========================================================

// 🏆 Snack 3
// Crea una funzione eseguiOperazione.
// ✅ Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
const somma = (num1, num2) => num1 + num2;
const sottrazione = (num1, num2) => num1 - num2;
const moltiplicazione = (num1, num2) => num1 * num2;
const divisione = (num1, num2) => num1 / num2;

function eseguiOperazione(num1, num2, operazione) {
	return operazione(num1, num2)
}
// console.log(eseguiOperazione(6, 3, divisione));

//===========================================================

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer.
// ✅ Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione. La nuova funzione deve avviare un setTimeout per stampare "Tempo scaduto!".
function creaTimer(tempo) {
	return function () {
		setTimeout(() => {
			console.log('Tempo scaduto!')
		}, tempo)
	}
}

const timer = creaTimer(1000);
// timer();

//===========================================================

// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// ✅ Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// 🔔 Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
function stampaOgniSecondo(message) {
	return setInterval(() => {
		console.log(message)
	}, 1000)
}
// let intervalID = stampaOgniSecondo("Messaggio")

// Timer per interrompere il loop dopo 5 secondi:
// setTimeout(() => {
// 	clearInterval(intervalID);
// 	console.log("Loop fermato");
// }, 5000);

//===========================================================

// 🏆 Snack 6
// Crea un contatore automatico con setInterval.
// ✅ Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo. La funzione restituisce una nuova funzione che avvia un setInterval, incrementando un contatore e stampandolo.
function creaContatoreAutomatico(tempo) {
	let contatore = 0;
	return function () {
		setInterval(() => {
			contatore++
			console.log(contatore)
		}, tempo)
	}
}

const newContatore = creaContatoreAutomatico(1000);
// newContatore()

//===========================================================

// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo.
// ✅ Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
function eseguiEferma(message, startTime, stopTime) {
	const intervalID = setInterval(() => {
		console.log(message)
	}, startTime)

	setTimeout(() => {
		clearInterval(intervalID)
	}, stopTime)
}

// eseguiEferma("Ciao", 1000, 4000)

//===========================================================

// 🏆 Snack 8 (BONUS)
// Crea una funzione che simula un conto alla rovescia.
// ✅ Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
function contoAllaRovescia(startTime) {
	let countDown = startTime + 1
	const intervalId = setInterval(() => {
		countDown -= 1
		if (countDown === 0) {
			clearInterval(intervalId)
			console.log("Tempo Scaduto!")
		} else {
			console.log(countDown);
		}
	}, 1000)
}

// contoAllaRovescia(10)

//===========================================================

// 🏆 Snack 9 (BONUS)
// Creare una funzione che esegue una sequenza di operazioni con ritardi.
// ✅ Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
const operazioni = [
	() => console.log("Operazione 1"),
	() => console.log("Operazione 2"),
	() => console.log("Operazione 3")
]

function sequenzaOperazioni(operazioni, intervallo) {
	operazioni.forEach((operazione, indice) => {
		setTimeout(() => {
			operazione()
		}, intervallo * indice)
	})
}

// sequenzaOperazioni(operazioni, 2000)

//===========================================================

// 🏆 Snack 10 (BONUS)
// Creare un throttler per limitare l’esecuzione di una funzione.
// ✅ Scrivi una funzione creaThrottler che accetta una funzione e  un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(callback, limite) {
	let ultimaEsecuzione = 0;
	return function (...args) {
		const ora = Date.now();
		if (ora - ultimaEsecuzione >= limite) {
			ultimaEsecuzione = ora;
			callback(...args)
		} else {
			console.log('Esecuzione richiesta troppo presto')
		}
	}
}


const throttledLog = creaThrottler(() => console.log("Funzione eseguita"), 2000)

// throttledLog()
// throttledLog()
// setTimeout(() => {
// 	throttledLog()
// 	console.log("Eseguita dopo 2 secondi")
// }, 2000)
//pusta tablica
const pustaTablica = [];

//tablica z elementami
const owoce = ["jabłko", "banan" , "pomarańcze"];

//pusta tablica
const pustaTablica2 = new Array();

//Tablica  z elementami 
const liczby = new Array(1,2,3,4,5);

const dniTygodnia = ["Poniedziałek","Wtorek","Środa", "Czwartek", "Piątek"];
console.log(dniTygodnia[0]); //Poniedziałek
console.log(dniTygodnia.length); //zwraca liczbe elementów - 5

const owoce1 = ["jabłko", "banan" , "pomarańcze"];
owce1[1]="Gruszka";

console.log(owoce1); // ["Jabłko","Gruszka","Pomarańcza"]

const liczby1 = [1,2,3];
liczby.push(4);
console.log (liczby); //[1,2,3,4]

const liczby2 = [1,2,3,4];
const ostatni=liczby.pop();
console.log(ostatni); //4
console.log(liczby2); //1,2,3

const liczby3 = [1,2,3,4];
const pierwszy = liczby.shift();
console.log(pierwszy); //1
console.log(liczby); //2,3,4

const liczby4 = [2,3,4];
liczby.unshift(1);
console.log(liczby4); //1,2,3,4

const liczby5 = [1,2,3,4,5];
const podTablica = liczby.slice(1,3);
console.log(podTablica); //2,3 -  zwraca elementy o indeksach 1,2
console.log(liczby5); //1,2,3,4,5

const liczby6 = [1,2,3,4,5];
// usuniecie ideksów od ideksu 1 i wstawienie ich miejsce liczby 10 i 11
liczby6.splice(1,2,10,11);
console.log(liczby); // 1,2,10,11

const tab1=[1,2];
const tab2=[3,4];
const nowaTablica=tab1.concat(tab2);
console.log(nowaTablica); // 1,2,3,4

const liczby7 = [1,2,3];
liczby7.forEach(element, indeks) => {
    console.log('element: ${element}, indeks ${indeks}');
}

const liczby8 = [1,2,3];
const podwojone = liczby9.map((element) => element *2);
console.log(podwojone) //2,4,6
console.log(liczby); //1,2,3

const liczby9 = [1,2,3,4,5];
const parzyste = liczby9.filter((element) => element % 2 === 0);
console.log(parzyste); //2,4





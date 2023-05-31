//-------------------------- Ausdruecke - Expressions --------------------------
// Operator - Eine Anweisung, die eine ganz bestimmte Arbeit ausfuehrt (z.B. Vergleich von Werten)


// Zuweisung - Assignment
// VARIABLE = WERT
let x;
x = 12;

const CONST_X = 'Ich bin konstant';



// Vergleichsausdruecke - Comparison expressions
let y = 10;
// kleiner als (erster_wert < zweiter_wert) prueft, ob linker Wert kleiner als rechter Wert ist
let lessThan =  x < y;
console.log('Pruefe, ob x kleiner als y ist:');
console.log(lessThan);

// groesser als (erster_wert > zweiter_wert) prueft, ob linker Wert groesser als rechter Wert ist
let greaterThan = x > y;
console.log('Pruefe, ob x groesser als y ist:');
console.log(greaterThan);

let zahl1 = 4;
let zahl2 = 4;
console.log('Pruefe, ob zahl1 kleiner als zahl2 ist:');
console.log(zahl1 < zahl2);

console.log('Pruefe, ob zahl1 groesser als zahl2 ist:');
console.log(zahl1 > zahl2);

// kleiner-gleich less-than-equal (erster_wert <= zweiter_wert) prueft, ob linker Wert kleiner als UND/ODER gleich dem rechtem Wert ist
console.log('Pruefe, ob zahl1 kleiner-gleich zahl2 ist:');
console.log(zahl1 <= zahl2);

// groesser-gleich greater-than-equal (erster_wert >= zweiter_wert) prueft, ob linker Wert groesser als UND/ODER gleich dem rechtem Wert ist
console.log('Pruefe, ob zahl1 groesser-gleich zahl2 ist:');
console.log(zahl1 >= zahl2);

// Gleichheitsausdruck - Equality expression (erster_wert == zweiter_wert) prueft, ob linker Wert GLEICH dem rechten Wert ist
console.log('Pruefe, ob zahl1 gleich der zahl2 ist:');
console.log(zahl1 == zahl2);

// Vergleichen von Zeichen(-ketten) und Zahlen ist speziell, Javascript kann es allerdings von Haus aus
console.log('4' == 4);
console.log('peter' == 18);

// Gleichheitsueberpruefung mit Bezug auf Datentypen (erster_wert === zweiter_wert) 
// prueft, ob linker Wert GLEICH dem rechten Wert ist, wobei die Datentypen gleich sein MUESSEN!
console.log('Pruefe, ob der String \'4\' gleich der Zahl 4 ist');
console.log('4' === 4);

// FAUSTREGEL: Immer lieber === nutzen, dann gibt es mit Datentypen kein Vertun

// Ungleichheitsausdruck - Inequality expression (erster_wert != zweiter) prueft, ob linker Wert UNGLEICH dem rechten Wert ist
console.log('Pruefe, ob Zahl 3 ungleich der Zahl 4 ist');
console.log(3 != 4);

// Ungleichheitsueberpruefung mit Bezug auf Datentypen (erster_wert !== zweiter_wert) 
// prueft, ob linker Wert UNGLEICH dem rechten Wert ist, wobei die Datentypen gleich sein MUESSEN!
console.log('Pruefe, ob String 3 ungleich der Zahl 4 ist');
console.log('4' !== 4); // ergibt true, obwohl Werte gleich sind, da die Datentypen unterschiedlich sind


// Vergleichen von nicht-numerischen Werten
// Strings
let wort1 = 'wort';
let wort2 = 'anderes wort';
console.log('Pruefe, ob String Variable wort1 gleich der String Variable wort2 ist');
console.log(wort1 === wort2);
console.log('Pruefe, ob String Variable wort1 ungleich der String Variable wort2 ist');
console.log(wort1 !== wort2);
// Case-sensitivity (gross-klein-Schreibung)
let kleinesWort = 'wort';
let grossesWort = 'Wort';
console.log('Pruefe, ob String Variable kleinesWort gleich der String Variable grossesWort ist');
console.log(kleinesWort === grossesWort);

// Boole'sche Werte
let wahrerWert = true;
let falscherWert = false;
console.log('Pruefe, ob Boole\'sche Variable wahrerWert gleich der Boole\'schen Variable falscherWert ist');
console.log(wahrerWert === falscherWert);


// Logische Ausdruecke
// Das logische UND (erster_wert && zweiter_wert) prueft, ob linker UND auch rechter Wert wahr sind
console.log('Pruefe, ob TRUE und FALSE wahr sind');
console.log(true && false);

let zahl = 4;
console.log('Pruefe, ob Variable zahl groesser als 1 und kleiner als 5 ist');
console.log(zahl > 1 && zahl < 5);

// Das logische ODER (erster_wert || zweiter_wert) prueft, ob linker UND/ODER rechter Wert wahr sind
console.log('Pruefe, ob Variable zahl groesser als 1 UND/ODER kleiner als 5 ist');
console.log(zahl > 1 || zahl < 5);

// Das logische EXKLUSIVE ODER (erster_wert ^ zweiter_wert)
// prueft, ob ausschliesslich linker Wert ODER ausschliesslich rechter Wert wahr ist
console.log('Pruefe, ob Variable zahl groesser als 1 ODER kleiner als 5 ist');
console.log(zahl > 1 ^ zahl < 5);

// Die Negation - Verneinung !(ausdruck) dreht den Wahrheitwert eines Ausdrucks um
console.log('Drehe den Wahrheitswert der mit UND verbunden Zahlenpruefung um');
let isBetween = zahl > 1 && zahl < 5;
let negatedRange = !isBetween;
console.log(negatedRange);


let variable = 5;

let andVar = 5 < 6;
zahl = 3;
// Klammern garantieren immer, dass das was in den Klammern steht, am staerksten gebunden ist (Stichwort: Operatorenprioritaet)
let complexLogicalExpression = ((zahl > 1) && (zahl < 5)) || (zahl === 4);
console.log('Komplexer Ausdruck');
console.log(complexLogicalExpression);
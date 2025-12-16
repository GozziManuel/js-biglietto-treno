## Biglietto treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

```
Chiedo all'utente numero di chilometri
Chiedo all'utente l'età
    VALIDAZIONE IN NUMERI

Calcolo il prezzo del tragitto in base ai km
    SE sotto i 18 sconto 20%
    ALTRIMENTI SE sopra i 65 sconto 40%
    ALTRIMENTI prezzo completo

 Output prezzo in forma umana

```

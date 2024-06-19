This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# En enkel applikation med fokus på Cypress

En sida med fula fiskar, där man kan addera nya fiskar och bestämma om de är fula eller inte.

## Installation och start av projekt

- Första steget

```
npm install
```

- Skapa en `.env` och en `.env.test` och länka till din data bas: `DATABASE_URL="file:./**.db`

* Starta databasen och seeda in innehåll

```
npm run push

npm run seed
```

- Starta utvecklings servern

```
npm run dev
```

- Testning

```
npm run test:push

npm test
```

## Användar flöden och testning

### Användare 1

Besöker startsidan och orienterar sig runt ser en header, footer olika kort med fiskar. Upptäcker att korten har en hoover effekt. Hen ogillar ett av korten och trycker på delete för att ta bort det. Kortet försvinner från sidan.

### Användare 2

Besöker startsidan och vill lägg till en av sina alster. Hittar "Add your fish" Trycker på knappen och kommer till ett formulär för att fylla i informationen om sin fisk, trycker sedan på submit och blir omdirigerad till startsidan där det syns en ny fisk överst på sidan.

### Användare 3

Besöker startsidan ser en intressant fisk och klickar in sig på den via knappen "Visit the fish" och ser en stor fisk! Hen ser en text att fisken är ful och håller inte med. Trycker på en knapp "Nah you are cute" och ser att texten ändras till kinda cute och färg. Hen trycker på knappen några gånger sedan går hen till startsidan och ser att färgen på ramen runt kortet ändrat färg.
Användaren råkar sedan genom att ändra urlen gå till en fisk sida som inte finns och möts av ett felmeddelande.

### Felhantering av formulär

Det finns även test som ser till att man som användare inte kan fylla i felaktiga värden i fiskformuläret som att hoppa över fält eller fylla i felaktiga värden där de krävs siffror över 0.

### Mobilvy

Testet går igenom alla sidorna ser till att allt syns och testar att man inte ska behöva scrolla i sidled.

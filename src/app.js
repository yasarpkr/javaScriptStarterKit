console.log("selamlar Mr. console")

let dolarDun = 12.30
let dolarBugun = 14.20
{
    let dolarBugun = 18.20

}
console.log(dolarBugun)

const euroDun = 11.2 // Sabit bir sayı string, değiştirilmesi istenmeyen bir değer girilmek istediğinde kullanılır.
// euroDun = 11 bu bit hata cons sonrasında değere tekrar birşey atanmaz.
console.log(euroDun)

// camelCases kullanmaktayız değişkenleri verirken.

let krediDegiskenleri = ["Konut","Ihtiyac","Kamu","Araba","Malikane"]
console.log(krediDegiskenleri)

console.log("<ul>")
for(let i = 0;i<krediDegiskenleri.length;i++){
    console.log("<li>"+krediDegiskenleri[i]+"</li>")
}
console.log("</ul>")


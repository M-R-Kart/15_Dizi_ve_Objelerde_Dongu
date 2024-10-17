Döngülerin diziler ve objeler üzerinde kullanımı, JavaScript te veri yapılarıyla 
çalışırken çok yaygındır. Dizilerde her öğeyi, objelerde ise her anahtar-değer 
çiftini döngüyle işleyebilirsin. İşte bu iki veri yapısında döngülerin nasıl 
kullanılacağına dair detaylar


Dizilerde döngü kullanımı, JavaScript te en çok kullanılan tekniklerden biridir. 
for-in, forEach, ve map gibi yöntemler, diziler üzerinde farklı işlemler yapmana olanak tanır. 
Her bir yöntemi sırasıyla açıklayalım

//! 1. Dizilerde Döngü Kullanımı

//? Örnek :

let dizi = [10, 20, 30, 40];
let users = [
  { isim: "Aslı" },
  { isim: "Kerem" },
  { isim: "Mehmet" },
  { isim: "Büşra" },
];

console.log(dizi);  // (4) [10, 20, 30, 40]
console.log(users); //(4) [{Aslı}, {Kerem}, {Mehmet}, {Büşra}]

//! ************************************************

//! Arrays

//? Örnek :

let dizi = [10, 20, 30, 40];
for (let i = 0; i < dizi.length; i++) {
  console.log(dizi[i]); // dizi[i] içerisindeki elemanları göstermesini istedik.
}

Çıktı:
10
20
30
40

//! ************************************************

//! For-in Metodu
for-in döngüsü daha çok objeler için kullanılır, ancak dizilerde de kullanılabilir. 
Dizideki indeksler (anahtarlar) üzerinde iterasyon yapar. Ancak, diziler için for-in 
kullanımı önerilmez çünkü for-in döngüsü dizinin prototip zincirindeki özellikleri de 
döndürebilir.

//? Örnek :

let dizi = [10, 20, 30, 40];

for (let i in dizi) {
  console.log(`index ${i} value: ${dizi[i]}`);
}


index 0 value: 10
index 1 value: 20
index 2 value: 30
index 3 value: 40

Not: Genellikle for-in yerine dizilerde for veya for-of döngüleri tercih edilir.

//! ************************************************

//! For-each Metodu
forEach, diziler üzerinde döngü işlemi yapmak için kullanılan bir yöntemdir. 
Her bir elemanı, birer birer işlemen gereken durumlarda idealdir. 
Döngü, her eleman için bir fonksiyon çalıştırır.

//? Örnek :

citys.forEach(function (item) {
  console.log(item);
});

//! ************************************************

//? Örnek :

let dizi = [10, 20, 30, 40];
let user = [
  { isim: "Aslı" },
  { isim: "Kerem" },
  { isim: "Mehmet" },
  { isim: "Büşra" },
];

for (let i = 0; i < user.length; i++) {
  console.log(dizi[i]);
  console.log(user[i].isim);
}

Çıktı:
10
Aslı
20
Kerem
30
Mehmet
40
Büşra

//! ************************************************

//? Örnek :

let user = [
  { isim: "Aslı" },
  { isim: "Kerem" },
  { isim: "Mehmet" },
  { isim: "Büşra" },
];

for (let i in user) {
  console.log(`index: ${i} value: ${user[i].isim}`);
}

Çıktı:
index: 0 value: Aslı
index: 1 value: Kerem
index: 2 value: Mehmet
index: 3 value: Büşra

//! ************************************************

//? Örnek :

let dizi = [10, 20, 30, 40];

dizi.forEach(function (eleman, index) {
  console.log(index + ": " + eleman);
});

Çıktı:
0: 10
1: 20
2: 30
3: 40

* eleman: Dizinin her bir elemanını temsil eder.
* index: İlgili elemanın dizideki sırasını gösterir.

//! ************************************************

//! Map Metodu

map yöntemi, her bir dizi elemanı üzerinde işlem yaparak yeni bir dizi oluşturur. 
map, orijinal diziyi değiştirmez, ancak üzerinde işlem yapıp sonuçları yeni bir dizide saklar.

//? Örnek :

let dizi = [1, 2, 3, 4];

let yeniDizi = dizi.map(function (eleman) {
  return eleman * 2;
});
console.log(yeniDizi);

Çıktı:
(4) [2, 4, 6, 8]
0: 2
1: 4
2: 6
3: 8
length: 4

//! ************************************************

//? Örnek :

let numbers = [1, 3, 5, 9, 12];
let num = numbers.map(function (n) {
  return n * n;
});
console.log(num); //! sayıların karesini almış olduk.

Çıktı:
(5) [1, 9, 25, 81, 144]

* forin: İndeksler üzerinden iterasyon yapar, fakat dizilerde kullanımı önerilmez.
* forEach: Dizinin her elemanı üzerinde işlem yapar, sonuç döndürmez, sadece işlem uygular.
* map: Dizinin her elemanı üzerinde işlem yapar ve yeni bir dizi döndürür.

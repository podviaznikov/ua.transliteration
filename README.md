# transliteration.ua

JavaScript library for transliteration cyrillic ukrainian words to latin.
Was implemented totally corresponds to Ukrainian law: http://zakon1.rada.gov.ua/cgi-bin/laws/main.cgi?nreg=55-2010-%EF.

All test cases from the law are implemented.

Library can be used in browser on node.js platform.


                        ТАБЛИЦЯ
          транслітерації українського алфавіту латиницею


------------------------------------------------------------------
| Український | Латиниця |  Позиція у |    Приклади написання    |
|   алфавіт   |          |   слові    |--------------------------|
|             |          |            |українською |  латиницею  |
|             |          |            |    мовою   |             |
|-------------+----------+------------+------------+-------------|
|      Аa     |    Aа    |            |Алушта      |Alushta      |
|             |          |            |Андрій      |Andrii       |
|-------------+----------+------------+------------+-------------|
|      Бб     |    Bb    |            |Борщагівка  |Borshchahivka|
|             |          |            |Борисенко   |Borysenko    |
|-------------+----------+------------+------------+-------------|
|      Вв     |    Vv    |            |Вінниця     |Vinnytsia    |
|             |          |            |Володимир   |Volodymyr    |
|-------------+----------+------------+------------+-------------|
|      Гг     |    Hh    |            |Гадяч       |Hadiach      |
|             |          |            |Богдан      |Bohdan       |
|             |          |            |Згурський   |Zghurskyi    |
|-------------+----------+------------+------------+-------------|
|      Ґґ     |    Gg    |            |Ґалаґан     |Galagan      |
|             |          |            |Ґорґани     |Gorgany      |
|-------------+----------+------------+------------+-------------|
|      Дд     |    Dd    |            |Донецьк     |Donetsk      |
|             |          |            |Дмитро      |Dmytro       |
|-------------+----------+------------+------------+-------------|
|      Ее     |    Ee    |            |Рівне       |Rivne        |
|             |          |            |Олег        |Oleh         |
|             |          |            |Есмань      |Esman        |
|-------------+----------+------------+------------+-------------|
|      Єє     |    Ye    | на початку |Єнакієве    |Yenakiieve   |
|             |          |    слова   |Гаєвич      |Haievych     |
|             |    ie    |  в інших   |Короп'є     |Koropie      |
|             |          |  позиціях  |            |             |
|-------------+----------+------------+------------+-------------|
|      Жж     |  Zh zh   |            |Житомир     |Zhytomyr     |
|             |          |            |Жанна       |Zhanna       |
|             |          |            |Жежелів     |Zhezheliv    |
|-------------+----------+------------+------------+-------------|
|      Зз     |    Zz    |            |Закарпаття  |Zakarpattia  |
|             |          |            |Казимирчук  |Kazymyrchuk  |
|-------------+----------+------------+------------+-------------|
|      Ии     |    Yy    |            |Медвин      |Medvyn       |
|             |          |            |Михайленко  |Mykhailenko  |
|-------------+----------+------------+------------+-------------|
|      Іі     |    Ii    |            |Іванків     |Ivankiv      |
|             |          |            |Іващенко    |Ivashchenko  |
|-------------+----------+------------+------------+-------------|
|      Її     |    Yi    | на початку |Їжакевич    |Yizhakevych  |
|             |          |    слова   |Кадиївка    |Kadyivka     |
|             |     i    |  в інших   |Мар'їне     |Marine       |
|             |          |  позиціях  |            |             |
|-------------+----------+------------+------------+-------------|
|      Йй     |    Y     | на початку |Йосипівка   |Yosypivka    |
|             |          |    слова   |Стрий       |Stryi        |
|             |    i     |  в інших   |Олексій     |Oleksii      |
|             |          |  позиціях  |            |             |
|-------------+----------+------------+------------+-------------|
|      Кк     |    Kk    |            |Київ        |Kyiv         |
|             |          |            |Коваленко   |Kovalenko    |
|-------------+----------+------------+------------+-------------|
|      Лл     |    Ll    |            |Лебедин     |Lebedyn      |
|             |          |            |Леонід      |Leonid       |
|-------------+----------+------------+------------+-------------|
|      Мм     |    Mm    |            |Миколаїв    |Mykolaiv     |
|             |          |            |Маринич     |Marynych     |
|-------------+----------+------------+------------+-------------|
|      Нн     |    Nn    |            |Ніжин       |Nizhyn       |
|             |          |            |Наталія     |Nataliia     |
|-------------+----------+------------+------------+-------------|
|      Оо     |    Oo    |            |Одеса       |Odesa        |
|             |          |            |Онищенко    |Onyshchenko  |
|-------------+----------+------------+------------+-------------|
|      Пп     |    Pp    |            |Полтава     |Poltava      |
|             |          |            |Петро       |Petro        |
|-------------+----------+------------+------------+-------------|
|      Рр     |    Rr    |            |Решетилівка |Reshetylivka |
|             |          |            |Рибчинський |Rybchynskyi  |
|-------------+----------+------------+------------+-------------|
|      Сс     |    Ss    |            |Суми        |Sumy         |
|             |          |            |Соломія     |Solomiia     |
|-------------+----------+------------+------------+-------------|
|      Тт     |    Tt    |            |Тернопіль   |Ternopil     |
|             |          |            |Троць       |Trots        |
|-------------+----------+------------+------------+-------------|
|      Уу     |    Uu    |            |Ужгород     |Uzhhorod     |
|             |          |            |Уляна       |Uliana       |
|-------------+----------+------------+------------+-------------|
|      Фф     |    Ff    |            |Фастів      |Fastiv       |
|             |          |            |Філіпчук    |Filipchuk    |
|-------------+----------+------------+------------+-------------|
|      Хх     |  Kh kh   |            |Харків      |Kharkiv      |
|             |          |            |Христина    |Khrystyna    |
|-------------+----------+------------+------------+-------------|
|      Цц     |  Ts ts   |            |Біла Церква |Bila Tserkva |
|             |          |            |Стеценко    |Stetsenko    |
|-------------+----------+------------+------------+-------------|
|      Чч     |  Ch ch   |            |Чернівці    |Chernivtsi   |
|             |          |            |Шевченко    |Shevchenko   |
|-------------+----------+------------+------------+-------------|
|      Шш     |  Sh sh   |            |Шостка      |Shostka      |
|             |          |            |Кишеньки    |Kyshenky     |
|-------------+----------+------------+------------+-------------|
|      Щщ     |Shch shch |            |Щербухи     |Shcherbukhy  |
|             |          |            |Гоща        |Hoshcha      |
|             |          |            |Гаращенко   |Harashchenko |
|-------------+----------+------------+------------+-------------|
|      Юю     |    Yu    | на початку |Юрій        |Yurii        |
|             |          |    слова   |Корюківка   |Koriukivka   |
|             |    iu    |  в інших   |            |             |
|             |          |  позиціях  |            |             |
|-------------+----------+------------+------------+-------------|
|      Яя     |    Ya    | на початку |Яготин      |Yahotyn      |
|             |          |    слова   |Ярошенко    |Yaroshenko   |
|             |    ia    |  в інших   |Костянтин   |Kostiantyn   |
|             |          |  позиціях  |Знам'янка   |Znamianka    |
|             |          |            |Феодосія    |Feodosiia    |
------------------------------------------------------------------

_______________
Примітка: 1. Буквосполучення "зг" відтворюється латиницею як "zgh"
             (наприклад,  Згорани - Zghorany, Розгон - Rozghon) на
             відміну від "zh" -  відповідника  української  літери
             "ж".

          2. М'який знак і апостроф латиницею не відтворюються.

          3. Транслітерація  прізвищ  та  імен осіб і географічних
             назв здійснюється шляхом  відтворення  кожної  літери
             латиницею.

## License

(The MIT License)

Copyright (c) 2011 Enginimation Studio (http://enginimation.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

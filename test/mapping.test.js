var util=require('util'),
    assert=require('assert'),
    transliteration=require('../lib/transliteration.ua');

exports['test Аa']=function(){
    assert.eql('Alushta',transliteration.ua.transliterate('Алушта'));
    assert.eql('Andrii',transliteration.ua.transliterate('Андрій'));
};

exports['test Бб']=function(){
    assert.eql('Borshchahivka',transliteration.ua.transliterate('Борщагівка'));
    assert.eql('Borysenko',transliteration.ua.transliterate('Борисенко'));
};

exports['test Вв']=function(){
    assert.eql('Vinnytsia',transliteration.ua.transliterate('Вінниця'));
    assert.eql('Volodymyr',transliteration.ua.transliterate('Володимир'));
};

exports['test Гг']=function(){
    assert.eql('Hadiach',transliteration.ua.transliterate('Гадяч'));
    assert.eql('Bohdan',transliteration.ua.transliterate('Богдан'));
    assert.eql('Zghurskyi',transliteration.ua.transliterate('Згурський'));
};

exports['test Ґґ']=function(){
    assert.eql('Galagan',transliteration.ua.transliterate('Ґалаґан'));
    assert.eql('Gorgany',transliteration.ua.transliterate('Ґорґани'));
};

exports['test Дд']=function(){
    assert.eql('Donetsk',transliteration.ua.transliterate('Донецьк'));
    assert.eql('Dmytro',transliteration.ua.transliterate('Дмитро'));
};

exports['test Ее']=function(){
    assert.eql('Rivne',transliteration.ua.transliterate('Рівне'));
    assert.eql('Oleh',transliteration.ua.transliterate('Олег'));
    assert.eql('Esman',transliteration.ua.transliterate('Есмань'));
};

exports['test Єє']=function(){
    assert.eql('Yenakiieve',transliteration.ua.transliterate('Єнакієве'));
    assert.eql('Haievych',transliteration.ua.transliterate('Гаєвич'));
    assert.eql('Koropie',transliteration.ua.transliterate("Короп'є"));
};

exports['test Жж']=function(){
    assert.eql('Zhytomyr',transliteration.ua.transliterate('Житомир'));
    assert.eql('Zhanna',transliteration.ua.transliterate('Жанна'));
    assert.eql('Zhezheliv',transliteration.ua.transliterate('Жежелів'));
};

exports['test Зз']=function(){
    assert.eql('Zakarpattia',transliteration.ua.transliterate('Закарпаття'));
    assert.eql('Kazymyrchuk',transliteration.ua.transliterate('Казимирчук'));
};

exports['test Ии']=function(){
    assert.eql('Medvyn',transliteration.ua.transliterate('Медвин'));
    assert.eql('Mykhailenko',transliteration.ua.transliterate('Михайленко'));
};

exports['test Іі']=function(){
    assert.eql('Ivankiv',transliteration.ua.transliterate('Іванків'));
    assert.eql('Ivashchenko',transliteration.ua.transliterate('Іващенко'));
};

exports['test Її']=function(){
    assert.eql('Yizhakevych',transliteration.ua.transliterate('Їжакевич'));
    assert.eql('Kadyivka',transliteration.ua.transliterate('Кадиївка'));
    assert.eql('Marine',transliteration.ua.transliterate("Мар'їне"));
};

exports['test Йй']=function(){
    assert.eql('Yosypivka',transliteration.ua.transliterate('Йосипівка'));
    assert.eql('Stryi',transliteration.ua.transliterate('Стрий'));
    assert.eql('Oleksii',transliteration.ua.transliterate("Олексій"));
};

exports['test Кк']=function(){
    assert.eql('Kyiv',transliteration.ua.transliterate('Київ'));
    assert.eql('Kovalenko',transliteration.ua.transliterate('Коваленко'));
};

exports['test Лл']=function(){
    assert.eql('Lebedyn',transliteration.ua.transliterate('Лебедин'));
    assert.eql('Leonid',transliteration.ua.transliterate('Леонід'));
};

exports['test Мм']=function(){
    assert.eql('Mykolaiv',transliteration.ua.transliterate('Миколаїв'));
    assert.eql('Marynych',transliteration.ua.transliterate('Маринич'));
};

exports['test Нн']=function(){
    assert.eql('Nizhyn',transliteration.ua.transliterate('Ніжин'));
    assert.eql('Nataliia',transliteration.ua.transliterate('Наталія'));
};

exports['test Нн']=function(){
    assert.eql('Nizhyn',transliteration.ua.transliterate('Ніжин'));
    assert.eql('Nataliia',transliteration.ua.transliterate('Наталія'));
};

exports['test Оо']=function(){
    assert.eql('Odesa',transliteration.ua.transliterate('Одеса'));
    assert.eql('Onyshchenko',transliteration.ua.transliterate('Онищенко'));
};

exports['test Пп']=function(){
    assert.eql('Poltava',transliteration.ua.transliterate('Полтава'));
    assert.eql('Petro',transliteration.ua.transliterate('Петро'));
};

exports['test Рр']=function(){
    assert.eql('Reshetylivka',transliteration.ua.transliterate('Решетилівка'));
    assert.eql('Rybchynskyi',transliteration.ua.transliterate('Рибчинський'));
};

exports['test Сс']=function(){
    assert.eql('Sumy',transliteration.ua.transliterate('Суми'));
    assert.eql('Solomiia',transliteration.ua.transliterate('Соломія'));
};

exports['test Тт']=function(){
    assert.eql('Ternopil',transliteration.ua.transliterate('Тернопіль'));
    assert.eql('Trots',transliteration.ua.transliterate('Троць'));
};

exports['test Уу']=function(){
    assert.eql('Uzhhorod',transliteration.ua.transliterate('Ужгород'));
    assert.eql('Uliana',transliteration.ua.transliterate('Уляна'));
};

exports['test Фф']=function(){
    assert.eql('Fastiv',transliteration.ua.transliterate('Фастів'));
    assert.eql('Filipchuk',transliteration.ua.transliterate('Філіпчук'));
};

exports['test Хх']=function(){
    assert.eql('Kharkiv',transliteration.ua.transliterate('Харків'));
    assert.eql('Khrystyna',transliteration.ua.transliterate('Христина'));
};

exports['test Цц']=function(){
    assert.eql('Bila Tserkva',transliteration.ua.transliterate('Біла Церква'));
    assert.eql('Stetsenko',transliteration.ua.transliterate('Стеценко'));
};

exports['test Чч']=function(){
    assert.eql('Chernivtsi',transliteration.ua.transliterate('Чернівці'));
    assert.eql('Shevchenko',transliteration.ua.transliterate('Шевченко'));
};

exports['test Шш']=function(){
    assert.eql('Shostka',transliteration.ua.transliterate('Шостка'));
    assert.eql('Kyshenky',transliteration.ua.transliterate('Кишеньки'));
};

exports['test Щщ']=function(){
    assert.eql('Shcherbukhy',transliteration.ua.transliterate('Щербухи'));
    assert.eql('Hoshcha',transliteration.ua.transliterate('Гоща'));
    assert.eql('Harashchenko',transliteration.ua.transliterate('Гаращенко'));
};

exports['test Юю']=function(){
    assert.eql('Yurii',transliteration.ua.transliterate('Юрій'));
    assert.eql('Koriukivka',transliteration.ua.transliterate('Корюківка'));
};

exports['test Яя']=function(){
    assert.eql('Yahotyn',transliteration.ua.transliterate('Яготин'));
    assert.eql('Yaroshenko',transliteration.ua.transliterate('Ярошенко'));
    assert.eql('Kostiantyn',transliteration.ua.transliterate('Костянтин'));
    assert.eql('Znamianka',transliteration.ua.transliterate("Знам'янка"));
    assert.eql('Feodosiia',transliteration.ua.transliterate('Феодосія'));
};

exports['test minus']=function(){
    assert.eql('Volodymyr-Volynskyi',transliteration.ua.transliterate('Володимир-Волинський'));
};

exports['test underscore']=function(){
    assert.eql('Volodymyr_Volynskyi',transliteration.ua.transliterate('Володимир_Волинський'));
};

exports['test empty and null string']=function(){
    assert.eql('',transliteration.ua.transliterate(''));
    assert.eql('',transliteration.ua.transliterate());
};

exports['test multiple zg']=function(){
    assert.eql('zghazgh',transliteration.ua.transliterate('згaзг'));
};

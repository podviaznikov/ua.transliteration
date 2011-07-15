var util=require('util'),
    assert=require('assert'),
    transliteration=require('../lib/transliteration.ua');

exports['test Аa']=function(){
    assert.eql('Alushta',transliteration.transliterate('Алушта'));
    assert.eql('Andrii',transliteration.transliterate('Андрій'));
};

exports['test Бб']=function(){
    assert.eql('Borshchahivka',transliteration.transliterate('Борщагівка'));
    assert.eql('Borysenko',transliteration.transliterate('Борисенко'));
};

exports['test Вв']=function(){
    assert.eql('Vinnytsia',transliteration.transliterate('Вінниця'));
    assert.eql('Volodymyr',transliteration.transliterate('Володимир'));
};

exports['test Гг']=function(){
    assert.eql('Hadiach',transliteration.transliterate('Гадяч'));
    assert.eql('Bohdan',transliteration.transliterate('Богдан'));
    assert.eql('Zghurskyi',transliteration.transliterate('Згурський'));
};

exports['test Ґґ']=function(){
    assert.eql('Galagan',transliteration.transliterate('Ґалаґан'));
    assert.eql('Gorgany',transliteration.transliterate('Ґорґани'));
};

exports['test Дд']=function(){
    assert.eql('Donetsk',transliteration.transliterate('Донецьк'));
    assert.eql('Dmytro',transliteration.transliterate('Дмитро'));
};

exports['test Ее']=function(){
    assert.eql('Rivne',transliteration.transliterate('Рівне'));
    assert.eql('Oleh',transliteration.transliterate('Олег'));
    assert.eql('Esman',transliteration.transliterate('Есмань'));
};

exports['test Єє']=function(){
    assert.eql('Yenakiieve',transliteration.transliterate('Єнакієве'));
    assert.eql('Haievych',transliteration.transliterate('Гаєвич'));
    assert.eql('Koropie',transliteration.transliterate("Короп'є"));
};

exports['test Жж']=function(){
    assert.eql('Zhytomyr',transliteration.transliterate('Житомир'));
    assert.eql('Zhanna',transliteration.transliterate('Жанна'));
    assert.eql('Zhezheliv',transliteration.transliterate('Жежелів'));
};

exports['test Зз']=function(){
    assert.eql('Zakarpattia',transliteration.transliterate('Закарпаття'));
    assert.eql('Kazymyrchuk',transliteration.transliterate('Казимирчук'));
};

exports['test Ии']=function(){
    assert.eql('Medvyn',transliteration.transliterate('Медвин'));
    assert.eql('Mykhailenko',transliteration.transliterate('Михайленко'));
};

exports['test Іі']=function(){
    assert.eql('Ivankiv',transliteration.transliterate('Іванків'));
    assert.eql('Ivashchenko',transliteration.transliterate('Іващенко'));
};

exports['test Її']=function(){
    assert.eql('Yizhakevych',transliteration.transliterate('Їжакевич'));
    assert.eql('Kadyivka',transliteration.transliterate('Кадиївка'));
    assert.eql('Marine',transliteration.transliterate("Мар'їне"));
};

exports['test Йй']=function(){
    assert.eql('Yosypivka',transliteration.transliterate('Йосипівка'));
    assert.eql('Stryi',transliteration.transliterate('Стрий'));
    assert.eql('Oleksii',transliteration.transliterate("Олексій"));
};

exports['test Кк']=function(){
    assert.eql('Kyiv',transliteration.transliterate('Київ'));
    assert.eql('Kovalenko',transliteration.transliterate('Коваленко'));
};

exports['test Лл']=function(){
    assert.eql('Lebedyn',transliteration.transliterate('Лебедин'));
    assert.eql('Leonid',transliteration.transliterate('Леонід'));
};

exports['test Мм']=function(){
    assert.eql('Mykolaiv',transliteration.transliterate('Миколаїв'));
    assert.eql('Marynych',transliteration.transliterate('Маринич'));
};

exports['test Нн']=function(){
    assert.eql('Nizhyn',transliteration.transliterate('Ніжин'));
    assert.eql('Nataliia',transliteration.transliterate('Наталія'));
};

exports['test Нн']=function(){
    assert.eql('Nizhyn',transliteration.transliterate('Ніжин'));
    assert.eql('Nataliia',transliteration.transliterate('Наталія'));
};

exports['test Оо']=function(){
    assert.eql('Odesa',transliteration.transliterate('Одеса'));
    assert.eql('Onyshchenko',transliteration.transliterate('Онищенко'));
};

exports['test Пп']=function(){
    assert.eql('Poltava',transliteration.transliterate('Полтава'));
    assert.eql('Petro',transliteration.transliterate('Петро'));
};

exports['test Рр']=function(){
    assert.eql('Reshetylivka',transliteration.transliterate('Решетилівка'));
    assert.eql('Rybchynskyi',transliteration.transliterate('Рибчинський'));
};

exports['test Сс']=function(){
    assert.eql('Sumy',transliteration.transliterate('Суми'));
    assert.eql('Solomiia',transliteration.transliterate('Соломія'));
};

exports['test Тт']=function(){
    assert.eql('Ternopil',transliteration.transliterate('Тернопіль'));
    assert.eql('Trots',transliteration.transliterate('Троць'));
};

exports['test Уу']=function(){
    assert.eql('Uzhhorod',transliteration.transliterate('Ужгород'));
    assert.eql('Uliana',transliteration.transliterate('Уляна'));
};

exports['test Фф']=function(){
    assert.eql('Fastiv',transliteration.transliterate('Фастів'));
    assert.eql('Filipchuk',transliteration.transliterate('Філіпчук'));
};

exports['test Хх']=function(){
    assert.eql('Kharkiv',transliteration.transliterate('Харків'));
    assert.eql('Khrystyna',transliteration.transliterate('Христина'));
};

exports['test Цц']=function(){
    assert.eql('Bila Tserkva',transliteration.transliterate('Біла Церква'));
    assert.eql('Stetsenko',transliteration.transliterate('Стеценко'));
};

exports['test Чч']=function(){
    assert.eql('Chernivtsi',transliteration.transliterate('Чернівці'));
    assert.eql('Shevchenko',transliteration.transliterate('Шевченко'));
};

exports['test Шш']=function(){
    assert.eql('Shostka',transliteration.transliterate('Шостка'));
    assert.eql('Kyshenky',transliteration.transliterate('Кишеньки'));
};

exports['test Щщ']=function(){
    assert.eql('Shcherbukhy',transliteration.transliterate('Щербухи'));
    assert.eql('Hoshcha',transliteration.transliterate('Гоща'));
    assert.eql('Harashchenko',transliteration.transliterate('Гаращенко'));
};

exports['test Юю']=function(){
    assert.eql('Yurii',transliteration.transliterate('Юрій'));
    assert.eql('Koriukivka',transliteration.transliterate('Корюківка'));
};

exports['test Яя']=function(){
    assert.eql('Yahotyn',transliteration.transliterate('Яготин'));
    assert.eql('Yaroshenko',transliteration.transliterate('Ярошенко'));
    assert.eql('Kostiantyn',transliteration.transliterate('Костянтин'));
    assert.eql('Znamianka',transliteration.transliterate("Знам'янка"));
    assert.eql('Feodosiia',transliteration.transliterate('Феодосія'));
};

exports['test minus']=function(){
    assert.eql('Volodymyr-Volynskyi',transliteration.transliterate('Володимир-Волинський'));
};

exports['test underscore']=function(){
    assert.eql('Volodymyr_Volynskyi',transliteration.transliterate('Володимир_Волинський'));
};

exports['test empty and null string']=function(){
    assert.eql('',transliteration.transliterate(''));
    assert.eql('',transliteration.transliterate());
};

exports['test multiple zg']=function(){
    assert.eql('zghazgh',transliteration.transliterate('згaзг'));
};

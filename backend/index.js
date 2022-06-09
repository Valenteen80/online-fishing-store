const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('https');
const jsonParser = express.json();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const products = [
    {
        id: 1,
        categoryId: 2,
        name: 'Удочка с кольцами Libao Snow Wolf 6 м',
        img: 'https://karas.by/image/cache/catalog/Libao/wolf-750x750.jpg',
        description:
          'Удочка с кольцами Libao Wolf универсальная для всех видов поплавочной ловли. Бланк удочки обладает повышенной прочностью.',
        price: 28.34,
        rating: 1,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 2,
        categoryId: 2,
        name: 'Спиннинг Samurai Shock Leader 9, углеволокно',
        img: 'https://karas.by/image/cache/catalog/demo/samurai-red-750x750.jpg',
        description:
          'Универсальный сверхлегкий спиннинг, изготовленный из высококачественного углеволокна. Легкий и жесткий, с быстрым строем и небольшим прогибом',
        price: 49,
        rating: 5,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 3,
        categoryId: 2,
        name: 'Катушка мультипликаторная Xing Sheg ME-103',
        img: 'https://karas.by/image/cache/catalog/demo/products/12334/xing-sheg-750x750.jpeg',
        description:
          'Небольшая мультипликаторная катушка. Корпус выполнен из ударопрочного пластика. Может быть использоваться для зимних удочек, бортовых удилищ.',
        price: 17.37,
        rating: 7,
        isFavorite: true,
        inShoppingCart: false,
      },
      {
        id: 4,
        categoryId: 3,
        name: 'Ледобур Ленинград 130 двуручный',
        img: 'https://karas.by/image/cache/catalog/Leningrad/leningradskiy-bur-1-750x750.jpg',
        description:
          'Обновленная версия широко известного Ленинградского ледобура. Ледобуры  имеют цельнотянутый шнек из 4-5 витков.',
        price: 72,
        rating: 2,
        isFavorite: false,
        inShoppingCart: true,
      },
      {
        id: 5,
        categoryId: 3,
        name: 'Палатка зимняя Следопыт Куб 3 бело-синяя',
        img: 'https://karas.by/image/cache/catalog/Sledopit/palatka-sledopyt-kub-3-210d-750x750.jpg',
        description:
          'Зимняя палатка «Следопыт «Куб» обеспечивает комфорт для рыбалки в зимнее время года. Благодаря системе крепления дуг, «хабы» палатки очень быстро переводятся из транспортного положения в рабочее состояние. Размеры 1.8х1.8х2.0 м.',
        price: 290,
        rating: 12,
        isFavorite: false,
        inShoppingCart: true,
      },
      {
        id: 6,
        categoryId: 3,
        name: 'Удочка зимняя ПИРС 50 С',
        img: 'https://karas.by/image/cache/catalog/Pirs/pirs-50-c-750x750.jpg',
        description:
          'Удочки зимние ПИРС: многофункциональные, лёгкие, надёжные, удобные, "тёплые" в руке.',
        price: 4,
        rating: 10,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 7,
        categoryId: 4,
        name: 'Электромотор Wahoo GJ-32lb (до 1050кг)',
        img: 'https://karas.by/image/cache/catalog/Wahoo/wahoo-1-500x500-750x750.jpg',
        description:
          'Электромоторы работают с минимальным уровнем шума и создают идеальные условия для тролллинга.',
        price: 430,
        rating: 4,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 8,
        categoryId: 4,
        name: 'Подвесной 2-х тактный бензиновый лодочный мотор HDX T 2.6 CBMS',
        img: 'https://karas.by/image/cache/catalog/HDX/T-2-3-750x750.jpg',
        description:
          'Лодочный мотор HDX T 2.6 CBMS – это мощность в 2.6 лошадиных сил в компактной оболочке двухтактного двигателя с объемом 50 куб.см.',
        price: 820,
        rating: 0,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 9,
        categoryId: 4,
        name: 'Подвесной 2-х тактный бензиновый лодочный мотор Tarpon OTH 9.9S (Sea-Pro)',
        img: 'https://karas.by/image/cache/catalog/Sea-Pro/tarpon/tarpon-oth9-750x750.jpg',
        description:
          'Лодочный мотор Tarpon OTH 9.9S (Sea-Pro) – лодочный двигатель с традиционной для этого класса двухтактной компоновкой. Мотор оснащен двумя цилиндрами, что позволило значительно повысить мощность по сравнению с 1-цилиндровыми предшественниками.',
        price: 2800,
        rating: 3,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 10,
        categoryId: 5,
        name: 'Костюм влагозащитный Vabik Waterstop',
        img: 'https://karas.by/image/cache/catalog/Vabik/Odezhda/kostyum-vlagozaschitnyj-vabik-waterstop-750x750.jpg',
        description:
          'Классический костюм для защиты от дождя и ветра. Изготовлен из непромокаемого материала. ',
        price: 76,
        rating: 6,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 11,
        categoryId: 5,
        name: 'Сапоги забродные NordMan Expert с нейлоновым верхом (ЭВА, ТЭП)',
        img: 'https://karas.by/image/cache/catalog/NordMan/PE22_RN/sapogi-zabrodnye-nordman-expert-pe22-rn-750x750.jpg',
        description:
          'Сапоги забродные NordMan ПЕ-22 (ТЭП) РН для демисезонной и летней рыбалки. Базовый сапог из ЭВА с усиленной ТЭП подошвой для антипрокола и антискольжения. ',
        price: 79,
        rating: 8,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 12,
        categoryId: 5,
        name: 'Полукомбинезон забродный Norfin RAPID',
        img: 'https://karas.by/image/cache/catalog/Norfin/zabrodniki-norfin-rapid-750x750.jpg',
        description:
          'Верхняя часть забродного полукомбинезона сделана из высококачественного трехслойного "дышащего" материала. Сапоги изготовлены из легкого и прочного ПВХ.',
        price: 380,
        rating: 1,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 13,
        categoryId: 6,
        name: 'Эхолот Lucky Fish Finder FF168D',
        img: 'https://karas.by/image/cache/catalog/Lucky/FF168D/FF168D-750x750.jpg',
        description:
          'Портативный эхолот Lucky FF168D - это портативный двухлучевой эхолот с проводным датчиком, который прекрасно подойдет для поиска рыбы как для любителей подледной рыбалки, так и при использовании с лодки.',
        price: 250,
        rating: 8,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 14,
        categoryId: 6,
        name: 'Эхолот Garmin Striker Vivid 7sv, 7 дюймов (сканер ClearVü, сканер SideVü, GPS)',
        img: 'https://karas.by/image/cache/catalog/Garmin/vivid/vivid72sv-1-750x750.jpg ',
        description:
          'С эхолотом STRIKER Vivid 7sv с трансдьюсером GT52HW-TM вы сможете увидеть рыбу и ее структуру с максимальной детализацией, выбрав цвет дисплея, свое местоположение на воде и гидролокатор для дня.',
        price: 1734,
        rating: 6,
        isFavorite: false,
        inShoppingCart: false,
      },
      {
        id: 15,
        categoryId: 6,
        name: 'Автоматическое зарядное устройство Вымпел 20',
        img: 'https://karas.by/image/cache/catalog/demo/vimpel-20-750x750.jpg',
        description:
          'Зарядное устройство предназначено для заряда 12В автомобильных аккумуляторных батарей любой емкости в автоматическом режиме (автоматическое уменьшение тока в конце заряда).',
        price: 89,
        rating: 17,
        isFavorite: true,
        inShoppingCart: false,
      },
];

app.get('/', (req, res) => {
    res.send(products);
});

app.post('/', (req, res) => {
    if(!req.body) {
        return res.sendStatus(400);
    } else {
        const product = req.body;
        const id = products.length + 1;
        product.id = id;
        product.categoryId = req.body.categoryId + 1;
        products.push(product);
        res.send(product);
    }
})

app.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((item) => {
        return item.id == id;
        })

    if (index > -1) {
        products.splice(index, 1);
        products.forEach((product, index) => {
            product.id = index + 1;
            });

        res.send({
            Message: `Продукт с id: ${id} удалён`
        });
    } else {
        res.send({
            errorMessage: 'Нет такого продукта'
        })
    }
});

app.put("/", jsonParser, function(req, res){
       
    if(!req.body) {
        return res.sendStatus(400);
    } else {
        const product = req.body;
        const id = req.body.id;
        const index = products.findIndex((item) => {
            return item.id == id;
            })

        products[index] = product;
        res.send({
            Message: `Продукт с id: ${id} изменён`,
            Product: products[index]
            });
    }
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});



new Vue({
  el: "#app",
  data() {
    return {
      cervezasNacionales: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Corona",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Corona Light",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Pacífico",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Pacífico Clara",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Montejo",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 6,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Modelo Especial",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 7,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Negra Modelo",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 8,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Victoria",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        },
        {
          "id": 9,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Nacionales",
          "fam_note": "",
          "name": "Leon",
          "name_size": "355ml",
          "name_note": "",
          "price": 65
        }
      ],
      cervezasArtesanales: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Artesanales",
          "fam_note": "",
          "name": "Colimita (Lager)",
          "name_size": "355ml",
          "name_note": "",
          "price": 110
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Artesanales",
          "fam_note": "",
          "name": "Ticus (Porter)",
          "name_size": "355ml",
          "name_note": "",
          "price": 110
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Artesanales",
          "fam_note": "",
          "name": "Cucapá Kölsch (Clara)",
          "name_size": "",
          "name_note": "",
          "price": 110
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Artesanales",
          "fam_note": "",
          "name": "Cucapá Brown Ale (Oscura)",
          "name_size": "",
          "name_note": "",
          "price": 100
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Artesanales",
          "fam_note": "",
          "name": "Cucapá Enjambre (Helles Lager)",
          "name_size": "",
          "name_note": "",
          "price": 100
        },
        {
          "id": 6,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Artesanales",
          "fam_note": "",
          "name": "Charro (Lager/Pilsner)",
          "name_size": "",
          "name_note": "",
          "price": 100
        }
      ],
      cervezasImportadas: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Importadas",
          "fam_note": "",
          "name": "Michelob Ultra",
          "name_size": "355ml",
          "name_note": "",
          "price": 98
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Importadas",
          "fam_note": "",
          "name": "Heineken 0.0",
          "name_size": "330ml",
          "name_note": "",
          "price": 98
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Importadas",
          "fam_note": "",
          "name": "Heineken",
          "name_size": "330ml",
          "name_note": "",
          "price": 98
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Importadas",
          "fam_note": "",
          "name": "Stella Artois",
          "name_size": "355ml",
          "name_note": "",
          "price": 98
        }
      ],
      cervezasCombinadas: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Combinadas",
          "fam_note": "",
          "name": "Michelada",
          "name_size": "",
          "name_note": "",
          "price": 10
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Combinadas",
          "fam_note": "",
          "name": "Cubana",
          "name_size": "",
          "name_note": "",
          "price": 15
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Combinadas",
          "fam_note": "",
          "name": "Clamato",
          "name_size": "",
          "name_note": "",
          "price": 35
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cervezas",
          "fam": "Combinadas",
          "fam_note": "",
          "name": "Jugo de Tomate",
          "name_size": "",
          "name_note": "",
          "price": 30
        }
      ],
      mezcalesJovenes: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Unión",
          "name_size": "750 ml",
          "name_note": "",
          "price": 125,
          "price2": 1430
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Espadilla 48",
          "name_size": "750ml",
          "name_note": "",
          "price": 125,
          "price2": 1540
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "El Gallo Mezcalero Tobalá",
          "name_size": "750ml",
          "name_note": "",
          "price": 140,
          "price2": 1760
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Bruxo Espadín <span class='regular-font'>#</span>1",
          "name_size": "750ml",
          "name_note": "",
          "price": 145,
          "price2": 1705
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Montelobos",
          "name_size": "750ml",
          "name_note": "",
          "price": 150,
          "price2": 1760
        },
        {
          "id": 6,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Amores",
          "name_size": "750ml",
          "name_note": "",
          "price": 150,
          "price2": 1980
        },
        {
          "id": 7,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Tlacuache",
          "name_size": "750ml",
          "name_note": "",
          "price": 150,
          "price2": 1980
        },
        {
          "id": 8,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Nauyaca",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 1980
        },
        {
          "id": 9,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Bruxo Pechuga <span class='regular-font'>#</span>2",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 1980
        },
        {
          "id": 10,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Creyente Espadín",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2090
        },
        {
          "id": 11,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Murciélago",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2145
        },
        {
          "id": 12,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Unión \"El Viejo\"",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2310
        },
        {
          "id": 13,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Amores Cupreata",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2475
        },
        {
          "id": 14,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Creyente Cuishe",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2530
        },
        {
          "id": 15,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Alipús",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2420
        },
        {
          "id": 16,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Montelobos Ensamble",
          "name_size": "750ml",
          "name_note": "",
          "price": 175,
          "price2": 2585
        },
        {
          "id": 17,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Marca Negra Espadín",
          "name_size": "750ml",
          "name_note": "",
          "price": 185,
          "price2": 2750
        },
        {
          "id": 18,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Alipús Santa Ana",
          "name_size": "750ml",
          "name_note": "",
          "price": 185,
          "price2": 3850
        },
        {
          "id": 19,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Espíritu Lauro",
          "name_size": "750ml",
          "name_note": "",
          "price": 199,
          "price2": 2970
        },
        {
          "id": 20,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Arroqueño 48",
          "name_size": "750ml",
          "name_note": "",
          "price": 270,
          "price2": 3080
        },
        {
          "id": 21,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Cuishe 48",
          "name_size": "750ml",
          "name_note": "",
          "price": 275,
          "price2": 3080
        },
        {
          "id": 22,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Bruxo Ensamble <span class='regular-font'>#</span>4",
          "name_size": "750ml",
          "name_note": "",
          "price": 275,
          "price2": 3190
        },
        {
          "id": 23,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Creyente Tobalá",
          "name_size": "750ml",
          "name_note": "",
          "price": 280,
          "price2": 3245
        },
        {
          "id": 24,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Joven",
          "fam_note": "",
          "name": "Marca Negra Tobalá",
          "name_size": "750ml",
          "name_note": "",
          "price": 320,
          "price2": 3520
        }
      ],
      mezcalesReposados: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Reposado",
          "fam_note": "",
          "name": "Amores",
          "name_size": "750 ml",
          "name_note": "",
          "price": 175,
          "price2": 2275
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Mezcales",
          "fam": "Reposado",
          "fam_note": "",
          "name": "Espíritu Lauro",
          "name_size": "750 ml",
          "name_note": "",
          "price": 175,
          "price2": 2275
        }
      ],
      coctelesMezcales: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "El Jarrito",
          "name_description": "El de la Casa, con Mango y Cítricos",
          "name_size": "",
          "name_note": "",
          "price": 190,
          "price2": ""
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Oaxaca 86",
          "name_description": "Nuestro Mojito de Mezcal  con Pepino",
          "name_size": "",
          "name_note": "",
          "price": 175,
          "price2": ""
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "María Felix",
          "name_description": "Mango, Chamoy y Mezcal",
          "name_size": "",
          "name_note": "",
          "price": 175,
          "price2": ""
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Frozen de Tamarindo",
          "name_description": "Con chile serrano y tajín",
          "name_size": "",
          "name_note": "",
          "price": 175,
          "price2": ""
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Mezcaltini de Pepino",
          "name_description": "Escarchado con Sal de Gusano",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 6,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Jamaica Tixxi",
          "name_description": "Lima, Miel de Agave y Sal de Gusano",
          "name_size": "",
          "name_note": "",
          "price": 175,
          "price2": ""
        }
      ],
      coctelesVodka: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Horchata de Mamey",
          "name_description": "Hecha en casa con toque de Canela",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Quetzal",
          "name_description": "Frutos del Bosque y Albahaca",
          "name_size": "",
          "name_note": "",
          "price": 180,
          "price2": ""
        }
      ],
      coctelesGinebra: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ginebra",
          "fam_note": "",
          "name": "Gin La Capital",
          "name_description": "Cítricos, Pepino y Romero",
          "name_size": "",
          "name_note": "",
          "price": 195,
          "price2": ""
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ginebra",
          "fam_note": "",
          "name": "Alebrije",
          "name_description": "Fruta de la Pasión y Granada",
          "name_size": "",
          "name_note": "",
          "price": 195,
          "price2": ""
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ginebra",
          "fam_note": "",
          "name": "Hada Verde",
          "name_description": "Albahaca y Limón Amarillo",
          "name_size": "",
          "name_note": "",
          "price": 175,
          "price2": ""
        }
      ],
      coctelesMartinis: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "LYCHEE",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 190,
          "price2": ""
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "PEPINO",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "APPLE MARTINI",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "COSMOPOLITAN",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "CLASICO NACIONAL",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 6,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "CLASICO IMPORTADO",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 190,
          "price2": ""
        },
        {
          "id": 7,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Martinis",
          "fam_note": "",
          "name": "CLASICO PREMIUM",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 230,
          "price2": ""
        }
      ],
      coctelesClasicos: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Clásicos",
          "fam_note": "",
          "name": "Mojito",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 2,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Clásicos",
          "fam_note": "",
          "name": "Margarita",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 180,
          "price2": ""
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Clásicos",
          "fam_note": "",
          "name": "Margarita de Sabores",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 185,
          "price2": ""
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Clásicos",
          "fam_note": "",
          "name": "Piña Colada",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 170,
          "price2": ""
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Clásicos",
          "fam_note": "",
          "name": "Aperol Spritz",
          "name_description": "",
          "name_size": "",
          "name_note": "",
          "price": 195,
          "price2": ""
        }
      ],
      bebidasBebidas: [
        {
          "id": 1,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Bebidas",
          "fam_note": "",
          "name": "Baileys Especial",
          "name_size": "",
          "name_note": "",
          "price": 175
        },
        {
          "id": 2,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Bebidas",
          "fam_note": "",
          "name": "Carajillo",
          "name_size": "1.5oz",
          "name_note": "",
          "price": 175
        },
        {
          "id": 3,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Bebidas",
          "fam_note": "",
          "name": "Frappé de Té Verde y Flores",
          "name_size": "",
          "name_note": "",
          "price": 90
        }
      ],
      bebidasCafe: [
        {
          "id": 4,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Cafe",
          "fam_note": "",
          "name": "Americano",
          "name_size": "6oz",
          "name_note": "",
          "price": 60
        },
        {
          "id": 5,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Cafe",
          "fam_note": "",
          "name": "Espresso",
          "name_size": "1.5oz",
          "name_note": "",
          "price": 60
        },
        {
          "id": 6,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Cafe",
          "fam_note": "",
          "name": "Espresso Doble",
          "name_size": "3.5oz",
          "name_note": "",
          "price": 90
        },
        {
          "id": 7,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Cafe",
          "fam_note": "",
          "name": "Capuchino",
          "name_size": "3.5oz",
          "name_note": "",
          "price": 85
        }
      ],
      postresPostres: [
        {
          "id": 1,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Pastel de chocolate y chile ancho",
          "name_size": "25min",
          "name_note": "",
          "price": 160
        },
        {
          "id": 2,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Crema Frita de mamey",
          "name_size": "",
          "name_note": "",
          "price": 150
        },
        {
          "id": 3,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Chocolate en dos texturas",
          "name_size": "",
          "name_note": "",
          "price": 150
        },
        {
          "id": 4,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Merengue con fresas y crema de vainilla",
          "name_size": "",
          "name_note": "",
          "price": 150
        },
        {
          "id": 5,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Pastel de zanahoria",
          "name_size": "",
          "name_note": "",
          "price": 150
        },
        {
          "id": 6,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Brûlée de elote con helado de turrón",
          "name_size": "",
          "name_note": "",
          "price": 145
        },
        {
          "id": 7,
          "cat": "Postres",
          "sub_cat": "Postres",
          "fam": "",
          "fam_note": "",
          "name": "Moldeado de Guanábana",
          "name_size": "",
          "name_note": "",
          "price": 140
        }
      ],
      postresNieves: [
        {
          "id": 1,
          "cat": "Postres",
          "sub_cat": "Nieves",
          "fam": "",
          "fam_note": "",
          "name": "1 Bola",
          "name_size": "",
          "name_note": "",
          "price": 55
        },
        {
          "id": 2,
          "cat": "",
          "sub_cat": "",
          "fam": "",
          "fam_note": "",
          "name": "2 Bolas",
          "name_size": "",
          "name_note": "",
          "price": 110
        }
      ],
      postresHelados: [
        {
          "id": 1,
          "cat": "Postres",
          "sub_cat": "Helados",
          "fam": "",
          "fam_note": "",
          "name": "1 Bola",
          "name_size": "",
          "name_note": "",
          "price": 55
        },
        {
          "id": 2,
          "cat": "Postres",
          "sub_cat": "Helados",
          "fam": "",
          "fam_note": "",
          "name": "2 Bolas",
          "name_size": "",
          "name_note": "",
          "price": 110
        }
      ]
    }
  }
});

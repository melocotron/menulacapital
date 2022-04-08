
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 70
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
          "price": 120
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
          "price": 120
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
          "price": 120
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
          "price": 120
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
          "price": 120
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
          "price": 120
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
          "name": "Unión",
          "name_size": "750ml",
          "price": 140
        },
        {
          "name": "Punto y Coma",
          "name_size": "750ml",
          "price": 145

        },
        {
          "name": "Espadilla 48",
          "name_size": "750ml",
          "price": 150
        },
        {
          "name": "El Gallo Mezcalero Tobalá ",
          "name_size": "750ml",
          "price": 165
        },
        {
          "name": "Bruxo Espadín <span class='regular-font'>#</span>1 ",
          "name_size": "750ml",
          "price": 165
        },
        {
          "name": "Creyente Espadín ",
          "name_size": "750ml",
          "price": 165
        },
        {
          "name": "Tlacuache",
          "name_size": "750ml",
          "price": 180
        },
        {
          "name": "Nauyaca",
          "name_size": "750ml",
          "price": 180
        },
        {
          "name": "Montelobos",
          "name_size": "750ml",
          "price": 160
        },
        {
          "name": "Amarás",
          "name_size": "750ml",
          "price": 190
        }
        // {
        //   "name": "Bruxo Pechuga <span class='regular-font'>#</span>2 ",
        //   "name_size": "750ml",
        //   "price": 215
        // }
      ],
      mezcalesPremium: [
        {
          "name": "Unión \"El Viejo\"",
          "name_size": "750ml",
          "price": 210
        },
        {
          "name": "Amarás Cupreata",
          "name_size": "750ml",
          "price": 225
        },
        {
          "name": "Creyente Cuishe",
          "name_size": "750ml",
          "price": 230
        },
        {
          "name": "Alipús San Andrés",
          "name_size": "750ml",
          "price": 230
        },
        {
          "name": "Marca Negra Espadín",
          "name_size": "750ml",
          "price": 235
        },
        {
          "name": "Espíritu Lauro ",
          "name_size": "750ml",
          "price": 250
        },
        {
          "name": "Montelobos Ensamble",
          "name_size": "750ml",
          "price": 250
        },
        {
          "name": "Amarás Logia",
          "name_size": "750ml",
          "price": 250
        },
        {
          "name": "Arroqueño 48",
          "name_size": "750ml",
          "price": 280
        },
        {
          "name": "Cuishe 48",
          "name_size": "750ml",
          "price": 280
        },
        {
          "name": "Bruxo Ensamble <span class='regular-font'>#</span>4 ",
          "name_size": "750ml",
          "price": 310
        },
        {
          "name": "Creyente Tobalá",
          "name_size": "750ml",
          "price": 320
        },
        {
          "name": "Montelobos Tobalá",
          "name_size": "750ml",
          "price": 380
        },
        {
          "name": "Marca Negra Tepeztate",
          "name_size": "750ml",
          "price": 480
        }
      ],
      mezcalesReposados: [
        {
          "name": "Amarás",
          "name_size": "750ml",
          "name_note": "",
          "price": 220,
          "price2": 2275
        },
        {
          "name": "Espíritu Lauro",
          "name_size": "750ml",
          "name_note": "",
          "price": 290,
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
          "price": 195,
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
          "price": 185,
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
          "price": 185,
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
          "price": 185,
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
          "price": 185,
          "price2": ""
        },
        {
          "id": 7,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Mezcal",
          "fam_note": "",
          "name": "Xochimilco",
          "name_description": "Tomatillo, Pepino y Chile Serrano",
          "name_size": "",
          "name_note": "",
          "price": 185,
          "price2": ""
        }
      ],
      coctelesVodka: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Vodka",
          "fam_note": "",
          "name": "Lychee",
          "name_description": "Cremoso",
          "name_size": "",
          "name_note": "",
          "price": 210,
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
          "price": 210,
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
          "price": 210,
          "price2": ""
        },
        {
          "id": 4,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ginebra",
          "fam_note": "",
          "name": "Sayulita",
          "name_description": "Pepino y Guayaba",
          "name_size": "",
          "name_note": "",
          "price": 210,
          "price2": ""
        },
        {
          "id": 5,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ginebra",
          "fam_note": "",
          "name": "Negroni Sour",
          "name_logo": "tanqueray",
          "name_description": ", Campari, Martini Rosso",
          "name_size": "",
          "name_note": "",
          "price": 230,
          "price2": ""
        }
      ],
      coctelesWhisky: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Whisky",
          "fam_note": "",
          "name": "Smoked Whisky",
          "name_description": "Piña y Romero",
          "name_size": "",
          "name_note": "",
          "price": 210,
          "price2": ""
        }
      ],
      coctelesRon: [
        {
          "id": 1,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ron",
          "fam_note": "",
          "name": "Piña Colada Especial",
          "name_description": "Piña y Coco Natural",
          "name_size": "",
          "name_note": "",
          "price": 210,
          "price2": ""
        },
        {
          "id": 3,
          "cat": "Bebidas",
          "sub_cat": "Cocteles",
          "fam": "Ron",
          "fam_note": "",
          "name": "Mojito Takob",
          "name_description": "Nuestro Mojito de Guanábana",
          "name_size": "",
          "name_note": "",
          "price": 215,
          "price2": ""
        }
      ],
      coctelesMartinis: [
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
          "price": 190,
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
          "price": 190,
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
          "price": 190,
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
          "price": 210,
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
          "price": 245,
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
          "price": 180,
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
          "price": 190,
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
          "price": 195,
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
          "price": 185,
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
          "price": 210,
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
          "name": "Carajillo La Capital",
          "name_size": "",
          "name_note": "",
          "price": 230
        },
        {
          "id": 2,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Bebidas",
          "fam_note": "",
          "name": "Falso Carajillo de Cajeta",
          "name_size": "",
          "name_note": "",
          "price": 195
        },
        {
          "id": 3,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Bebidas",
          "fam_note": "",
          "name": "Falso Carajillo de Avellana",
          "name_size": "",
          "name_note": "",
          "price": 195
        },
        {
          "id": 4,
          "cat": "Postres",
          "sub_cat": "Bebidas",
          "fam": "Bebidas",
          "fam_note": "",
          "name": "Carajillo Tradicional",
          "name_size": "",
          "name_note": "",
          "price": 175
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
      ],
      comidasSopas:[
        {
          "id": 1,
          "name": "Caldo de Piedra",
          "price": 210
        },
        {
          "id": 2,
          "name": "Fideo Seco",
          "price": 150
        },
        {
          "id": 3,
          "name": "Sopa de Frijol",
          "price": 110
        },
        {
          "id": 4,
          "name": "Sopa de Lima",
          "price": 110
        },
        {
          "id": 5,
          "name": "Sopa de Dos Tortillas",
          "price": 110
        }
      ],
      comidasPastas:[
        {
          "id": 2,
          "name": "Risotto de Camarón y Frijol Negro",
          "price": 255
        },
        {
          "id": 3,
          "name": "Risotto de Hongo Porcini y Espárrago",
          "price": 245
        },
        {
          "id": 4,
          "name": "Penne al Chipotle",
          "price": 210
        }
      ],
      comidasParrillas:[
        {
          "id": 1,
          "name": "Pulpo a la Brasa",
          "name_size": "160g",
          "price": 295
        },
        {
          "id": 2,
          "name": "Plato de Verduras al Grill con Queso de Cabra",
          "name_size": "",
          "price": 175
        },
        {
          "id": 3,
          "name": "Pollo al Pastor",
          "name_size": "750g",
          "price": 340
        },
        {
          "id": 4,
          "name": "Pescado Zarandeado",
          "name_size": "500g",
          "price": 495
        },
        {
          "id": 5,
          "name": "Queso Panela Zarandeado",
          "name_size": "180g",
          "price": 180
        }
      ],
      comidasPlatosFuertes: [
        {
          "id": 10,
          "name": "Chicharrón de pescado",
          "name_size": "300g",
          "price": 245
        },
        {
          "id": 1,
          "name": "Filete La Capital",
          "name_size": "180g",
          "price": 310
        },
        {
          "id": 2,
          "name": "Atún en Costra de Chiles Rojos",
          "name_size": "180g",
          "price": 310
        },
        {
          "id": 3,
          "name": "Pescado Tikin Xic",
          "name_size": "200g",
          "price": 300
        },
        {
          "id": 4,
          "name": "Salmón en Costra de Pepita Verde",
          "name_size": "180g",
          "price": 320
        },
        {
          "id": 5,
          "name": "Pechuga de Pollo en Costra de Ceniza",
          "name_size": "180g",
          "price": 295
        },
        {
          "id": 6,
          "name": "Chile en Nogada",
          "name_size": "180g",
          "price": 355
        },
        {
          "id": 7,
          "name": "Enchiladas de Pato con Mole Negro",
          "name_size": "(4pzas)",
          "price": 320
        }
      ],
      comidasEntradas: [
        {
          "id": 1,
          "name": "Tacos La Capital",
          "name_size": "(4pzas)",
          "price": 245
        },
        {
          "id": 2,
          "name": "Chips con Guacamole",
          "name_size": "",
          "price": 205
        },
        {
          "id": 3,
          "name": "Tiradito de atún",
          "name_size": "160g",
          "price": 215
        },
        {
          "id": 5,
          "name": "Flautas de pescado",
          "name_size": "(3pzas)",
          "price": 245
        },
        {
          "id": 7,
          "name": "Tártara de Atún",
          "name_size": "",
          "price": 215
        },
        {
          "id": 8,
          "name": "Cochinita Pibil",
          "name_size": "180g",
          "price": 245
        },
        {
          "id": 9,
          "name": "Esquites",
          "name_size": "",
          "price": 130
        }
      ]
    }
  }
});

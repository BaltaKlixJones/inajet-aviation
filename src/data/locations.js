const locations = [
  "Buenos Aires, Argentina",
  "Catamarca, Argentina",
  "Chaco, Argentina",
  "Chubut, Argentina",
  "Córdoba, Argentina",
  "Corrientes, Argentina",
  "Entre Ríos, Argentina",
  "Formosa, Argentina",
  "Jujuy, Argentina",
  "La Pampa, Argentina",
  "La Rioja, Argentina",
  "Mendoza, Argentina",
  "Misiones, Argentina",
  "Neuquén, Argentina",
  "Río Negro, Argentina",
  "Salta, Argentina",
  "San Juan, Argentina",
  "San Luis, Argentina",
  "Santa Cruz, Argentina",
  "Santa Fe, Argentina",
  "Santiago del Estero, Argentina",
  "Tierra del Fuego, Argentina",
  "Tucumán, Argentina",


  
  "Antofagasta, Chile",
  "Punta Arenas, Chile",
  "Arica, Chile",
  "Balmaceda, Chile",
  "Calama, Chile",
  "Concepción, Chile",
  "Copiapó, Chile",
  "Iquique, Chile",
  "La Serena, Chile",
  "Puerto Montt, Chile",
  "Santiago, Chile",
  "Tumuco, Chile",
  "Vildavia, Chile",
  
  
  "Montevideo, Uruguay",
  "Punta del Este, Uruguay",



  "Asunción, Paraguay",


  "Porto Alegre, Brasil",
  "Aracaju, Brasil",
  "Belo Horizonte, Brasil",
  "Belém, Brasil",
  "Boa Vista, Brasil",
  "Rio Branco, Brasil",
  "Brasilia, Brasil",
  "Campina Grande, Brasil",
  "Caixas Do Sul, Brasil",
  "Chapecó, Brasil",
  "Montes Claros, Brasil",
  "Cruzeiro Do Sul, Brasil",
  "Cuiaba, Brasil",
  "Curitiba, Brasil",
  "Foz De Iguazu, Brasil",
  "Rio de Janeiro, Brasil",
  "Juazeiro Do Norte, Brasil",
  "Florianopolis, Brasil",
  "Fortaleza, Brasil",
  "Goiana, Brasil",
  "Ilheus, Brasil",
  "Imperatriz, Brasil",
  "Jericoacoara, Brasil",
  "Joao Pessoa, Brasil",
  "Joinville, Brasil",
  "Londrina, Brasil",
  "Sao Luis, Brasil",
  "Macapa, Brasil",
  "Maceió, Brasil",
  "Manaos, Brasil",
  "Maraba, Brasil",
  "Maringa, Brasil",
  "Natal, Brasil",
  "Navagantes, Brasil",
  "San Pablo, Brasil",
  "Palmas, Brasil",
  "Petrolina, Brasil",
  "Porto Seguro, Brasil",
  "Porto Velho, Brasil",
  "Recife, Brasil",
  "Presidente Prudente, Brasil",
  "Salvador, Brasil",
  "Teresina, Brasil",
  "Uberlandia, Brasil",
  "Vitoria, Brasil",


  "Cochabamba, Bolivia",
  "Santa Cruz de la Sierra, Bolivia",
  "Oruro, Bolivia",
  "Sucre, Bolivia",
  "La Paz, Bolivia",
  "Tarija, Bolivia",
  "Trinidad, Bolivia",

  
  "Arequipa, Perú",
  "Cusco, Perú",
  "Iquitos, Perú",
  "Lima, Perú",
  "Juliaca, Perú",
  "Puerto Maldonado, Perú",
  "Piura, Perú",
  "Pucallpa, Perú",
  "Tacna, Perú",
  "Tarapoto, Perú",
  "Trujillo, Perú",



  "Aguascalientes, México",
  "San Jose Cabo, México",
  "Campeche, México",
  "Cancún, México",
  "Ciudad del Carmen, México",
  "Chihuahua, México",
  "Ciudad de México, México",
  "Ciudad Obregon, México",
  "Ciudad Juárez, México",
  "Culiacán, México",
  "Durango, México",
  "Guadalajara, México",
  "Tuxtla Gutiérrez, México",
  "Hermosillo, México",
  "Ixtapa, México",
  "La Paz, México",
  "Nuevo Laredo, México",
  "León, México",
  "Los Mochis, México",
  "San Luis de Potosí, México",
  "Matamoros, México",
  "Mazatlán, México",
  "Mérida, México",
  "Mexicali, México",
  "Minatitlán, México",
  "Monterrey, México",
  "Oaxaca, México",
  "Poza Rica, México",
  "Puerto Vallarta, México",
  "Reynosa, México",
  "Tampico, México",
  "Tapachula, México",
  "Tijuana, México",
  "Torreón, México",
  "Veracruz, México",
  "Villahermosa, México",
  "Zacatecas, México",



  
  "Atlanta, EEUU",
  "Baltimore, EEUU",
  "Boston, EEUU",
  "Buffalo, EEUU",
  "Charlotte, EEUU",
  "Charleston, EEUU",
  "Chicago, EEUU",
  "Cincinnati, EEUU",
  "Salt Lake City, EEUU",
  "Cleveland, EEUU",
  "Columbus, EEUU",
  "Dallas, EEUU",
  "Denver, EEUU",
  "Detroit, EEUU",
  "San Diego, EEUU",
  "Raleigh Durham, EEUU",
  "Filadelfia, EEUU",
  "San Francisco, EEUU",
  "Houston, EEUU",  
  "Indianapolis, EEUU",
  "Las Vegas, EEUU",
  "Los Ángeles, EEUU",
  "St Louis, EEUU",
  "Menfis, EEUU",
  "Miami, EEUU",
  "Minneapolis, EEUU",
  "Nashville, EEUU",
  "Newark, EEUU",
  "Nueva Orleans, EEUU",
  "Nueva York, EEUU",
  "Orlando, EEUU",
  "Phoenix, EEUU",
  "Pittsburgh, EEUU",
  "Richmond, EEUU",
  "Seattle, EEUU",
  "Washington, EEUU",





// LISTO
  



  "España, Europa",
  "Francia, Europa",
  "Italia, Europa",
  "Alemania, Europa",
  "Reino Unido, Europa",
  "Rusia, Europa",
  "Ucrania, Europa",
  "Polonia, Europa",
  "Rumania, Europa",
  "Países Bajos, Europa",
  "Bélgica, Europa",
  "Grecia, Europa",
  "Portugal, Europa",
  "Suecia, Europa",
  "Hungría, Europa",
  "Bielorrusia, Europa",
  "Austria, Europa",
  "Serbia, Europa",
  "Suiza, Europa",
  "Bulgaria, Europa",
  "Dinamarca, Europa",
  "Finlandia, Europa",
  "Eslovaquia, Europa",
  "Noruega, Europa",
  "Irlanda, Europa",
  "Croacia, Europa",
  "Moldavia, Europa",
  "Bosnia y Herzegovina, Europa",
  "Albania, Europa",
  "Lituania, Europa",
  "Macedonia del Norte, Europa",
  "Eslovenia, Europa",
  "Letonia, Europa",
  "Estonia, Europa",
  "Montenegro, Europa",
  "Luxemburgo, Europa",
  "Malta, Europa",
  "Islandia, Europa",
  "Andorra, Europa",
  "Mónaco, Europa",
  "Liechtenstein, Europa",
  "San Marino, Europa",
  "Marruecos, África",
  "Argelia, África",
  "Túnez, África",
  "Libia, África",
  "Egipto, África",
  "Sudán, África",
  "Sudán del Sur, África",
  "Etiopía, África",
  "Somalia, África",
  "Kenia, África",
  "Uganda, África",
  "República Democrática del Congo, África",
  "Ruanda, África",
  "Burundi, África",
  "Tanzania, África",
  "Zambia, África",
  "Angola, África",
  "Zimbabue, África",
  "Mozambique, África",
  "Malaui, África",
  "Namibia, África",
  "Botsuana, África",
  "Suazilandia, África",
  "Lesoto, África",
  "Sudáfrica, África",
  "Madagascar, África",
  "Mauricio, África",
  "Comoras, África",
  "Seychelles, África",
  "Chad, África",
  "Níger, África",
  "Malí, África",
  "Burkina Faso, África",
  "Mauritania, África",
  "Senegal, África",
  "Gambia, África",
  "Guinea-Bisáu, África",
  "Guinea, África",
  "Sierra Leona, África",
  "Liberia, África",
];

export default locations;

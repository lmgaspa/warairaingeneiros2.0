interface PortafolioItem {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
  province?: string;
  department?: string;
  district?: string;
  year?: string;
  budget?: string;
  area?: string;
  longitud?: string;
  pendientes?: string;
  longitudMuros?: string;
  alturaMuros?: string;
  longitudTechado?: string;
  cerchasTipo?: string;
}

export const portafolioItems: PortafolioItem[] = [
  {
    id: 1,
    category: 'Ornatos públicos',
    imageUrl: '/images/portafolio/ornatos_publicos/cementerio.jpg',
    title: 'Mejoramiento del Cementerio Municipal del Distrito de Surco',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco',
    year: '2019',
    budget: 'S/. 34,338.23',

  },
  {
    id: 2,
    category: 'Ornatos públicos',
    imageUrl: '/images/portafolio/ornatos_publicos/chiclayo_san_mateo.jpg',
    title: 'MEJORAMIENTO DE LOS SERVICIOS TURÍSTICOS PÚBLICOS',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Mateo',
    year: '2023',
    budget: 'S/. 549,820.37',
  },
  {
    id: 3,
    category: 'Ornatos públicos',
    imageUrl: '/images/portafolio/ornatos_publicos/pistas_mariatana.jpg',
    title: 'CREACIÓN DEL SERVICIO DE TRANSITABILIDAD VEHICULAR Y PEATONAL',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Mariatana',
    year: '2021',
    area: '5,767.35 m2',
    budget: 'S/. 1,138,733.94',
  },
  {
    id: 4,
    category: 'Ornatos públicos',
    imageUrl: '/images/portafolio/ornatos_publicos/camal_matucana.jpg',
    title: 'REQUISITOS PARA LA AUTORIZACIÓN SANITARIA DEL PROYECTO DE CONSTRUCCIÓN DEL CAMAL MUNICIPAL',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Matucana',
    year: '2022',
    budget: '',
  },
  {
    id: 5,
    category: 'Infraestructura de riesgo',
    imageUrl: '/images/portafolio/infraestructura_de_riesgo/reservorio_unchurun.jpg',
    title: 'MEJORAMIENTO DEL RESERVORIO DEL SISTEMA DE AGUA DE RIESGO',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Mateo',
    year: '2023',
    budget: 'S/. 1,138,733.94',
  },
  {
    id: 6,
    category: 'Infraestructura de riesgo',
    imageUrl: '/images/portafolio/infraestructura_de_riesgo/cacray.jpg',
    title: 'CREACIÓN DEL SISTEMA DE RIEGO PARA LA AMPLIACIÓN DE LA FRONTERA AGRÍCOLA EN EL SECTOR CAYAN, COMUNIDAD CAMPESINA DE SAN JOSÉ DE PARAC',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Mateo',
    year: '2023',
    budget: 'S/. 913,957.35',
  },
  {
    id: 7,
    category: 'Infraestructura de riesgo',
    imageUrl: '/images/portafolio/infraestructura_de_riesgo/parac.jpg',
    title: 'CREACIÓN DEL SISTEMA DE RIEGO PARA LA AMPLIACIÓN DE LA FRONTERA AGRÍCOLA EN EL SECTOR CAYAN',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Mateo',
    year: '2023',
    budget: 'S/. 913,957.35',
  },
  {
    id: 8,
    category: 'Infraestructura de riesgo',
    imageUrl: '/images/portafolio/infraestructura_de_riesgo/quillacocha.jpg',
    title: 'MEJORAMIENTO DEL SERVICIO DE AGUA DEL SISTEMA DE RIEGO QUILLACOCHA',
    province: '',
    department: '',
    district: 'San Mateo',
    year: '2023',
    budget: 'S/. 740,957.38',
  },
  {
    id: 9,
    category: 'Infraestructura de riesgo',
    imageUrl: '/images/portafolio/infraestructura_de_riesgo/chocna.jpg',
    title: 'CREACIÓN DEL CANAL Y RESERVORIO DE RIEGO EN LA ZONA AGRÍCOLA DEL ANEXO CHOCNA',
    province: '',
    department: 'Lima',
    district: 'San Mateo',
    year: '2023',
    budget: 'S/. 1,574,521.40',
  },
  {
    id: 10,
    category: 'Infraestructuras educativas',
    imageUrl: '/images/portafolio/infraestructuras_educativas/colegio_tantaranche.jpg',
    title: 'RECUPERACIÓN DE LA INFRAESTRUCTURA DE LA INSTITUCIÓN EDUCATIVA N° 20589 ROSA DE SANTA MARÍA DEL CENTRO POBLADO CARHUAPAMPA',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Juan de Tantaranche',
    year: '2021',
    budget: 'S/. 2,975,095.32',
  },
  {
    id: 11,
    category: 'Infraestructuras educativas',
    imageUrl: '/images/portafolio/infraestructuras_educativas/colegio_calahuaya.jpg',
    title: 'RECUPERACIÓN DE LA INFRAESTRUCTURA DE LA INSTITUCIÓN EDUCATIVA N° 20570 DANIEL ALOMIA ROBLES',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Mateo',
    year: '2022',
    budget: 'S/. 6,770,030.92',
  },
  {
    id: 12,
    category: 'Infraestructuras educativas',
    imageUrl: '/images/portafolio/infraestructuras_educativas/colegio_miguel_grau.jpg',
    title: 'MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE EDUCACIÓN PRIMARIA EN LA I.E. 20568 MIGUEL GRAU',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Matucana',
    year: '2022',
    budget: 'S/. 8,502,923.47',
  },
  {
    id: 13,
    category: 'Agua y desagüe',
    imageUrl: '/images/portafolio/agua_y_desague/calle_sucre.jpg',
    title: 'CREACIÓN DE LA RED DE ALCANTARILLADO Y AGUA POTABLE EN EL PASAJE 30 DE SEPTIEMBRE Y JR. SUCRE',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco',
    year: '2019',
    area: '345.15 m2',
    budget: 'S/. 67,552.35',
  },
  {
    id: 14,
    category: 'Agua y desagüe',
    imageUrl: '/images/portafolio/agua_y_desague/jr_ferrocarril.jpg',
    title: 'CREACION DEL SERVICIO DE AGUA POTABLE Y ALCANTARILLADO',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Matucana',
    year: '2022',
    budget: 'S/. 270,014.38',
  },
  {
    id: 15,
    category: 'Infraestructura vial',
    imageUrl: '/images/portafolio/infraestructura_vial/trocha_shurura.jpg',
    title: 'CREACIÓN DE LA TROCHA CARROZABLE EN EL TRAMO SURCO-SHURURA',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco',
    longitud: '2.260km',
    year: '2019',
    pendientes: '12 a 18%',
    budget: 'S/. 4,267,160.49',
  },
  {
    id: 16,
    category: 'Infraestructura vial',
    imageUrl: '/images/portafolio/infraestructura_vial/trocha_songos.jpg',
    title: 'CREACIÓN DE LA TROCHA CARROZABLE SONGOS—LINDAY',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco—Songos',
    longitud: '6.310km',
    year: '2019',
    pendientes: '12 a 18%',
    budget: '',
  },
  {
    id: 17,
    category: 'Infraestructura vial',
    imageUrl: '/images/portafolio/infraestructura_vial/trocha_huaquicha.jpg',
    title: 'CREACIÓN DE LA TROCHA CARROZABLE SURCO—HUAQUICHA',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco— Huaquicha',
    longitud: '5.500km',
    year: '2019',
    pendientes: '8 a 10%',
    budget: '',
  },
  {
    id: 18,
    category: 'Infraestructura vial',
    imageUrl: '/images/portafolio/infraestructura_vial/trocha_olleros.jpg',
    title: 'MEJORAMIENTO DE LA TROCHA CARROZABLE EN EL TRAMO PAMPA PACTA - SANTA ROSA',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Santo Domingo de los',
    longitud: 'Olleros',
    year: '2020',
    pendientes: "...",
    budget: 'S/. 183,622.06',
  },
  {
    id: 19,
    category: 'Complejos deportivos',
    imageUrl: '/images/portafolio/complejos_deportivos/estadio_surco.png',
    title: 'AMPLIACIÓN Y NIVELACIÓN DEL CAMPO DEPORTIVO DEL ESTADIO MUNICIPAL DEL DISTRITO DE SURCO',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco',
    year: '2020',
    longitudMuros: '158.00m',
    alturaMuros: '2.00 - 4.00m',
    budget: 'S/. 124,017.87',
  },
  {
    id: 20,
    category: 'Complejos deportivos',
    imageUrl: '/images/portafolio/complejos_deportivos/complejo_san_juan_tantaranche.jpg',
    title: 'TECHADO DE ALUZINC PARA LA TRIBUNA ESTE DEL ESTADIO MUNICIPAL DEL DISTRITO DE SURCO',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'Surco',
    year: '2020',
    longitudTechado: '66.49m',
    cerchasTipo: 'Pratt',
    budget: 'S/. 81,440.32',
  },
  {
    id: 21,
    category: 'Complejos deportivos',
    imageUrl: '/images/portafolio/complejos_deportivos/calculo_estructural_aluzinc_techo.jpg',
    title: 'CREACIÓN DE LOS ESPACIOS POLIDEPORTIVOS EN LA LOCALIDAD DE SAN JUAN DE TANTARANCHE',
    province: 'Huarochirí',
    department: 'Lima',
    district: 'San Juan de Tantaranche',
    year: '2022',
    budget: 'S/. S/. 838,465.19',
  },
  {
    id: 22,
    category: 'Viviendas',
    imageUrl: '/images/portafolio/viviendas/saxxon.jpg',
    title: 'Complejo de 5 viviendas unifamiliares ubicadas en terrenos escarpados en los Alpes Suizos.',
    province: '',
    department: '',
    district: '',
    year: '',
    budget: '',
  },
  {
    id: 23,
    category: 'Viviendas',
    imageUrl: '/images/portafolio/viviendas/cillian.jpg',
    title: 'Vivienda unifamiliar ubicada en Rittershoffen, Francia con una superficie de 168.00m2 distribuida en dos niveles.',
    province: '',
    department: '',
    district: '',
    year: '',
    budget: '',
  },
  {
    id: 24,
    category: 'Viviendas',
    imageUrl: '/images/portafolio/viviendas/mahdar.jpg',
    title: 'Vivienda ubicada en Aux Favieres, Francia con una superficie de 116.00m2 distribuida en una planta.',
    province: '',
    department: '',
    district: '',
    year: '',
    budget: '',
  },
  {
    id: 25,
    category: 'Viviendas',
    imageUrl: '/images/portafolio/viviendas/annemasse.jpg',
    title: 'Vivienda multifamiliar de 4 niveles ubicada en Annemasse, Francia con una superficie de 1021.00m2. Apartamentos desde 80.00m2 hasta 160.00m2',
    province: '',
    department: '',
    district: '',
    year: '',
    budget: '',
  },
]

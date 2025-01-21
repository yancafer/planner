// Dados estáticos extraídos do FormPPA

export const eixoOptions = [
    "Gestão Institucional e Governança",
    "Desenvolvimento Social e Segurança Pública",
    "Infraestrutura",
  ];
  
  export const programaOptions: { [key: string]: string[] } = {
    "Gestão Institucional e Governança": [
      "Valorização, capacitação e cuidado dos servidores públicos",
    ],
    "Desenvolvimento Social e Segurança Pública": [
      "Segurança pública e Proteção à Vida",
      "Integração da Comunidade e Segurança Pública",
    ],
    Infraestrutura: [
      "Programa, reforma, ampliação dos prédios públicos estaduais",
    ],
  };
  
  export const objetivoOptions: { [key: string]: string[] } = {
    "Valorização, capacitação e cuidado dos servidores públicos": [
      "Valorização e Capacitação dos Servidores de Segurança Pública - SEJUSP",
    ],
    "Segurança pública e Proteção à Vida": [
      "Fortalecimento das Ações de Integração entre as Forças do SISP - SEJUSP",
      "Melhoria, Modernização e Inovação dos Serviços Integrados da Segurança Pública - SEJUSP",
    ],
    "Integração da Comunidade e Segurança Pública": [
      "Fomento de Ações de Prevenção à Criminalidade para Jovens em Situação de Vulnerabilidade Social - Acre pela Vida",
      "Redução da Reincidência Criminal",
      "Policiamento Comunitário Integrado em Áreas e Parques Urbanos",
    ],
    "Programa, reforma, ampliação dos prédios públicos estaduais": [
      "Construção, Reforma e Ampliação dos Prédios da SEJUSP",
    ],
  };
  
  export const regionalizacaoOptions = [
    "Alto Acre",
    "Baixo Acre",
    "Juruá",
    "Purus",
    "Tarauacá - Envira",
  ];
  
  export const indicadorOptions: { [key: string]: string[] } = {
    "Valorização, capacitação e cuidado dos servidores públicos": [
      "Percentual de profissionais valorizados e qualificados",
    ],
    "Segurança pública e Proteção à Vida": [
      "Número de mortes violentas intencionais",
      "Número de ações implementadas",
    ],
    "Integração da Comunidade e Segurança Pública": [
      "Número de jovens atendidos",
      "Percentual de redução na reincidência",
      "Posicionamento da Segurança Pública do Acre no ranking de competitividade do CLP",
    ],
    "Programa, reforma, ampliação dos prédios públicos estaduais": [
      "Número de prédios da SEJUSP construídos, reformados ou ampliados",
    ],
  };
  
  export const metaOptions: { [key: string]: string[] } = {
    "Percentual de profissionais valorizados e qualificados": [
      "50%",
      "60%",
      "70%",
      "80%",
    ],
    "Número de mortes violentas intencionais": ["186", "180", "175", "170"],
    "Número de ações implementadas": ["12", "18", "23", "28"],
    "Número de jovens atendidos": ["1800", "2600", "3700", "4500"],
    "Percentual de redução na reincidência": ["55%", "50%", "45%", "40%"],
    "Posicionamento da Segurança Pública do Acre no ranking de competitividade do CLP": [
      "7º",
      "6º",
      "6º",
      "6º",
    ],
    "Número de prédios da SEJUSP construídos, reformados ou ampliados": [
      "20",
      "17",
      "17",
      "24",
    ],
  };
  
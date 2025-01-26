//PPA

export const eixoOptions: string[] = [
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
  "Infraestrutura": [
      "Programa, reforma, ampliação dos prédios públicos estaduais",
  ],
}

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

export const regionalizacaoOptions: string[] = [
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
  ],
  "Número de prédios da SEJUSP construídos, reformados ou ampliados": [
    "20",
    "17",
    "17",
    "24",
  ],
};


//PCA
export const unidadeGestoraOptions = ["001", "637"];

export const codigoProjetoOptions = {
  "001": [
    "MANUTENÇÃO DAS ATIVIDADES ADMINISTRATIVAS E OPERACIONAIS - 21580000",
    "MELHORIA, MODERNIZAÇÃO E INOVAÇÃO DOS SERVIÇOS INTEGRADOS DE SEGURANÇA PÚBLICA - 11120000",
    "FORTALECIMENTO DAS AÇÕES DE INTEGRAÇÃO ENTRE AS FORÇAS DO SISP - 11110000",
    "CONSTRUÇÃO, REFORMA E AMPLIAÇÃO DE INFRAESTRUTURA PREDIAL - 11160000",
    "VALORIZAÇÃO E CAPACITAÇÃO DOS SERVIDORES DE SEGURANÇA PÚBLICA - 21570000",
    "FOMENTO DAS AÇÕES DE PREVENÇÃO À CRIMINALIDADE PARA JOVENS EM SITUAÇÃO DE VULNERABILIDADE SOCIAL – ACRE PELA VIDA - 11130000",
  ],
  "637": [
    "MANUTENÇÃO DAS ATIVIDADES ADMINISTRATIVAS E OPERACIONAIS - 21800000",
    "MELHORIA, MODERNIZAÇÃO E INOVAÇÃO DOS SERVIÇOS INTEGRADOS DE SEGURANÇA PÚBLICA - 11120000",
    "FORTALECIMENTO DAS AÇÕES DE INTEGRAÇÃO ENTRE AS FORÇAS DO SISP - 11110000",
    "VALORIZAÇÃO E CAPACITAÇÃO DOS SERVIDORES DE SEGURANÇA PÚBLICA - 21570000",
    "FOMENTO DAS AÇÕES DE PREVENÇÃO À CRIMINALIDADE PARA JOVENS EM SITUAÇÃO DE VULNERABILIDADE SOCIAL – ACRE PELA VIDA - 11130000",
    "REDUÇÃO DA REINCIDÊNCIA CRIMINAL - 11140000",
    "POLICIAMENTO COMUNITÁRIO INTEGRADO EM ÁREAS E PARQUES URBANOS – 11150000",
  ],
};

export const fonteRecursosOptions = {
  "001": [
    "1.500.0100 - Recursos Próprios do Tesouro Estadual",
    "1.501.0600 - Desvinculação do Departamento Estadual de Trânsito - Detran/AC",
    "1.703.0202 - Fundo Amazônico",
    "1.700.0200 - Outras Transferências de Convênios ou Repasses da União",
    "1.706.0201 - Transferência Especial da União",
    "1.703.0200 - Contribuição Financeira Não Reembolsável / REM",
    "1.754.0500 - Operações de Crédito",
  ],
  "637": [
    "1.713.0700 - Transferência Fundo a Fundo de Recursos do Fundo de Segurança Pública - FSP",
    "1.753.0700 - Recursos Provenientes de Taxas e Contribuições e Preços Públicos - FUNDESEG",
    "1.501.0700 - Recursos Próprios da Administração Indireta - Recursos Não Vinculado / SAMU",
  ],
};

export const elementoDespesaOptions = [
  "33 90 14 00 00 - DIÁRIAS - PESSOAL CIVIL",
  "33 90 15 00 00 - DIÁRIAS - PESSOAL MILITAR",
  "33 90 16 00 00 - DIÁRIAS - PESSOAL MILITAR",
  "33 90 17 00 00 - DIÁRIAS - PESSOAL MILITAR",
  "33 90 30 00 00 - MATERIAL DE CONSUMO",
  "33 90 31 00 00 - MATERIAL DE CONSUMO",
  "33 90 33 00 00 - PASSAGENS E DESPESAS COM LOCOMOÇÃO",
  "33 90 36 00 00 - OUTROS SERVIÇOS DE TERCEIROS - PES",
  "33 90 37 00 00 - LOCAÇÃO DE MÃO-DE-OBRA",
  "33 90 39 00 00 - OUTROS SERVIÇOS DE TERCEIROS - PES-",
  "33 90 40 00 00 - SERVIÇOS DE TECNOLOGIA DA INFORMA-",
  "33 90 47 00 00 - OBRIGAÇÕES TRIBUTÁRIAS E CONTRIBU-",
  "33 90 48 00 00 - OUTROS AUXÍLIOS FINANCEIROS A PES-",
  "33 90 92 00 00 - DESPESAS DE EXERCÍCIOS ANTERIORES",
  "33 90 93 00 00 - INDENIZAÇÕES E RESTITUIÇÕES",
  "33 91 39 00 00 - OUTROS SERVIÇOS DE TERCEIROS - PES-",
  "33 91 93 00 00 - INDENIZAÇÕES E RESTITUIÇÕES",
  "44 90 30 00 00 - MATERIAL DE CONSUMO",
  "44 90 39 00 00 - MATERIAL DE CONSUMO",
  "44 90 40 00 00 - MATERIAL DE CONSUMO",
  "44 90 51 00 00 - OBRAS E INSTALAÇÕES",
  "44 90 52 00 00 - EQUIPAMENTOS E MATERIAL PERMANENTE",
  "44 90 92 00 00 - DESPESAS DE EXERCÍCIOS ANTERIORES",
  "44 90 93 00 00 - OUTRAS DESPESAS VARIAVEIS-PESSOAL",
  "44 91 93 00 00 - OUTRAS DESPESAS VARIAVEIS-PESSOAL",
];

export const tipoItemOptions = ["Caminhonete", "Notebook", "Televisor", "Microcomputador"]; //Falta pegar a lista com a Lya, itens de exemplo

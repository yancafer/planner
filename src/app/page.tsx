"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";

const FormPPA = () => {
  const [eixo, setEixo] = useState("");
  const [programa, setPrograma] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [regionalizacao, setRegionalizacao] = useState("");
  const [indicador, setIndicador] = useState("");
  const [meta, setMeta] = useState("");

  // Dados estáticos
  const eixoOptions = [
    "Gestão Institucional e Governança",
    "Desenvolvimento Social e Segurança Pública",
    "Infraestrutura",
  ];

  const programaOptions: { [key: string]: string[] } = {
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

  const objetivoOptions: { [key: string]: string[] } = {
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

  const regionalizacaoOptions = [
    "Alto Acre",
    "Baixo Acre",
    "Juruá",
    "Purus",
    "Tarauacá - Envira",
  ];

  const indicadorOptions: { [key: string]: string[] } = {
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

  const metaOptions: { [key: string]: string[] } = {
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

  // Funções para atualizar os valores
  const handleEixoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEixo(e.target.value);
    setPrograma("");
    setObjetivo("");
    setIndicador("");
    setMeta("");
  };

  const handleProgramaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrograma(e.target.value);
    setObjetivo("");
    setIndicador("");
    setMeta("");
  };

  const handleObjetivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setObjetivo(e.target.value);
    setIndicador("");
    setMeta("");
  };

  const handleIndicadorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndicador(e.target.value);
    setMeta("");
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Configurações globais
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);

    // Título principal
    doc.setTextColor(40, 40, 99); // Azul escuro
    doc.text("FICHA DE ADERÊNCIA", 105, 20, { align: "center" });

    // Subtítulo decorativo abaixo do título
    doc.setLineWidth(0.5);
    doc.setDrawColor(40, 40, 99);
    doc.line(10, 25, 200, 25);

    // Dados principais
    let y = 35; // Posição inicial do conteúdo
    const eixoTitle = "Eixo Estruturante";
    const eixoValue = eixo || "Não definido";

    // Exibir "Eixo Estruturante"
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`${eixoTitle}:`, 10, y);

    // Exibir valor do Eixo Estruturante
    const eixoText = doc.splitTextToSize(eixoValue, 190);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);
    doc.text(eixoText, 10, y + 8);
    y += eixoText.length * 8 + 8;

    // Adicionar linha decorativa acima do subtítulo
    doc.setDrawColor(40, 40, 99); // Azul escuro
    doc.setLineWidth(0.5);
    doc.line(10, y, 200, y);
    y += 10; // Pequeno espaçamento entre a linha e o texto

    // Adicionar o subtítulo "AÇÃO DO PROGRAMA"
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 99); // Azul escuro
    doc.text("AÇÃO DO PROGRAMA", 105, y, { align: "center" });
    y += 5; // Pequeno espaçamento entre o subtítulo e o texto

    // Adicionar linha decorativa acima do subtítulo
    doc.setDrawColor(40, 40, 99); // Azul escuro
    doc.setLineWidth(0.5);
    doc.line(10, y, 200, y);
    y += 10; // Pequeno espaçamento entre a linha e o texto

    // Renderizar os outros dados
    const data = [
      { label: "Programa", value: programa },
      { label: "Objetivo Específico", value: objetivo },
      { label: "Regionalização", value: regionalizacao },
      { label: "Indicador", value: indicador },
      { label: "Meta por Ano", value: meta },
    ];

    data.forEach((item) => {
      if (item.value) {
        // Estilo para rótulos e valores lado a lado
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`${item.label}:`, 10, y);

        // Estilo para valores
        const text = doc.splitTextToSize(item.value, 150); // Ajustando largura
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(50, 50, 50);
        doc.text(text, 55, y); // Valor começando na posição 100 (lado direito)

        y += Math.max(text.length * 8 + 8, 12); // Ajuste da altura

      }
    });

    // Linha decorativa no rodapé
    doc.setDrawColor(200, 200, 200); // Cinza claro
    doc.line(10, 270, 200, 270);

    // Rodapé
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120); // Cinza
    doc.text(
      "Documento gerado automaticamente pelo sistema - DIRJUSP/SEJUSP",
      105,
      280,
      { align: "center" }
    );

    // Salvar PDF
    doc.save("PPA_2023_2027.pdf");
  };

  return (
    <div>
      <h1>PPA 2023 - 2027</h1>

      <label>Eixo Estruturante:</label>
      <select value={eixo} onChange={handleEixoChange}>
        <option value="">Selecione</option>
        {eixoOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {eixo && (
        <>
          <label>Programa:</label>
          <select value={programa} onChange={handleProgramaChange}>
            <option value="">Selecione</option>
            {programaOptions[eixo]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {programa && (
        <>
          <label>Objetivo Específico:</label>
          <select value={objetivo} onChange={handleObjetivoChange}>
            <option value="">Selecione</option>
            {objetivoOptions[programa]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {objetivo && (
        <>
          <label>Regionalização:</label>
          <select
            value={regionalizacao}
            onChange={(e) => setRegionalizacao(e.target.value)}
          >
            <option value="">Selecione</option>
            {regionalizacaoOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {regionalizacao && (
        <>
          <label>Indicador:</label>
          <select value={indicador} onChange={handleIndicadorChange}>
            <option value="">Selecione</option>
            {indicadorOptions[programa]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      {indicador && (
        <>
          <label>Meta por Ano:</label>
          <select value={meta} onChange={(e) => setMeta(e.target.value)}>
            <option value="">Selecione</option>
            {metaOptions[indicador]?.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      )}

      <button onClick={generatePDF}>Gerar PDF</button>
    </div>
  );
};

export default FormPPA;

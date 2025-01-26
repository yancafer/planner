"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";
import styles from "./Form.module.css";
import {
  eixoOptions,
  programaOptions,
  objetivoOptions,
  regionalizacaoOptions,
  indicadorOptions,
  metaOptions,
  unidadeGestoraOptions,
  codigoProjetoOptions,
  fonteRecursosOptions,
  elementoDespesaOptions,
  tipoItemOptions,
} from "./data";

const FormPPA = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: PPA
  const [eixo, setEixo] = useState("");
  const [programa, setPrograma] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [regionalizacao, setRegionalizacao] = useState("");
  const [indicador, setIndicador] = useState("");
  const [meta, setMeta] = useState("");
  const [notaTecnica, setNotaTecnica] = useState("");

  // Step 2: Unidade Orçamentária e PCA
  const [unidadeGestora, setUnidadeGestora] = useState<keyof typeof codigoProjetoOptions>("001");
  const [codigoProjeto, setCodigoProjeto] = useState("");
  const [fonteRecursos, setFonteRecursos] = useState("");
  const [elementoDespesa, setElementoDespesa] = useState("");
  const [valorAquisicao, setValorAquisicao] = useState("");
  const [tipoItem, setTipoItem] = useState("");

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Configurações globais
    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    doc.setTextColor(40, 40, 99);

    // Título principal
    doc.text("FICHA DE ADERÊNCIA LEGAL", 105, 20, { align: "center" });

    // Linha decorativa
    doc.setLineWidth(0.5);
    doc.setDrawColor(40, 40, 99);
    doc.line(10, 25, 200, 25);

    let y = 35; // Posição inicial do conteúdo

    // Título "AÇÃO DO PROGRAMA"
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 99);
    doc.text("AÇÃO DO PROGRAMA", 105, y, { align: "center" });
    y += 13;

    // Renderizar os dados do Step 1
    const step1Data = [
      { label: "Eixo Estruturante", value: eixo },
      { label: "Programa", value: programa },
      { label: "Objetivo Específico", value: objetivo },
      { label: "Regionalização", value: regionalizacao },
      { label: "Indicador", value: indicador },
      { label: "Meta por Ano", value: meta },
      { label: "Nota Técnica", value: notaTecnica },
    ];

    step1Data.forEach((item) => {
      if (item.value) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`${item.label}:`, 10, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(50, 50, 50);
        const text = doc.splitTextToSize(item.value, 160);
        doc.text(text, 50, y);
        y += text.length * 8 + 5;
      }
    });

    y += 10; // Espaço antes do próximo título

    // Título "UNIDADE ORÇAMENTÁRIA E PCA"
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 99);
    doc.text("UNIDADE ORÇAMENTÁRIA E PCA", 105, y, { align: "center" });
    y += 13;

    // Renderizar os dados do Step 2
    const step2Data = [
      { label: "Unidade Gestora", value: unidadeGestora },
      { label: "Código Projeto/Atividade", value: codigoProjeto },
      { label: "Fonte de Recursos", value: fonteRecursos },
      { label: "Elemento de Despesa", value: elementoDespesa },
      { label: "Valor de Aquisição", value: valorAquisicao },
      { label: "Tipo de Item", value: tipoItem },
    ];

    step2Data.forEach((item) => {
      if (item.value) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`${item.label}:`, 10, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(50, 50, 50);
        const text = doc.splitTextToSize(item.value, 160);
        doc.text(text, 50, y);
        y += text.length * 8 + 5;
      }
    });

    // Linha decorativa no rodapé
    doc.setDrawColor(200, 200, 200);
    doc.line(10, 270, 200, 270);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text(
      "Documento gerado automaticamente pelo sistema - PLANNER/DIRJUSP/SEJUSP",
      105,
      280,
      { align: "center" }
    );

    doc.save("PPA_2023_2027.pdf");
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <h2 className={styles.subtitle}>FICHA DE ADERÊNCIA LEGAL</h2>
          <label className={styles.label}>Eixo Estruturante:</label>
          <select
            className={styles.select}
            value={eixo}
            onChange={(e) => setEixo(e.target.value)}
          >
            <option value="">Selecione</option>
            {eixoOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Programa:</label>
          <select
            className={styles.select}
            value={programa}
            onChange={(e) => setPrograma(e.target.value)}
          >
            <option value="">Selecione</option>
            {programaOptions[eixo]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Objetivo Específico:</label>
          <select
            className={styles.select}
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          >
            <option value="">Selecione</option>
            {objetivoOptions[programa]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Regionalização:</label>
          <select
            className={styles.select}
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

          <label className={styles.label}>Indicador:</label>
          <select
            className={styles.select}
            value={indicador}
            onChange={(e) => setIndicador(e.target.value)}
          >
            <option value="">Selecione</option>
            {indicadorOptions[programa]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Meta por Ano:</label>
          <select
            className={styles.select}
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
          >
            <option value="">Selecione</option>
            {metaOptions[indicador]?.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Nota Técnica:</label>
          <textarea
            className={styles.textarea}
            value={notaTecnica}
            onChange={(e) => setNotaTecnica(e.target.value)}
            placeholder="Digite a nota técnica aqui..."
          />
        </>
      );
    } else if (currentStep === 2) {
      return (
        <>
          <h2 className={styles.subtitle}>UNIDADE ORÇAMENTÁRIA E PCA</h2>
          <label className={styles.label}>Unidade Gestora:</label>
          <select
            className={styles.select}
            value={unidadeGestora}
            onChange={(e) => setUnidadeGestora(e.target.value as keyof typeof codigoProjetoOptions)}
          >
            <option value="">Selecione</option>
            {unidadeGestoraOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Código Projeto/Atividade:</label>
          <select
            className={styles.select}
            value={codigoProjeto}
            onChange={(e) => setCodigoProjeto(e.target.value)}
          >
            <option value="">Selecione</option>
            {codigoProjetoOptions[unidadeGestora]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Fonte de Recursos:</label>
          <select
            className={styles.select}
            value={fonteRecursos}
            onChange={(e) => setFonteRecursos(e.target.value)}
          >
            <option value="">Selecione</option>
            {fonteRecursosOptions[unidadeGestora]?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Elemento de Despesa:</label>
          <select
            className={styles.select}
            value={elementoDespesa}
            onChange={(e) => setElementoDespesa(e.target.value)}
          >
            <option value="">Selecione</option>
            {elementoDespesaOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <label className={styles.label}>Valor de Aquisição:</label>
          <input
            type="number"
            className={styles.input}
            value={valorAquisicao}
            onChange={(e) => setValorAquisicao(e.target.value)}
          />

          <label className={styles.label}>Tipo de Item:</label>
          <select
            className={styles.select}
            value={tipoItem}
            onChange={(e) => setTipoItem(e.target.value)}
          >
            <option value="">Selecione</option>
            {tipoItemOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      {renderStepContent()}
      <div className={styles.buttonGroup}>
        {currentStep > 1 && (
          <button className={styles.button} onClick={handlePrev}>
            Voltar
          </button>
        )}
        {currentStep < 2 && (
          <button className={styles.button} onClick={handleNext}>
            Continuar
          </button>
        )}
        {currentStep === 2 && (
          <button className={styles.button} onClick={generatePDF}>
            Gerar PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default FormPPA;

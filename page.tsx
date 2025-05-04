
"use client";

import React, { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import type { MarkmapOptions } from 'markmap-view';

// Markdown content for the mind map (remains the same)
const markdown = `
# Mapa Mental: Direito de Imagem

## 1. Conceito Central
   - **Direito de Imagem**
     - Desdobramento dos Direitos da Personalidade
     - Controle sobre a representação visual da pessoa
     - Relevância na Era Digital (Redes Sociais, IA)

## 2. Natureza Jurídica
   - **Direito da Personalidade**
     - Inato
     - Inalienável
     - Imprescritível
     - Extrapatrimonial (essência)

## 3. Dimensões do Direito de Imagem
   - **Aspecto Patrimonial**
     - Uso econômico/comercial da imagem
     - Exige autorização expressa
     - Violação gera dever de indenizar (lucros cessantes, danos emergentes)
     - Ex: Uso em publicidade sem contrato
   - **Aspecto Extrapatrimonial**
     - Proteção da honra, privacidade, intimidade, dignidade
     - Violação gera dano moral
     - Ex: Exposição vexatória, "revenge porn"

## 4. Fundamentação Legal
   - **Constituição Federal (1988)**
     - Art. 5º, V: Indenização por dano material ou moral
     - Art. 5º, X: Inviolabilidade da intimidade, vida privada, honra e imagem
   - **Código Civil (2002)**
     - Arts. 11-21: Direitos da Personalidade (proteção geral)
     - Art. 20: Proibição do uso não autorizado (regra geral)
       - Exceções: Interesse público, administração da justiça, manutenção da ordem pública, fins jornalísticos (com limites)
     - Art. 186: Ato ilícito (base da responsabilidade subjetiva)
     - Art. 927: Dever de reparar o dano
       - Parágrafo único: Responsabilidade objetiva (atividades de risco)
   - **Leis Específicas**
     - LGPD (Lei 13.709/2018): Imagem como dado pessoal, necessidade de consentimento (Art. 7º, II), direitos do titular (Art. 18)
     - Marco Civil da Internet (Lei 12.965/2014): Responsabilidade de provedores (Arts. 19, 21)
     - Lei de Direitos Autorais (Lei 9.610/1998): Proteção de imagens em obras (fotografias, audiovisuais)
     - ECA (Lei 8.069/1990): Proteção da imagem de crianças e adolescentes (Art. 17)
     - Lei 14.132/2021: Criminalização da divulgação não consentida de imagens íntimas ("stalking" e "revenge porn")

## 5. Responsabilidade Civil por Violação
   - **Pressupostos Gerais**
     - Conduta (ação/omissão)
     - Dano (patrimonial e/ou extrapatrimonial)
     - Nexo Causal
     - Culpa (Regra - Responsabilidade Subjetiva)
     - Risco da Atividade (Exceção - Responsabilidade Objetiva - Ex: Plataformas Digitais)
   - **Tipos de Dano**
     - Dano Material: Prejuízos econômicos
     - Dano Moral (Extrapatrimonial): Lesão à honra, imagem, privacidade (dano *in re ipsa* em muitos casos)

## 6. Desafios Contemporâneos
   - **Tecnologias**
     - Deepfakes / Inteligência Artificial: Manipulação de imagens, criação de conteúdo falso
     - Reconhecimento Facial: Questões de privacidade e consentimento
   - **Ambiente Digital**
     - Redes Sociais: Disseminação rápida, "cancelamento", cyberbullying
     - Influenciadores Digitais: Contratos de cessão de imagem, limites de uso
     - Plataformas Digitais: Responsabilidade por conteúdo de terceiros
   - **Outros**
     - Imagem Póstuma: Proteção da memória por familiares
     - Revenge Porn / Sextorsão: Violação grave da intimidade

## 7. Exceções ao Consentimento (Limites)
   - **Interesse Público / Notório**
     - Pessoas públicas em eventos públicos
     - Fatos de interesse jornalístico (sem sensacionalismo ou ofensa)
   - **Fins Científicos, Didáticos ou Culturais** (desde que não ofensivo)
   - **Liberdade de Expressão e Artística** (ponderação com a dignidade e imagem)
   - **Segurança Pública / Justiça**

## 8. Jurisprudência Relevante (Temas)
   - Responsabilidade de Provedores e Plataformas Digitais
   - Dano Moral por Uso Indevido em Redes Sociais
   - Limites da Liberdade de Imprensa vs. Direito de Imagem
   - Uso de Imagem em Biografias Não Autorizadas (Decisão STF ADI 4815)
   - Proteção contra Deepfakes e Manipulações por IA

## 9. Conclusão
   - Direito fundamental essencial à dignidade humana.
   - Necessidade de ponderação com outros direitos (liberdade de expressão, informação).
   - Constante adaptação legal e jurisprudencial face às novas tecnologias.
   - Responsabilidade civil como principal ferramenta de reparação.
`;

const transformer = new Transformer();

// Define Markmap options
const options: MarkmapOptions = {
  autoFit: true,       // Adjust map to fit the container initially
  duration: 500,       // Animation duration
  embedGlobalCSS: true,
  fitRatio: 0.95,
  maxWidth: 0,
  nodeMinHeight: 16,
  paddingX: 8,
  spacingHorizontal: 80,
  spacingVertical: 5,
  initialExpandLevel: 2, // Expand to level 2 initially
  zoom: true,          // Enable zoom
  pan: true,           // Enable pan
  toolbar: true,       // Enable the toolbar
};

export default function MapaMentalPage() {
  const ref = useRef<SVGSVGElement>(null);
  const mm = useRef<Markmap | null>(null); // Ref to store the Markmap instance

  useEffect(() => {
    if (ref.current && !mm.current) { // Ensure it runs only once
      const { root } = transformer.transform(markdown);
      mm.current = Markmap.create(ref.current, options, root);
    }
    // Cleanup function to destroy the markmap instance when component unmounts
    return () => {
      mm.current?.destroy();
      mm.current = null;
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center text-primary">Mapa Mental Interativo: Direito de Imagem</h1>
      
      {/* Instructions and Legend */}
      <div className="p-4 bg-secondary text-secondary-foreground rounded-lg shadow text-sm">
        <h2 className="font-semibold mb-2">Como Interagir:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Expandir/Recolher:</strong> Clique nos nós (círculos) para mostrar ou ocultar os ramos filhos.</li>
          <li><strong>Mover (Pan):</strong> Clique e arraste o fundo do mapa para movê-lo.</li>
          <li><strong>Zoom:</strong> Use a roda do mouse ou os botões +/- na barra de ferramentas para aproximar ou afastar.</li>
          <li><strong>Ajustar à Tela:</strong> Use o botão de ajuste (geralmente um quadrado ou alvo) na barra de ferramentas para centralizar e ajustar o mapa à tela.</li>
          <li><strong>Barra de Ferramentas:</strong> Utilize os botões na barra de ferramentas (canto inferior direito) para zoom e ajuste.</li>
        </ul>
      </div>

      {/* Mind Map Container */}
      <div className="w-full h-[70vh] bg-card rounded-lg shadow-lg overflow-hidden border border-border">
        <svg ref={ref} className="w-full h-full" />
      </div>
    </div>
  );
}


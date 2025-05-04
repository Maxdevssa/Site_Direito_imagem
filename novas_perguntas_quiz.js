const newQuizQuestions = [
  {
    id: 11,
    question: "11. Baseado no vídeo do Senado, qual é uma preocupação chave sobre bens digitais (como perfis de redes sociais) após a morte do proprietário?",
    options: [
      "a) Exclusão pela plataforma",
      "b) Transferência para o governo",
      "c) Definição de regras de herança digital",
      "d) Conversão automática para domínio público"
    ],
    correctAnswer: "c) Definição de regras de herança digital",
    explanation: "O vídeo destaca a necessidade de o Código Civil atualizado abordar a herança digital, incluindo perfis valiosos de redes sociais."
  },
  {
    id: 12,
    question: "12. A modernização do Código Civil, discutida no vídeo, visa criar um livro específico dedicado a qual área?",
    options: [
      "a) Direito Ambiental",
      "b) Direito do Consumidor",
      "c) Direito Digital",
      "d) Propriedade Intelectual"
    ],
    correctAnswer: "c) Direito Digital",
    explanation: "O vídeo menciona explicitamente que o Direito Digital será tratado em um livro à parte dentro do Código Civil modernizado."
  },
  {
    id: 13,
    question: "13. Qual tecnologia é mencionada no vídeo e no texto principal como um desafio significativo aos direitos de imagem devido à sua capacidade de criar manipulações realistas?",
    options: [
      "a) Blockchain",
      "b) Realidade Virtual",
      "c) Inteligência Artificial (especificamente deepfakes)",
      "d) Computação em Nuvem"
    ],
    correctAnswer: "c) Inteligência Artificial (especificamente deepfakes)",
    explanation: "Tanto o contexto do vídeo (IA no direito digital) quanto o texto principal mencionam especificamente deepfakes como um desafio emergente."
  },
  {
    id: 14,
    question: "14. O que é \"herança digital\", um tópico destacado para inclusão no Código Civil atualizado?",
    options: [
      "a) A pegada digital deixada por uma pessoa online.",
      "b) O processo de transferência de ativos digitais (contas, arquivos, criptomoedas) após a morte.",
      "c) O histórico de compras online de uma pessoa.",
      "d) Os direitos autorais de criações digitais."
    ],
    correctAnswer: "b) O processo de transferência de ativos digitais (contas, arquivos, criptomoedas) após a morte.",
    explanation: "A herança digital trata da sucessão de bens e direitos digitais após o falecimento de alguém."
  },
  {
    id: 15,
    question: "15. Além dos direitos de imagem, qual outro tema digital é explicitamente mencionado no slide de título do vídeo como parte da atualização do Código Civil?",
    options: [
      "a) Regulamentações de e-commerce",
      "b) Padrões de cibersegurança",
      "c) Inteligência Artificial",
      "d) Neutralidade da rede"
    ],
    correctAnswer: "c) Inteligência Artificial",
    explanation: "O slide de título mostrado no vídeo lista \"Inteligência artificial\" como um novo capítulo no código atualizado."
  },
  {
    id: 16,
    question: "16. A que o conceito de \"ambiente digital seguro\", mencionado no vídeo, provavelmente se refere no contexto da atualização do Código Civil?",
    options: [
      "a) Requisitos de software antivírus",
      "b) Medidas para proteger usuários de danos e violações online",
      "c) Padrões de criptografia para websites",
      "d) Segurança física de data centers"
    ],
    correctAnswer: "b) Medidas para proteger usuários de danos e violações online",
    explanation: "Um ambiente digital seguro implica arcabouços legais para garantir segurança, privacidade e proteção contra atos ilícitos online."
  },
  {
    id: 17,
    question: "17. A responsabilidade de provedores de aplicações de internet (como redes sociais) por conteúdo ofensivo gerado por terceiros é primariamente regulada por qual lei no Brasil?",
    options: [
      "a) LGPD (Lei Geral de Proteção de Dados)",
      "b) Marco Civil da Internet",
      "c) Código de Defesa do Consumidor",
      "d) Lei de Direitos Autorais"
    ],
    correctAnswer: "b) Marco Civil da Internet",
    explanation: "O Marco Civil (Lei 12.965/14), especificamente Arts. 19 e 21, aborda a responsabilidade de provedores por conteúdo de terceiros."
  },
  {
    id: 18,
    question: "18. Qual a consequência legal se uma empresa usa a imagem de alguém para fins comerciais sem obter consentimento explícito?",
    options: [
      "a) Uma advertência do Procon",
      "b) Uma potencial obrigação de pagar indenização (material e/ou moral)",
      "c) Remoção obrigatória apenas do anúncio",
      "d) Apenas uma multa criminal"
    ],
    correctAnswer: "b) Uma potencial obrigação de pagar indenização (material e/ou moral)",
    explanation: "O uso comercial não autorizado viola direitos de imagem (Art. 20, CC) e pode levar à responsabilidade civil por danos."
  },
  {
    id: 19,
    question: "19. A imagem de uma pessoa falecida pode ser legalmente protegida no Brasil?",
    options: [
      "a) Não, os direitos de imagem cessam com a morte.",
      "b) Sim, por seus parentes próximos (cônjuge, ascendentes, descendentes, colaterais até 4º grau).",
      "c) Sim, mas apenas se a pessoa registrou seus direitos de imagem em vida.",
      "d) Apenas se a imagem foi usada comercialmente antes da morte."
    ],
    correctAnswer: "b) Sim, por seus parentes próximos (cônjuge, ascendentes, descendentes, colaterais até 4º grau).",
    explanation: "O Art. 20, parágrafo único, do Código Civil concede legitimidade a parentes próximos para proteger a imagem e memória do falecido."
  },
  {
    id: 20,
    question: "20. Qual a diferença entre os aspectos patrimonial e extrapatrimonial dos direitos de imagem?",
    options: [
      "a) Patrimonial relaciona-se à privacidade, extrapatrimonial ao uso comercial.",
      "b) Patrimonial relaciona-se à exploração econômica, extrapatrimonial à honra e privacidade.",
      "c) Patrimonial aplica-se apenas a celebridades, extrapatrimonial a todos.",
      "d) Patrimonial é protegido por direitos autorais, extrapatrimonial pelo Código Civil."
    ],
    correctAnswer: "b) Patrimonial relaciona-se à exploração econômica, extrapatrimonial à honra e privacidade.",
    explanation: "O aspecto patrimonial concerne ao valor comercial de uma imagem, enquanto o extrapatrimonial protege atributos pessoais como honra e privacidade."
  },
  {
    id: 21,
    question: "21. De acordo com o ECA, a imagem de crianças e adolescentes recebe que tipo de proteção?",
    options: [
      "a) A mesma proteção que adultos.",
      "b) Proteção apenas com consentimento dos pais.",
      "c) Proteção especial, proibindo exposição que comprometa integridade ou dignidade.",
      "d) Proteção apenas em contextos educacionais."
    ],
    correctAnswer: "c) Proteção especial, proibindo exposição que comprometa integridade ou dignidade.",
    explanation: "O Art. 17 do ECA provê proteção reforçada para a imagem de menores."
  },
  {
    id: 22,
    question: "22. O que significa \"dano moral in re ipsa\" no contexto de violação de direitos de imagem?",
    options: [
      "a) O dano moral precisa ser provado com evidências extensas.",
      "b) O dano moral é presumido do próprio fato da violação.",
      "c) Apenas danos materiais são aplicáveis, não morais.",
      "d) O dano ocorreu devido à ação de um terceiro."
    ],
    correctAnswer: "b) O dano moral é presumido do próprio fato da violação.",
    explanation: "Em certas violações de direitos de imagem (como uso comercial não autorizado ou exposição altamente ofensiva), o dano moral é frequentemente presumido (in re ipsa), não exigindo prova específica de sofrimento."
  },
  {
    id: 23,
    question: "23. Se um artigo de notícia usa a foto de uma pessoa sem consentimento, sob qual circunstância isso poderia ser legalmente permissível no Brasil?",
    options: [
      "a) Se a pessoa é figura pública e a foto se relaciona a assunto de interesse público, sem ser ofensiva.",
      "b) Se a foto foi tirada em local público, independentemente do contexto.",
      "c) Se o jornal tem grande circulação.",
      "d) Se a pessoa não proibiu explicitamente o uso de sua imagem."
    ],
    correctAnswer: "a) Se a pessoa é figura pública e a foto se relaciona a assunto de interesse público, sem ser ofensiva.",
    explanation: "Isso se enquadra nas exceções relacionadas à liberdade de informação e interesse público, ponderadas com a proteção da honra e privacidade (Art. 20, CC)."
  },
  {
    id: 24,
    question: "24. Que direito a LGPD concede aos indivíduos em relação à sua imagem usada por uma empresa?",
    options: [
      "a) O direito de exigir pagamento por qualquer uso.",
      "b) O direito de acessar, corrigir ou excluir seus dados de imagem (sujeito a exceções).",
      "c) O direito de vetar qualquer uso, mesmo para fins jornalísticos.",
      "d) O direito de se tornar acionista da empresa."
    ],
    correctAnswer: "b) O direito de acessar, corrigir ou excluir seus dados de imagem (sujeito a exceções).",
    explanation: "Como dados pessoais, imagens caem no escopo da LGPD, concedendo aos titulares direitos como acesso, retificação e eliminação (Art. 18)."
  },
  {
    id: 25,
    question: "25. O que é \"revenge porn\" e como é tratado legalmente no Brasil?",
    options: [
      "a) Compartilhar imagens íntimas com consentimento; geralmente permitido.",
      "b) Compartilhar imagens íntimas sem consentimento, frequentemente após o fim de um relacionamento; é crime (Lei 14.132/21) e gera responsabilidade civil.",
      "c) Criar imagens íntimas falsas; regulado apenas pela lei de direitos autorais.",
      "d) Postar comentários ofensivos online; tratado como difamação."
    ],
    correctAnswer: "b) Compartilhar imagens íntimas sem consentimento, frequentemente após o fim de um relacionamento; é crime (Lei 14.132/21) e gera responsabilidade civil.",
    explanation: "Revenge porn é uma violação grave, abordada tanto criminalmente quanto civilmente."
  },
  {
    id: 26,
    question: "26. Um empregador pode usar a imagem de um funcionário em materiais de marketing sem consentimento específico?",
    options: [
      "a) Sim, se o funcionário trabalha no departamento de marketing.",
      "b) Sim, se a foto foi tirada durante o horário de trabalho.",
      "c) Geralmente não, consentimento específico para esse fim é necessário, separado do contrato de trabalho.",
      "d) Apenas se o funcionário receber pagamento extra por isso."
    ],
    correctAnswer: "c) Geralmente não, consentimento específico para esse fim é necessário, separado do contrato de trabalho.",
    explanation: "A relação de emprego não concede automaticamente ao empregador direitos de usar a imagem do empregado para fins comerciais/marketing; consentimento específico é necessário."
  },
  {
    id: 27,
    question: "27. Qual o papel do \"nexo causal\" no estabelecimento da responsabilidade civil por violação de direitos de imagem?",
    options: [
      "a) Prova a intenção do violador.",
      "b) Conecta a ação (ou omissão) do violador ao dano sofrido pela vítima.",
      "c) Determina o valor da indenização.",
      "d) É relevante apenas em casos de responsabilidade objetiva."
    ],
    correctAnswer: "b) Conecta a ação (ou omissão) do violador ao dano sofrido pela vítima.",
    explanation: "O nexo causal é um elemento fundamental da responsabilidade civil, demonstrando que o dano resultou da conduta do réu."
  },
  {
    id: 28,
    question: "28. Se a foto de alguém é usada em um meme que viraliza, essa pessoa poderia potencialmente alegar violação de direitos de imagem?",
    options: [
      "a) Não, memes são sempre considerados paródia e protegidos pela liberdade de expressão.",
      "b) Sim, especialmente se o meme for ofensivo, usado comercialmente ou distorcer negativamente a imagem da pessoa sem consentimento.",
      "c) Apenas se a foto original tiver direitos autorais.",
      "d) Apenas se a pessoa for menor de idade."
    ],
    correctAnswer: "b) Sim, especialmente se o meme for ofensivo, usado comercialmente ou distorcer negativamente a imagem da pessoa sem consentimento.",
    explanation: "Embora a paródia tenha alguma proteção, usar a imagem de alguém em um meme sem consentimento ainda pode violar direitos de imagem, dependendo do contexto, natureza do meme e danos potenciais."
  },
  {
    id: 29,
    question: "29. A modernização do Código Civil, mencionada no vídeo, envolve uma comissão de juristas. Qual o papel típico de tal comissão?",
    options: [
      "a) Julgar casos específicos relacionados ao Código.",
      "b) Propor emendas e atualizações à legislação com base em mudanças sociais e conhecimento especializado.",
      "c) Fiscalizar o cumprimento dos artigos existentes do Código.",
      "d) Traduzir o Código para outros idiomas."
    ],
    correctAnswer: "b) Propor emendas e atualizações à legislação com base em mudanças sociais e conhecimento especializado.",
    explanation: "Comissões de juristas são frequentemente formadas para estudar e propor reformas a leis significativas como o Código Civil."
  },
  {
    id: 30,
    question: "30. Qual direito fundamental, protegido pela Constituição (Art. 5º, X), está intimamente relacionado ao aspecto extrapatrimonial dos direitos de imagem?",
    options: [
      "a) Direito de propriedade",
      "b) Direito ao trabalho",
      "c) Direito à privacidade e à honra",
      "d) Direito de reunião"
    ],
    correctAnswer: "c) Direito à privacidade e à honra",
    explanation: "O Art. 5º, X protege a intimidade, a vida privada, a honra e a imagem, que são centrais para a dimensão extrapatrimonial dos direitos de imagem."
  }
];

// Salvar este conteúdo em um arquivo temporário para uso posterior


export interface LibrarySection {
  title: string;
  items: string[];
}

export interface LibraryFAQ {
  question: string;
  answer: string;
}

export interface LibrarySubstitutionGroup {
  original: string;
  substitutes: string[];
}

export interface LibraryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  iconEmoji: string;
  iconName: string;
  badgeText?: string;
  type:
    | 'guide'
    | 'substitutions'
    | 'habits'
    | 'faq'
    | 'navigation'
    | 'recipes_list'
    | 'extra_recipes';
  navTarget?: 'recipes' | 'shopping_list';
  unlockDay?: number;
  sections?: LibrarySection[];
  substitutions?: LibrarySubstitutionGroup[];
  habits?: { title: string; desc: string }[];
  faqs?: LibraryFAQ[];
}

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'ebook-30-receitas',
    title: 'E-book: 30 Receitas Exclusivas',
    description:
      'Acervo premium com 30 receitas inéditas, práticas e leves que não aparecem no plano principal de 14 dias.',
    category: 'Receituário Premium',
    iconEmoji: '📕',
    iconName: 'menu_book',
    badgeText: '30 Receitas Exclusivas',
    type: 'recipes_list',
    unlockDay: 1,
  },

  {
    id: 'guia-alimentar',
    title: 'Guia Alimentar Completo',
    description: 'Plano alimentar completo do desafio.',
    category: 'Guia Principal',
    iconEmoji: '📖',
    iconName: 'auto_stories',
    badgeText: 'Essencial',
    type: 'guide',
    unlockDay: 1,
    sections: [
      {
        title: 'Princípios do Plano Corpo Leve',
        items: [
          'Priorize alimentos in natura e minimamente processados.',
          'Consuma proteínas magras em todas as refeições principais para manter a saciedade.',
          'Beba no mínimo 35ml de água por kg de peso corporal diariamente.',
          'Evite açúcares refinados e bebidas adoçadas durante o período do desafio.',
        ],
      },
      {
        title: 'Horários e Ritmo das Refeições',
        items: [
          'Café da manhã: até 1h30 após acordar para ativar o metabolismo.',
          'Almoço: maior aporte energético e de fibras.',
          'Lanche da tarde: opcional, foque em saciedade leve (castanhas, frutas ou chás).',
          'Jantar: refeição leve pelo menos 2h a 3h antes de dormir.',
        ],
      },
      {
        title: 'Dicas de Mastigação e Presença',
        items: [
          'Mastigue cada garfada devagar, saboreando a refeição.',
          'Coma sem telas (celular ou TV) para perceber os sinais naturais de saciedade.',
          'Evite beber grandes volumes de líquidos durante as refeições principais.',
        ],
      },
    ],
  },

  {
    id: 'receitas-extras',
    title: 'Receitas Extras',
    description: 'Receitas adicionais para variar seu cardápio.',
    category: 'Culinária & Sabor',
    iconEmoji: '🥗',
    iconName: 'restaurant_menu',
    badgeText: 'Mais Variedade',
    type: 'extra_recipes',
    unlockDay: 1,
    sections: [
      {
        title: 'Variedade Nutritiva',
        items: [
          'Acesse nosso catálogo completo com filtros por refeição.',
          'Substitua refeições do plano diário mantendo a mesma categoria (ex: café da manhã por outro café da manhã).',
          'Todas as receitas possuem calculadas as informações nutricionais e opções de substituição.',
        ],
      },
    ],
  },

  {
    id: 'lista-inteligente',
    title: 'Lista Inteligente de Compras',
    description: 'Versão completa da lista organizada por categorias.',
    category: 'Organização',
    iconEmoji: '🛒',
    iconName: 'shopping_bag',
    badgeText: 'Praticidade',
    type: 'navigation',
    navTarget: 'shopping_list',
    unlockDay: 1,
    sections: [
      {
        title: 'Como Organizar suas Compras',
        items: [
          'Faça suas compras semanalmente para garantir ingredientes sempre frescos.',
          'A lista já vem categorizada por Proteínas, Vegetais, Frutas, Grãos e Temperos.',
          'Marque os itens diretamente na tela enquanto estiver no supermercado.',
        ],
      },
    ],
  },

  {
    id: 'guia-substituicoes',
    title: 'Guia de Substituições',
    description:
      'Aprenda como substituir alimentos mantendo o equilíbrio do plano.',
    category: 'Flexibilidade',
    iconEmoji: '🔄',
    iconName: 'published_with_changes',
    badgeText: 'Tabela Prática',
    type: 'substitutions',
    unlockDay: 7,
    substitutions: [
      {
        original: 'Frango grelhado (100g)',
        substitutes: [
          'Peixe grelhado (120g)',
          'Carne magra (100g)',
          'Tofu grelhado (130g)',
          '2 ovos cozidos',
        ],
      },
      {
        original: 'Batata-doce (100g)',
        substitutes: [
          'Mandioca (90g)',
          'Inhame (100g)',
          'Arroz integral (80g)',
          'Abóbora cabotiá (150g)',
        ],
      },
      {
        original: 'Azeite de oliva (1 col. sopa)',
        substitutes: [
          'Abacate (30g)',
          'Sementes de girassol (1 col. sopa)',
          'Castanhas do Pará (2 unidades)',
        ],
      },
      {
        original: 'Leite vegetal de amêndoas (200ml)',
        substitutes: [
          'Leite de coco diluído (200ml)',
          'Leite de aveia (200ml)',
          'Iogurte natural desnatado (150g)',
        ],
      },
    ],
  },

  {
    id: 'dicas-resultados',
    title: 'Dicas para Manter os Resultados',
    description:
      'Pequenos hábitos para continuar evoluindo após os 14 dias.',
    category: 'Hábitos Sustentáveis',
    iconEmoji: '💡',
    iconName: 'lightbulb',
    badgeText: 'Pós-Desafio',
    type: 'habits',
    unlockDay: 7,
    habits: [
      {
        title: '1. Regra dos 80/20',
        desc: 'Mantenha 80% da alimentação focada em comida de verdade e 20% para momentos sociais sem culpa.',
      },
      {
        title: '2. Mantenha o Ritual da Água',
        desc: 'Inicie todas as manhãs com um copo grande de água logo ao acordar.',
      },
      {
        title: '3. Planejamento Semanal',
        desc: 'Separe 30 minutos no domingo para planejar as refeições principais da semana.',
      },
      {
        title: '4. Sono Reparador',
        desc: 'Priorize 7 a 8 horas de sono de qualidade. O sono regula os hormônios de fome e saciedade.',
      },
      {
        title: '5. Movimento Consciente',
        desc: 'Associe a alimentação leve a pelo menos 20 a 30 minutos de atividade física diária.',
      },
    ],
  },

  {
    id: 'perguntas-frequentes',
    title: 'Perguntas Frequentes',
    description: 'Respostas para as dúvidas mais comuns sobre o desafio.',
    category: 'Tira-Dúvidas',
    iconEmoji: '❓',
    iconName: 'help_center',
    badgeText: 'Suporte',
    type: 'faq',
    unlockDay: 7,
    faqs: [
      {
        question:
          'Posso substituir alguma refeição por outra receita do aplicativo?',
        answer:
          'Sim! Desde que você escolha uma receita da mesma categoria (ex: trocar um café da manhã por outro café da manhã disponível no app).',
      },
      {
        question: 'O que fazer se sentir fome entre as refeições?',
        answer:
          'Beba um copo de água ou chá sem açúcar. Se a fome persistir, opte por um snack leve como bastões de pepino/cenoura ou uma porção pequena de castanhas.',
      },
      {
        question: 'Posso tomar café durante o desafio?',
        answer:
          'Sim, o café é permitido sem adição de açúcar refinado ou adoçantes artificiais em excesso.',
      },
      {
        question: 'Perdi um dia do desafio. Devo recomeçar do zero?',
        answer:
          'Não! Apenas retome de onde parou no dia seguinte. O importante é a consistência a longo prazo, não a perfeição.',
      },
      {
        question: 'Como manter o peso leve após concluir os 14 dias?',
        answer:
          'Você pode repetir o plano das semanas ou usar o guia de dicas e receitas para criar seus próprios cardápios mantendo os hábitos adquiridos.',
      },
    ],
  },
];
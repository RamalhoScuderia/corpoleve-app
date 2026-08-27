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

export interface LibraryHabit {
  title: string;
  desc: string;
}

export interface LibraryRecipe {
  id: string;
  title: string;
  time: string;
  image?: string;
  ingredients: string[];
  steps: string[];
  nutrition?: string;
}

export interface LibraryToolOption {
  id: string;
  label: string;
}

export interface LibraryToolGroup {
  id: string;
  title: string;
  subtitle?: string;
  minSelections?: number;
  maxSelections?: number;
  options: LibraryToolOption[];
}

export interface LibraryChecklist {
  title: string;
  items: string[];
}

export interface LibraryPlannerField {
  id: string;
  label: string;
  placeholder?: string;
}

export interface LibraryPlannerBlock {
  title: string;
  description?: string;
  fields: LibraryPlannerField[];
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
    | 'extra_recipes'
    | 'plate_builder'
    | 'desserts'
    | 'bloating_guide'
    | 'weekend_guide'
    | 'continuation'
    | 'planner';

  navTarget?: 'recipes' | 'shopping_list';

  unlockDay?: number;

  sections?: LibrarySection[];
  substitutions?: LibrarySubstitutionGroup[];
  habits?: LibraryHabit[];
  faqs?: LibraryFAQ[];

  recipes?: LibraryRecipe[];
  toolGroups?: LibraryToolGroup[];
  checklists?: LibraryChecklist[];
  plannerBlocks?: LibraryPlannerBlock[];

  intro?: string;
  closingMessage?: string;
}

export const LIBRARY_ITEMS: LibraryItem[] = [
  // =========================================================
  // DIA 1
  // =========================================================

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
          'Consuma proteínas em suas refeições principais para ajudar na saciedade.',
          'Use sua meta personalizada de hidratação do aplicativo como referência durante o desafio.',
          'Reduza a frequência de bebidas açucaradas e alimentos ultraprocessados.',
        ],
      },
      {
        title: 'Horários e Ritmo das Refeições',
        items: [
          'Não existe necessidade de seguir horários rígidos: adapte as refeições à sua rotina e aos seus sinais de fome.',
          'No almoço e jantar, priorize refeições completas e variadas.',
          'Use o lanche quando ele fizer sentido para sua fome e rotina.',
          'À noite, prefira uma refeição que seja confortável para você e compatível com seu horário de sono.',
        ],
      },
      {
        title: 'Dicas de Mastigação e Presença',
        items: [
          'Coma com mais calma e preste atenção à refeição.',
          'Quando possível, reduza distrações como celular ou televisão enquanto come.',
          'Observe seus sinais de fome, satisfação e conforto após as refeições.',
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
          'Acesse o catálogo de receitas e use os filtros para encontrar opções para diferentes momentos do dia.',
          'Você pode variar o cardápio usando receitas da mesma categoria da refeição que deseja substituir.',
          'Use seus favoritos para guardar as preparações que mais combinam com sua rotina.',
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
          'Planeje suas compras de acordo com os próximos dias do desafio.',
          'A lista é organizada por categorias para facilitar sua ida ao mercado.',
          'Marque os itens diretamente no aplicativo conforme fizer suas compras.',
        ],
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
    unlockDay: 1,

    faqs: [
      {
        question:
          'Posso substituir alguma refeição por outra receita do aplicativo?',
        answer:
          'Sim. Quando possível, escolha uma opção da mesma categoria da refeição que deseja substituir e observe sua fome e satisfação.',
      },
      {
        question: 'O que fazer se sentir fome entre as refeições?',
        answer:
          'Não é necessário ignorar a fome. Você pode fazer um lanche simples, como fruta, iogurte natural, castanhas ou outra opção disponível no aplicativo.',
      },
      {
        question: 'Posso tomar café durante o desafio?',
        answer:
          'Sim. O café pode fazer parte da rotina. Observe apenas a quantidade de açúcar e outros acompanhamentos adicionados à bebida.',
      },
      {
        question: 'Perdi um dia do desafio. Devo recomeçar do zero?',
        answer:
          'Não. Retome de onde parou. O objetivo é construir consistência, não completar o desafio de maneira perfeita.',
      },
      {
        question: 'O que faço depois dos 14 dias?',
        answer:
          'Ao concluir o desafio, você desbloqueia conteúdos de continuidade para aplicar o que aprendeu com mais autonomia.',
      },
    ],
  },

  // =========================================================
  // DIA 4
  // =========================================================

  {
    id: 'monte-seu-prato',
    title: 'Método Monte Seu Prato Corpo Leve™',
    description:
      'Aprenda a montar refeições equilibradas com os alimentos que você já tem em casa.',
    category: 'Ferramenta Prática',
    iconEmoji: '🍽️',
    iconName: 'dinner_dining',
    badgeText: 'Bônus Dia 4',
    type: 'plate_builder',
    unlockDay: 4,

    intro:
      'Você não precisa seguir uma receita para fazer uma boa refeição. Aprenda uma lógica simples para olhar para sua geladeira, escolher os alimentos disponíveis e montar seu prato sem complicação.',

    sections: [
      {
        title: 'A Fórmula Corpo Leve',
        items: [
          'Comece preenchendo aproximadamente metade do prato com vegetais variados.',
          'Reserve uma parte do prato para uma fonte de proteína.',
          'Complete com uma fonte de carboidrato que combine com sua refeição.',
          'Finalize com temperos, ervas e outros complementos que você goste.',
        ],
      },
      {
        title: 'Café da Manhã',
        items: [
          'Combine uma fonte de proteína com uma fonte de energia ou fibra.',
          'Inclua uma fruta quando fizer sentido para sua fome e preferência.',
          'Exemplos: ovos + pão + fruta; iogurte + aveia + banana; cuscuz + ovos.',
        ],
      },
      {
        title: 'Lanches',
        items: [
          'Uma fórmula simples é combinar uma fruta com um complemento.',
          'Exemplos: fruta + iogurte; maçã + castanhas; mamão + aveia; fruta + queijo.',
        ],
      },
      {
        title: 'Abra a Geladeira',
        items: [
          'Antes de pensar que não tem nada para comer, procure as peças da fórmula.',
          'Exemplo: ovos + arroz de ontem + tomate + cenoura já podem formar uma refeição.',
          'Exemplo: frango desfiado + batata + alface + pepino também resolvem o prato.',
        ],
      },
      {
        title: 'Os Coringas Corpo Leve',
        items: [
          'Freezer: proteínas em porções e vegetais congelados.',
          'Geladeira: ovos, vegetais, frutas e iogurte natural.',
          'Despensa: arroz, feijão, aveia, atum, sardinha, castanhas e temperos.',
        ],
      },
    ],

    toolGroups: [
      {
        id: 'proteina',
        title: '1. Escolha sua proteína',
        maxSelections: 1,
        options: [
          { id: 'frango', label: 'Frango' },
          { id: 'carne', label: 'Carne' },
          { id: 'peixe', label: 'Peixe' },
          { id: 'ovos', label: 'Ovos' },
          { id: 'atum-sardinha', label: 'Atum ou sardinha' },
          { id: 'leguminosas', label: 'Feijão, lentilha ou grão-de-bico' },
          { id: 'tofu', label: 'Tofu' },
        ],
      },
      {
        id: 'carboidrato',
        title: '2. Escolha seu acompanhamento',
        maxSelections: 1,
        options: [
          { id: 'arroz', label: 'Arroz' },
          { id: 'batata', label: 'Batata ou batata-doce' },
          { id: 'mandioca', label: 'Mandioca' },
          { id: 'inhame', label: 'Inhame' },
          { id: 'cuscuz', label: 'Cuscuz' },
          { id: 'massa', label: 'Macarrão' },
          { id: 'quinoa', label: 'Quinoa' },
        ],
      },
      {
        id: 'vegetais',
        title: '3. Escolha seus vegetais',
        minSelections: 2,
        options: [
          { id: 'folhas', label: 'Folhas' },
          { id: 'tomate', label: 'Tomate' },
          { id: 'cenoura', label: 'Cenoura' },
          { id: 'brocolis', label: 'Brócolis' },
          { id: 'abobrinha', label: 'Abobrinha' },
          { id: 'abobora', label: 'Abóbora' },
          { id: 'pepino', label: 'Pepino' },
          { id: 'couve-flor', label: 'Couve-flor' },
        ],
      },
    ],

    closingMessage:
      'Não procure o prato perfeito. Monte o melhor prato possível com o que você tem hoje.',
  },

  // =========================================================
  // DIA 7
  // =========================================================

  {
    id: 'guia-substituicoes',
    title: 'Guia de Substituições',
    description:
      'Aprenda como substituir alimentos mantendo a estrutura das suas refeições.',
    category: 'Flexibilidade',
    iconEmoji: '🔄',
    iconName: 'published_with_changes',
    badgeText: 'Tabela Prática',
    type: 'substitutions',
    unlockDay: 7,

    substitutions: [
      {
        original: 'Frango grelhado',
        substitutes: [
          'Peixe grelhado',
          'Carne magra',
          'Tofu grelhado',
          'Ovos',
        ],
      },
      {
        original: 'Batata-doce',
        substitutes: [
          'Mandioca',
          'Inhame',
          'Arroz',
          'Abóbora cabotiá',
        ],
      },
      {
        original: 'Azeite de oliva',
        substitutes: [
          'Abacate',
          'Sementes',
          'Castanhas',
        ],
      },
      {
        original: 'Leite',
        substitutes: [
          'Leite sem lactose',
          'Bebida vegetal sem açúcar',
          'Iogurte natural, quando adequado à preparação',
        ],
      },
    ],
  },

  {
    id: 'doces-corpo-leve',
    title: 'Doces Corpo Leve',
    description:
      '12 sobremesas simples para aqueles momentos em que bate a vontade de comer algo doce.',
    category: 'Receituário Bônus',
    iconEmoji: '🍫',
    iconName: 'icecream',
    badgeText: '12 Sobremesas',
    type: 'desserts',
    unlockDay: 7,

    intro:
      'Vontade de doce faz parte da vida. Aqui você encontra opções caseiras para variar suas sobremesas sem transformar alimentação em uma lista de proibições.',

    recipes: [
      {
        id: 'brigadeiro-banana-cacau',
        title: 'Brigadeiro Cremoso de Banana e Cacau',
        time: '6 min',
        image: '/recipes/61-brigadeiro-cremoso-de-banana-e-cacau.png',
        ingredients: [
          '1 banana bem madura',
          '1 colher (sopa) de cacau em pó 100%',
          '1 colher (sopa) de leite em pó',
          'Canela opcional',
        ],
        steps: [
          'Amasse bem a banana.',
          'Misture o cacau e o leite em pó.',
          'Leve ao fogo baixo, mexendo até ficar cremoso.',
        ],
        nutrition: 'Valores nutricionais variam conforme os ingredientes utilizados.',
      },
      {
        id: 'maca-assada-aveia',
        title: 'Maçã Assada com Aveia e Canela',
        time: '8–10 min',
        image: '/recipes/62-maca-assada-com-aveia-e-canela.png',
        ingredients: [
          '1 maçã',
          '1 colher (sopa) de aveia',
          '1 colher (chá) de mel',
          'Canela a gosto',
          '2 castanhas picadas',
        ],
        steps: [
          'Retire cuidadosamente o miolo da maçã.',
          'Recheie com aveia, mel, canela e castanhas.',
          'Cozinhe no micro-ondas até ficar macia.',
        ],
      },
      {
        id: 'creme-gelado-morango',
        title: 'Creme Gelado de Morango',
        time: '5 min',
        image: '/recipes/63-creme-gelado-de-morango.png',
        ingredients: [
          '1 xícara de morangos congelados',
          '½ banana congelada',
          '3 colheres (sopa) de iogurte natural',
          'Baunilha opcional',
        ],
        steps: [
          'Coloque todos os ingredientes no processador ou liquidificador.',
          'Bata até formar um creme espesso.',
          'Sirva imediatamente.',
        ],
      },
      {
        id: 'trufa-cacau-amendoim',
        title: 'Trufa de Cacau e Pasta de Amendoim',
        time: '8 min',
        image: '/recipes/64-trufa-de-cacau-e-pasta-de-amendoim.png',
        ingredients: [
          '1 colher (sopa) de pasta de amendoim integral',
          '2 colheres (sopa) de aveia fina',
          '1 colher (chá) de cacau',
          '1 colher (chá) de mel',
        ],
        steps: [
          'Misture os ingredientes.',
          'Modele pequenas bolinhas.',
          'Finalize com uma pequena quantidade de cacau.',
        ],
      },
      {
        id: 'pera-quente-crocante',
        title: 'Pera Quente com Canela e Crocante de Aveia',
        time: '8 min',
        image: '/recipes/65-pera-quente-com-canela-e-crocante-de-aveia.png',
        ingredients: [
          '1 pera',
          '1 colher (sopa) de aveia',
          'Canela a gosto',
          '1 colher (chá) de mel',
          '1 colher (chá) de castanhas picadas',
        ],
        steps: [
          'Corte a pera e aqueça até ficar macia.',
          'Adicione aveia e canela.',
          'Finalize com mel e castanhas.',
        ],
      },
      {
        id: 'beijinho-coco',
        title: 'Beijinho Cremoso de Coco',
        time: '5 min',
        image: '/recipes/66-beijinho-cremoso-de-coco.png',
        ingredients: [
          '½ banana madura',
          '2 colheres (sopa) de leite em pó',
          '1 colher (sopa) de coco ralado sem açúcar',
          'Baunilha opcional',
        ],
        steps: [
          'Amasse a banana.',
          'Misture os demais ingredientes.',
          'Sirva cremoso ou leve à geladeira antes de consumir.',
        ],
      },
      {
        id: 'creme-chocolate-abacate',
        title: 'Creme de Chocolate com Abacate',
        time: '5 min',
        image: '/recipes/67-creme-de-chocolate-com-abacate.png',
        ingredients: [
          '¼ de abacate pequeno',
          '1 colher (sopa) de cacau',
          '1 colher (chá) de mel',
          'Baunilha opcional',
        ],
        steps: [
          'Amasse ou bata todos os ingredientes.',
          'Misture até ficar liso.',
          'Leve à geladeira antes de servir, se desejar.',
        ],
      },
      {
        id: 'banana-chocolate-castanhas',
        title: 'Banana com Chocolate e Castanhas',
        time: '5 min',
        image: '/recipes/68-banana-com-chocolate-e-castanhas.png',
        ingredients: [
          '1 banana pequena',
          '10 g de chocolate 70%',
          '1 colher (chá) de castanhas trituradas',
        ],
        steps: [
          'Corte a banana.',
          'Derreta o chocolate e distribua sobre a fruta.',
          'Finalize com as castanhas.',
        ],
      },
      {
        id: 'cappuccino-cacau',
        title: 'Cappuccino Cremoso de Cacau e Canela',
        time: '4 min',
        image: '/recipes/69-cappuccino-cremoso-de-cacau-e-canela.png',
        ingredients: [
          '150 ml de leite',
          '50 ml de café',
          '1 colher (chá) de cacau',
          'Canela a gosto',
        ],
        steps: [
          'Aqueça o leite.',
          'Misture café, cacau e canela.',
          'Bata rapidamente para formar espuma, se desejar.',
        ],
      },
      {
        id: 'pessego-iogurte',
        title: 'Pêssego Quente com Creme de Iogurte',
        time: '7 min',
        image: '/recipes/70-pessego-quente-com-creme-de-iogurte.png',
        ingredients: [
          '1 pêssego',
          '3 colheres (sopa) de iogurte natural',
          'Canela a gosto',
          '1 colher (chá) de mel',
          '1 colher (chá) de aveia',
        ],
        steps: [
          'Corte e aqueça o pêssego até ficar macio.',
          'Cubra com o iogurte.',
          'Finalize com canela, mel e aveia.',
        ],
      },
      {
        id: 'bombom-gelado-morango',
        title: 'Bombom Gelado de Morango',
        time: '5 min + congelamento',
        image: '/recipes/71-bombom-gelado-de-morango.png',
        ingredients: [
          '4 morangos',
          '2 colheres (sopa) de iogurte natural consistente',
          '15 g de chocolate 70%',
        ],
        steps: [
          'Cubra os morangos com iogurte.',
          'Leve ao congelador até firmar.',
          'Finalize com uma camada fina de chocolate derretido.',
        ],
      },
      {
        id: 'abacaxi-coco-canela',
        title: 'Abacaxi Quente com Coco e Canela',
        time: '7 min',
        image: '/recipes/72-abacaxi-quente-com-coco-e-canela.png',
        ingredients: [
          '2 rodelas de abacaxi',
          'Canela a gosto',
          '1 colher (sopa) de coco ralado sem açúcar',
        ],
        steps: [
          'Doure o abacaxi em frigideira antiaderente.',
          'Finalize com canela e coco.',
          'Sirva ainda quente.',
        ],
      },
    ],

    closingMessage:
      'Se estiver em uma ocasião especial e quiser sua sobremesa favorita, aproveite e depois continue sua rotina normalmente. Uma escolha isolada não define sua alimentação.',
  },

  {
    id: 'menos-inchaco',
    title: 'Menos Inchaço no Dia a Dia',
    description:
      'Hábitos simples para observar sua rotina e favorecer mais conforto no dia a dia.',
    category: 'Bem-Estar',
    iconEmoji: '🌿',
    iconName: 'spa',
    badgeText: 'Guia Prático',
    type: 'bloating_guide',
    unlockDay: 7,

    intro:
      'A sensação de inchaço pode estar relacionada a diferentes fatores. Este guia não propõe detox ou dietas radicais: ele ajuda você a observar hábitos e padrões da sua própria rotina.',

    sections: [
      {
        title: 'Nem todo inchaço é a mesma coisa',
        items: [
          'Retenção de líquidos pode provocar sensação temporária de corpo mais pesado.',
          'Distensão abdominal pode estar relacionada a gases e ao próprio volume das refeições.',
          'Intestino preso também pode aumentar a sensação de desconforto abdominal.',
          'Sentir a barriga maior logo após uma refeição não significa ganho imediato de gordura.',
        ],
      },
      {
        title: '7 Hábitos Corpo Leve',
        items: [
          'Distribua sua hidratação ao longo do dia.',
          'Observe a frequência de alimentos muito salgados e ultraprocessados.',
          'Aumente alimentos ricos em fibras gradualmente.',
          'Inclua movimento na rotina quando possível.',
          'Experimente comer mais devagar.',
          'Observe se bebidas gaseificadas aumentam seu desconforto.',
          'Identifique padrões em vez de eliminar alimentos aleatoriamente.',
        ],
      },
      {
        title: 'Dia da Leveza',
        items: [
          'Depois de uma refeição mais pesada, não tente compensar com jejum punitivo ou dieta líquida.',
          'Retome sua hidratação habitual.',
          'Faça suas próximas refeições normalmente.',
          'Use o Método Monte Seu Prato quando quiser uma refeição simples.',
          'Inclua uma caminhada leve se fizer sentido para sua rotina.',
        ],
      },
      {
        title: 'Mitos Corpo Leve',
        items: [
          'Você não precisa de um “detox” para voltar à rotina.',
          'Variações rápidas na balança podem acontecer por vários fatores e não representam necessariamente mudança de gordura corporal.',
          'Não é necessário eliminar todos os carboidratos para lidar com a sensação de inchaço.',
          'Mais água nem sempre significa melhor: hidratação deve ser adequada à pessoa.',
        ],
      },
      {
        title: 'Quando procurar orientação profissional',
        items: [
          'Inchaço frequente, intenso, persistente, doloroso ou acompanhado de outros sintomas merece avaliação individual de um profissional de saúde.',
        ],
      },
    ],

    checklists: [
      {
        title: 'Checklist da Leveza',
        items: [
          'Bebi água regularmente',
          'Incluí vegetais nas refeições',
          'Comi com mais calma',
          'Observei meu consumo de ultraprocessados',
          'Movimentei meu corpo',
          'Observei meu funcionamento intestinal',
          'Identifiquei algum padrão de desconforto',
        ],
      },
    ],
  },

  // =========================================================
  // DIA 10
  // =========================================================

  {
    id: 'fim-de-semana',
    title: 'Fim de Semana Corpo Leve',
    description:
      'Estratégias para aproveitar de sexta a domingo sem abandonar sua rotina.',
    category: 'Vida Real',
    iconEmoji: '🍕',
    iconName: 'weekend',
    badgeText: 'Bônus Dia 10',
    type: 'weekend_guide',
    unlockDay: 10,

    intro:
      'Seu fim de semana não precisa parecer uma dieta. A proposta é aproveitar os momentos que importam e manter alguma estrutura no restante do dia.',

    sections: [
      {
        title: 'A Regra da Âncora',
        items: [
          'Em um dia com evento ou refeição social, tente manter outras refeições simples e próximas da sua rotina.',
          'Não é necessário passar fome durante o dia para “guardar calorias” para a noite.',
          'Depois do momento social, simplesmente volte à sua rotina habitual.',
        ],
      },
      {
        title: 'Pizza, hambúrguer e delivery',
        items: [
          'Escolha aquilo que realmente está com vontade de comer.',
          'Coma com calma e observe quando estiver satisfeita.',
          'Evite a mentalidade de que precisa exagerar porque “o dia já está perdido”.',
        ],
      },
      {
        title: 'Churrasco, festas e almoço em família',
        items: [
          'Aproveite o momento social e escolha aquilo que realmente quer comer.',
          'Não é necessário transformar todas as opções em versões “fit”.',
          'Uma refeição diferente não precisa determinar o restante do fim de semana.',
        ],
      },
      {
        title: 'Bebidas',
        items: [
          'Se decidir consumir bebida alcoólica, intercale com água.',
          'Evite beber de estômago vazio.',
          'Consuma com moderação e nunca dirija após beber.',
        ],
      },
      {
        title: 'Segunda-feira não é recomeço',
        items: [
          'Não use jejum, dieta líquida ou exercício como punição.',
          'Retome suas refeições e hidratação habituais.',
          'Você não precisa começar novamente: apenas continuar.',
        ],
      },
      {
        title: 'Semáforo Corpo Leve',
        items: [
          '🟢 Continue: água, frutas, vegetais, refeições habituais, movimento e sono.',
          '🟡 Aproveite conscientemente: restaurante, churrasco, pizza, sobremesa e eventos.',
          '🔴 Evite a mentalidade: “já estraguei tudo”, “segunda eu começo” ou “preciso compensar”.',
        ],
      },
    ],

    plannerBlocks: [
      {
        title: 'Meu fim de semana',
        description:
          'Planeje os momentos que realmente quer aproveitar sem tentar controlar cada refeição.',
        fields: [
          {
            id: 'sexta-social',
            label: 'Meu principal momento de sexta',
            placeholder: 'Ex.: pizza em casa',
          },
          {
            id: 'sabado-social',
            label: 'Meu principal momento de sábado',
            placeholder: 'Ex.: churrasco',
          },
          {
            id: 'domingo-social',
            label: 'Meu principal momento de domingo',
            placeholder: 'Ex.: almoço em família',
          },
          {
            id: 'momento-principal',
            label: 'Qual experiência quero realmente aproveitar?',
          },
        ],
      },
    ],

    closingMessage:
      'Consistência não é fazer tudo perfeitamente. É conseguir voltar para sua rotina sem transformar uma escolha em abandono.',
  },

  // =========================================================
  // DIA 14
  // =========================================================

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
    unlockDay: 14,

    habits: [
      {
        title: '1. Flexibilidade',
        desc: 'Sua alimentação não precisa ser perfeita para ser consistente. Observe o conjunto da sua rotina.',
      },
      {
        title: '2. Mantenha a Hidratação',
        desc: 'Continue usando sua meta de água como uma referência prática para o dia a dia.',
      },
      {
        title: '3. Planejamento Semanal',
        desc: 'Separe alguns minutos para escolher refeições e verificar o que precisa comprar.',
      },
      {
        title: '4. Sono',
        desc: 'Mantenha uma rotina de sono compatível com suas necessidades e sua realidade.',
      },
      {
        title: '5. Movimento',
        desc: 'Encontre formas de movimento que você goste e consiga manter com regularidade.',
      },
    ],
  },

  {
    id: 'corpo-leve-continua',
    title: 'Corpo Leve Continua',
    description:
      'Uma jornada de 14 dias para transformar o que você aprendeu em mais autonomia.',
    category: 'Continuidade',
    iconEmoji: '🚀',
    iconName: 'rocket_launch',
    badgeText: 'Dias 15–28',
    type: 'continuation',
    unlockDay: 14,

    intro:
      'Nos primeiros 14 dias você seguiu o Corpo Leve. Agora começa uma nova fase: usar o que aprendeu com mais liberdade para escolher, substituir e montar suas próprias refeições.',

    sections: [
      {
        title: 'Semana 3 — Consolidar',
        items: [
          'Dia 15 — Escolha seu próprio café da manhã.',
          'Dia 16 — Monte seu primeiro almoço usando o Método Monte Seu Prato.',
          'Dia 17 — Defina seus alimentos coringas.',
          'Dia 18 — Reaproveite uma preparação em outra refeição.',
          'Dia 19 — Escolha e favorite suas receitas preferidas.',
          'Dia 20 — Planeje seu fim de semana.',
          'Dia 21 — Faça seu primeiro checkpoint de autonomia.',
        ],
      },
      {
        title: 'Semana 4 — Autonomia',
        items: [
          'Dia 22 — Monte suas próprias refeições do dia seguinte.',
          'Dia 23 — Faça compras pensando no plano que você montou.',
          'Dia 24 — Experimente uma receita que ainda não preparou.',
          'Dia 25 — Observe seus sinais de conforto e seus padrões.',
          'Dia 26 — Escolha conscientemente uma sobremesa.',
          'Dia 27 — Planeje sua próxima semana usando blocos reutilizáveis.',
          'Dia 28 — Faça seu checkpoint final.',
        ],
      },
      {
        title: 'Dia 28 — Você não precisa começar de novo',
        items: [
          'Relembre o que ficou mais fácil ao longo da jornada.',
          'Observe sua organização, hidratação, disposição e relação com refeições fora da rotina.',
          'Peso e medidas podem ser registrados se você quiser, mas não são a única forma de perceber progresso.',
          'Escolha os hábitos que deseja levar para sua rotina.',
        ],
      },
    ],

    checklists: [
      {
        title: 'Hoje eu sei...',
        items: [
          'Montar uma refeição usando uma estrutura simples',
          'Escolher substituições',
          'Organizar minhas compras',
          'Encontrar refeições rápidas',
          'Lidar melhor com refeições sociais',
          'Voltar à rotina sem compensações',
          'Identificar minhas receitas favoritas',
          'Planejar alguns dias com mais autonomia',
        ],
      },
    ],

    closingMessage:
      'Você não precisa viver começando dietas. O objetivo agora é construir uma rotina suficientemente boa para continuar.',
  },

  {
    id: 'planner-30-dias',
    title: 'Planner Corpo Leve — 30 Dias',
    description:
      'Uma ferramenta para acompanhar os hábitos que você decidiu levar para sua rotina.',
    category: 'Manutenção',
    iconEmoji: '📅',
    iconName: 'calendar_month',
    badgeText: '30 Dias',
    type: 'planner',
    unlockDay: 14,

    intro:
      'Agora o plano é seu. Escolha os hábitos que fazem sentido para sua realidade e acompanhe sua consistência durante os próximos 30 dias.',

    sections: [
      {
        title: 'Sua meta não é fazer 30 dias perfeitos',
        items: [
          'Escolha de 3 a 5 hábitos que realmente queira manter.',
          'Um dia sem registro não apaga os dias anteriores.',
          'Se sair da rotina, continue no próximo dia sem tentar compensar.',
          'Use os checkpoints para simplificar aquilo que não estiver funcionando.',
        ],
      },
      {
        title: 'Checkpoints',
        items: [
          'A cada 7 dias, observe o que ficou mais fácil e o que mais atrapalhou.',
          'No Dia 15, compare sua percepção atual com o início.',
          'No Dia 30, escolha os hábitos que deseja transformar no seu novo normal.',
        ],
      },
    ],

    toolGroups: [
      {
        id: 'habitos-planner',
        title: 'Escolha de 3 a 5 hábitos',
        minSelections: 3,
        maxSelections: 5,
        options: [
          { id: 'agua', label: 'Cumprir minha meta de água' },
          { id: 'frutas', label: 'Comer frutas durante o dia' },
          {
            id: 'vegetais',
            label: 'Incluir vegetais nas refeições principais',
          },
          {
            id: 'organizacao',
            label: 'Manter minhas refeições organizadas',
          },
          { id: 'calma', label: 'Comer com mais calma' },
          {
            id: 'montar-prato',
            label: 'Usar o Método Monte Seu Prato',
          },
          { id: 'movimento', label: 'Fazer algum movimento no dia' },
          { id: 'sono', label: 'Priorizar meu sono' },
          { id: 'planejar', label: 'Planejar minhas refeições' },
          { id: 'cozinhar', label: 'Preparar comida em casa' },
        ],
      },
    ],

    plannerBlocks: [
      {
        title: 'Meu ponto de partida',
        fields: [
          { id: 'organizacao-inicial', label: 'Como está minha organização alimentar?' },
          { id: 'hidratacao-inicial', label: 'Como está minha hidratação?' },
          { id: 'conforto-inicial', label: 'Como está meu conforto abdominal?' },
          { id: 'disposicao-inicial', label: 'Como está minha disposição?' },
          { id: 'sono-inicial', label: 'Como está meu sono?' },
          { id: 'peso-inicial', label: 'Peso atual (opcional)' },
          {
            id: 'medida-inicial',
            label: 'Circunferência abdominal (opcional)',
          },
        ],
      },
      {
        title: 'Minha Fórmula Corpo Leve',
        fields: [
          {
            id: 'habitos-indispensaveis',
            label: 'Quais são meus 3 hábitos indispensáveis?',
          },
          {
            id: 'refeicoes-favoritas',
            label: 'Quais são minhas 5 refeições favoritas?',
          },
          {
            id: 'estrategia-fim-semana',
            label: 'Qual é minha estratégia para fins de semana?',
          },
          {
            id: 'estrategia-retomada',
            label: 'O que faço quando saio da rotina?',
          },
        ],
      },
    ],

    closingMessage:
      'Este é o seu Corpo Leve: não uma rotina perfeita, mas uma rotina que você consegue continuar.',
  },
];
export interface DailyTip {
  id: string;
  category: 'Hábito Saudável' | 'Motivação' | 'Nutrição' | 'Mente & Corpo' | 'Hidratação';
  icon: string;
  title: string;
  content: string;
  actionableStep?: string;
}

export const DAILY_TIPS: DailyTip[] = [
  {
    id: 'tip-1',
    category: 'Hidratação',
    icon: 'water_drop',
    title: 'Água ao Acordar',
    content: 'Beber 1 a 2 copos de água logo ao levantar ativa seu metabolismo, rehidrata os órgãos e desperta o corpo sem cafeína.',
    actionableStep: 'Deixe um copo com água na cabeceira para beber antes de se levantar.',
  },
  {
    id: 'tip-2',
    category: 'Nutrição',
    icon: 'restaurant',
    title: 'Mastigação Consciente',
    content: 'Mastigar devagar (cerca de 20 a 30 vezes por garfada) melhora a digestão e envia sinais de saciedade ao cérebro no tempo correto.',
    actionableStep: 'Tente pousar os talheres na mesa entre cada garfada na sua próxima refeição.',
  },
  {
    id: 'tip-3',
    category: 'Mente & Corpo',
    icon: 'self_improvement',
    title: 'Pausa para Respiração 4-7-8',
    content: 'Inspire pelo nariz por 4s, segure por 7s e solte pela boca por 8s. Isso reduz o cortisol e alivia o estresse instantaneamente.',
    actionableStep: 'Faça 3 ciclos completos agora para desacelerar seus pensamentos.',
  },
  {
    id: 'tip-4',
    category: 'Hábito Saudável',
    icon: 'directions_walk',
    title: 'Caminhada Pós-Refeição',
    content: 'Caminhar apenas 10 minutos após o almoço ou jantar ajuda a regular os níveis de glicose no sangue e favorece a digestão.',
    actionableStep: 'Faça uma caminhada leve ao redor do bloco ou no quintal após almoçar.',
  },
  {
    id: 'tip-5',
    category: 'Motivação',
    icon: 'workspace_premium',
    title: 'Consistência > Perfeição',
    content: 'Você não precisa ser perfeito em todos os dias. O segredo da transformação está em nunca desistir, mesmo em dias desafiadores.',
    actionableStep: 'Celebre o simples fato de estar aqui hoje cuidando da sua saúde.',
  },
  {
    id: 'tip-6',
    category: 'Nutrição',
    icon: 'nutrition',
    title: 'Descasque Mais, Desembale Menos',
    content: 'Alimentos naturais de verdade trazem densidade nutritiva, Fibras e energia duradoura sem aditivos artificiais.',
    actionableStep: 'Priorize frutas, vegetais e grãos integrais no seu prato de hoje.',
  },
  {
    id: 'tip-7',
    category: 'Mente & Corpo',
    icon: 'bedtime',
    title: 'Higiene do Sono',
    content: 'Desligar telas 30 a 60 minutos antes de dormir estimula a produção natural de melatonina e garante um sono reparador.',
    actionableStep: 'Troque o celular por um livro ou música relaxante antes de se deitar.',
  },
  {
    id: 'tip-8',
    category: 'Hábito Saudável',
    icon: 'sunny',
    title: 'Luz Solar Matinal',
    content: 'Tomar 10 a 15 minutos de sol pela manhã sincroniza seu relógio biológico, melhora o humor e aumenta a energia vital.',
    actionableStep: 'Abra a janela ou vá ao quintal assim que puder no início do dia.',
  },
  {
    id: 'tip-9',
    category: 'Motivação',
    icon: 'military_tech',
    title: 'Pequenas Vitórias diárias',
    content: 'O resultado final é a soma de dezenas de pequenas escolhas positivas diárias. Cada copo de água e cada escolha limpa conta!',
    actionableStep: 'Reconheça e comemore uma escolha saudável que você fez nas últimas 24h.',
  },
  {
    id: 'tip-10',
    category: 'Hidratação',
    icon: 'local_drink',
    title: 'Saborize sua Água',
    content: 'Se tiver dificuldade para beber água pura, adicione rodelas de limão, folhas de hortelã ou rodelas de pepino para dar um toque especial.',
    actionableStep: 'Prepare uma jarra de água aromatizada e deixe na geladeira.',
  },
  {
    id: 'tip-11',
    category: 'Mente & Corpo',
    icon: 'fitness_center',
    title: 'Alongamento Express',
    content: 'Dedicar 5 minutos para esticar braços, pernas e coluna alivia a tensão acumulada do trabalho e melhora a circulação.',
    actionableStep: 'Fique em pé, estique os braços para o alto e incline suavemente o tronco.',
  },
  {
    id: 'tip-12',
    category: 'Nutrição',
    icon: 'eco',
    title: 'A Regra das Cores no Prato',
    content: 'Quanto mais colorido for seu prato de salada e vegetais, maior é a diversidade de antioxidantes e vitaminas que você consome.',
    actionableStep: 'Tente colocar pelo menos 3 cores diferentes na sua próxima refeição.',
  },
  {
    id: 'tip-13',
    category: 'Motivação',
    icon: 'psychology',
    title: 'Foco no Presente',
    content: 'Não se preocupe com a semana toda. O único momento no qual você tem controle total é o dia de HOJE.',
    actionableStep: 'Pergunte a si mesmo: "O que posso fazer de saudável por mim neste momento?"',
  },
  {
    id: 'tip-14',
    category: 'Hábito Saudável',
    icon: 'nature_people',
    title: 'Conexão com a Natureza',
    content: 'Passar alguns minutos ao ar livre reduz a ansiedade, desacelera os batimentos cardíacos e renova a disposição mental.',
    actionableStep: 'Tire 5 minutos para olhar as plantas, o céu ou caminhar em local arborizado.',
  }
];

export function getDailyTipIndex(): number {
  const now = new Date();
  // Generate a consistent day index using YYYY-MM-DD
  const dateSeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  return dateSeed % DAILY_TIPS.length;
}

import { DayPlan, Recipe, ShoppingCategory, DailyChecklistItem } from '../types';

export const USER_PROFILE_IMAGE = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300";
export const ONBOARDING_IMAGE = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800";

export const DAILY_CHECKLIST_ITEMS: DailyChecklistItem[] = [
  { id: 'water', label: 'Tomei água regularmente durante o dia (2L+)' },
  { id: 'meals', label: 'Fiz minhas refeições com atenção e tranquilidade' },
  { id: 'mission', label: 'Cumpri a missão especial do dia' },
  { id: 'veggies', label: 'Incluí vegetais ou frutas frescas nas refeições' },
  { id: 'walk', label: 'Dediquei um momento para me movimentar' },
  { id: 'sleep', label: 'Reservei um tempo para descansar e ter uma boa noite de sono' }
];

export const RECIPES: Recipe[] = [
  {
    id: 'prato-caseiro-equilibrado',
    title: 'Prato Brasileiro Tradicional (Arroz, Feijão, Frango e Salada)',
    summary: 'A combinação mais afetiva e nutritiva da mesa brasileira, servida com leveza e equilíbrio.',
    category: 'Almoço',
    prepTime: '20 Minutos',
    difficulty: 'Fácil',
    featured: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 filé de peito de frango grelhado na frigideira com temperos naturais',
      '3 colheres de sopa de arroz soltinho (integral ou branco)',
      '1 concha pequena de feijão temperado com alho e louro',
      '1 xícara de salada fresca (alface, cenoura ralada e tomate)',
      '1 colher de sobremesa de azeite de oliva e limão para temperar'
    ],
    substitutions: [
      'Frango -> Carne moída refogada ou ovos mexidos',
      'Arroz -> Batata cozida ou mandioca cozida',
      'Feijão -> Lentilha ou grão-de-bico'
    ],
    steps: [
      { title: 'Passo 1', text: 'Grelhe o frango em frigideira antiaderente aquecida com um fiozinho de azeite e temperos de sua preferência.' },
      { title: 'Passo 2', text: 'Aqueça o arroz e o feijão caseiro.' },
      { title: 'Passo 3', text: 'Monte o prato dividindo metade para as folhosas e legumes, um quarto para o frango e um quarto para o arroz com feijão.' }
    ],
    nutrition: { calories: 380, protein: '34g', carbs: '38g', fats: '10g' }
  },
  {
    id: 'carne-moida-legumes',
    title: 'Carne Moída Caseira com Legumes e Arroz',
    summary: 'Refeição rápida, barata e muito saborosa. Ótima para render e deixar marmitas prontas na geladeira.',
    category: 'Almoço',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    featured: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '120g de carne moída magra (patinho ou acém)',
      '1/2 cenoura picada em cubinhos',
      '1/2 xícara de abobrinha picada',
      '2 dentes de alho e 1/2 cebola picada',
      '3 colheres de arroz e salada de folhas a gosto'
    ],
    substitutions: [
      'Carne moída -> Ovos ou frango desfiado',
      'Abobrinha -> Chuchu ou vagem'
    ],
    steps: [
      { title: 'Passo 1', text: 'Refogue a cebola e o alho em uma panela com um fio de azeite.' },
      { title: 'Passo 2', text: 'Adicione a carne moída, doure bem e junte a cenoura e a abobrinha.' },
      { title: 'Passo 3', text: 'Tampe e deixe os legumes amolecerem no próprio suco da carne.' }
    ],
    nutrition: { calories: 395, protein: '32g', carbs: '35g', fats: '12g' }
  },
  {
    id: 'omelete-cremoso-espinafre',
    title: 'Omelete Cremoso com Queijo Minas e Tomate',
    summary: 'Preparo extremamente prático de frigideira, perfeito para quando o tempo está curto na cozinha.',
    category: 'Café da Manhã',
    prepTime: '10 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 ovos inteiros caipiras',
      '1 fatia média de queijo minas picado',
      '1/2 tomate picado sem sementes',
      'Folhas de espinafre ou cheiro-verde a gosto',
      'Pitada de sal e orégano'
    ],
    substitutions: [
      'Queijo minas -> Queijo muçarela ou requeijão',
      'Espinafre -> Couve fatiada ou tomate'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata os dois ovos em uma tigela com garfo e adicione uma pitada de sal.' },
      { title: 'Passo 2', text: 'Despeje em frigideira aquecida e em fogo baixo. Adicione o queijo, o tomate e as folhas por cima.' },
      { title: 'Passo 3', text: 'Dobre ao meio quando as bordas soltarem e sirva bem quentinho.' }
    ],
    nutrition: { calories: 240, protein: '18g', carbs: '3g', fats: '17g' }
  },
  {
    id: 'crepioca-recheada-frango',
    title: 'Crepioca Crocante Recheada com Frango Desfiado',
    summary: 'A queridinha da rotina prática. Une a proteína do ovo com a textura deliciosa da goma de tapioca.',
    category: 'Jantar',
    prepTime: '12 Minutos',
    difficulty: 'Fácil',
    featured: true,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ovo inteiro',
      '2 colheres de sopa de goma de tapioca',
      '3 colheres de sopa de frango desfiado temperado',
      '1 colher de sobremesa de requeijão ou queijo ralado',
      'Pitada de sal e orégano'
    ],
    substitutions: [
      'Frango -> Carne moída, atum ou queijo',
      'Tapioca -> Aveia em flocos finos'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture bem o ovo com a tapioca e o sal até formar uma massa homogênea.' },
      { title: 'Passo 2', text: 'Despeje na frigideira untada em fogo baixo até firmar dos dois lados.' },
      { title: 'Passo 3', text: 'Recheie com o frango bem aquecido, dobre ao meio e doure a casquinha.' }
    ],
    nutrition: { calories: 270, protein: '22g', carbs: '20g', fats: '9g' }
  },
  {
    id: 'peixe-grelhado-legumes',
    title: 'Peixe Grelhado no Limão com Legumes no Vapor',
    summary: 'Leveza máxima para o jantar. Digestão rápida para garantir um sono tranquilo e reparador.',
    category: 'Jantar',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 filé de tilápia ou pescada branca (130g)',
      'Suco de 1/2 limão e 1 dente de alho amassado',
      '1 xícara de brócolis, cenoura e abobrinha cozidos no vapor',
      '1 fio de azeite de oliva extra virgem'
    ],
    substitutions: [
      'Tilápia -> Peito de frango em filé ou ovos cozidos',
      'Brócolis -> Couve-flor ou chuchu'
    ],
    steps: [
      { title: 'Passo 1', text: 'Tempere o peixe com o limão, alho e sal a gosto.' },
      { title: 'Passo 2', text: 'Grelhe na frigideira por cerca de 3 a 4 minutos de cada lado até dourar levemente.' },
      { title: 'Passo 3', text: 'Sirva acompanhado dos legumes no vapor regados com azeite.' }
    ],
    nutrition: { calories: 230, protein: '28g', carbs: '8g', fats: '8g' }
  },
  {
    id: 'cuscuz-com-ovo-mexido',
    title: 'Cuscuz Nordestino Quentinho com Ovo Mexido',
    summary: 'Um clássico reconfortante, barato e extremamente nutritivo para começar a manhã com energia.',
    category: 'Café da Manhã',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    featured: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '4 colheres de sopa de flocão de milho hidratado com água e pitada de sal',
      '2 ovos mexidos na manteiga ou azeite',
      '1 fatia pequena de queijo minas ou coalho (opcional)',
      'Café preto ou café com leite quente para acompanhar'
    ],
    substitutions: [
      'Cuscuz -> Pão francês ou tapioca',
      'Queijo -> Requeijão'
    ],
    steps: [
      { title: 'Passo 1', text: 'Umedeça o flocão de milho com água e sal e deixe descansar por 5 minutos.' },
      { title: 'Passo 2', text: 'Cozinhe na cuscuzeira por cerca de 8 a 10 minutos até soltar aroma.' },
      { title: 'Passo 3', text: 'Prepare os ovos mexidos e sirva por cima do cuscuz fumegante.' }
    ],
    nutrition: { calories: 290, protein: '16g', carbs: '32g', fats: '10g' }
  },
  {
    id: 'pao-com-ovo-e-cafe',
    title: 'Pão Francês na Chapa com Ovo e Queijo',
    summary: 'O café da manhã predileto dos brasileiros. Simples, popular, econômico e sem mistério.',
    category: 'Café da Manhã',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 pão francês fresquinho (ou 2 fatias de pão de fôrma)',
      '1 a 2 ovos fritos com gota de azeite ou mexidos',
      '1 fatia de queijo branco ou prato',
      'Café preto ou com leite sem açúcar'
    ],
    substitutions: [
      'Pão francês -> Pão integral ou tapioca',
      'Queijo -> Requeijão'
    ],
    steps: [
      { title: 'Passo 1', text: 'Prepare o ovo na frigideira com uma pitada de sal e orégano.' },
      { title: 'Passo 2', text: 'Corte o pão ao meio e doure na frigideira com o queijo até derreter.' },
      { title: 'Passo 3', text: 'Monte o sanduíche e aproveite com seu café quente.' }
    ],
    nutrition: { calories: 280, protein: '15g', carbs: '28g', fats: '11g' }
  },
  {
    id: 'tapioca-queijo-minas',
    title: 'Tapioca Leve com Queijo Minas Quentinho',
    summary: 'Opção sem glúten muito versátil e rápida para o café da manhã ou lanche.',
    category: 'Café da Manhã',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 colheres de sopa de goma de tapioca peneirada',
      '1 fatia generosa de queijo minas frescal',
      'Pitada de orégano ou gergelim'
    ],
    substitutions: [
      'Queijo minas -> Ovo mexido ou frango desfiado',
      'Tapioca -> Cuscuz ou pão de fôrma'
    ],
    steps: [
      { title: 'Passo 1', text: 'Peneire a tapioca diretamente sobre a frigideira aquecida em fogo baixo.' },
      { title: 'Passo 2', text: 'Assim que a massa unir, coloque a fatia de queijo de um lado.' },
      { title: 'Passo 3', text: 'Dobre ao meio e deixe o queijo aquecer até derreter suavemente.' }
    ],
    nutrition: { calories: 210, protein: '9g', carbs: '26g', fats: '7g' }
  },
  {
    id: 'panqueca-banana-aveia',
    title: 'Panqueca Doce de Banana com Aveia e Canela',
    summary: 'Aquele toque doce e natural que sacia a vontade de sobremesa logo no café da manhã.',
    category: 'Café da Manhã',
    prepTime: '10 Minutos',
    difficulty: 'Muito Fácil',
    featured: true,
    image: 'https://images.unsplash.com/photo-1528207776546-385e71986565?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 banana madura amassada (prata ou nanica)',
      '1 ovo inteiro',
      '2 colheres de sopa de aveia em flocos finos',
      'Canela em pó a gosto para polvilhar'
    ],
    substitutions: [
      'Banana -> Maçã ralada',
      'Aveia -> Goma de tapioca'
    ],
    steps: [
      { title: 'Passo 1', text: 'Amasse bem a banana em um prato e misture o ovo e a aveia com um garfo.' },
      { title: 'Passo 2', text: 'Despeje em frigideira untada em fogo baixo e tampe por 2 minutos.' },
      { title: 'Passo 3', text: 'Vire delicadamente, doure o outro lado e finalize com canela.' }
    ],
    nutrition: { calories: 220, protein: '10g', carbs: '31g', fats: '6g' }
  },
  {
    id: 'frango-acebolado-pure',
    title: 'Frango Acebolado com Purê de Batata ou Mandioquinha',
    summary: 'Comida com gosto de casa da vó. Reconfortante, nutritiva e fácil de preparar.',
    category: 'Almoço',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '130g de peito de frango em tiras ou filé',
      '1 cebola média fatiada em rodelas',
      '1 batata média ou mandioquinha cozida e amassada',
      '1 colher de sobremesa de manteiga ou azeite para o purê',
      'Salada verde de alface e tomate a gosto'
    ],
    substitutions: [
      'Batata -> Mandioca ou abóbora',
      'Frango -> Carne bife de alcatra/patinho'
    ],
    steps: [
      { title: 'Passo 1', text: 'Grelhe as tiras de frango na frigideira e junte a cebola fatiada até dourar bem.' },
      { title: 'Passo 2', text: 'Amasse a batata cozida ainda quente com uma gota de leite, manteiga e sal.' },
      { title: 'Passo 3', text: 'Sirva o frango suculento sobre o purê acompanhado da salada.' }
    ],
    nutrition: { calories: 370, protein: '35g', carbs: '32g', fats: '10g' }
  },
  {
    id: 'sopa-de-legumes-frango',
    title: 'Sopa Reconfortante de Legumes com Frango Desfiado',
    summary: 'Excelente para dias mais frios ou para jantares super leves que aquecem o corpo.',
    category: 'Jantar',
    prepTime: '30 Minutos',
    difficulty: 'Fácil',
    featured: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 xícara de frango cozido e desfiado',
      '1/2 cenoura, 1/2 abobrinha e 1/2 chuchu em cubos',
      '1/2 batata pequena picada',
      '1 litro de água com alho, cebola, cheiro-verde e sal'
    ],
    substitutions: [
      'Frango -> Carne moída',
      'Batata -> Mandioca ou mandioquinha'
    ],
    steps: [
      { title: 'Passo 1', text: 'Refogue o alho e a cebola e adicione o caldo com os legumes picados.' },
      { title: 'Passo 2', text: 'Cozinhe até os legumes ficarem macios.' },
      { title: 'Passo 3', text: 'Adicione o frango desfiado, acerte o sal e cheiro-verde e sirva bem quente.' }
    ],
    nutrition: { calories: 210, protein: '24g', carbs: '20g', fats: '4g' }
  },
  {
    id: 'escondidinho-mandioca-carne',
    title: 'Escondidinho Prático de Mandioca com Carne Moída',
    summary: 'Refeição super brasileira e saborosa que agrada a família inteira sem complicação.',
    category: 'Almoço',
    prepTime: '30 Minutos',
    difficulty: 'Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 xícara de mandioca cozida e amassada como purê',
      '100g de carne moída refogada com tomate e temperos',
      '1 colher de requeijão ou queijo ralado para gratinar',
      'Salada de folhas para acompanhar'
    ],
    substitutions: [
      'Mandioca -> Batata-doce ou abóbora cabotiá',
      'Carne moída -> Frango desfiado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Cozinhe a mandioca até ficar bem macia e amasse com garfo.' },
      { title: 'Passo 2', text: 'Em um refratário pequeno, faça uma camada com a carne moída temperada.' },
      { title: 'Passo 3', text: 'Cubra com o purê de mandioca, finalize com queijo e leve ao forno para dourar.' }
    ],
    nutrition: { calories: 380, protein: '29g', carbs: '36g', fats: '12g' }
  },
  {
    id: 'torta-de-frigideira-legumes',
    title: 'Torta de Frigideira Rápida de Legumes e Ovos',
    summary: 'Salva o jantar em menos de 15 minutos com os legumes que você já tem na geladeira.',
    category: 'Jantar',
    prepTime: '12 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 ovos inteiros',
      '1 colher de sopa de aveia ou farinha de milho',
      '1/2 xícara de legumes picados (seleta, milho, tomate, abobrinha)',
      '1 fatia de queijo picado, sal e orégano'
    ],
    substitutions: [
      'Legumes -> Frango desfiado ou seleta',
      'Aveia -> Goma de tapioca'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata os ovos com a aveia, sal e orégano em um bowl.' },
      { title: 'Passo 2', text: 'Misture os legumes picados e o queijo.' },
      { title: 'Passo 3', text: 'Despeje na frigideira antiaderente tampada em fogo baixo até dourar os dois lados.' }
    ],
    nutrition: { calories: 250, protein: '17g', carbs: '12g', fats: '14g' }
  },
  {
    id: 'salada-completa-frango',
    title: 'Salada Colorida Completa com Frango e Milho',
    summary: 'Fresca, crocante e saciante. Perfeita para os dias mais quentes da semana.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 peito de frango cozido e desfocado/desfiado (ou grelhado)',
      '2 xícaras de folhas variadas (alface, rúcula e acelga)',
      '2 colheres de sopa de milho verde e cenoura ralada',
      '3 ovos de codorna ou 1 ovo cozido fatiado',
      'Molho simples de azeite, limão e pitada de sal'
    ],
    substitutions: [
      'Frango -> Atum em conserva',
      'Milho -> Ervilha fresca ou grão-de-bico'
    ],
    steps: [
      { title: 'Passo 1', text: 'Higienize e rasgue as folhas em uma saladeira bonita.' },
      { title: 'Passo 2', text: 'Junte o frango desfiado, o milho, a cenoura e o ovo cozido por cima.' },
      { title: 'Passo 3', text: 'Regue com o molho de azeite e limão imediatamente antes de consumir.' }
    ],
    nutrition: { calories: 310, protein: '33g', carbs: '14g', fats: '13g' }
  },
  {
    id: 'sardinha-refogada-tomate',
    title: 'Sardinha Refogada com Tomate e Cuscuz Soltinho',
    summary: 'Uma das opções mais baratas e ricas em Ômega 3 da culinária brasileira tradicional.',
    category: 'Jantar',
    prepTime: '15 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 lata de sardinha em conserva (escorrida)',
      '1/2 cebola e 1 tomate grande picados',
      'Cheiro-verde picado a gosto',
      '3 colheres de cuscuz pronto ou arroz integral'
    ],
    substitutions: [
      'Sardinha -> Atum ou ovos mexidos',
      'Cuscuz -> Tapioca ou batata'
    ],
    steps: [
      { title: 'Passo 1', text: 'Refogue a cebola e o tomate na frigideira até formar um molho leve.' },
      { title: 'Passo 2', text: 'Adicione a sardinha sem a espinha central e amasse levemente.' },
      { title: 'Passo 3', text: 'Sirva por cima do cuscuz quentinho ou acompanhado de arroz.' }
    ],
    nutrition: { calories: 320, protein: '26g', carbs: '22g', fats: '12g' }
  },
  {
    id: 'caldo-verde-simples',
    title: 'Caldo Verde Leve com Couve e Batata',
    summary: 'Tradicional e reconfortante. Versão leve preparada sem exageros de embutidos gordurosos.',
    category: 'Jantar',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 batatas médias cozidas e batidas com o caldo do cozimento',
      '1 xícara de couve manteiga fatiada bem fininha',
      '2 colheres de frango desfiado ou 1 rodelinha fina de linguiça magra para aroma',
      'Alho, azeite e sal a gosto'
    ],
    substitutions: [
      'Batata -> Chuchu com mandioquinha',
      'Couve -> Espinafre fatiado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata as batatas cozidas no liquidificador com a própria água do cozimento.' },
      { title: 'Passo 2', text: 'Em uma panela, doure o alho no azeite e despeje o creme de batata.' },
      { title: 'Passo 3', text: 'Desligue o fogo, junte a couve bem fininha para amolecer no calor do caldo e sirva.' }
    ],
    nutrition: { calories: 230, protein: '12g', carbs: '32g', fats: '6g' }
  },
  {
    id: 'legumes-assados-ervas',
    title: 'Legumes Assados no Forno com Ervas e Azeite',
    summary: 'Acompanhamento crocante e aromático que pode ser feito em quantidade para a semana.',
    category: 'Jantar',
    prepTime: '30 Minutos',
    difficulty: 'Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 abobrinha, 1/2 cenoura e 1/2 cebola roxa em rodelas',
      '1/2 pimentão amarelo ou vermelho em tiras',
      '1 colher de sopa de azeite de oliva',
      'Orégano, alecrim e sal a gosto',
      'Acompanha 1 filé de frango ou 2 ovos cozidos'
    ],
    substitutions: [
      'Legumes -> Chuchu, abóbora cabotiá ou berinjela'
    ],
    steps: [
      { title: 'Passo 1', text: 'Corte todos os legumes em tamanhos semelhantes e coloque em uma assadeira.' },
      { title: 'Passo 2', text: 'Regue com azeite, sal e as ervas aromáticas.' },
      { title: 'Passo 3', text: 'Asse em forno médio por 25 minutos até ficarem macios e dourados.' }
    ],
    nutrition: { calories: 260, protein: '22g', carbs: '18g', fats: '11g' }
  },
  {
    id: 'atum-salada-feijao',
    title: 'Salada Prática de Atum com Feijão e Tomates',
    summary: 'Sem ligar o fogão! Uma refeição proteica e refrescante para dias de correria.',
    category: 'Jantar',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 lata de atum em conserva (escorrido)',
      '1 concha de feijão fradinho ou carioca cozido sem caldo',
      '1/2 tomate picado e cebola roxa bem fininha',
      'Salsa, azeite e limão a gosto'
    ],
    substitutions: [
      'Atum -> Frango desfiado ou sardinha',
      'Feijão -> Grão-de-bico ou lentilha'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture em uma tigela o feijão cozido escorrido e o atum.' },
      { title: 'Passo 2', text: 'Adicione o tomate, cebola e salsinha picada.' },
      { title: 'Passo 3', text: 'Tempere com azeite, limão e sal e sirva geladinho.' }
    ],
    nutrition: { calories: 290, protein: '27g', carbs: '22g', fats: '9g' }
  },
  {
    id: 'iogurte-mamao-aveia',
    title: 'Iogurte Natural com Mamão e Aveia em Flocos',
    summary: 'Combinação clássica para a saúde intestinal e saciedade duradoura no café ou lanche.',
    category: 'Café da Manhã',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 potinho de iogurte natural integral ou desnatado (170g)',
      '1/2 fatia de mamão papaia picado',
      '2 colheres de sopa de aveia em flocos',
      'Fio de mel ou pitada de canela (opcional)'
    ],
    substitutions: [
      'Mamão -> Banana ou morangos picados',
      'Aveia -> Linhaça ou chia'
    ],
    steps: [
      { title: 'Passo 1', text: 'Coloque o iogurte natural em uma tigela bonita.' },
      { title: 'Passo 2', text: 'Adicione o mamão picado por cima.' },
      { title: 'Passo 3', text: 'Finalize polvilhando a aveia em flocos e sirva.' }
    ],
    nutrition: { calories: 210, protein: '11g', carbs: '28g', fats: '5g' }
  },
  {
    id: 'panqueca-salgada-frango',
    title: 'Panqueca de Frigideira com Carne Moída Caseira',
    summary: 'Massa leve e versátil que transforma sobras de carne em uma refeição renovada.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    featured: false,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de farinha de aveia ou goma de tapioca',
      '3 colheres de sopa de água ou leite',
      '3 colheres de carne moída refogada com temperos',
      'Salada de alface e tomate para acompanhar'
    ],
    substitutions: [
      'Carne moída -> Frango desfiado ou queijo com tomate',
      'Farinha de aveia -> Tapioca'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture o ovo, a aveia, a água e o sal com garfo até homogeneizar.' },
      { title: 'Passo 2', text: 'Espalhe na frigideira aquecida e doure os dois lados.' },
      { title: 'Passo 3', text: 'Adicione a carne moída, enrole a panqueca e sirva com a salada.' }
    ],
    nutrition: { calories: 310, protein: '25g', carbs: '21g', fats: '12g' }
  },

  // ==================== RECEITUÁRIO DE SNACKS RÁPIDOS ====================
  {
    id: 'snack-banana-aveia-canela',
    title: 'Banana Amassada com Aveia e Canela',
    summary: 'A combinação brasileira clássica, confortante e naturalmente doce para saciar a fome em 3 minutos.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 banana prata ou nanica bem madura',
      '1 colher de sopa de aveia em flocos',
      'Canela em pó a gosto'
    ],
    substitutions: [
      'Banana -> Mamão papaia amassado',
      'Aveia -> Sementes de chia ou linhaça'
    ],
    steps: [
      { title: 'Passo 1', text: 'Amasse a banana com um garfo em um pratinho até formar um purê.' },
      { title: 'Passo 2', text: 'Polvilhe a colher de aveia e a canela por cima.' },
      { title: 'Passo 3', text: 'Misture ligeiramente e saboreie imediatamente.' }
    ],
    nutrition: { calories: 130, protein: '3g', carbs: '28g', fats: '1g' }
  },
  {
    id: 'snack-maca-pasta-amendoim',
    title: 'Maçã em Fatias com Pasta de Amendoim',
    summary: 'Crocância da maçã suculenta combinada com o sabor cremoso da pasta de amendoim integral.',
    category: 'Snacks',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 maçã vermelha ou verde',
      '1 colher de sopa de pasta de amendoim 100% integral (sem açúcar)'
    ],
    substitutions: [
      'Maçã -> Pêra ou fatias de banana',
      'Pasta de amendoim -> Tahine ou pasta de castanhas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Lave bem a maçã e fatiie em gomos finos mantendo a casca.' },
      { title: 'Passo 2', text: 'Passe uma fina camada de pasta de amendoim sobre cada fatia.' }
    ],
    nutrition: { calories: 180, protein: '5g', carbs: '22g', fats: '9g' }
  },
  {
    id: 'snack-mamao-chia',
    title: 'Mamão Papaia com Sementes de Chia',
    summary: 'Snack digestivo, fresco e riquíssimo em fibras e enzimas naturais que auxiliam no bom funcionamento intestinal.',
    category: 'Snacks',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 mamão papaia',
      '1 colher de sobremesa de sementes de chia'
    ],
    substitutions: [
      'Chia -> Semente de linhaça dourada',
      'Mamão papaia -> Mamão formosa em cubos'
    ],
    steps: [
      { title: 'Passo 1', text: 'Retire as sementes do meio do mamão papaia com uma colher.' },
      { title: 'Passo 2', text: 'Preencha a cavidade com as sementes de chia e coma com colher.' }
    ],
    nutrition: { calories: 95, protein: '2g', carbs: '18g', fats: '2g' }
  },
  {
    id: 'snack-iogurte-aveia',
    title: 'Iogurte Natural com Aveia',
    summary: 'Lanche proteico e probiótico super cremoso para qualquer hora do dia.',
    category: 'Snacks',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 potinho de iogurte natural integral (sem açúcar)',
      '1 colher de sopa de aveia em flocos finos',
      '1 fiozinho de mel (opcional)'
    ],
    substitutions: [
      'Iogurte natural -> Coalhada fresca',
      'Aveia -> Granola caseira sem açúcar'
    ],
    steps: [
      { title: 'Passo 1', text: 'Despeje o iogurte natural em uma taça.' },
      { title: 'Passo 2', text: 'Adicione a aveia por cima e misture bem.' }
    ],
    nutrition: { calories: 150, protein: '8g', carbs: '16g', fats: '6g' }
  },
  {
    id: 'snack-pipoca-caseira',
    title: 'Pipoca Caseira Leve',
    summary: 'Snack crocante e quentinho estourado na panela com o mínimo de óleo e pitada de sal.',
    category: 'Snacks',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 colheres de sopa de milho para pipoca',
      '1 colher de chá de azeite de oliva ou óleo',
      '1 pitada de sal'
    ],
    substitutions: [
      'Azeite -> Estourada no micro-ondas com 2 colheres de água na vasilha tampada com plástico filme furadinho'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça o azeite com 3 grãos de milho na panela tampada.' },
      { title: 'Passo 2', text: 'Quando estourarem, adicione o restante do milho, tampe e sacuda a panela até terminar de estourar.' },
      { title: 'Passo 3', text: 'Tempere com uma pitada discreta de sal.' }
    ],
    nutrition: { calories: 120, protein: '3g', carbs: '20g', fats: '3g' }
  },
  {
    id: 'snack-ovo-cozido',
    title: 'Ovo Cozido Temperado com Orégano',
    summary: 'Saciante, prático e super proteico. O snack perfeito para o meio da tarde.',
    category: 'Snacks',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ou 2 ovos caipiras cozidos',
      '1 fio de azeite extra virgem',
      'Orégano e pitada de sal'
    ],
    substitutions: [
      'Orégano -> Cheiro-verde ou pimenta-do-reino'
    ],
    steps: [
      { title: 'Passo 1', text: 'Corte os ovos cozidos ao meio.' },
      { title: 'Passo 2', text: 'Regue com poucas gotas de azeite, sal e orégano por cima.' }
    ],
    nutrition: { calories: 140, protein: '12g', carbs: '1g', fats: '10g' }
  },
  {
    id: 'snack-queijo-minas',
    title: 'Queijo Minas com Azeite e Orégano',
    summary: 'Fatias frescas de queijo minas brasileiro com o perfume do azeite de oliva e orégano.',
    category: 'Snacks',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 fatias médias de queijo minas frescal (aprox. 60g)',
      '1 fio de azeite de oliva',
      'Orégano seco a gosto'
    ],
    substitutions: [
      'Queijo minas -> Queijo coalho levemente grelhado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Disponha as fatias de queijo em um prato.' },
      { title: 'Passo 2', text: 'Regue o azeite e salpique o orégano.' }
    ],
    nutrition: { calories: 150, protein: '10g', carbs: '2g', fats: '11g' }
  },
  {
    id: 'snack-tapioca-queijo',
    title: 'Tapioca Crocante com Queijo Minas',
    summary: 'Lanche aquecido na frigideira com massa fina de tapioca e queijo derretido.',
    category: 'Snacks',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 colheres de sopa de goma de tapioca peneirada',
      '1 fatia de queijo minas ou muçarela',
      '1 pitada de sal'
    ],
    substitutions: [
      'Tapioca -> Crepioca (1 ovo + 1 colher tapioca)'
    ],
    steps: [
      { title: 'Passo 1', text: 'Espalhe a tapioca na frigideira aquecida.' },
      { title: 'Passo 2', text: 'Quando firmar, adicione o queijo de um lado, dobre ao meio e espere derreter.' }
    ],
    nutrition: { calories: 160, protein: '7g', carbs: '22g', fats: '5g' }
  },
  {
    id: 'snack-torrada-ricota',
    title: 'Torradas Integrais com Ricota Cremosa',
    summary: 'Crocante, leve e ideal para acompanhar um xícara de chá ou café fresquinho.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 torradas integrais',
      '2 colheres de sopa de ricota fresca amassada com azeite e ervas',
      '1 pitada de sal'
    ],
    substitutions: [
      'Ricota -> Cottage ou queijo minas frescal'
    ],
    steps: [
      { title: 'Passo 1', text: 'Passe a ricota temperada generosamente sobre as torradas.' },
      { title: 'Passo 2', text: 'Finalize com pitada de orégano.' }
    ],
    nutrition: { calories: 130, protein: '8g', carbs: '15g', fats: '4g' }
  },
  {
    id: 'snack-milho-cozido',
    title: 'Milho Cozido Quentinho',
    summary: 'Espiga de milho cozida no vapor com o sabor da comida de verdade caseira.',
    category: 'Snacks',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 espiga de milho verde cozida',
      '1 pontinha de colher de manteiga tradicional',
      'Pitada de sal'
    ],
    substitutions: [
      'Milho na espiga -> 1 xícara de milho verde cozido no prato'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça o milho cozido.' },
      { title: 'Passo 2', text: 'Passe a ponta da manteiga ainda quente para derreter suavemente.' }
    ],
    nutrition: { calories: 140, protein: '4g', carbs: '24g', fats: '4g' }
  },
  {
    id: 'snack-coalhada-frutas',
    title: 'Coalhada Fresca com Frutas da Estação',
    summary: 'Opção refrescante e digestiva com o azedinho suave da coalhada e docinho das frutas.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 colheres de sopa de coalhada fresca artesanal',
      '1/2 xícara de morangos ou maçã picada',
      '1 pitada de canela'
    ],
    substitutions: [
      'Coalhada -> Iogurte natural desnatado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Sirva a coalhada em uma taça e cubra com as frutas picadas.' },
      { title: 'Passo 2', text: 'Salpique a canela por cima.' }
    ],
    nutrition: { calories: 120, protein: '6g', carbs: '14g', fats: '4g' }
  },
  {
    id: 'snack-pepino-cottage',
    title: 'Bastões de Pepino com Queijo Cottage',
    summary: 'Super hidratante e crocante para petiscar sem peshar.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1447175008436-08417189295a?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 pepino japonês cortado em palitos',
      '2 colheres de sopa de queijo cottage ou ricota',
      'Azeite e sal a gosto'
    ],
    substitutions: [
      'Pepino -> Cenoura em bastões'
    ],
    steps: [
      { title: 'Passo 1', text: 'Corte o pepino em palitos grossos.' },
      { title: 'Passo 2', text: 'Chuchu o pepino diretamente no queijo cottage temperado.' }
    ],
    nutrition: { calories: 85, protein: '8g', carbs: '5g', fats: '3g' }
  },
  {
    id: 'snack-cenoura-homus',
    title: 'Cenoura Crocante com Homus (Pasta de Grão-de-Bico)',
    summary: 'Combinação saborosa de vegetal crocante com pasta cremosa rica em proteínas vegetais.',
    category: 'Snacks',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 cenoura média em palitos',
      '2 colheres de sopa de homus (grão-de-bico batido com azeite, limão e alho)'
    ],
    substitutions: [
      'Homus -> Pasta de ricota com ervas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Descasque a cenoura e corte em palitos.' },
      { title: 'Passo 2', text: 'Sirva acompanhada de um potinho com homus temperado com azeite.' }
    ],
    nutrition: { calories: 130, protein: '5g', carbs: '18g', fats: '5g' }
  },
  {
    id: 'snack-mix-castanhas',
    title: 'Mix de Castanhas e Frutas Secas',
    summary: 'Porção prática de gorduras boas e energia limpa para levar na bolsa.',
    category: 'Snacks',
    prepTime: '1 Minuto',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 castanhas-do-pará',
      '4 castanhas-de-caju',
      '1 colher de sobremesa de uvas-passas'
    ],
    substitutions: [
      'Castanha-de-caju -> Amendoim torrado sem sal'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture as castanhas e as passas em um potinho pequeno e consuma devagar devagar.' }
    ],
    nutrition: { calories: 150, protein: '4g', carbs: '12g', fats: '10g' }
  },
  {
    id: 'snack-banana-assada',
    title: 'Banana Assada no Micro-ondas com Canela',
    summary: 'Docinho quente e reconfortante pronto em apenas 1 minuto de micro-ondas.',
    category: 'Snacks',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 banana inteira com casca higienizada',
      'Canela em pó a gosto'
    ],
    substitutions: [
      'Banana -> Maçã cozida no micro-ondas por 2 min'
    ],
    steps: [
      { title: 'Passo 1', text: 'Faça um corte longitudinal na casca da banana.' },
      { title: 'Passo 2', text: 'Leve ao micro-ondas por 50 segundos até ficar bem macia e quente.' },
      { title: 'Passo 3', text: 'Abra a casca, polvilhe bastante canela e coma de colher.' }
    ],
    nutrition: { calories: 105, protein: '1g', carbs: '27g', fats: '0g' }
  },
  {
    id: 'snack-abacate-limao',
    title: 'Creme Rápido de Abacate com Limão',
    summary: 'Abacate amassado na hora com limão e pitada de sal ou mel.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 colheres de sopa de abacate maduro',
      'Suco de 1/2 limão',
      '1 pitada de sal ou fio de mel'
    ],
    substitutions: [
      'Sal -> Mel puro se preferir versão doce'
    ],
    steps: [
      { title: 'Passo 1', text: 'Amasse o abacate com garfo.' },
      { title: 'Passo 2', text: 'Incorpore o suco de limão e o tempero desejado.' }
    ],
    nutrition: { calories: 130, protein: '2g', carbs: '7g', fats: '11g' }
  },
  {
    id: 'snack-crepioca-simples',
    title: 'Crepioca Simples de Frigideira',
    summary: 'Massa rápida de 1 ovo com 1 colher de tapioca aquecida na frigideira.',
    category: 'Snacks',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ovo',
      '1 colher de sopa de goma de tapioca',
      '1 pitada de sal e orégano'
    ],
    substitutions: [
      'Tapioca -> Farinha de aveia'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata o ovo e a tapioca com garfo até homogeneizar.' },
      { title: 'Passo 2', text: 'Despeje na frigideira antiaderente untada e vire assim que dourar o fundo.' }
    ],
    nutrition: { calories: 120, protein: '7g', carbs: '10g', fats: '5g' }
  },
  {
    id: 'snack-morango-iogurte',
    title: 'Morangos Frescos com Iogurte Natural',
    summary: 'Sabor azedinho leve e cor viva dos morangos com iogurte.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '5 morangos frescos picados',
      '3 colheres de iogurte natural',
      'Folhas de hortelã para decorar'
    ],
    substitutions: [
      'Morango -> Amoras ou mirtilos'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture os morangos picados ao iogurte e sirva bem geladinho.' }
    ],
    nutrition: { calories: 90, protein: '5g', carbs: '12g', fats: '3g' }
  },
  {
    id: 'snack-tomate-queijo',
    title: 'Espetinho de Tomate Cereja com Queijo',
    summary: 'Petisco fresco sabor caprese no palito, simples e aromático.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '5 tomates cereja',
      '5 cubinhos de queijo minas frescal',
      'Folhas de manjericão fresco e azeite'
    ],
    substitutions: [
      'Queijo minas -> Ricota em cubos'
    ],
    steps: [
      { title: 'Passo 1', text: 'Espete alternadamente um tomate, um queijo e uma folha de manjericão em palitinhos.' },
      { title: 'Passo 2', text: 'Regue um fio de azeite por cima.' }
    ],
    nutrition: { calories: 110, protein: '6g', carbs: '3g', fats: '8g' }
  },
  {
    id: 'snack-salada-frutas',
    title: 'Salada de Frutas Brasileiras',
    summary: 'Mix leve de mamão, banana e maçã com um toque de suco de laranja natural.',
    category: 'Snacks',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 xícara de mamão picado',
      '1/2 banana picada',
      '1/2 maçã picada',
      'Suco de 1/2 laranja'
    ],
    substitutions: [
      'Suco de laranja -> Suco de maracujá coado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Corte as frutas em cubos pequenos.' },
      { title: 'Passo 2', text: 'Regue com o suco de laranja para manter o frescor e não escurecer.' }
    ],
    nutrition: { calories: 110, protein: '2g', carbs: '26g', fats: '0g' }
  },
  {
    id: 'snack-chips-abobrinha',
    title: 'Chips Rápidos de Abobrinha na Frigideira',
    summary: 'Rodelas finas de abobrinha grelhadas na frigideira com orégano até ficarem macias.',
    category: 'Snacks',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1/2 abobrinha fatiada bem fininha',
      '1 fio de azeite',
      'Orégano e sal a gosto'
    ],
    substitutions: [
      'Abobrinha -> Pepino fatiado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Disponha as rodelas de abobrinha em frigideira quente untada com azeite.' },
      { title: 'Passo 2', text: 'Grelhe rapidamente por 2 minutos de cada lado e salpique sal e orégano.' }
    ],
    nutrition: { calories: 60, protein: '2g', carbs: '4g', fats: '4g' }
  },
  {
    id: 'snack-omelete-caneca',
    title: 'Omelete de Caneca Rápido',
    summary: 'Omelete fofinho preparado na caneca em 1 minuto e meio no micro-ondas.',
    category: 'Snacks',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ovo caipira',
      '1 colher de sopa de tomate picado',
      '1 colher de sopa de queijo minas ralado',
      'Salsinha picada e sal'
    ],
    substitutions: [
      'Queijo minas -> Requeijão'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata o ovo na caneca com o sal e cheiro-verde.' },
      { title: 'Passo 2', text: 'Adicione o tomate e queijo.' },
      { title: 'Passo 3', text: 'Leve ao micro-ondas por 1 minuto e 20 segundos.' }
    ],
    nutrition: { calories: 125, protein: '10g', carbs: '2g', fats: '8g' }
  },
  {
    id: 'snack-suco-verde',
    title: 'Suco Verde Express de Couve e Limão',
    summary: 'Bebida viva e desintoxicante batida rapidamente para dar energia e leveza.',
    category: 'Snacks',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 folha de couve manteiga bem lavada',
      '1/2 maçã com casca',
      'Suco de 1/2 limão',
      '200ml de água gelada'
    ],
    substitutions: [
      'Maçã -> 1 fatia de abacaxi'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata tudo no liquidificador com água gelada até ficar bem homogêneo.' },
      { title: 'Passo 2', text: 'Sirva imediatamente sem coar para aproveitar todas as fibras.' }
    ],
    nutrition: { calories: 70, protein: '2g', carbs: '16g', fats: '0g' }
  }
];

export const SHOPPING_CATEGORIES: ShoppingCategory[] = [
  {
    id: 'cat-proteinas',
    name: 'Proteínas',
    icon: 'egg',
    items: [
      { id: 'item-prot-1', text: 'Frango (peito em filé e para desfiar)' },
      { id: 'item-prot-2', text: 'Carne moída magra (patinho ou acém)' },
      { id: 'item-prot-3', text: 'Ovos caipiras' },
      { id: 'item-prot-4', text: 'Atum em conserva' },
      { id: 'item-prot-5', text: 'Sardinha em conserva' },
      { id: 'item-prot-6', text: 'Peixe branco (tilápia ou pescada)' }
    ]
  },
  {
    id: 'cat-hortifruti',
    name: 'Hortifruti',
    icon: 'nutrition',
    items: [
      { id: 'item-hort-1', text: 'Banana' },
      { id: 'item-hort-2', text: 'Mamão' },
      { id: 'item-hort-3', text: 'Maçã' },
      { id: 'item-hort-4', text: 'Tomate' },
      { id: 'item-hort-5', text: 'Pepino' },
      { id: 'item-hort-6', text: 'Cenoura' },
      { id: 'item-hort-7', text: 'Alface e Folhas verdes' },
      { id: 'item-hort-8', text: 'Abobrinha e Chuchu' },
      { id: 'item-hort-9', text: 'Couve e Espinafre' }
    ]
  },
  {
    id: 'cat-laticinios',
    name: 'Laticínios',
    icon: 'local_dairy_barn',
    items: [
      { id: 'item-lat-1', text: 'Ricota fresca' },
      { id: 'item-lat-2', text: 'Queijo Minas frescal' },
      { id: 'item-lat-3', text: 'Iogurte natural integral (sem açúcar)' },
      { id: 'item-lat-4', text: 'Queijo Cottage' },
      { id: 'item-lat-5', text: 'Leite desnatado ou vegetal' },
      { id: 'item-lat-6', text: 'Requeijão tradicional/light' }
    ]
  },
  {
    id: 'cat-graos',
    name: 'Grãos & Farinhas',
    icon: 'grain',
    items: [
      { id: 'item-grao-1', text: 'Arroz (integral ou branco)' },
      { id: 'item-grao-2', text: 'Feijão (carioca ou preto)' },
      { id: 'item-grao-3', text: 'Goma de tapioca' },
      { id: 'item-grao-4', text: 'Aveia em flocos finos/grossos' },
      { id: 'item-grao-5', text: 'Flocão de milho para cuscuz' },
      { id: 'item-grao-6', text: 'Sementes de Chia e Linhaça' },
      { id: 'item-grao-7', text: 'Pão fôrma integral / Torradas' }
    ]
  },
  {
    id: 'cat-temperos',
    name: 'Temperos & Essenciais',
    icon: 'skillet',
    items: [
      { id: 'item-temp-1', text: 'Limão fresco' },
      { id: 'item-temp-2', text: 'Alho e Cebola' },
      { id: 'item-temp-3', text: 'Cheiro-verde e Manjericão' },
      { id: 'item-temp-4', text: 'Orégano e Canela em pó' },
      { id: 'item-temp-5', text: 'Azeite de oliva extra virgem' },
      { id: 'item-temp-6', text: 'Manteiga tradicional' },
      { id: 'item-temp-7', text: 'Sal e Café' }
    ]
  }
];

export const FOURTEEN_DAYS_PLANS: DayPlan[] = [
  // ==================== SEMANA 1 ====================
  {
    dayNumber: 1,
    title: 'A Regra dos 2 Copos d\'Água',
    quote: 'Um pequeno gesto praticado com constância transforma totalmente o seu dia.',
    todayTalk: 'Bem-vinda ao seu primeiro dia! Hoje não vamos cortar nada do seu prato nem inventar regras difíceis. Nosso único foco é dar ao seu corpo a hidratação que ele precisa. Muitas vezes, sinais como cansaço ou fome fora de hora são apenas sede velada.',
    mission: 'Beber 2 copos de água logo antes do almoço e 2 copos de água logo antes do jantar.',
    whyItMatters: 'A água prepara o seu sistema digestivo, melhora a absorção dos nutrientes e ajuda a acalmar o ritmo antes de comer, permitindo saborear a refeição com presença.',
    checklistItems: [
      'Tomei 2 copos de água antes do almoço',
      'Tomei 2 copos de água antes do jantar',
      'Mantive minha garrafinha sempre por perto'
    ],
    evolutionText: 'Hoje você começou. Parece pouco, mas toda grande transformação começa exatamente assim.',
    meals: [
      {
        id: 'm1-1',
        time: 'Café da Manhã',
        title: 'Café Tradicional com Pão e Ovo',
        description: 'Um café quentinho acompanhado de pão com ovo para começar o dia com calma e saciedade.',
        recipeId: 'pao-com-ovo-e-cafe',
        icon: 'local_cafe'
      },
      {
        id: 'm1-2',
        time: 'Almoço',
        title: 'Almoço da Casa',
        description: 'Comida de verdade para continuar o dia com disposição. Lembre dos seus 2 copos de água antes de sentar à mesa.',
        recipeId: 'prato-caseiro-equilibrado',
        icon: 'restaurant'
      },
      {
        id: 'm1-3',
        time: 'Lanche',
        title: 'Pausa Inteligente com Fruta e Castanhas',
        description: 'Uma pausa gostosa com fruta e aveia para acalmar o corpo no meio da tarde.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm1-4',
        time: 'Jantar',
        title: 'Peixe Selado com Legumes no Vapor',
        description: 'Uma refeição leve e aconchegante para garantir um descanso tranquilo à noite.',
        recipeId: 'peixe-grelhado-legumes',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Pão Francês na Chapa com Ovo e Queijo',
      description: 'O clássico pão com ovo feito com carinho para dar energia ao seu dia sem pesar.',
      recipeId: 'pao-com-ovo-e-cafe'
    },
    practicalTip: 'Deixe uma garrafa de água charmosa e visível na sua mesa de trabalho. Ter a água ao alcance dos olhos torna o hábito automático.',
    marketTip: 'Economia no mercado: compre frutas da estação como mamão e banana, que duram bem e custam menos na feira.',
    curiosity: 'Muitas vezes o cérebro confunde a sensação de sede com fome. Manter a hidratação evita beliscar sem necessidade.',
    congratulations: 'Você já deu o primeiro passo! Parabéns por concluir seu primeiro dia com determinação.',
    nextDayExpectation: 'Amanhã você vai descobrir um hábito simples na hora de comer que melhora a digestão e ajuda a secar sem mudar a comida.',
    reflection: 'Como você se sentiu ao dar esse primeiro passo simples de cuidado com o seu corpo hoje?'
  },
  {
    dayNumber: 2,
    title: 'Comer Devagar Também Emagrece',
    quote: 'Quando você desacelera a garfada, aprende a saborear a vida.',
    todayTalk: 'Hoje vamos trabalhar a velocidade das suas refeições. Comer correndo faz com que o cérebro não receba o sinal de saciedade a tempo, levando você a comer mais do que o seu corpo realmente precisa. Vamos pausar os talheres entre as garfadas.',
    mission: 'Apoiar os talheres no prato após cada garfada e mastigar sem pressa no almoço.',
    whyItMatters: 'O cérebro leva cerca de 20 minutos para registrar que você está satisfeita. Comer devagar reduz a estufamento e melhora a digestão.',
    checklistItems: [
      'Apoiei os talheres no prato durante o almoço',
      'Prestei atenção no sabor da comida sem olhar a tela do celular',
      'Terminei a refeição sem sensação de peso no estômago'
    ],
    evolutionText: 'Você já está criando pequenos hábitos que começam a acontecer quase sem perceber.',
    meals: [
      {
        id: 'm2-1',
        time: 'Café da Manhã',
        title: 'Cuscuz Nordestino com Ovo Mexido',
        description: 'Cuscuz quentinho que abraça o estômago e traz energia boa para acordar.',
        recipeId: 'cuscuz-com-ovo-mexido',
        icon: 'local_cafe'
      },
      {
        id: 'm2-2',
        time: 'Almoço',
        title: 'Mesa da Família',
        description: 'Carne moída quentinha com legumes macios. Apoie os talheres no prato a cada garfada e sinta o sabor.',
        recipeId: 'carne-moida-legumes',
        icon: 'restaurant'
      },
      {
        id: 'm2-3',
        time: 'Lanche',
        title: 'Momento da Fruta com Castanhas',
        description: 'Fruta fresca fatiada com castanhas para matar aquela fominha sem pressa.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm2-4',
        time: 'Jantar',
        title: 'Crepioca Leve Recheada de Frango',
        description: 'Preparo simples de frigideira para terminar o dia alimentada e leve.',
        recipeId: 'crepioca-recheada-frango',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Carne Moída Caseira com Legumes',
      description: 'Comida de verdade saborosa, rápida e cheia de nutrição para o seu dia a dia.',
      recipeId: 'carne-moida-legumes'
    },
    practicalTip: 'Coloque o celular longe da mesa durante as refeições. Comer olhando telas faz você engolir sem mastigar.',
    marketTip: 'Compre carne moída como patinho ou acém e peça para moer duas vezes na hora. Rende muito e fica super macia.',
    curiosity: 'Pessoas que mastigam devagar consomem naturally até 15% menos calorias sem passar fome.',
    congratulations: 'Incrível! Você desacelerou e prestou atenção na sua alimentação hoje. Isso é mudar de hábito de verdade.',
    nextDayExpectation: 'Amanhã vamos aprender a montar a distribuição visual perfeita do seu prato.',
    reflection: 'Você percebeu diferença na sua saciedade ao comer de forma mais pausada hoje?'
  },
  {
    dayNumber: 3,
    title: 'O Prato Inteligente',
    quote: 'Variedade de cores no prato é sinal de nutrição completa na sua mesa.',
    todayTalk: 'Hoje vamos falar de proporção. Você não precisa pesar comida nem usar balança. Basta olhar para o seu prato e dividir visualmente: metade para legumes e vegetais, um quarto para proteína e um quarto para o carboidrato.',
    mission: 'Montar o almoço com metade do prato preenchida por salada ou vegetais coloridos.',
    whyItMatters: 'Os vegetais trazem fibras e volume, preenchendo o estômago com poucas calorias e mantendo a digestão saudável.',
    checklistItems: [
      'Preenchi metade do prato de almoço com salada ou legumes',
      'Incluí uma proteína bem temperada',
      'Senti prazer e saciedade na refeição'
    ],
    evolutionText: 'Seu corpo começa a reconhecer uma nova rotina mais leve e sem exageros.',
    meals: [
      {
        id: 'm3-1',
        time: 'Café da Manhã',
        title: 'Omelete Cremoso de Queijo Minas',
        description: 'Omelete macio de queijo minas para nutrir seu corpo logo pela manhã.',
        recipeId: 'omelete-cremoso-espinafre',
        icon: 'local_cafe'
      },
      {
        id: 'm3-2',
        time: 'Almoço',
        title: 'Prato Colorido',
        description: 'Metade do prato cheio de cores e vegetais frescos para saciar com leveza.',
        recipeId: 'salada-completa-frango',
        icon: 'restaurant'
      },
      {
        id: 'm3-3',
        time: 'Lanche',
        title: 'Iogurte Natural com Aveia em Flocos',
        description: 'Iogurte cremoso que cuida do seu intestino e traz um docinho natural.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm3-4',
        time: 'Jantar',
        title: 'Sopa Reconfortante de Legumes',
        description: 'Sopa quentinha e leve para aquecer o corpo e fechar o dia em paz.',
        recipeId: 'sopa-de-legumes-frango',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Salada Colorida Completa com Frango',
      description: 'Prato lindo, colorido e leve para encher seus olhos e nutrir seu corpo no almoço.',
      recipeId: 'salada-completa-frango'
    },
    practicalTip: 'Monte a salada antes de colocar a comida quente no prato. Isso garante que a metade verde não seja esquecida.',
    marketTip: 'Rúcula, alface e cenoura têm excelente durabilidade se bem higienizadas e guardadas em pote seco na geladeira.',
    curiosity: 'Pratos mais coloridos ativam o apetite de forma saudável e garantem diferentes vitaminas.',
    congratulations: 'Três dias concluídos com sucesso! Seu prato hoje ficou visualmente incrível e muito bem nutrido.',
    nextDayExpectation: 'Amanhã você vai aprender o segredo da preparação rápida para não passar perrengue na cozinha.',
    reflection: 'Foi fácil ajustar as proporções do prato hoje? O que você mais gostou?'
  },
  {
    dayNumber: 4,
    title: 'Cinco Minutos que Economizam Sua Semana',
    quote: 'A organização prévia elimina as más escolhas do cansaço.',
    todayTalk: 'Quando chegamos em casa cansadas e sem nada pronto, a chance de pedir comida pesada ou beliscar pão é enorme. Hoje o foco é deixar pelo menos um ingrediente adiantado na geladeira.',
    mission: 'Deixar uma porção de proteína cozida ou vegetais higienizados prontos na geladeira.',
    whyItMatters: 'Ter comida de verdade semi-pronta na geladeira diminui o esforço mental e garante refeições saudáveis em minutos.',
    checklistItems: [
      'Deixei algo adiantado para a semana (frango, legumes ou folhas)',
      'Fiz minhas refeições planejadas sem improvisos desnecessários',
      'Pensei no meu jantar antes de sentir fome excessiva'
    ],
    evolutionText: 'Você já tomou mais decisões conscientes nestes 4 dias do que imaginava.',
    meals: [
      {
        id: 'm4-1',
        time: 'Café da Manhã',
        title: 'Tapioca Leve na Frigideira',
        description: 'Tapioca fininha com queijo derretido para deixar a manhã mais gostosa.',
        recipeId: 'tapioca-queijo-minas',
        icon: 'local_cafe'
      },
      {
        id: 'm4-2',
        time: 'Almoço',
        title: 'Refeição Caseira',
        description: 'Comida caseira pré-pronta que facilita a sua rotina e economiza tempo.',
        recipeId: 'carne-moida-legumes',
        icon: 'restaurant'
      },
      {
        id: 'm4-3',
        time: 'Lanche',
        title: 'Lanche Prático da Tarde',
        description: 'Opção prática para levar na bolsa e manter a fome sob controle.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm4-4',
        time: 'Jantar',
        title: 'Torta de Frigideira Rápida',
        description: 'Torta de frigideira rápida para resolver a noite sem complicação.',
        recipeId: 'torta-de-frigideira-legumes',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Torta de Frigideira Rápida de Legumes',
      description: 'Opção quentinha e prática para aproveitar os legumes da geladeira com muito sabor.',
      recipeId: 'torta-de-frigideira-legumes'
    },
    practicalTip: 'Cozinhe peito de frango na panela de pressão com temperos e desfie balançando a própria panela.',
    marketTip: 'Ovos e peito de frango são as fontes de proteína de menor custo por grama de nutriente no supermercado.',
    curiosity: 'Ter alimentos saudáveis visíveis na primeira prateleira da geladeira aumenta em 3x a chance de consumi-los.',
    congratulations: 'Sua rotina está ficando cada vez mais inteligente e fácil. Parabéns pelo dia 4!',
    nextDayExpectation: 'Amanhã vamos abordar a importância das pausas no meio da correria do dia a dia.',
    reflection: 'Como a pequena organização de hoje facilitou suas escolhas ao longo do dia?'
  },
  {
    dayNumber: 5,
    title: 'A Força da Pausa de 5 Minutos',
    quote: 'Descansar a mente previne a necessidade de buscar conforto na comida.',
    todayTalk: 'Muitas vezes comemos por estresse, tédio ou cansaço acumulado. Hoje você vai aprender a fazer uma pausa consciente de 5 minutos antes de recorrer à comida nos momentos de tensão.',
    mission: 'Fazer uma pausa respirando fundo por 5 minutos à tarde antes do lanche.',
    whyItMatters: 'Separar o estresse emocional da fome física evita compulsões e traz clareza para as escolhas alimentares.',
    checklistItems: [
      'Fiz uma pausa consciente de 5 minutos durante a tarde',
      'Diferenciei a fome real da vontade de comer por ansiedade',
      'Alimentei meu corpo com carinho e sem culpa'
    ],
    evolutionText: 'Você está mostrando para si mesma que consegue manter a constância com paciência.',
    meals: [
      {
        id: 'm5-1',
        time: 'Café da Manhã',
        title: 'Pão na Chapa com Queijo e Café',
        description: 'Um café cheiroso com pão na chapa para começar o dia com paz e presença.',
        recipeId: 'pao-com-ovo-e-cafe',
        icon: 'local_cafe'
      },
      {
        id: 'm5-2',
        time: 'Almoço',
        title: 'Comida de Verdade',
        description: 'Frango acebolado suculento com purê macio que traz aquele gostinho de aconchego.',
        recipeId: 'frango-acebolado-pure',
        icon: 'restaurant'
      },
      {
        id: 'm5-3',
        time: 'Lanche',
        title: 'Banana com Aveia e Canela',
        description: 'Pausa doce e acolhedora com banana e canela para acalmar a mente.',
        recipeId: 'panqueca-banana-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm5-4',
        time: 'Jantar',
        title: 'Sardinha Refogada com Cuscuz Soltinho',
        description: 'Sardinha refogada com cuscuz quentinho, simples, barato e cheio de nutrição.',
        recipeId: 'sardinha-refogada-tomate',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Frango Acebolado com Purê Caseiro',
      description: 'Refeição suculenta com aquele gostinho bom de comida caseira feita com amor.',
      recipeId: 'frango-acebolado-pure'
    },
    practicalTip: 'Quando sentir vontade de beliscar por ansiedade, tome um copo de água morna ou chá de camomila primeiro.',
    marketTip: 'Sardinha em lata é um superalimento barato, rico em ômega-3 e com longa durabilidade na despensa.',
    curiosity: 'A respiração profunda reduz imediatamente os níveis de cortisol, o hormônio do estresse que acumula gordura abdominal.',
    congratulations: 'Você está aprendendo a escutar os sinais do seu próprio corpo. Parabéns pela sabedoria de hoje!',
    nextDayExpectation: 'Amanhã vamos montar um lanche estratégico para você nunca mais chegar morrendo de fome no jantar.',
    reflection: 'Você conseguiu fazer a pausa de 5 minutos hoje? O que sentiu?'
  },
  {
    dayNumber: 6,
    title: 'O Lanche Estratégico Anti-Belisco',
    quote: 'Cuidar da fome da tarde é a chave para uma noite leve e tranquila.',
    todayTalk: 'Sabe aquela fome gigante que dá às 18h e te faz comer tudo o que vê pela frente no jantar? Ela acontece quando você passa a tarde em jejum prolongado sem um lanche estratégico.',
    mission: 'Fazer um lanche intermediário nutritivo no meio da tarde.',
    whyItMatters: 'Chegar ao jantar com fome moderada permite fazer escolhas conscientes e comer porções adequadas.',
    checklistItems: [
      'Fiz o lanche da tarde na hora certa sem pular',
      'Cheguei ao jantar com fome calma e sob controle',
      'Jantei uma refeição leve e satisfatória'
    ],
    evolutionText: 'Seu olhar para a alimentação está mudando. A fome e a saciedade começam a se equilibrar.',
    meals: [
      {
        id: 'm6-1',
        time: 'Café da Manhã',
        title: 'Panqueca Doce de Banana e Aveia',
        description: 'Panqueca de banana com canela para adoçar a manhã com muita saúde.',
        recipeId: 'panqueca-banana-aveia',
        icon: 'local_cafe'
      },
      {
        id: 'm6-2',
        time: 'Almoço',
        title: 'Prato Brasileiro',
        description: 'Arroz, feijão e frango servidos com equilíbrio para sustentar seu dia sem peshar.',
        recipeId: 'prato-caseiro-equilibrado',
        icon: 'restaurant'
      },
      {
        id: 'm6-3',
        time: 'Lanche',
        title: 'Doce Natural de Fruta da Estação',
        description: 'Lanche estratégico para evitar picos de fome ao final do dia.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm6-4',
        time: 'Jantar',
        title: 'Legumes Assados no Forno com Ervas',
        description: 'Legumes assados aromáticos para um jantar leve, colorido e crocante.',
        recipeId: 'legumes-assados-ervas',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Legumes Assados no Forno com Ervas',
      description: 'Legumes crocantes e aromáticos que trazem cor e vida ao seu jantar sem complicações.',
      recipeId: 'legumes-assados-ervas'
    },
    practicalTip: 'Carregue um saquinho de castanhas ou uma fruta na bolsa para nunca ser pega desprevenida na rua.',
    marketTip: 'Aveia em flocos vendida a granel em casas de produtos naturais custa metade do preço do supermercado.',
    curiosity: 'O lanche da tarde evita a queda brusca de glicose que gera compulsão por doces à noite.',
    congratulations: 'Excelente! Você protegeu seu jantar com uma estratégia simples e eficiente hoje.',
    nextDayExpectation: 'Amanhã encerramos a primeira semana celebrando sua primeira grande vitória no desafio!',
    reflection: 'Como foi sua sensação no jantar após fazer o lanche estratégico da tarde?'
  },
  {
    dayNumber: 7,
    title: 'A Primeira Grande Vitória',
    quote: 'Sete dias de constância valem mais do que um mês de dietas radicais.',
    todayTalk: 'Parabéns! Você acaba de completar 7 dias inteiros do Desafio Corpo Leve. Olhe para trás e veja quantos hábitos simples você já começou a colocar em prática sem sofrimento e sem passar fome.',
    mission: 'Celebrar sua primeira semana tirando 10 minutos para reconhecer seu progresso.',
    whyItMatters: 'Reconhecer pequenas vitórias fortalece a autoconfiança e cria motivação para continuar no caminho certo.',
    checklistItems: [
      'Completei os 7 primeiros dias do desafio com sucesso',
      'Percebi melhorias na minha digestão e disposição',
      'Celebrei meu esforço e meu compromisso comigo mesma'
    ],
    evolutionText: 'Uma semana inteira de cuidado concluída! Você provou que a simplicidade funciona de verdade.',
    meals: [
      {
        id: 'm7-1',
        time: 'Café da Manhã',
        title: 'Mamão com Aveia e Iogurte Natural',
        description: 'Mamão fresquinho com iogurte e aveia para cuidar da sua digestão.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'local_cafe'
      },
      {
        id: 'm7-2',
        time: 'Almoço',
        title: 'Almoço Especial de Domingo',
        description: 'Escondidinho caseiro para saborear com calma e celebrar sua primeira semana.',
        recipeId: 'escondidinho-mandioca-carne',
        icon: 'restaurant'
      },
      {
        id: 'm7-3',
        time: 'Lanche',
        title: 'Pausa Saudável com Queijo Minas',
        description: 'Lanchinho proteico e gostoso para manter o ritmo sem esforço.',
        recipeId: 'tapioca-queijo-minas',
        icon: 'bakery_dining'
      },
      {
        id: 'm7-4',
        time: 'Jantar',
        title: 'Caldo Verde Leve com Couve',
        description: 'Caldo verde quentinho e leve para terminar o domingo de coração cheio.',
        recipeId: 'caldo-verde-simples',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Escondidinho Prático de Mandioca com Carne',
      description: 'Prato aconchegante e gostoso que mostra o quanto é prazeroso comer comida de verdade.',
      recipeId: 'escondidinho-mandioca-carne'
    },
    practicalTip: 'Tire uma foto do seu prato de vez em quando para registrar com orgulho suas escolhas coloridas.',
    marketTip: 'Mandioca cozida congela super bem. Tenha sempre porções no congelador para facilitar os purês.',
    curiosity: 'Após 7 dias de boa hidratação e comida de verdade, a retenção de líquidos diminui visivelmente.',
    congratulations: 'Você é vitoriosa! Uma semana completa de transformação real e pé no chão. Parabéns!',
    nextDayExpectation: 'Amanhã iniciamos a Semana 2 aprendendo a manter o foco em restaurantes e self-services.',
    reflection: 'Qual foi a mudança mais positiva que você sentiu no seu corpo e na sua rotina nestes primeiros 7 dias?'
  },

  // ==================== SEMANA 2 ====================
  {
    dayNumber: 8,
    title: 'O Guia Visual em Qualquer Lugar',
    quote: 'Comer fora de casa também pode ser um momento de cuidado e equilíbrio.',
    todayTalk: 'Iniciamos a segunda semana! Hoje o objetivo é aplicar a regra do prato inteligente quando você estiver comendo fora de casa, em um buffet por quilo, restaurante ou marmitaria.',
    mission: 'Montar um prato num restaurante ou buffet mantendo 50% de vegetais.',
    whyItMatters: 'Você não precisa deixar de conviver socialmente para ter um corpo leve. O segredo é saber fazer escolhas inteligentes em qualquer ambiente.',
    checklistItems: [
      'Apliquei a regra visual do prato mesmo comendo fora de casa',
      'Escolhi uma opção de carne/proteína grelhada ou assada',
      'Evitei bebidas açucaradas durante a refeição'
    ],
    evolutionText: 'Sua autonomia em qualquer ambiente está ficando cada vez mais forte e natural.',
    meals: [
      {
        id: 'm8-1',
        time: 'Café da Manhã',
        title: 'Café Sustentação com Ovos Mexidos',
        description: 'Ovos caipiras mexidos com temperinhos para dar energia duradoura.',
        recipeId: 'omelete-cremoso-espinafre',
        icon: 'local_cafe'
      },
      {
        id: 'm8-2',
        time: 'Almoço',
        title: 'Almoço Completo da Semana',
        description: 'Aposte em uma salada colorida de entrada e combine com o grelhado que você mais gosta.',
        recipeId: 'prato-caseiro-equilibrado',
        icon: 'restaurant'
      },
      {
        id: 'm8-3',
        time: 'Lanche',
        title: 'Mini Refeição para Manter a Energia',
        description: 'Lanche rápido com fruta fresca e aveia para o meio da tarde.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm8-4',
        time: 'Jantar',
        title: 'Jantar Reconfortante de Omelete',
        description: 'Se a refeição fora foi mais pesada, compense com um jantar super leve e rápido.',
        recipeId: 'omelete-cremoso-espinafre',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Sopa Reconfortante de Legumes com Frango',
      description: 'Caldo leve e quentinho para acolher seu corpo e restaurar o equilíbrio à noite.',
      recipeId: 'sopa-de-legumes-frango'
    },
    practicalTip: 'Em buffets, comece sempre servindo primeiro as saladas e folhas antes de passar pelas opções quentes.',
    marketTip: 'Restaurantes por quilo costumam oferecer ótima variedade de legumes que às vezes não preparamos em casa.',
    curiosity: 'Ao ver o prato cheio de salada primeiro, seu cérebro já diminui a ansiedade por porções exageradas.',
    congratulations: 'Sua autonomia no dia a dia só cresce! Parabéns por dominar o prato fora de casa.',
    nextDayExpectation: 'Amanhã vamos aprender a lidar com festas, aniversários e eventos sociais sem culpa.',
    reflection: 'Você se sentiu confiante ao fazer suas escolhas no almoço hoje?'
  },
  {
    dayNumber: 9,
    title: 'Festas e Eventos Sem Culpa',
    quote: 'Equilíbrio é saber aproveitar os momentos especiais sem abandonar sua saúde.',
    todayTalk: 'A vida social faz parte da nossa felicidade. O objetivo do Desafio Corpo Leve não é isolar você do mundo, mas sim ensinar a retornar para a rotina no dia seguinte sem compensações malucas.',
    mission: 'Voltar exatamente para a rotina saudável na refeição seguinte após um evento.',
    whyItMatters: 'Uma refeição fora da rotina não estraga seus resultados. O que atrapalha é transformar uma exceção em um mês de descontrole.',
    checklistItems: [
      'Aproveitei meu momento social com tranquilidade e sem neura',
      'Voltei imediatamente para o meu plano na refeição seguinte',
      'Bebi água extra para ajudar a eliminar qualquer retenção'
    ],
    evolutionText: 'Você já entende que refeições sociais fazem parte da vida sem estragar o seu progresso.',
    meals: [
      {
        id: 'm9-1',
        time: 'Café da Manhã',
        title: 'Cuscuz Quentinho com Queijo Minas',
        description: 'Primeira refeição equilibrada para ancorar seu dia com estabilidade.',
        recipeId: 'cuscuz-com-ovo-mexido',
        icon: 'local_cafe'
      },
      {
        id: 'm9-2',
        time: 'Almoço',
        title: 'Mesa Brasileira',
        description: 'Frango grelhado bem temperado com legumes assados e arroz soltinho.',
        recipeId: 'frango-acebolado-pure',
        icon: 'restaurant'
      },
      {
        id: 'm9-3',
        time: 'Lanche',
        title: 'Energia da Tarde com Castanhas',
        description: 'Snack simples para manter a mente focada no trabalho.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm9-4',
        time: 'Jantar',
        title: 'Salada de Atum com Feijão e Tomates',
        description: 'Prática, refrescante e proteica sem precisar ligar o fogão.',
        recipeId: 'atum-salada-feijao',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Salada Prática de Atum com Feijão',
      description: 'Uma refeição refrescante e proteica que fica pronta em menos de 10 minutos.',
      recipeId: 'atum-salada-feijao'
    },
    practicalTip: 'Nunca vá para um evento com o estômago completamente vazio. Faça um pequeno lanche proteico antes de sair de casa.',
    marketTip: 'Tenha latas de atum e feijão fradinho na despensa. São coringas para jantares de emergência.',
    curiosity: 'O corpo humano leva até 48 horas para reequilibrar a retenção de líquidos após consumir alimentos mais salgados.',
    congratulations: 'Parabéns pela maturidade! Aprender a ter leveza nos eventos é o segredo do sucesso duradouro.',
    nextDayExpectation: 'Amanhã vamos aprender truques simples para controlar a vontade de comer doces.',
    reflection: 'Você percebeu como é libertador comer sem carregar o sentimento de culpa?'
  },
  {
    dayNumber: 10,
    title: 'Vontade de Doces Sob Controle',
    quote: 'Substituir hábitos com inteligência é o segredo para não passar vontade.',
    todayTalk: 'A vontade de comer doce muitas vezes surge por cansaço, hábito pós-almoço ou falta de carboidratos bons na refeição anterior. Hoje vamos usar frutas doces e canela para saciar esse desejo com leveza.',
    mission: 'Substituir o doce pós-almoço por uma fruta doce (banana, mamão ou uva) polvilhada com canela.',
    whyItMatters: 'A canela ajuda a regular os níveis de açúcar no sangue e as frutas trazem o sabor adocicado junto com fibras benéficas.',
    checklistItems: [
      'Optei por uma opção natural ao sentir vontade de doce',
      'Usei a canela como aliada aromática nas frutas',
      'Percebi que a vontade de doce passou logo em seguida'
    ],
    evolutionText: 'Sua relação com a comida está mais madura. Escolhas conscientes já são a sua nova regra.',
    meals: [
      {
        id: 'm10-1',
        time: 'Café da Manhã',
        title: 'Pão Integral com Requeijão e Café',
        description: 'Sanduíche bem tostadinho acompanhado do seu café quente sem açúcar.',
        recipeId: 'pao-com-ovo-e-cafe',
        icon: 'local_cafe'
      },
      {
        id: 'm10-2',
        time: 'Almoço',
        title: 'Prato Equilibrado',
        description: 'Almoço nutritivo de arroz, feijão e proteína. Lembre de fechar com sua fruta quentinha com canela.',
        recipeId: 'prato-caseiro-equilibrado',
        icon: 'restaurant'
      },
      {
        id: 'm10-3',
        time: 'Lanche',
        title: 'Lanche Equilibrado sem Complicação',
        description: 'Iogurte natural cremoso polvilhado com aveia em flocos.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm10-4',
        time: 'Jantar',
        title: 'Noite Leve com Crepioca e Salada',
        description: 'Crepioca douradinha de frango servida com folhosas frescas.',
        recipeId: 'crepioca-recheada-frango',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Panqueca Doce de Banana com Aveia e Canela',
      description: 'Preparo quentinho com canela que parece sobremesa e acolhe seu coração.',
      recipeId: 'panqueca-banana-aveia'
    },
    practicalTip: 'Aqueça a banana no micro-ondas por 30 segundos com canela. Fica parecendo um doce de colher delicioso!',
    marketTip: 'Bananas bem maduras são mais doces naturally e perfeitas para congelar e fazer doces rápidos.',
    curiosity: 'O paladar se adapta a menos açúcar refinado em apenas 10 a 14 dias de consistência.',
    congratulations: 'Dia 10 concluído! Você está no comando dos seus desejos de forma calma e consciente.',
    nextDayExpectation: 'Amanhã vamos organizar um planejamento semanal simplificado que toma menos de 15 minutos.',
    reflection: 'A fruta com canela conseguiu acalmar sua vontade de doce após a refeição hoje?'
  },
  {
    dayNumber: 11,
    title: 'Organização Descomplicada da Semana',
    quote: 'Planejar não tira sua liberdade, planejar garante o seu tempo livre.',
    todayTalk: 'Estamos na reta final! Hoje vamos gastar apenas 10 minutos para listar o que você vai comer nos próximos dias e fazer uma lista de compras enxuta, sem exageros.',
    mission: 'Fazer uma lista rápida de compras focada apenas nos ingredientes básicos do desafio.',
    whyItMatters: 'Comprar com lista evita desperdício de dinheiro, alimentos estragando na geladeira e compras por impulso.',
    checklistItems: [
      'Anotei os itens essenciais que faltam na minha despensa',
      'Fiz compras focadas em comida de verdade e ingredientes simples',
      'Economizei tempo e dinheiro no mercado'
    ],
    evolutionText: 'Sua rotina ganhou leveza e organização. Cuidar de você tornou-se algo prático e calmo.',
    meals: [
      {
        id: 'm11-1',
        time: 'Café da Manhã',
        title: 'Tapioca Crocante com Frango',
        description: 'Preparo rápido recheado com frango desfiado temperado.',
        recipeId: 'tapioca-queijo-minas',
        icon: 'local_cafe'
      },
      {
        id: 'm11-2',
        time: 'Almoço',
        title: 'Almoço Tradicional',
        description: 'Carne moída caseira refogada com abobrinha e cenoura, nutritiva e muito prática.',
        recipeId: 'carne-moida-legumes',
        icon: 'restaurant'
      },
      {
        id: 'm11-3',
        time: 'Lanche',
        title: 'Momento Doce com Mamão e Aveia',
        description: 'Pausa nutritiva com frutas refrescantes para a tarde.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm11-4',
        time: 'Jantar',
        title: 'Jantar da Família Prático',
        description: 'Peixe grelhado com legumes no vapor regados com azeite de oliva.',
        recipeId: 'peixe-grelhado-legumes',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Cuscuz Nordestino com Ovo Mexido',
      description: 'Um ingrediente simples, barato e muito nutritivo para transformar seus dias.',
      recipeId: 'cuscuz-com-ovo-mexido'
    },
    practicalTip: 'Consulte a aba Lista de Compras do aplicativo para conferir as categorias enxutas antes de ir ao feirão.',
    marketTip: 'Ir ao mercado sem fome é a regra de ouro para não encher o carrinho com biscoitos e ultraprocessados.',
    curiosity: 'Pessoas que vão ao mercado com lista economizam em média até 25% na conta final do mês.',
    congratulations: 'Que orgulho! Sua capacidade de organização está transformando sua rotina com muita leveza.',
    nextDayExpectation: 'Amanhã vamos aprender o segredo para nunca mais precisar "recomeçar do zero" uma dieta.',
    reflection: 'Você percebeu como uma lista simples traz paz mental para a sua semana?'
  },
  {
    dayNumber: 12,
    title: 'O Segredo para Nunca Recomeçar do Zero',
    quote: 'Consistência é sobre não desistir quando um dia não sai perfeito.',
    todayTalk: 'Um dos maiores erros nas dietas é achar que um deslize estraga tudo. Se você comer algo fora do planejado, não "jogue a toalha". Apenas faça a refeição seguinte com carinho e equilíbrio.',
    mission: 'Praticar o não-julgamento caso alguma refeição saia do roteiro e retomar no prato seguinte.',
    whyItMatters: 'O corpo responde à média dos seus hábitos ao longo das semanas, e não a um único prato isolado.',
    checklistItems: [
      'Tratei minhas escolhas com gentileza e sem cobranças exageradas',
      'Mantive a consistência nas refeições principais',
      'Lembrei que o segredo é a continuidade e não a perfeição'
    ],
    evolutionText: 'A culpa deu lugar à continuidade. Você aprendeu a seguir em frente com gentileza.',
    meals: [
      {
        id: 'm12-1',
        time: 'Café da Manhã',
        title: 'Café Proteico Simples da Manhã',
        description: 'Dois ovos cozidos ou mexidos com uma fatia de pão quentinho.',
        recipeId: 'pao-com-ovo-e-cafe',
        icon: 'local_cafe'
      },
      {
        id: 'm12-2',
        time: 'Almoço',
        title: 'Panqueca de Carne com Salada',
        description: 'Panqueca leve recheada com carne moída acompanhada de salada fresca de folhas.',
        recipeId: 'panqueca-salgada-frango',
        icon: 'restaurant'
      },
      {
        id: 'm12-3',
        time: 'Lanche',
        title: 'Pausa com Iogurte e Frutas',
        description: 'Lanche cremoso para renovar as energias da tarde.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm12-4',
        time: 'Jantar',
        title: 'Sopa Leve e Saborosa da Noite',
        description: 'Caldo quentinho de legumes com frango desfiado.',
        recipeId: 'sopa-de-legumes-frango',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Sardinha Refogada com Tomate e Cuscuz',
      description: 'Refeição cheia de sabor e afetividade para aquecer a sua noite sem esforço.',
      recipeId: 'sardinha-refogada-tomate'
    },
    practicalTip: 'Esqueça a mentalidade do "já que pisei na jaca, vou comer tudo". Apenas volte para a rota.',
    marketTip: 'Atum e sardinha em lata são aliados perfeitos para dias em que você não teve tempo de cozinhar.',
    curiosity: 'O estresse de se culpar por comer um doce libera cortisol, prejudicando mais o metabolismo que o doce em si.',
    congratulations: 'Falta muito pouco! Você desenvolveu uma mentalidade forte e madura diante da alimentação.',
    nextDayExpectation: 'Amanhã vamos aprender a montar o seu "Plano B de 10 minutos" para dias de caos total.',
    reflection: 'Você conseguiu se libertar da culpa e focar no progresso contínuo hoje?'
  },
  {
    dayNumber: 13,
    title: 'O Plano B de 10 Minutos',
    quote: 'Quando o plano A falhar, tenha um plano B simples em mãos.',
    todayTalk: 'O dia foi caótico, a reunião atrasou e você não teve tempo de cozinhar? Em vez de pedir fast-food, tenha em mente receitas de 10 minutos: omelete recheado, atum com feijão ou crepioca de frigideira.',
    mission: 'Preparar uma refeição rápida de até 10 minutos usando ingredientes que já tem em casa.',
    whyItMatters: 'Saber preparar uma refeição saudável em 10 minutos tira a dependência de aplicativos de entrega.',
    checklistItems: [
      'Preparei uma refeição super rápida sem complicações',
      'Comprovei que comer saudável pode ser mais rápido que pedir delivery',
      'Poupei tempo e dinheiro mantendo o foco na saúde'
    ],
    evolutionText: 'Você adquiriu autonomia real para resolver os dias mais corridos sem desespero.',
    meals: [
      {
        id: 'm13-1',
        time: 'Café da Manhã',
        title: 'Vitamina de Banana com Aveia',
        description: 'Bata no liquidificador banana, leite e aveia para um café ultrarrápido.',
        recipeId: 'panqueca-banana-aveia',
        icon: 'local_cafe'
      },
      {
        id: 'm13-2',
        time: 'Almoço',
        title: 'Salada Completa da Casa',
        description: 'Salada rápida de frango desfiado com ovos cozidos e vegetais frescos.',
        recipeId: 'salada-completa-frango',
        icon: 'restaurant'
      },
      {
        id: 'm13-3',
        time: 'Lanche',
        title: 'Lanche de Sustentação Rápido',
        description: 'Fruta fresca fatiada com um punhado de castanhas de caju.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm13-4',
        time: 'Jantar',
        title: 'Refeição Rápida de Frigideira',
        description: 'Crepioca de queijo minas e frango desfiado pronta em instantes.',
        recipeId: 'crepioca-recheada-frango',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Caldo Verde Leve com Couve e Batata',
      description: 'Creme aveludado e quentinho para acalmar o corpo após um dia corrido.',
      recipeId: 'caldo-verde-simples'
    },
    practicalTip: 'Tenha sempre ovos e tapioca em casa. Com esses dois ingredientes você faz refeições completas em minutos.',
    marketTip: 'Legumes congelados (brócolis, seleta, couve-flor) mantêm todos os nutrientes e não estragam na gaveta.',
    curiosity: 'O tempo médio de espera de um delivery é de 40 minutos. Em 10 minutos você prepara seu próprio jantar.',
    congratulations: 'Penúltimo dia concluído com maestria! Você tem todas as ferramentas para a vida real.',
    nextDayExpectation: 'Amanhã vamos comemorar a conclusão do seu Desafio 14 Dias com autonomia definitiva!',
    reflection: 'Qual é o seu prato coringa preferido para dias de correria?'
  },
  {
    dayNumber: 14,
    title: 'Sua Nova Rotina com Autonomia Definitiva',
    quote: 'O fim deste desafio é apenas o começo da sua nova vida com leveza e saúde.',
    todayTalk: 'Parabéns imensos! Você completou os 14 dias do Desafio Corpo Leve! Você provou a si mesma que é capaz de comer comida de verdade, economizar, cuidar do seu corpo e ter resultados reais sem sofrer.',
    mission: 'Celebrar a conclusão do desafio e definir seus hábitos favoritos para manter para sempre.',
    whyItMatters: 'Agora estes hábitos pertencem a você. Você não precisa mais de dietas restritivas para se sentir bem e leve.',
    checklistItems: [
      'Concluí os 14 dias com orgulho do meu caminho',
      'Identifiquei os hábitos mais práticos que vou levar para a vida',
      'Sinto meu corpo mais leve, disposto e saudável'
    ],
    evolutionText: 'Olhe tudo o que você construiu. Agora você possui ferramentas para continuar cuidando de você sem depender de dietas.',
    meals: [
      {
        id: 'm14-1',
        time: 'Café da Manhã',
        title: 'Primeira Refeição Completa',
        description: 'Cuscuz nordestino quentinho com ovo mexido e seu café especial.',
        recipeId: 'cuscuz-com-ovo-mexido',
        icon: 'local_cafe'
      },
      {
        id: 'm14-2',
        time: 'Almoço',
        title: 'Mesa Saudável para a Vida',
        description: 'Seu prato equilibrado com arroz, feijão, frango suculento e muita salada colorida.',
        recipeId: 'prato-caseiro-equilibrado',
        icon: 'restaurant'
      },
      {
        id: 'm14-3',
        time: 'Lanche',
        title: 'Energia Natural para o Fim da Tarde',
        description: 'Iogurte natural cremoso com mamão picado e aveia.',
        recipeId: 'iogurte-mamao-aveia',
        icon: 'bakery_dining'
      },
      {
        id: 'm14-4',
        time: 'Jantar',
        title: 'Jantar Leve para Encerrar o Desafio',
        description: 'Peixe grelhado no limão com legumes coloridos cozidos no vapor.',
        recipeId: 'peixe-grelhado-legumes',
        icon: 'dinner_dining'
      }
    ],
    recipeHighlight: {
      title: 'Torta de Frigideira Rápida de Legumes',
      description: 'Uma das receitas mais queridinhas para manter a leveza na sua vida para sempre.',
      recipeId: 'torta-de-frigideira-legumes'
    },
    practicalTip: 'Mantenha os 3 pilares principais: água antes das refeições, metade do prato de vegetais e pausas pra mastigar.',
    marketTip: 'Manter a despensa abastecida com o básico evita que você saia do ritmo saudável.',
    curiosity: 'Após 14 dias praticando estes hábitos, seu cérebro já consolidou novas conexões neurais de bem-estar.',
    congratulations: 'PARABÉNS! Você venceu o Desafio 14 Dias Corpo Leve! Sinta orgulho da mulher forte que você é!',
    reflection: 'Olhando para a sua jornada nestes 14 dias, qual foi o maior aprendizado que você leva para sempre?'
  }
];

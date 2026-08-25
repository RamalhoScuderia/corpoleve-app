import { Recipe } from '../types';

// Valores nutricionais são estimativas por porção e podem variar conforme marcas, quantidades e preparo.
export const EXTRA_RECIPES: Recipe[] = [
  {
    id: 'extra-pao-ovo-tomate',
    title: 'Pão com Ovos Mexidos e Tomate',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '7 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/01-pao-com-ovos-mexidos-e-tomate.png',
    ingredients: [
      '1 pão francês pequeno ou 2 fatias de pão integral',
      '2 ovos',
      '1/2 tomate picado',
      'Sal, orégano e 1 fio de azeite'
    ],
    substitutions: [
      'Pão francês -> Pão integral ou tapioca',
      'Tomate -> Cenoura ralada ou folhas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata os ovos com sal e faça mexidos em frigideira antiaderente.' },
      { title: 'Passo 2', text: 'Aqueça o pão rapidamente e acrescente os ovos.' },
      { title: 'Passo 3', text: 'Finalize com tomate, orégano e um fio de azeite.' }
    ],
    nutrition: { calories: 330, protein: '19g', carbs: '31g', fats: '14g' }
  },
  {
    id: 'extra-tapioca-queijo-ovo',
    title: 'Tapioca com Queijo e Ovo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/02-tapioca-com-queijo-e-ovo.png',
    ingredients: [
      '3 colheres de sopa de goma de tapioca',
      '1 ovo',
      '1 fatia de muçarela ou queijo minas',
      'Orégano a gosto'
    ],
    substitutions: [
      'Queijo -> Ricota temperada',
      'Tapioca -> 2 fatias de pão integral'
    ],
    steps: [
      { title: 'Passo 1', text: 'Espalhe a tapioca na frigideira e deixe firmar.' },
      { title: 'Passo 2', text: 'Prepare o ovo mexido ou grelhado ao lado.' },
      { title: 'Passo 3', text: 'Recheie a tapioca com ovo, queijo e orégano e dobre.' }
    ],
    nutrition: { calories: 300, protein: '16g', carbs: '29g', fats: '13g' }
  },
  {
    id: 'extra-iogurte-banana-aveia',
    title: 'Iogurte com Banana, Aveia e Canela',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/03-iogurte-com-banana-aveia-e-canela.png',
    ingredients: [
      '1 pote de iogurte natural',
      '1 banana pequena fatiada',
      '2 colheres de sopa de aveia',
      'Canela a gosto'
    ],
    substitutions: [
      'Banana -> Mamão ou maçã',
      'Aveia -> Granola sem excesso de açúcar'
    ],
    steps: [
      { title: 'Passo 1', text: 'Coloque o iogurte em uma tigela.' },
      { title: 'Passo 2', text: 'Adicione a banana e a aveia.' },
      { title: 'Passo 3', text: 'Finalize com canela e sirva.' }
    ],
    nutrition: { calories: 260, protein: '11g', carbs: '43g', fats: '6g' }
  },
  {
    id: 'extra-panqueca-banana-aveia',
    title: 'Panqueca de Banana e Aveia',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '7 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/04-panqueca-de-banana-e-aveia.png',
    ingredients: [
      '1 banana madura',
      '1 ovo',
      '2 colheres de sopa de aveia',
      'Canela a gosto'
    ],
    substitutions: [
      'Banana -> Maçã ralada',
      'Aveia -> Farinha de aveia'
    ],
    steps: [
      { title: 'Passo 1', text: 'Amasse a banana e misture com ovo, aveia e canela.' },
      { title: 'Passo 2', text: 'Despeje em frigideira antiaderente em fogo baixo.' },
      { title: 'Passo 3', text: 'Doure dos dois lados e sirva.' }
    ],
    nutrition: { calories: 220, protein: '9g', carbs: '32g', fats: '6g' }
  },
  {
    id: 'extra-cuscuz-ovo-queijo',
    title: 'Cuscuz com Ovo e Queijo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '12 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/05-cuscuz-com-ovo-e-queijo.png',
    ingredients: [
      '1/2 xícara de flocão de milho hidratado',
      '1 ovo',
      '1 fatia de queijo minas ou muçarela',
      'Sal a gosto'
    ],
    substitutions: [
      'Ovo -> Frango desfiado',
      'Queijo -> Ricota'
    ],
    steps: [
      { title: 'Passo 1', text: 'Hidrate o flocão com água e uma pitada de sal por 5 minutos.' },
      { title: 'Passo 2', text: 'Cozinhe o cuscuz no vapor até ficar macio.' },
      { title: 'Passo 3', text: 'Sirva com ovo preparado na frigideira e queijo.' }
    ],
    nutrition: { calories: 320, protein: '16g', carbs: '39g', fats: '11g' }
  },
  {
    id: 'extra-omelete-tomate-queijo',
    title: 'Omelete de Tomate e Queijo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '7 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/06-omelete-de-tomate-e-queijo.png',
    ingredients: [
      '2 ovos',
      '1/2 tomate picado',
      '1 fatia de queijo minas ou muçarela',
      'Sal e cheiro-verde'
    ],
    substitutions: [
      'Queijo -> Ricota',
      'Tomate -> Cenoura ralada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata os ovos com sal.' },
      { title: 'Passo 2', text: 'Coloque na frigideira e distribua tomate e queijo.' },
      { title: 'Passo 3', text: 'Dobre quando firmar e finalize com cheiro-verde.' }
    ],
    nutrition: { calories: 230, protein: '17g', carbs: '4g', fats: '16g' }
  },
  {
    id: 'extra-crepioca-frango',
    title: 'Crepioca de Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/07-crepioca-de-frango.png',
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de goma de tapioca',
      '3 colheres de sopa de frango desfiado',
      '1 colher de chá de requeijão'
    ],
    substitutions: [
      'Frango -> Ovo mexido',
      'Requeijão -> Ricota amassada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture ovo e tapioca e despeje na frigideira.' },
      { title: 'Passo 2', text: 'Quando firmar, vire a massa.' },
      { title: 'Passo 3', text: 'Recheie com frango e requeijão e dobre.' }
    ],
    nutrition: { calories: 280, protein: '23g', carbs: '18g', fats: '12g' }
  },
  {
    id: 'extra-sanduiche-queijo-tomate',
    title: 'Sanduíche Quente de Queijo e Tomate',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/08-sanduiche-quente-de-queijo-e-tomate.png',
    ingredients: [
      '2 fatias de pão integral',
      '2 fatias finas de queijo',
      '3 rodelas de tomate',
      'Orégano a gosto'
    ],
    substitutions: [
      'Pão integral -> Pão francês pequeno',
      'Queijo -> Ricota temperada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Monte o sanduíche com queijo, tomate e orégano.' },
      { title: 'Passo 2', text: 'Leve à frigideira tampada ou sanduicheira.' },
      { title: 'Passo 3', text: 'Aqueça até o pão dourar e o queijo derreter.' }
    ],
    nutrition: { calories: 290, protein: '15g', carbs: '34g', fats: '10g' }
  },
  {
    id: 'extra-mingau-aveia-banana',
    title: 'Mingau Rápido de Aveia e Banana',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/09-mingau-rapido-de-aveia-e-banana.png',
    ingredients: [
      '200 ml de leite',
      '3 colheres de sopa de aveia',
      '1/2 banana amassada',
      'Canela a gosto'
    ],
    substitutions: [
      'Leite -> Bebida vegetal sem açúcar',
      'Banana -> Maçã picada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture leite e aveia em uma panela pequena.' },
      { title: 'Passo 2', text: 'Cozinhe mexendo até engrossar.' },
      { title: 'Passo 3', text: 'Desligue, misture a banana e finalize com canela.' }
    ],
    nutrition: { calories: 270, protein: '10g', carbs: '46g', fats: '6g' }
  },
  {
    id: 'extra-pao-ricota-fruta',
    title: 'Pão com Ricota Temperada e Fruta',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/10-pao-com-ricota-temperada-e-fruta.png',
    ingredients: [
      '2 fatias de pão integral',
      '3 colheres de sopa de ricota',
      'Tomate, sal e orégano a gosto',
      '1 fruta pequena'
    ],
    substitutions: [
      'Ricota -> Queijo minas',
      'Pão integral -> Pão francês pequeno'
    ],
    steps: [
      { title: 'Passo 1', text: 'Amasse a ricota com tomate, sal e orégano.' },
      { title: 'Passo 2', text: 'Espalhe sobre o pão.' },
      { title: 'Passo 3', text: 'Sirva acompanhado da fruta.' }
    ],
    nutrition: { calories: 300, protein: '15g', carbs: '43g', fats: '8g' }
  },
  {
    id: 'extra-ovos-cremosos-pao',
    title: 'Ovos Cremosos com Pão na Chapa',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/11-ovos-cremosos-com-pao-na-chapa.png',
    ingredients: [
      '2 ovos',
      '1 pão francês pequeno',
      '1 colher de chá de manteiga',
      'Sal e pimenta a gosto'
    ],
    substitutions: [
      'Pão francês -> Pão integral',
      'Manteiga -> Azeite'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça o pão aberto na frigideira.' },
      { title: 'Passo 2', text: 'Faça os ovos em fogo baixo, mexendo até ficarem cremosos.' },
      { title: 'Passo 3', text: 'Sirva os ovos sobre ou ao lado do pão.' }
    ],
    nutrition: { calories: 340, protein: '17g', carbs: '31g', fats: '16g' }
  },
  {
    id: 'extra-vitamina-mamao-aveia',
    title: 'Vitamina de Mamão com Aveia',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Café da Manhã',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/12-vitamina-de-mamao-com-aveia.png',
    ingredients: [
      '1/2 mamão papaia',
      '200 ml de leite',
      '2 colheres de sopa de aveia',
      'Canela a gosto'
    ],
    substitutions: [
      'Mamão -> Banana',
      'Leite -> Iogurte natural diluído com água'
    ],
    steps: [
      { title: 'Passo 1', text: 'Coloque todos os ingredientes no liquidificador.' },
      { title: 'Passo 2', text: 'Bata até ficar cremoso.' },
      { title: 'Passo 3', text: 'Sirva imediatamente.' }
    ],
    nutrition: { calories: 250, protein: '10g', carbs: '42g', fats: '5g' }
  },
  {
    id: 'extra-arroz-feijao-frango',
    title: 'Prato Brasileiro com Arroz, Feijão e Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/13-prato-brasileiro-com-arroz-feijao-e-frango.png',
    ingredients: [
      '3 colheres de sopa de arroz cozido',
      '1 concha pequena de feijão',
      '120g de filé de frango',
      'Salada de alface e tomate'
    ],
    substitutions: [
      'Frango -> Patinho grelhado ou ovos',
      'Arroz -> Batata cozida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Tempere e grelhe o frango até dourar por completo.' },
      { title: 'Passo 2', text: 'Aqueça arroz e feijão já preparados.' },
      { title: 'Passo 3', text: 'Monte o prato com salada fresca.' }
    ],
    nutrition: { calories: 480, protein: '39g', carbs: '52g', fats: '12g' }
  },
  {
    id: 'extra-carne-moida-arroz-legumes',
    title: 'Carne Moída com Arroz e Legumes',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '18 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/14-carne-moida-com-arroz-e-legumes.png',
    ingredients: [
      '120g de patinho moído',
      '3 colheres de sopa de arroz cozido',
      '1/2 xícara de cenoura e abobrinha picadas',
      'Cebola, alho e sal'
    ],
    substitutions: [
      'Patinho -> Frango moído',
      'Arroz -> Batata ou mandioca cozida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Refogue cebola e alho e acrescente a carne.' },
      { title: 'Passo 2', text: 'Junte os legumes e cozinhe até ficarem macios.' },
      { title: 'Passo 3', text: 'Sirva com o arroz aquecido.' }
    ],
    nutrition: { calories: 450, protein: '32g', carbs: '45g', fats: '15g' }
  },
  {
    id: 'extra-picadinho-carne-batata',
    title: 'Picadinho de Carne com Batata e Cenoura',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/15-picadinho-de-carne-com-batata-e-cenoura.png',
    ingredients: [
      '150g de carne bovina em cubos',
      '1 batata pequena em cubos',
      '1/2 cenoura em rodelas',
      'Tomate, cebola, alho e cheiro-verde'
    ],
    substitutions: [
      'Carne bovina -> Frango em cubos',
      'Batata -> Mandioca'
    ],
    steps: [
      { title: 'Passo 1', text: 'Doure a carne com cebola e alho.' },
      { title: 'Passo 2', text: 'Adicione tomate, batata, cenoura e um pouco de água.' },
      { title: 'Passo 3', text: 'Tampe e cozinhe até os legumes amaciarem; finalize com cheiro-verde.' }
    ],
    nutrition: { calories: 390, protein: '32g', carbs: '31g', fats: '15g' }
  },
  {
    id: 'extra-frango-acebolado',
    title: 'Frango Acebolado com Arroz e Salada',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/16-frango-acebolado-com-arroz-e-salada.png',
    ingredients: [
      '130g de filé de frango em tiras',
      '1/2 cebola fatiada',
      '3 colheres de sopa de arroz cozido',
      'Salada de folhas e tomate'
    ],
    substitutions: [
      'Frango -> Carne bovina em tiras',
      'Arroz -> Batata cozida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Grelhe o frango temperado em frigideira quente.' },
      { title: 'Passo 2', text: 'Junte a cebola e deixe dourar levemente.' },
      { title: 'Passo 3', text: 'Sirva com arroz e salada.' }
    ],
    nutrition: { calories: 420, protein: '37g', carbs: '39g', fats: '12g' }
  },
  {
    id: 'extra-macarrao-bolonhesa',
    title: 'Macarrão com Molho de Carne Moída',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '20 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/17-macarrao-com-molho-de-carne-moida.png',
    ingredients: [
      '1 prato raso de macarrão cozido',
      '100g de carne moída',
      '1/2 xícara de molho de tomate',
      'Cebola, alho e cheiro-verde'
    ],
    substitutions: [
      'Carne moída -> Frango desfiado',
      'Macarrão comum -> Macarrão integral'
    ],
    steps: [
      { title: 'Passo 1', text: 'Cozinhe o macarrão conforme a embalagem.' },
      { title: 'Passo 2', text: 'Refogue a carne com cebola e alho e acrescente o molho.' },
      { title: 'Passo 3', text: 'Misture ou sirva o molho sobre o macarrão e finalize com cheiro-verde.' }
    ],
    nutrition: { calories: 490, protein: '29g', carbs: '61g', fats: '14g' }
  },
  {
    id: 'extra-frango-cremoso-milho',
    title: 'Frango Cremoso com Milho',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/18-frango-cremoso-com-milho.png',
    ingredients: [
      '150g de peito de frango em cubos',
      '2 colheres de sopa de milho',
      '1 colher de sopa de requeijão',
      'Alho, cebola e sal'
    ],
    substitutions: [
      'Requeijão -> Iogurte natural',
      'Milho -> Ervilha'
    ],
    steps: [
      { title: 'Passo 1', text: 'Doure o frango com alho e cebola.' },
      { title: 'Passo 2', text: 'Adicione milho e um pequeno gole de água.' },
      { title: 'Passo 3', text: 'Desligue o fogo, misture o requeijão e sirva.' }
    ],
    nutrition: { calories: 320, protein: '37g', carbs: '13g', fats: '13g' }
  },
  {
    id: 'extra-escondidinho-mandioca-carne',
    title: 'Escondidinho Rápido de Mandioca com Carne',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/19-escondidinho-rapido-de-mandioca-com-carne.png',
    ingredients: [
      '1 xícara de mandioca cozida e amassada',
      '120g de carne moída refogada',
      '1 colher de chá de manteiga',
      'Cheiro-verde e sal'
    ],
    substitutions: [
      'Mandioca -> Batata',
      'Carne moída -> Frango desfiado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Amasse a mandioca quente com manteiga e sal.' },
      { title: 'Passo 2', text: 'Coloque a carne refogada em um refratário pequeno.' },
      { title: 'Passo 3', text: 'Cubra com o purê e aqueça até ficar bem quente.' }
    ],
    nutrition: { calories: 440, protein: '29g', carbs: '47g', fats: '15g' }
  },
  {
    id: 'extra-arroz-forno-frango',
    title: 'Arroz de Forno Rápido com Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '20 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/20-arroz-de-forno-rapido-com-frango.png',
    ingredients: [
      '1 xícara de arroz cozido',
      '100g de frango desfiado',
      '2 colheres de sopa de milho ou ervilha',
      '2 colheres de sopa de queijo ralado'
    ],
    substitutions: [
      'Frango -> Carne moída',
      'Milho -> Cenoura ralada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture arroz, frango e legumes em um refratário.' },
      { title: 'Passo 2', text: 'Cubra com o queijo.' },
      { title: 'Passo 3', text: 'Leve ao forno ou airfryer até aquecer e gratinar.' }
    ],
    nutrition: { calories: 430, protein: '30g', carbs: '48g', fats: '13g' }
  },
  {
    id: 'extra-bife-arroz-feijao',
    title: 'Bife Acebolado com Arroz, Feijão e Salada',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/21-bife-acebolado-com-arroz-feijao-e-salada.png',
    ingredients: [
      '120g de bife de patinho ou coxão mole',
      '3 colheres de sopa de arroz',
      '1 concha pequena de feijão',
      '1/2 cebola e salada simples'
    ],
    substitutions: [
      'Bife -> Filé de frango',
      'Arroz -> Batata cozida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Grelhe o bife temperado até o ponto desejado.' },
      { title: 'Passo 2', text: 'Na mesma frigideira, doure rapidamente a cebola.' },
      { title: 'Passo 3', text: 'Sirva com arroz, feijão e salada.' }
    ],
    nutrition: { calories: 500, protein: '38g', carbs: '49g', fats: '16g' }
  },
  {
    id: 'extra-tilapia-arroz-legumes',
    title: 'Tilápia Grelhada com Arroz e Legumes',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '18 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/22-tilapia-grelhada-com-arroz-e-legumes.png',
    ingredients: [
      '150g de filé de tilápia',
      '3 colheres de sopa de arroz',
      '1 xícara de legumes cozidos ou refogados',
      'Limão, alho e sal'
    ],
    substitutions: [
      'Tilápia -> Pescada ou frango',
      'Arroz -> Batata'
    ],
    steps: [
      { title: 'Passo 1', text: 'Tempere o peixe com limão, alho e sal.' },
      { title: 'Passo 2', text: 'Grelhe por alguns minutos de cada lado até cozinhar por completo.' },
      { title: 'Passo 3', text: 'Sirva com arroz e legumes.' }
    ],
    nutrition: { calories: 390, protein: '35g', carbs: '41g', fats: '9g' }
  },
  {
    id: 'extra-omelete-arroz-feijao',
    title: 'Omelete Completo com Arroz, Feijão e Salada',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '12 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/23-omelete-completo-com-arroz-feijao-e-salada.png',
    ingredients: [
      '2 ovos',
      '2 colheres de sopa de arroz',
      '1/2 concha de feijão',
      'Tomate, cebola e folhas'
    ],
    substitutions: [
      'Ovos -> Frango desfiado',
      'Arroz -> Batata cozida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Prepare uma omelete com tomate e cebola.' },
      { title: 'Passo 2', text: 'Aqueça arroz e feijão.' },
      { title: 'Passo 3', text: 'Sirva com folhas frescas ao lado.' }
    ],
    nutrition: { calories: 410, protein: '22g', carbs: '43g', fats: '17g' }
  },
  {
    id: 'extra-frango-batata-airfryer',
    title: 'Frango com Batata e Legumes na Airfryer',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/24-frango-com-batata-e-legumes-na-airfryer.png',
    ingredients: [
      '150g de frango em cubos',
      '1 batata média em cubos pequenos',
      '1/2 cenoura ou abobrinha',
      'Azeite, alho, sal e páprica'
    ],
    substitutions: [
      'Frango -> Peixe firme',
      'Batata -> Batata-doce ou mandioca pré-cozida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Tempere frango, batata e legumes.' },
      { title: 'Passo 2', text: 'Distribua na airfryer sem amontoar.' },
      { title: 'Passo 3', text: 'Asse até o frango cozinhar e a batata dourar, mexendo na metade do tempo.' }
    ],
    nutrition: { calories: 420, protein: '36g', carbs: '39g', fats: '13g' }
  },
  {
    id: 'extra-panqueca-carne',
    title: 'Panqueca Simples de Carne Moída',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '20 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/25-panqueca-simples-de-carne-moida.png',
    ingredients: [
      '1 ovo',
      '3 colheres de sopa de farinha de aveia',
      '1/3 xícara de leite',
      '100g de carne moída refogada'
    ],
    substitutions: [
      'Carne -> Frango desfiado',
      'Farinha de aveia -> Farinha de trigo'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture ovo, farinha e leite até formar massa líquida.' },
      { title: 'Passo 2', text: 'Faça discos finos em frigideira antiaderente.' },
      { title: 'Passo 3', text: 'Recheie com a carne, enrole e sirva com molho de tomate se desejar.' }
    ],
    nutrition: { calories: 410, protein: '30g', carbs: '34g', fats: '17g' }
  },
  {
    id: 'extra-feijao-tropeiro-simples',
    title: 'Feijão Tropeiro Simplificado com Ovo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/26-feijao-tropeiro-simplificado-com-ovo.png',
    ingredients: [
      '1 concha de feijão cozido e escorrido',
      '1 ovo',
      '2 colheres de sopa de farinha de mandioca',
      'Cebola, couve e cheiro-verde'
    ],
    substitutions: [
      'Farinha de mandioca -> Farofa simples',
      'Couve -> Repolho fatiado'
    ],
    steps: [
      { title: 'Passo 1', text: 'Refogue cebola e couve rapidamente.' },
      { title: 'Passo 2', text: 'Acrescente o feijão e o ovo mexido.' },
      { title: 'Passo 3', text: 'Finalize com farinha de mandioca aos poucos e cheiro-verde.' }
    ],
    nutrition: { calories: 390, protein: '20g', carbs: '45g', fats: '15g' }
  },
  {
    id: 'extra-frango-panela-legumes',
    title: 'Frango de Panela com Legumes',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '25 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/27-frango-de-panela-com-legumes.png',
    ingredients: [
      '150g de frango em cubos',
      '1/2 cenoura',
      '1/2 abobrinha',
      'Tomate, cebola, alho e sal'
    ],
    substitutions: [
      'Frango -> Carne bovina magra',
      'Abobrinha -> Chuchu'
    ],
    steps: [
      { title: 'Passo 1', text: 'Doure o frango com cebola e alho.' },
      { title: 'Passo 2', text: 'Adicione tomate e cenoura com um pouco de água.' },
      { title: 'Passo 3', text: 'Junte a abobrinha no final e cozinhe até ficar macia.' }
    ],
    nutrition: { calories: 300, protein: '36g', carbs: '18g', fats: '10g' }
  },
  {
    id: 'extra-bowl-brasileiro',
    title: 'Bowl Brasileiro de Arroz, Feijão e Carne',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Almoço',
    prepTime: '10 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/28-bowl-brasileiro-de-arroz-feijao-e-carne.png',
    ingredients: [
      '3 colheres de sopa de arroz pronto',
      '1 concha pequena de feijão',
      '100g de carne moída pronta',
      'Tomate, cenoura ralada e folhas'
    ],
    substitutions: [
      'Carne moída -> Frango desfiado',
      'Arroz -> Batata cozida em cubos'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça arroz, feijão e carne.' },
      { title: 'Passo 2', text: 'Coloque tudo em uma tigela sem misturar demais.' },
      { title: 'Passo 3', text: 'Complete com tomate, cenoura e folhas.' }
    ],
    nutrition: { calories: 470, protein: '31g', carbs: '52g', fats: '14g' }
  },
  {
    id: 'extra-pizza-frigideira',
    title: 'Pizza de Frigideira com Queijo e Tomate',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/29-pizza-de-frigideira-com-queijo-e-tomate.png',
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de goma de tapioca',
      '2 fatias finas de muçarela',
      '1/2 tomate e orégano'
    ],
    substitutions: [
      'Tapioca -> Farinha de aveia',
      'Muçarela -> Queijo minas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture ovo e tapioca.' },
      { title: 'Passo 2', text: 'Cozinhe a massa em frigideira e vire quando firmar.' },
      { title: 'Passo 3', text: 'Cubra com queijo, tomate e orégano; tampe até derreter.' }
    ],
    nutrition: { calories: 260, protein: '16g', carbs: '19g', fats: '13g' }
  },
  {
    id: 'extra-sopa-mandioquinha-frango',
    title: 'Sopa de Mandioquinha com Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '20 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/30-sopa-de-mandioquinha-com-frango.png',
    ingredients: [
      '2 mandioquinhas médias cozidas',
      '100g de frango desfiado',
      '1 dente de alho',
      'Sal e cheiro-verde'
    ],
    substitutions: [
      'Mandioquinha -> Abóbora ou batata',
      'Frango -> Carne moída pronta'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata a mandioquinha com parte da água do cozimento.' },
      { title: 'Passo 2', text: 'Refogue alho e frango em uma panela.' },
      { title: 'Passo 3', text: 'Junte o creme, ajuste o sal e aqueça bem.' }
    ],
    nutrition: { calories: 260, protein: '23g', carbs: '31g', fats: '5g' }
  },
  {
    id: 'extra-omelete-abobrinha-queijo',
    title: 'Omelete de Abobrinha e Queijo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/31-omelete-de-abobrinha-e-queijo.png',
    ingredients: [
      '2 ovos',
      '1/2 xícara de abobrinha ralada',
      '1 fatia de queijo minas',
      'Sal e orégano'
    ],
    substitutions: [
      'Abobrinha -> Cenoura',
      'Queijo minas -> Muçarela ou ricota'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata os ovos com sal e orégano.' },
      { title: 'Passo 2', text: 'Misture a abobrinha e despeje na frigideira.' },
      { title: 'Passo 3', text: 'Adicione queijo, dobre e cozinhe até firmar.' }
    ],
    nutrition: { calories: 220, protein: '17g', carbs: '5g', fats: '15g' }
  },
  {
    id: 'extra-torta-frigideira-legumes',
    title: 'Torta de Legumes de Frigideira',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '12 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/32-torta-de-legumes-de-frigideira.png',
    ingredients: [
      '2 ovos',
      '3 colheres de sopa de farinha de aveia',
      '1 xícara de legumes ralados',
      'Sal e 1 fio de azeite'
    ],
    substitutions: [
      'Aveia -> Goma de tapioca',
      'Legumes -> Seleta de legumes escorrida'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture ovos, aveia, legumes e sal.' },
      { title: 'Passo 2', text: 'Despeje em frigideira untada e tampe.' },
      { title: 'Passo 3', text: 'Doure em fogo baixo dos dois lados.' }
    ],
    nutrition: { calories: 280, protein: '16g', carbs: '24g', fats: '13g' }
  },
  {
    id: 'extra-wrap-frango-salada',
    title: 'Wrap de Frango com Salada',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/33-wrap-de-frango-com-salada.png',
    ingredients: [
      '1 wrap ou Rap10',
      '3 colheres de sopa de frango desfiado',
      '1 colher de sopa de requeijão',
      'Alface, tomate e cenoura'
    ],
    substitutions: [
      'Frango -> Atum escorrido',
      'Wrap -> Pão sírio pequeno'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture o frango com o requeijão.' },
      { title: 'Passo 2', text: 'Aqueça o wrap rapidamente.' },
      { title: 'Passo 3', text: 'Recheie com frango e vegetais e enrole.' }
    ],
    nutrition: { calories: 300, protein: '25g', carbs: '29g', fats: '10g' }
  },
  {
    id: 'extra-crepioca-queijo-tomate',
    title: 'Crepioca de Queijo e Tomate',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '7 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/34-crepioca-de-queijo-e-tomate.png',
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de tapioca',
      '1 fatia de queijo',
      'Tomate e orégano'
    ],
    substitutions: [
      'Queijo -> Ricota',
      'Tomate -> Cenoura ralada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture ovo e tapioca.' },
      { title: 'Passo 2', text: 'Cozinhe em frigideira até firmar e vire.' },
      { title: 'Passo 3', text: 'Recheie com queijo, tomate e orégano.' }
    ],
    nutrition: { calories: 250, protein: '14g', carbs: '19g', fats: '12g' }
  },
  {
    id: 'extra-sopa-abobora-carne',
    title: 'Sopa de Abóbora com Carne Moída',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '20 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/35-sopa-de-abobora-com-carne-moida.png',
    ingredients: [
      '1 e 1/2 xícara de abóbora cozida',
      '100g de carne moída pronta',
      'Cebola e alho',
      'Sal e cheiro-verde'
    ],
    substitutions: [
      'Carne moída -> Frango desfiado',
      'Abóbora -> Mandioquinha'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata a abóbora cozida com água até formar creme.' },
      { title: 'Passo 2', text: 'Aqueça a carne com cebola e alho.' },
      { title: 'Passo 3', text: 'Junte o creme, ajuste o sal e finalize com cheiro-verde.' }
    ],
    nutrition: { calories: 290, protein: '23g', carbs: '25g', fats: '11g' }
  },
  {
    id: 'extra-batata-recheada-frango',
    title: 'Batata Recheada com Frango Cremoso',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/36-batata-recheada-com-frango-cremoso.png',
    ingredients: [
      '1 batata média cozida',
      '100g de frango desfiado',
      '1 colher de sopa de requeijão',
      'Tomate e cheiro-verde'
    ],
    substitutions: [
      'Frango -> Carne moída',
      'Requeijão -> Ricota amassada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Abra a batata cozida ao meio e amasse levemente o centro.' },
      { title: 'Passo 2', text: 'Misture frango, requeijão, tomate e cheiro-verde.' },
      { title: 'Passo 3', text: 'Recheie a batata e aqueça por alguns minutos.' }
    ],
    nutrition: { calories: 360, protein: '28g', carbs: '39g', fats: '10g' }
  },
  {
    id: 'extra-peixe-tomate-cebola',
    title: 'Peixe de Frigideira com Tomate e Cebola',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/37-peixe-de-frigideira-com-tomate-e-cebola.png',
    ingredients: [
      '150g de peixe branco',
      '1/2 tomate',
      '1/4 cebola',
      'Limão, alho, sal e azeite'
    ],
    substitutions: [
      'Peixe -> Frango',
      'Tomate -> Abobrinha em rodelas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Tempere o peixe com limão, alho e sal.' },
      { title: 'Passo 2', text: 'Grelhe em frigideira com um fio de azeite.' },
      { title: 'Passo 3', text: 'Junte tomate e cebola, tampe por alguns minutos e sirva.' }
    ],
    nutrition: { calories: 230, protein: '31g', carbs: '7g', fats: '9g' }
  },
  {
    id: 'extra-sanduiche-frango-quente',
    title: 'Sanduíche Quente de Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/38-sanduiche-quente-de-frango.png',
    ingredients: [
      '2 fatias de pão integral',
      '3 colheres de sopa de frango desfiado',
      '1 fatia de queijo',
      'Tomate e orégano'
    ],
    substitutions: [
      'Frango -> Atum',
      'Queijo -> Ricota'
    ],
    steps: [
      { title: 'Passo 1', text: 'Monte o sanduíche com frango, queijo e tomate.' },
      { title: 'Passo 2', text: 'Tempere com orégano.' },
      { title: 'Passo 3', text: 'Doure na frigideira ou sanduicheira até aquecer por completo.' }
    ],
    nutrition: { calories: 330, protein: '27g', carbs: '34g', fats: '10g' }
  },
  {
    id: 'extra-mexidao-arroz-ovo',
    title: 'Mexidão de Arroz, Feijão e Ovo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '10 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/39-mexidao-de-arroz-feijao-e-ovo.png',
    ingredients: [
      '3 colheres de sopa de arroz pronto',
      '1/2 concha de feijão',
      '2 ovos',
      'Tomate, cebola e cheiro-verde'
    ],
    substitutions: [
      'Ovos -> Frango desfiado',
      'Arroz -> Batata cozida em cubos'
    ],
    steps: [
      { title: 'Passo 1', text: 'Refogue rapidamente cebola e tomate.' },
      { title: 'Passo 2', text: 'Acrescente arroz e feijão e aqueça.' },
      { title: 'Passo 3', text: 'Abra espaço na frigideira, cozinhe os ovos e misture tudo.' }
    ],
    nutrition: { calories: 430, protein: '21g', carbs: '48g', fats: '17g' }
  },
  {
    id: 'extra-frango-legumes-frigideira',
    title: 'Frango com Legumes na Frigideira',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Jantar',
    prepTime: '15 Minutos',
    difficulty: 'Fácil',
    image: '/recipes/40-frango-com-legumes-na-frigideira.png',
    ingredients: [
      '130g de frango em tiras',
      '1/2 cenoura em tiras finas',
      '1/2 abobrinha',
      'Cebola, alho e sal'
    ],
    substitutions: [
      'Frango -> Carne em tiras',
      'Abobrinha -> Chuchu pré-cozido'
    ],
    steps: [
      { title: 'Passo 1', text: 'Doure o frango com alho e cebola.' },
      { title: 'Passo 2', text: 'Adicione a cenoura e cozinhe por alguns minutos.' },
      { title: 'Passo 3', text: 'Junte a abobrinha e mexa até ficar macia, sem desmanchar.' }
    ],
    nutrition: { calories: 280, protein: '34g', carbs: '14g', fats: '10g' }
  },
  {
    id: 'extra-fruta-iogurte',
    title: 'Fruta com Iogurte Natural',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/41-fruta-com-iogurte-natural.png',
    ingredients: [
      '1 fruta de sua preferência',
      '1 pote de iogurte natural',
      'Canela a gosto'
    ],
    substitutions: [
      'Iogurte -> 1 copo de leite',
      'Fruta -> A fruta que tiver em casa'
    ],
    steps: [
      { title: 'Passo 1', text: 'Lave e corte a fruta se necessário.' },
      { title: 'Passo 2', text: 'Coloque o iogurte em uma tigela.' },
      { title: 'Passo 3', text: 'Adicione a fruta e finalize com canela.' }
    ],
    nutrition: { calories: 180, protein: '8g', carbs: '29g', fats: '4g' }
  },
  {
    id: 'extra-banana-pasta-amendoim',
    title: 'Banana com Pasta de Amendoim',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/42-banana-com-pasta-de-amendoim.png',
    ingredients: [
      '1 banana',
      '1 colher de sobremesa de pasta de amendoim sem açúcar',
      'Canela a gosto'
    ],
    substitutions: [
      'Pasta de amendoim -> 1 colher de castanhas picadas',
      'Banana -> Maçã'
    ],
    steps: [
      { title: 'Passo 1', text: 'Corte a banana ao meio ou em rodelas.' },
      { title: 'Passo 2', text: 'Espalhe a pasta de amendoim.' },
      { title: 'Passo 3', text: 'Finalize com canela.' }
    ],
    nutrition: { calories: 190, protein: '5g', carbs: '29g', fats: '7g' }
  },
  {
    id: 'extra-sanduiche-natural-frango',
    title: 'Sanduíche Natural de Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/43-sanduiche-natural-de-frango.png',
    ingredients: [
      '2 fatias de pão integral',
      '3 colheres de sopa de frango desfiado',
      '1 colher de chá de requeijão',
      'Cenoura ralada e alface'
    ],
    substitutions: [
      'Frango -> Ovo cozido amassado',
      'Pão integral -> Pão francês pequeno'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture frango, requeijão e cenoura.' },
      { title: 'Passo 2', text: 'Coloque alface sobre o pão.' },
      { title: 'Passo 3', text: 'Adicione o recheio e feche o sanduíche.' }
    ],
    nutrition: { calories: 280, protein: '23g', carbs: '32g', fats: '7g' }
  },
  {
    id: 'extra-pao-queijo-minas',
    title: 'Pão com Queijo Minas e Café',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/44-pao-com-queijo-minas-e-cafe.png',
    ingredients: [
      '1 pão francês pequeno',
      '2 fatias finas de queijo minas',
      'Café ou chá sem excesso de açúcar'
    ],
    substitutions: [
      'Pão francês -> 2 fatias de pão integral',
      'Queijo minas -> Muçarela'
    ],
    steps: [
      { title: 'Passo 1', text: 'Abra o pão e coloque o queijo.' },
      { title: 'Passo 2', text: 'Aqueça rapidamente se preferir.' },
      { title: 'Passo 3', text: 'Sirva com café ou chá.' }
    ],
    nutrition: { calories: 270, protein: '13g', carbs: '31g', fats: '10g' }
  },
  {
    id: 'extra-iogurte-mamao-aveia',
    title: 'Iogurte com Mamão e Aveia',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '3 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/45-iogurte-com-mamao-e-aveia.png',
    ingredients: [
      '1 pote de iogurte natural',
      '1/2 mamão papaia',
      '1 colher de sopa de aveia'
    ],
    substitutions: [
      'Mamão -> Banana ou maçã',
      'Aveia -> Chia ou granola simples'
    ],
    steps: [
      { title: 'Passo 1', text: 'Corte o mamão em cubos.' },
      { title: 'Passo 2', text: 'Misture com o iogurte.' },
      { title: 'Passo 3', text: 'Finalize com aveia.' }
    ],
    nutrition: { calories: 210, protein: '9g', carbs: '34g', fats: '5g' }
  },
  {
    id: 'extra-tapioca-queijo',
    title: 'Tapioca Pequena com Queijo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/46-tapioca-pequena-com-queijo.png',
    ingredients: [
      '2 colheres de sopa de goma de tapioca',
      '1 fatia de queijo minas ou muçarela',
      'Orégano'
    ],
    substitutions: [
      'Queijo -> Ricota',
      'Tapioca -> 1 fatia de pão integral'
    ],
    steps: [
      { title: 'Passo 1', text: 'Espalhe a tapioca em frigideira quente.' },
      { title: 'Passo 2', text: 'Quando firmar, coloque o queijo.' },
      { title: 'Passo 3', text: 'Finalize com orégano e dobre.' }
    ],
    nutrition: { calories: 190, protein: '8g', carbs: '20g', fats: '8g' }
  },
  {
    id: 'extra-ovo-cozido-fruta',
    title: 'Ovo Cozido com Fruta',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '10 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/47-ovo-cozido-com-fruta.png',
    ingredients: [
      '1 ovo',
      '1 fruta pequena',
      'Sal a gosto'
    ],
    substitutions: [
      'Ovo -> 1 fatia de queijo minas',
      'Fruta -> A fruta disponível'
    ],
    steps: [
      { title: 'Passo 1', text: 'Cozinhe o ovo por cerca de 9 minutos após a água ferver.' },
      { title: 'Passo 2', text: 'Descasque e tempere levemente.' },
      { title: 'Passo 3', text: 'Sirva com a fruta.' }
    ],
    nutrition: { calories: 150, protein: '7g', carbs: '19g', fats: '5g' }
  },
  {
    id: 'extra-pipoca-caseira',
    title: 'Pipoca Caseira de Panela',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '7 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/48-pipoca-caseira-de-panela.png',
    ingredients: [
      '3 colheres de sopa de milho para pipoca',
      '1 colher de chá de óleo ou azeite',
      'Sal moderado'
    ],
    substitutions: [
      'Óleo -> Azeite',
      'Sal -> Páprica ou ervas secas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça o óleo com o milho em panela tampada.' },
      { title: 'Passo 2', text: 'Sacuda a panela ocasionalmente enquanto estoura.' },
      { title: 'Passo 3', text: 'Desligue quando os estouros diminuírem e tempere.' }
    ],
    nutrition: { calories: 170, protein: '4g', carbs: '27g', fats: '6g' }
  },
  {
    id: 'extra-maca-queijo',
    title: 'Maçã com Queijo Minas',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/49-maca-com-queijo-minas.png',
    ingredients: [
      '1 maçã',
      '2 fatias finas de queijo minas'
    ],
    substitutions: [
      'Maçã -> Pera',
      'Queijo minas -> Muçarela ou ricota'
    ],
    steps: [
      { title: 'Passo 1', text: 'Lave e fatie a maçã.' },
      { title: 'Passo 2', text: 'Corte o queijo em pedaços.' },
      { title: 'Passo 3', text: 'Sirva os dois juntos.' }
    ],
    nutrition: { calories: 180, protein: '8g', carbs: '24g', fats: '7g' }
  },
  {
    id: 'extra-vitamina-banana-cacau',
    title: 'Vitamina de Banana com Cacau',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'Lanche',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/50-vitamina-de-banana-com-cacau.png',
    ingredients: [
      '1 banana pequena',
      '200 ml de leite',
      '1 colher de chá de cacau 100%',
      'Canela a gosto'
    ],
    substitutions: [
      'Leite -> Iogurte natural diluído',
      'Cacau -> Canela'
    ],
    steps: [
      { title: 'Passo 1', text: 'Coloque tudo no liquidificador.' },
      { title: 'Passo 2', text: 'Bata até ficar homogêneo.' },
      { title: 'Passo 3', text: 'Sirva imediatamente.' }
    ],
    nutrition: { calories: 220, protein: '9g', carbs: '38g', fats: '5g' }
  },
  {
    id: 'extra-sos-omelete-caneca',
    title: 'SOS: Omelete de Caneca',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '4 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/51-omelete-de-caneca.png',
    ingredients: [
      '2 ovos',
      '1 colher de sopa de tomate picado',
      '1 colher de sopa de queijo picado',
      'Sal e orégano'
    ],
    substitutions: [
      'Queijo -> Frango desfiado',
      'Tomate -> Cenoura ralada'
    ],
    steps: [
      { title: 'Passo 1', text: 'Bata os ovos em uma caneca grande própria para micro-ondas.' },
      { title: 'Passo 2', text: 'Misture tomate, queijo e temperos.' },
      { title: 'Passo 3', text: 'Leve ao micro-ondas em intervalos curtos até cozinhar por completo.' }
    ],
    nutrition: { calories: 210, protein: '16g', carbs: '4g', fats: '14g' }
  },
  {
    id: 'extra-sos-wrap-atum',
    title: 'SOS: Wrap de Atum',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/52-wrap-de-atum.png',
    ingredients: [
      '1 wrap ou Rap10',
      '1/2 lata de atum escorrido',
      '1 colher de chá de requeijão',
      'Tomate e alface'
    ],
    substitutions: [
      'Atum -> Frango pronto',
      'Wrap -> Pão sírio'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture o atum com o requeijão.' },
      { title: 'Passo 2', text: 'Distribua no wrap com tomate e alface.' },
      { title: 'Passo 3', text: 'Enrole e sirva frio ou aquecido.' }
    ],
    nutrition: { calories: 270, protein: '22g', carbs: '27g', fats: '9g' }
  },
  {
    id: 'extra-sos-pao-ovo',
    title: 'SOS: Pão com Ovo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/53-pao-com-ovo.png',
    ingredients: [
      '1 pão francês pequeno',
      '2 ovos',
      'Sal e orégano'
    ],
    substitutions: [
      'Pão francês -> Pão integral',
      'Ovos -> Queijo minas'
    ],
    steps: [
      { title: 'Passo 1', text: 'Prepare os ovos mexidos em frigideira.' },
      { title: 'Passo 2', text: 'Abra e aqueça o pão rapidamente.' },
      { title: 'Passo 3', text: 'Recheie e finalize com orégano.' }
    ],
    nutrition: { calories: 320, protein: '17g', carbs: '31g', fats: '14g' }
  },
  {
    id: 'extra-sos-bowl-sobras',
    title: 'SOS: Bowl de Arroz, Feijão e Proteína Pronta',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/54-bowl-de-arroz-feijao-e-proteina-pronta.png',
    ingredients: [
      '3 colheres de arroz pronto',
      '1/2 concha de feijão pronto',
      '100g de frango, carne ou 2 ovos já preparados',
      'Tomate ou cenoura ralada'
    ],
    substitutions: [
      'Arroz -> Batata pronta',
      'Feijão -> Lentilha pronta'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça arroz, feijão e a proteína disponível.' },
      { title: 'Passo 2', text: 'Coloque em uma tigela.' },
      { title: 'Passo 3', text: 'Complete com tomate ou cenoura.' }
    ],
    nutrition: { calories: 430, protein: '28g', carbs: '48g', fats: '14g' }
  },
  {
    id: 'extra-sos-crepioca',
    title: 'SOS: Crepioca de Queijo',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/55-crepioca-de-queijo.png',
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de tapioca',
      '1 fatia de queijo',
      'Orégano'
    ],
    substitutions: [
      'Queijo -> Frango pronto',
      'Tapioca -> Farinha de aveia'
    ],
    steps: [
      { title: 'Passo 1', text: 'Misture ovo e tapioca.' },
      { title: 'Passo 2', text: 'Cozinhe em frigideira dos dois lados.' },
      { title: 'Passo 3', text: 'Recheie com queijo e orégano.' }
    ],
    nutrition: { calories: 240, protein: '13g', carbs: '18g', fats: '12g' }
  },
  {
    id: 'extra-sos-iogurte-banana',
    title: 'SOS: Iogurte com Banana e Aveia',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '2 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/56-iogurte-com-banana-e-aveia.png',
    ingredients: [
      '1 pote de iogurte natural',
      '1 banana',
      '2 colheres de sopa de aveia',
      'Canela'
    ],
    substitutions: [
      'Banana -> Mamão ou maçã',
      'Aveia -> Granola simples'
    ],
    steps: [
      { title: 'Passo 1', text: 'Coloque o iogurte em uma tigela.' },
      { title: 'Passo 2', text: 'Fatie a banana por cima.' },
      { title: 'Passo 3', text: 'Adicione aveia e canela.' }
    ],
    nutrition: { calories: 260, protein: '11g', carbs: '43g', fats: '6g' }
  },
  {
    id: 'extra-sos-sanduiche-queijo-tomate',
    title: 'SOS: Sanduíche de Queijo e Tomate',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '5 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/57-sanduiche-de-queijo-e-tomate.png',
    ingredients: [
      '2 fatias de pão integral',
      '2 fatias de queijo',
      'Tomate e orégano'
    ],
    substitutions: [
      'Pão integral -> Pão francês',
      'Queijo -> Ricota'
    ],
    steps: [
      { title: 'Passo 1', text: 'Monte o sanduíche.' },
      { title: 'Passo 2', text: 'Aqueça na frigideira ou sanduicheira.' },
      { title: 'Passo 3', text: 'Sirva assim que o queijo derreter.' }
    ],
    nutrition: { calories: 290, protein: '15g', carbs: '34g', fats: '10g' }
  },
  {
    id: 'extra-sos-frango-requeijao',
    title: 'SOS: Frango Cremoso de Frigideira',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/58-frango-cremoso-de-frigideira.png',
    ingredients: [
      '120g de frango desfiado pronto',
      '1 colher de sopa de requeijão',
      'Tomate picado',
      'Orégano ou cheiro-verde'
    ],
    substitutions: [
      'Frango -> Atum escorrido',
      'Requeijão -> Iogurte natural'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça o frango com o tomate.' },
      { title: 'Passo 2', text: 'Desligue o fogo e misture o requeijão.' },
      { title: 'Passo 3', text: 'Finalize com ervas e sirva com pão, arroz pronto ou salada.' }
    ],
    nutrition: { calories: 250, protein: '30g', carbs: '6g', fats: '11g' }
  },
  {
    id: 'extra-sos-mexidao',
    title: 'SOS: Mexidão de Geladeira',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '8 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/59-mexidao-de-geladeira.png',
    ingredients: [
      '1/2 xícara de arroz pronto',
      '1 ovo',
      '1/2 xícara de legumes já cozidos ou picados',
      'Sal e cheiro-verde'
    ],
    substitutions: [
      'Arroz -> Batata cozida',
      'Ovo -> Frango pronto'
    ],
    steps: [
      { title: 'Passo 1', text: 'Aqueça os legumes em frigideira.' },
      { title: 'Passo 2', text: 'Junte o arroz e abra espaço para o ovo.' },
      { title: 'Passo 3', text: 'Cozinhe o ovo, misture tudo e finalize com cheiro-verde.' }
    ],
    nutrition: { calories: 330, protein: '14g', carbs: '43g', fats: '11g' }
  },
  {
    id: 'extra-sos-tapioca-frango',
    title: 'SOS: Tapioca de Frango',
    summary: 'Receita prática, com ingredientes acessíveis e pensada para uma rotina real.',
    category: 'SOS - Até 10 Min',
    prepTime: '6 Minutos',
    difficulty: 'Muito Fácil',
    image: '/recipes/60-tapioca-de-frango.png',
    ingredients: [
      '3 colheres de sopa de tapioca',
      '3 colheres de sopa de frango desfiado pronto',
      '1 colher de chá de requeijão',
      'Orégano'
    ],
    substitutions: [
      'Frango -> Queijo e tomate',
      'Requeijão -> Ricota'
    ],
    steps: [
      { title: 'Passo 1', text: 'Espalhe a tapioca na frigideira e deixe firmar.' },
      { title: 'Passo 2', text: 'Misture frango e requeijão.' },
      { title: 'Passo 3', text: 'Recheie, finalize com orégano e dobre.' }
    ],
    nutrition: { calories: 270, protein: '20g', carbs: '28g', fats: '8g' }
  }
];

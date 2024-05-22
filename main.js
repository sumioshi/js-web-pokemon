function createHeader() {
    const header = document.querySelector('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Squirtle';
    header.appendChild(h1);
  }
  
  function createNavigation() {
    const nav = document.querySelector('nav');
    const ul = document.createElement('ul');
    const navItems = [
      { text: 'Informações sobre Squirtle', href: '#info-squirtle' },
      { text: 'Características', href: '#caracteristicas' },
      { text: 'Curiosidades', href: '#curiosidades' },
      { text: 'Artigo sobre Squirtle', href: '#artigo-sobre-squirtle' },
      { text: 'Recursos Adicionais', href: '#recursos-adicionais' },
      { text: 'Evolução', href: '#evolucao' }
    ];
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.text;
      a.href = item.href;
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
  }
  
  function createFooter() {
    const footer = document.querySelector('footer');
    const p = document.createElement('p');
    p.textContent = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.';
    
    const topLink = document.createElement('a');
    topLink.href = '#';
    topLink.textContent = 'Voltar para o topo';
  
    const contactLink = document.createElement('a');
    contactLink.href = 'mailto:contato@example.com';
    contactLink.textContent = 'Contato via e-mail';
  
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+5555555555';
    phoneLink.textContent = 'Telefone: (55) 5555-5555';
  
    footer.appendChild(topLink);
    footer.appendChild(document.createElement('br'));
    footer.appendChild(contactLink);
    footer.appendChild(document.createElement('br'));
    footer.appendChild(phoneLink);
    footer.appendChild(document.createElement('br'));
    footer.appendChild(p);
  }
  
  function createSquirtleInfoSection() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = 'info-squirtle';
  
    const title = document.createElement('h2');
    title.textContent = 'Informações sobre Squirtle';
    section.appendChild(title);
  
    const infoDiv = document.createElement('div');
    const squirtleImg = document.createElement('img');
    squirtleImg.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png';
    squirtleImg.alt = 'Imagem do Squirtle';
    infoDiv.appendChild(squirtleImg);
  
    const wartortleImg = document.createElement('img');
    wartortleImg.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png';
    wartortleImg.alt = 'Imagem do Wartortle';
    infoDiv.appendChild(wartortleImg);
  
    section.appendChild(infoDiv);
  
    const description = document.createElement('p');
    description.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';
    section.appendChild(description);
  
    main.appendChild(section);
  }
  
  function createCharacteristicsSection() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = 'caracteristicas';
  
    const title = document.createElement('h2');
    title.textContent = 'Características';
    section.appendChild(title);
  
    const description = document.createElement('p');
    description.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';
    section.appendChild(description);
  
    main.appendChild(section);
  }
  
  function createCuriositiesSection() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = 'curiosidades';
  
    const title = document.createElement('h2');
    title.textContent = 'Curiosidades';
    section.appendChild(title);
  
    const ul = document.createElement('ul');
    const curiosities = [
      'Squirtle é um dos Pokémon mais populares e adoráveis.',
      'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
      'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
    ];
    curiosities.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
  
    section.appendChild(ul);
    main.appendChild(section);
  }
  
  function createArticleSection() {
    const main = document.querySelector('main');
    const article = document.createElement('article');
    article.id = 'artigo-sobre-squirtle';
  
    const title = document.createElement('h2');
    title.textContent = 'Squirtle: O Amigo Aquático';
    article.appendChild(title);
  
    const paragraphs = [
      'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.',
      'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.',
      'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.'
    ];
    paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.textContent = text;
      article.appendChild(p);
    });
  
    main.appendChild(article);
  }
  
  function createResourcesSection() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = 'recursos-adicionais';
  
    const title = document.createElement('h2');
    title.textContent = 'Recursos Adicionais';
    section.appendChild(title);
  
    const ul = document.createElement('ul');
    const resources = [
      { text: 'Pokédex - Squirtle', href: 'https://www.pokemon.com/br/pokedex/squirtle' },
      { text: 'Bulbapedia - Squirtle', href: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon)' }
    ];
    resources.forEach(resource => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = resource.text;
      a.href = resource.href;
      a.target = '_blank';
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    section.appendChild(ul);
    main.appendChild(section);
  }
  
  function createEvolutionSection() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.id = 'evolucao';
  
    const title = document.createElement('h2');
    title.textContent = 'Evoluções';
    section.appendChild(title);
  
    const ul = document.createElement('ul');
    const evolutions = [
      { name: 'Squirtle', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
      { name: 'Wartortle', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png' },
      { name: 'Blastoise', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png' }
    ];
    evolutions.forEach((evolution, index) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = evolution.img;
      img.alt = `Imagem do ${evolution.name}`;
      li.appendChild(img);
  
      const caption = document.createElement('figcaption');
      caption.textContent = `${index + 1}. ${evolution.name}`;
      li.appendChild(caption);
      ul.appendChild(li);
    });
  
    section.appendChild(ul);
    main.appendChild(section);
  }
  
  function init() {
    createHeader();
    createNavigation();
    createSquirtleInfoSection();
    createCharacteristicsSection();
    createCuriositiesSection();
    createArticleSection();
    createResourcesSection();
    createEvolutionSection();
    createFooter();
  }
  
  document.addEventListener('DOMContentLoaded', init);
  
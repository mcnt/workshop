class Colaborador {
    constructor(id, nome) {
      this.id = id;
      this.nome = nome;
    }
  }
  
  class Workshop {
    constructor(id, nome, dataRealizacao, descricao, colaboradores = []) {
      this.id = id;
      this.nome = nome;
      this.dataRealizacao = dataRealizacao;
      this.descricao = descricao;
      this.colaboradores = colaboradores;
    }
  }
  
  class Ata {
    constructor(id, workshop, colaboradores) {
      this.id = id;
      this.workshop = workshop;
      this.colaboradores = colaboradores;
    }
  }
  
  // Gerando dados fictícios (mock)
  const colaborador1 = new Colaborador(1, "João");
  const colaborador2 = new Colaborador(2, "Maria");
  
  const workshop1 = new Workshop(1, "Workshop de Vue.js", new Date(), "Introdução ao Vue.js", [colaborador1]);
  const workshop2 = new Workshop(2, "Workshop de React", new Date(), "Introdução ao React", [colaborador2]);
  const workshops = [workshop1, workshop2];

  const atas = [
    new Ata(1, workshop1, [colaborador1]),
    new Ata(2, workshop2, [colaborador2])
  ];
  
  
  // Exportando os mocks
  export { colaborador1, colaborador2, workshop1, workshop2, atas, workshops};
  
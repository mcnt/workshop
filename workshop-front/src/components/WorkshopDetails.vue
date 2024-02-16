<template>
  <div class="bg-white min-h-screen flex items-start justify-center p-8">
    <div class="bg-gray-300 p-4 rounded-lg mt-4 max-w-2xl"> <!-- Aumentei max-w-2xl -->
      <h2 class="text-lg font-bold mb-2">Detalhes do Workshop</h2>
      <p><span class="font-bold">Nome:</span> {{ workshop.nome }}</p>
      <p><span class="font-bold">Data:</span> {{ workshop.dataRealizacao }}</p>
      <p><span class="font-bold">Descrição:</span> {{ workshop.descricao }}</p>
      <h3 class="text-lg font-bold mt-4">Colaboradores Presentes:</h3>
      <ul>
        <li v-for="colaborador in workshop.colaboradores" :key="colaborador.id">
          {{ colaborador.nome }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { workshops } from '../mock';
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    
    // Acessa os detalhes do workshop com base no ID
    const workshop = workshops.find(workshop => workshop.id === parseInt(props.id));


    return {
      workshop
    };
  }
};
</script>

  
  <style>
  /* Estilize conforme necessário com classes do Tailwind CSS */
  </style>
  
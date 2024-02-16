<template>
    <div class="bg-gray-200 min-h-screen p-8">
      <div class="bg-gray-700 p-4 rounded-lg mt-4">
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
    const workshop = workshops.find(workshop => workshop.id === props.id);

    return {
      workshop
    };
  }
};
</script>

  
  <style>
  /* Estilize conforme necessário com classes do Tailwind CSS */
  </style>
  
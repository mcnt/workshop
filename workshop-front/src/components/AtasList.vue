<template>

    <div class="bg-gray-200 min-h-screen p-8">
    
      <!-- Filtros -->
      <div class="flex m-4 p-6">
        <input v-model="filtroColaborador" type="text" class="rounded-l-md p-2 m-2 border border-gray-300 w-1/3" placeholder="Colaborador">
        <input v-model="filtroWorkshop" type="text" class="p-2  m-2  border border-gray-300 w-1/3" placeholder="Workshop">
        <input v-model="filtroData" type="date" class="rounded-r-md  m-2  p-2 border border-gray-300 w-1/3" placeholder="Data do Workshop">
      </div>
  
      <h1 class="text-xl font-bold mb-2">Lista de Atas</h1>
      <!-- Lista de Atas -->
      <div class="bg-gray-700 p-4 rounded-lg flex">
        <div v-for="ata in atasFiltradas" :key="ata.id" class="bg-white p-6 rounded-lg ml-6  mb-4 w-full max-w-md" @click="mostrarDetalhes(ata.workshop)">
          <h2 class="text-lg font-bold">{{ ata.workshop.nome }}</h2>
          <p>Data: {{ ata.workshop.dataRealizacao }}</p>
          <p>Descrição: {{ ata.workshop.descricao }}</p>
          <p>Colaboradores:</p>
          <ul>
            <li v-for="colaborador in ata.colaboradores" :key="colaborador.id">
              {{ colaborador.nome }}
            </li>
          </ul>
        </div>
        <!-- Mostrar mensagem se não houver atas filtradas -->
        <div v-if="!atasFiltradas?.length" class="text-gray-400 text-center">Nenhuma ata encontrada</div>
      </div> 
    </div>
  </template>
  
  <script>
  // Importar os dados fictícios
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
import { atas } from '../mock';
  export default {
    setup() {
      const filtroColaborador = ref('');
      const filtroWorkshop = ref('');
      const filtroData = ref('');
      const router = useRouter();

      const atasFiltradas = computed(() => {
        console.log(atas)
        let atasFiltradas = atas;
        if (filtroColaborador.value) {
          atasFiltradas = atasFiltradas.filter(ata => ata.colaboradores.some(colaborador => colaborador.nome.toLowerCase().includes(filtroColaborador.value.toLowerCase())));
        }
        if (filtroWorkshop.value) {
          atasFiltradas = atasFiltradas.filter(ata => ata.workshop.nome.toLowerCase().includes(filtroWorkshop.value.toLowerCase()));
        }
        if (filtroData.value) {
          atasFiltradas = atasFiltradas.filter(ata => ata.workshop.dataRealizacao === filtroData.value);
        }
        return atasFiltradas;
      });
    const mostrarDetalhes = (workshop) => {
      console.log(router);
      router.push(`/details/${workshop.id}`);
    };
      
      return {
        filtroColaborador,
        filtroWorkshop,
        filtroData,
        atasFiltradas,
        router,
        mostrarDetalhes,

      };
    }
  };
  </script>
  
  <style>
  /* Estilizar conforme necessário */
  </style>
  
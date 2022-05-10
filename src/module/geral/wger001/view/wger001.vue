<template>
  <div>
    <button
      @click="controller.mounted()"
      :disabled="controller.carregando"
    >atualizar</button>
    <div v-if="controller.carregando">Carregando...</div>

    <table
      ref="tabela"
      style="width: 100%"
      border="1"
      v-else
    >
      <tr>
        <th>Código</th>
        <th>Nome</th>
      </tr>
      <tr
        v-for="(filial, index) in controller.filiais"
        :key="index"
      >
        <td>{{ filial.cod_fil }}</td>
        <td>{{ filial.nome }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { wger001Controller } from "../di/di";
export default {
  data: (context) => ({
    controller: wger001Controller(context),
  }),
  mounted() {
    this.controller.mounted();
  },
};
</script>
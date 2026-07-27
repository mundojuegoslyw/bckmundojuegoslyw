<template>
  <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
    <button 
      v-for="cat in categorias" 
      :key="cat"
      @click="$emit('cambiar-categoria', cat)"
      :class="[
        'px-4 py-2 rounded-xl text-base sm:text-base font-bold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xs shadow-rose-800 text-center',
        seleccionada === cat ? 'bg-rose-800 text-white' : 'bg-slate-100 text-cyan-500 border border-slate-200 hover:bg-slate-300'
      ]"
    >
    <!-- Agrega un emoji si el botón corresponde a "Nuevos" -->
    <span v-if="cat.toLowerCase() === 'nuevos'">🔥</span>
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categorias: { type: Array, required: true },
  seleccionada: { type: String, required: true }
})
defineEmits(['cambiar-categoria'])
</script>
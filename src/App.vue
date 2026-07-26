<script setup>
import { ref, computed } from 'vue'
import { productosData } from './data/productos.js'

// Importación de componentes hijos
import Navbar from './components/navbar.vue'
import FilterBar from './components/filterbar.vue'
import ProductCard from './components/productcard.vue'

const telefonoVentas = '59178150068' // Línea de atención
const productos = ref(productosData)


// Cálculo de categorías únicas
const categorias = computed(() => {
  return [ ...new Set(productos.value.map(p => p.category))]
})
const categoriaSeleccionada = ref(categorias.value[0]) // Inicialmente selecciona la primera categoría
// Datos filtrados reactivos
const productosFiltrados = computed(() => {  
  return productos.value.filter(p => p.category === categoriaSeleccionada.value)
})
</script>

<template>
  <div>    
    <Navbar :telefono="telefonoVentas" />
    <section class="max-w-7xl mx-auto px-1 pt-1 sm:pt-1 pb-1 text-center">
      <h1 class="text-3xl sm:text-3xl font-black text-rose-700 tracking-tight mb-1 sm:mb-1">
        Nuestro Catálogo
      </h1>      
    </section>

    <FilterBar 
      :categorias="categorias" 
      :seleccionada="categoriaSeleccionada"
      @cambiar-categoria="categoriaSeleccionada = $event" 
    />

    <main class="max-w-7xl mx-auto px-4 py-4 sm:py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <ProductCard 
          v-for="prod in productosFiltrados" 
          :key="prod.id" 
          :item="prod"
          :telefono="telefonoVentas"
        />
      </div>
    </main>

    <footer class="bg-white border-t border-slate-100 mt-16">
      <div class="max-w-7xl mx-auto px-4 py-6 text-center text-[11px] sm:text-xs text-rose-700 font-medium">
        &copy; 2026 Creado por MundoJuegosL&W<br>
      </div>
    </footer>

  </div>
</template>

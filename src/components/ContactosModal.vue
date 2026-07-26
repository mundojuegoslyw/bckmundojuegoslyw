<!-- src/components/ContactosModal.vue -->
<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="show" 
        class="fixed inset-0 z-[9999] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        @click.self="cerrarModal"
      >
        <!-- Tarjeta del Modal -->
        <div class="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative flex flex-col max-h-[85vh] my-auto text-slate-800 border border-slate-100">
          
          <!-- Encabezado con Botón X de Cierre -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h3 class="text-lg font-black text-rose-700">Notificar Novedades</h3>
            
            <button 
              type="button"
              @click.stop="cerrarModal" 
              class="text-slate-400 hover:text-rose-600 font-bold text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          <!-- Vista previa del mensaje -->
          <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-4 text-xs font-mono">
            <p class="font-bold text-slate-900 mb-1">Mensaje a enviar:</p>
            <p class="whitespace-pre-line text-slate-700">{{ mensajeConstruido }}</p>
          </div>

          <!-- Control Seleccionar Todos -->
          <div class="flex items-center justify-between py-2 border-b border-slate-100 mb-2">
            <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
              <input 
                type="checkbox" 
                :checked="todosSeleccionados" 
                @change="toggleTodos"
                class="accent-rose-700 rounded w-4 h-4 cursor-pointer"
              />
              Seleccionar Todos ({{ seleccionados.length }}/{{ contactos.length }})
            </label>
          </div>

          <!-- Lista de Contactos con Scroll -->
          <div class="overflow-y-auto flex-1 pr-1 space-y-2 mb-4">
            <div 
              v-for="contacto in contactos" 
              :key="contacto.id"
              class="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <label class="flex items-center gap-3 cursor-pointer w-full">
                <input 
                  type="checkbox" 
                  :value="contacto.id" 
                  v-model="seleccionados"
                  class="accent-rose-700 rounded w-4 h-4 cursor-pointer"
                />
                <div>
                  <p class="text-sm font-bold text-slate-800">{{ contacto.nombre }}</p>
                  <p class="text-xs text-slate-500 font-mono">+{{ contacto.telefono }}</p>
                </div>
              </label>

              <a 
                :href="generarUrlWhatsApp(contacto.telefono)" 
                target="_blank"
                class="bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all"
              >
                Enviar
              </a>
            </div>
          </div>

          <!-- Acciones Masivas y Botón Salir -->
          <div class="pt-3 border-t border-slate-100 flex gap-2">
            <button 
              type="button"
              @click.stop="cerrarModal"
              class="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-2.5 px-3 rounded-xl text-xs transition-all cursor-pointer"
            >
              Cerrar
            </button>
            <button 
              type="button"
              @click="enviarAMultiples"
              :disabled="seleccionados.length === 0"
              class="w-2/3 bg-rose-700 hover:bg-rose-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-xs cursor-pointer"
            >
              Enviar ({{ seleccionados.length }})
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  contactos: { type: Array, required: true },
  sitioWebUrl: { type: String, default: 'https://mundojuegoslyw.github.io/mundojuegoslyw' }
})

const emit = defineEmits(['close'])

const seleccionados = ref([])

const mensajeConstruido = computed(() => {
  return `¡Casero/a llegaron novedades! Entre a nuestro sitio web:\n${props.sitioWebUrl}`
})

const todosSeleccionados = computed(() => {
  return props.contactos.length > 0 && seleccionados.value.length === props.contactos.length
})

const toggleTodos = () => {
  if (todosSeleccionados.value) {
    seleccionados.value = []
  } else {
    seleccionados.value = props.contactos.map(c => c.id)
  }
}

const generarUrlWhatsApp = (telefono) => {
  return `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensajeConstruido.value)}`
}

const enviarAMultiples = () => {
  const listaParaEnviar = props.contactos.filter(c => seleccionados.value.includes(c.id))
  
  listaParaEnviar.forEach((contacto, index) => {
    setTimeout(() => {
      window.open(generarUrlWhatsApp(contacto.telefono), '_blank')
    }, index * 400)
  })
}

const cerrarModal = () => {
  emit('close')
}
</script>
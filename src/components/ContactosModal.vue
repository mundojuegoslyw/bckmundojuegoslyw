<!-- src/components/ContactosModal.vue -->
<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 z-[9999] bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4"
      @click.self="cerrarModal"
    >
      <div class="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative flex flex-col max-h-[85vh] text-slate-800">
        
        <!-- Encabezado con Botón X de Cierre -->
        <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <h3 class="text-lg font-black text-rose-700">Notificar Novedades</h3>
          
          <button 
            type="button"
            @click.stop="cerrarModal" 
            class="text-slate-400 hover:text-rose-600 font-bold text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-10"
          >
            ✕
          </button>
        </div>

        <!-- Vista previa del mensaje -->
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-4 text-xs font-mono">
          <p class="font-bold text-slate-900 mb-1">Mensaje a enviar:</p>
          <p class="whitespace-pre-line text-slate-700">{{ mensajeConstruido }}</p>
        </div>

        <!-- MODO ENVÍO PROGRESIVO -->
        <div v-if="enProceso" class="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-4 text-center">
          <p class="text-xs font-bold text-amber-800 mb-1">
            Enviando {{ indiceActual + 1 }} de {{ listaParaEnviar.length }}
          </p>
          <p class="text-sm font-black text-slate-800 mb-3">
            Contacto: {{ contactoActual.nombre }} (+{{ contactoActual.telefono }})
          </p>
          
          <div class="flex gap-2 justify-center">
            <button 
              type="button"
              @click="enviarContactoActual"
              class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer"
            >
              📱 Abrir WhatsApp
            </button>
            <button 
              type="button"
              @click="siguienteContacto"
              class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-3 rounded-lg text-xs transition-all cursor-pointer"
            >
              {{ esUltimo ? 'Finalizar' : 'Saltar / Siguiente ➔' }}
            </button>
          </div>
        </div>

        <!-- MODO SELECCIÓN NORMAL -->
        <template v-else>
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

          <!-- Lista de Contactos -->
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
        </template>

        <!-- Botones Inferiores -->
        <div class="pt-3 border-t border-slate-100 flex gap-2">
          <button 
            type="button"
            @click.stop="cerrarModal"
            class="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-2.5 px-3 rounded-xl text-xs transition-all cursor-pointer"
          >
            {{ enProceso ? 'Cancelar' : 'Cerrar' }}
          </button>
          <button 
            v-if="!enProceso"
            type="button"
            @click="iniciarEnvioMasivo"
            :disabled="seleccionados.length === 0"
            class="w-2/3 bg-rose-700 hover:bg-rose-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer"
          >
            Enviar a Seleccionados ({{ seleccionados.length }})
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  contactos: { type: Array, required: true },
  sitioWebUrl: { type: String, default: 'https://mundojuegoslyw.github.io/mundojuegoslyw' }
})

const emit = defineEmits(['update:show', 'close'])

const seleccionados = ref([])
const enProceso = ref(false)
const listaParaEnviar = ref([])
const indiceActual = ref(0)

const mensajeConstruido = computed(() => {
  return `¡Casero/a llegaron novedades! Entre a nuestro sitio web:\n${props.sitioWebUrl}`
})

const contactoActual = computed(() => {
  return listaParaEnviar.value[indiceActual.value] || {}
})

const esUltimo = computed(() => {
  return indiceActual.value >= listaParaEnviar.value.length - 1
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

const iniciarEnvioMasivo = () => {
  listaParaEnviar.value = props.contactos.filter(c => seleccionados.value.includes(c.id))
  if (listaParaEnviar.value.length === 0) return
  
  indiceActual.value = 0
  enProceso.value = true
  enviarContactoActual()
}

const enviarContactoActual = () => {
  if (contactoActual.value.telefono) {
    window.open(generarUrlWhatsApp(contactoActual.value.telefono), '_blank')
  }
}

const siguienteContacto = () => {
  if (esUltimo.value) {
    resetearEstado()
  } else {
    indiceActual.value++
    enviarContactoActual()
  }
}

const resetearEstado = () => {
  enProceso.value = false
  listaParaEnviar.value = []
  indiceActual.value = 0
  seleccionados.value = []
}

// Cierre robusto emitiendo tanto 'update:show' como 'close' por compatibilidad
const cerrarModal = () => {
  resetearEstado()
  emit('update:show', false)
  emit('close')
}

// Resetea el modal cada vez que cambia su estado de visibilidad desde el padre
watch(() => props.show, (nuevoVal) => {
  if (!nuevoVal) {
    resetearEstado()
  }
})
</script>
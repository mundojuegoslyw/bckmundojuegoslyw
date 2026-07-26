<!-- src/components/ContactosModal.vue -->
<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition opacity-0 duration-200"
      enter-to-class="opacity-100"
      leave-active-class="transition opacity-100 duration-150"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="show" 
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        @click.self="cerrar"
      >
        <div class="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative flex flex-col max-h-[90vh]">
          
          <!-- Encabezado -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h3 class="text-lg font-black text-rose-700">Notificar Novedades</h3>
            <button @click="cerrar" class="text-slate-400 hover:text-slate-600 font-bold text-xl">✕</button>
          </div>

          <!-- Vista previa del mensaje -->
          <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-4 text-xs text-slate-700 font-mono">
            <p class="font-bold text-slate-900 mb-1">Mensaje a enviar:</p>
            <p class="whitespace-pre-line">{{ mensajeConstruido }}</p>
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

              <!-- Botón envío individual directo -->
              <a 
                :href="generarUrlWhatsApp(contacto.telefono)" 
                target="_blank"
                class="bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all"
              >
                Enviar
              </a>
            </div>
          </div>

          <!-- Acciones Masivas -->
          <div class="pt-3 border-t border-slate-100 flex gap-2">
            <button 
              @click="enviarAMultiples"
              :disabled="seleccionados.length === 0"
              class="w-full bg-rose-700 hover:bg-rose-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-xs"
            >
              Enviar a seleccionados ({{ seleccionados.length }})
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

// Texto estático solicitado
const mensajeConstruido = computed(() => {
  return `¡Casero/a llegaron novedades! Entre a nuestro sitio web:\n${props.sitioWebUrl}`
})

// Estado del checkbox "Seleccionar Todos"
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

// Genera el enlace individual de WhatsApp API
const generarUrlWhatsApp = (telefono) => {
  return `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensajeConstruido.value)}`
}

// Apertura secuencial para envíos múltiples
const enviarAMultiples = () => {
  const listaParaEnviar = props.contactos.filter(c => seleccionados.value.includes(c.id))
  
  listaParaEnviar.forEach((contacto, index) => {
    setTimeout(() => {
      window.open(generarUrlWhatsApp(contacto.telefono), '_blank')
    }, index * 400) // Retardo de 400ms para evitar que el navegador bloquee las pestañas emergentes
  })
}

const cerrar = () => {
  emit('close')
}
</script>
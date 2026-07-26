<!-- src/components/LoginModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl border border-slate-100">
          
          <div class="text-center mb-6">
            <h3 class="text-2xl font-black text-rose-700 tracking-tight">Acceso Restringido</h3>            
          </div>

          <form @submit.prevent="intentarLogin" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Usuario</label>
              <input 
                v-model="usuarioInput" 
                type="text" 
                required
                class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-300 focus:ring-rose-100 focus:ring-2 transition-all outline-none text-sm"
                placeholder="Ej: admin"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Contraseña</label>
              <input 
                v-model="contrasenaInput" 
                type="password" 
                required
                class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-rose-300 focus:ring-rose-100 focus:ring-2 transition-all outline-none text-sm"
                placeholder="••••••••"
              />
            </div>

            <p v-if="error" class="text-xs text-rose-600 font-bold text-center bg-rose-50 py-2 rounded-lg border border-rose-100">
              {{ error }}
            </p>

            <div class="pt-2 flex gap-3">
               <button 
                type="button"
                @click="cerrar"
                class="w-1/2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 px-4 rounded-xl text-xs transition-all"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                class="w-1/2 bg-rose-700 hover:bg-rose-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-xs"
              >
                Verificar
              </button>
            </div>
          </form>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import CryptoJS from 'crypto-js';
import { accesoData } from '../data/acceso.js';

const props = defineProps({
  show: { type: Boolean, required: true }
})

const emit = defineEmits(['close', 'authenticated'])

const usuarioInput = ref('')
const contrasenaInput = ref('')
const error = ref('')

const intentarLogin = () => {
  error.value = '';

  // 1. Hashear los inputs del usuario
  const inputUserHash = CryptoJS.SHA256(usuarioInput.value).toString();
  const inputPasswordHash = CryptoJS.SHA256(contrasenaInput.value).toString();

  // 2. Comparar los hashes generados con los guardados en acceso.js
  if (inputUserHash === accesoData.userHash && inputPasswordHash === accesoData.passwordHash) {
    // Éxito
    usuarioInput.value = '';
    contrasenaInput.value = '';
    emit('authenticated'); // Avisar al padre que ya estamos logueados
  } else {
    // Fallo
    error.value = 'Credenciales incorrectas. Intente de nuevo.';
    contrasenaInput.value = ''; // Limpiar solo contraseña
  }
}

const cerrar = () => {
  usuarioInput.value = '';
  contrasenaInput.value = '';
  error.value = '';
  emit('close');
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
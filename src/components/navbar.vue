<template>
	<header
		class="backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-xs bg-linear-to-t from-olive-700 to-slate-100"
	>
		<div
			class="max-w-7xl mx-auto px-4 h-28 sm:h-28 flex items-center justify-between"
		>
			<div
				class="flex items-center gap-3 cursor-pointer"
				
			>
				<img
					src="https://lh3.googleusercontent.com/d/1GB2c-ASxENKdjFT-8aelSzZpZjrtciPL"
					class="w-40 h-25 sm:w-40 sm:h-25 rounded-full object-cover"
					@click="mostrarLogin = true"
				/>
				<h1
					class="text-4xl sm:text-4xl mb-1 sm:mb-1 font-bold text-cyan-700 tracking-tight animate-bounce"
				>
					Mundo Juegos L&W
				</h1>
			</div>
		</div>
		<!-- 1. POPUP DE LOGIN (CON HASING) -->
		<LoginModal
			:show="mostrarLogin"
			@close="mostrarLogin = false"
			@authenticated="handleAutenticacionExitosa"
		/>
		<!-- Componente Modal Importado -->
		<ContactosModal
			:show="mostrarContactos"
			:contactos="contactosData"
			sitioWebUrl="https://mundojuegoslyw.github.io/mundojuegoslyw"
			@close="mostrarContactos = false"
		/>
	</header>
</template>

<script setup>
import { ref } from "vue";
import LoginModal from './LoginModal.vue'
import { contactosData } from "../data/contactos.js";
import ContactosModal from "./ContactosModal.vue";

const mostrarLogin = ref(false)
const mostrarContactos = ref(false)

const handleAutenticacionExitosa = () => {
  mostrarLogin.value = false;      // Cerrar Login
  mostrarContactos.value = true;  // Abrir Contactos
}
</script>

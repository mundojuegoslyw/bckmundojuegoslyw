<template>
	<div
		class="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 flex flex-col justify-between"
	>
		<div>
			<div
				class="relative overflow-hidden aspect-auto bg-slate-100 transition-all duration-300 transform hover:scale-320 cursor-pointer select-none"
      @click="isZoomed = true"
			>
				<img
					:src="item.image"
					:alt="item.name"
					class="w-full h-full object-contain"
				/>
				<span
					v-if="item.tipo?.toLowerCase() === 'nuevo'"
					class="absolute top-1 left-1 bg-white text-rose-800 text-sm font-bold px-1 py-1 rounded-md tracking-wider border border-slate-100"
				>
					{{ item.tipo }}
				</span>
			</div>
			<!-- MODAL / PANTALLA COMPLETA AL HACER CLICK (Funciona en PC y Celular) -->
			<Teleport to="body">
				<Transition
					enter-active-class="transition opacity-0 duration-200"
					enter-to-class="opacity-100"
					leave-active-class="transition opacity-100 duration-150"
					leave-to-class="opacity-0"
				>
					<div
						v-if="isZoomed"
						class="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
						@click="isZoomed = false"
					>
						<!-- Botón de cerrar -->
						<button
							class="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl border border-white/20"
							@click.stop="isZoomed = false"
						>
							✕
						</button>

						<!-- Imagen ampliada -->
						<img
							:src="item.image"
							:alt="item.name"
							class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
						/>
					</div>
				</Transition>
			</Teleport>
			<div class="p-1">
				<h3 class="font-bold text-cyan-500 text-base">
					{{ item.name }}
				</h3>
				<p class="text-sm text-slate-800 font-mono mt-0.5">{{ item.id }}</p>
				<p class="text-base text-slate-800 mt-2 leading-relaxed">
					{{ item.description }}
				</p>
			</div>
		</div>

		<div
			class="font-bold p-4 pt-0 border-t border-slate-50 flex items-center justify-between gap-2 mt-4"
		>
			<a
				:href="urlWhatsApp"
				target="_blank"
				class="bg-slate-100 hover:bg-rose-800 text-cyan-500 hover:text-white px-4 py-2.5 rounded-xl font-bold text-base transition-all flex items-center gap-1.5 shadow-xs shadow-rose-800 border-slate-200"
			>
				Consultar
			</a>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { ref } from 'vue';

const props = defineProps({
	item: { type: Object, required: true },
	telefono: { type: String, required: true },
});

// La URL se calcula dinámicamente de forma aislada para cada tarjeta
const urlWhatsApp = computed(() => {
	const mensaje =
		`¡Hola Casera! Me interesa este producto de su catálogo:\n` +
		`🎮 *${props.item.name}*\n` +
		`🆔 *Código:* ${props.item.id}\n` +
		`🖼️ *Imagen:* ${props.item.image}\n` +
		`¿Tiene en stock disponible? y cual es el precio?`;
	return `https://api.whatsapp.com/send?phone=${props.telefono}&text=${encodeURIComponent(mensaje)}`;
});

// Estado para abrir/cerrar la vista ampliada
const isZoomed = ref(false);

</script>

<script setup lang="ts">
import type { AssetRef } from '~/types/site-content'

const props = defineProps<{
	modelValue: AssetRef | undefined
	label?: string
	section?: string            // куда грузить (для группировки в /public/uploads/[section]/)
}>()

const emit = defineEmits<{
	'update:modelValue': [value: AssetRef]
}>()

const { uploadImage, lastError } = useAdminSave()
const uploading = ref(false)
const preview = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

async function onFileChange(e: Event) {
	const input = e.target as HTMLInputElement
	const file = input.files?.[0]
	if (!file) return

	uploading.value = true
	try {
		const url = await uploadImage(file, props.section)
		if (url) {
			emit('update:modelValue', {
				src: url,
				alt: props.modelValue?.alt ?? '',
				width: props.modelValue?.width,
				height: props.modelValue?.height,
			})
		}
	}
	finally {
		uploading.value = false
		if (fileInput.value) fileInput.value.value = ''
	}
}

function onAltChange(e: Event) {
	const input = e.target as HTMLInputElement
	if (props.modelValue) {
		emit('update:modelValue', { ...props.modelValue, alt: input.value })
	}
}

function onSrcInput(e: Event) {
	const input = e.target as HTMLInputElement
	emit('update:modelValue', {
		...((props.modelValue as any) ?? { alt: '' }),
		src: input.value,
	})
}

function clear() {
	emit('update:modelValue', { src: '', alt: '' })
}
</script>

<template>
	<div class="asset-input">
		<label v-if="label" class="asset-input__label">{{ label }}</label>
		<div v-if="modelValue?.src" class="asset-input__preview">
			<img :src="modelValue.src" :alt="modelValue.alt || 'preview'">
			<button class="asset-input__clear" type="button" @click="clear">✕</button>
		</div>
		<div class="asset-input__controls">
			<input
				ref="fileInput"
				type="file"
				accept="image/*"
				:disabled="uploading"
				@change="onFileChange"
			>
			<input
				type="text"
				:value="modelValue?.alt ?? ''"
				placeholder="Alt-текст (для SEO)"
				@input="onAltChange"
				class="asset-input__alt"
			>
			<input
				type="text"
				:value="modelValue?.src ?? ''"
				placeholder="Или вставьте URL"
				@input="onSrcInput"
				class="asset-input__src"
			>
		</div>
		<p v-if="uploading" class="asset-input__status">Загрузка…</p>
		<p v-if="lastError" class="asset-input__status asset-input__status--err">{{ lastError }}</p>
	</div>
</template>

<style scoped>
.asset-input {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.75rem;
	border: 1px solid #e5e7eb;
	border-radius: 6px;
	background: #fafafa;
}

.asset-input__label {
	font-size: 0.875rem;
	font-weight: 500;
	color: #374151;
}

.asset-input__preview {
	position: relative;
	max-width: 200px;
	border-radius: 4px;
	overflow: hidden;
	background: white;
	border: 1px solid #e5e7eb;
}

.asset-input__preview img {
	width: 100%;
	height: auto;
	display: block;
}

.asset-input__clear {
	position: absolute;
	top: 0.25rem;
	right: 0.25rem;
	background: rgba(0, 0, 0, 0.7);
	color: white;
	border: none;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	cursor: pointer;
	font-size: 0.75rem;
}

.asset-input__controls {
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.375rem;
}

.asset-input__alt,
.asset-input__src {
	padding: 0.375rem 0.5rem;
	border: 1px solid #d1d5db;
	border-radius: 4px;
	font-size: 0.8125rem;
	font-family: inherit;
}

.asset-input__status {
	font-size: 0.75rem;
	color: #6b7280;
	margin: 0;
}

.asset-input__status--err {
	color: #dc2626;
}
</style>
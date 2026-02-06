<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  error?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <div class="relative">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      placeholder="Заполните поле"
      :class="
        cn(
          'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
          props.error
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'border-input focus-visible:ring-ring',
          props.class,
        )
      "
    />
    <span
      v-if="props.error"
      class="text-red-500 text-[10px] mt-1 absolute top-full left-0 transform -translate-y-1/3"
      >Поле обязательно к заполнению</span
    >
  </div>
</template>

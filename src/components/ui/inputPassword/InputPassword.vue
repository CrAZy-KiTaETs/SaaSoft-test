<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'
import { Eye, EyeOff } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string
  modelValue?: string
  class?: HTMLAttributes['class']
  error?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const showPassword = ref(false)
</script>

<template>
  <div class="relative">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      :type="showPassword ? 'text' : 'password'"
      :class="
        cn(
          'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 pr-10 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
          props.error
            ? 'border-red-500 focus-visible:ring-red-500'
            : 'border-input focus-visible:ring-ring',
          props.class,
        )
      "
    />
    <button
      type="button"
      class="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
      @click="showPassword = !showPassword"
    >
      <Eye v-if="!showPassword" class="h-4 w-4" />
      <EyeOff v-else class="h-4 w-4" />
    </button>
    <span
      v-if="props.error"
      class="text-red-500 text-[10px] mt-1 absolute top-full left-0 transform -translate-y-1/3"
      >Поле обязательно к заполнению</span
    >
  </div>
</template>

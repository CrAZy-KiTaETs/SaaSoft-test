<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts'
import { Trash } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'

const { accountId } = defineProps<{
  accountId: string
}>()

const accountsStore = useAccountsStore()

const handleDelete = () => {
  accountsStore.deleteAccount(accountId)
}
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    @click="handleDelete"
    class="hover:opacity-70 transition-opacity"
  >
    <Trash />
  </Button>
</template>

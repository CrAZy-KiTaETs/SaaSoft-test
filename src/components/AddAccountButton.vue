<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts'
import { PlusIcon } from 'lucide-vue-next'
import { Button } from './ui'

const accountsStore = useAccountsStore()

const handleAddAccount = () => {
  accountsStore.addAccount()
}
</script>

<template>
  <Button @click="handleAddAccount" size="icon">
    <PlusIcon />
  </Button>
</template>

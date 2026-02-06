<script setup lang="ts">
import AccountTable from './components/AccountTable.vue'
import AddAccountButton from './components/AddAccountButton.vue'
</script>

<template>
  <main class="container py-12">
    <h1 class="text-2xl text-center mb-12 font-light tracking-wide text-foreground/80">
      Админ панель учетных записей
    </h1>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-medium text-foreground">Учетные записи</h2>
      <AddAccountButton />
    </div>
    <AccountTable />
  </main>
</template>

<style scoped></style>

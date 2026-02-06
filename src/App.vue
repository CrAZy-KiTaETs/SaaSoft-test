<script setup lang="ts">
import AccountTable from './components/AccountTable.vue'
import AddAccountButton from './components/AddAccountButton.vue'
</script>

<template>
  <main class="container">
    <h1 class="text-3xl text-center mt-20">Админ панель учетных записей</h1>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold">Учетные записи</h2>
      <AddAccountButton />
    </div>
    <AccountTable />
  </main>
</template>

<style scoped></style>

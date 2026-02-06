<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts'
import TableRow from './TableRow.vue'

const accountsStore = useAccountsStore()
</script>

<template>
  <div>
    <span class="block bg-accent/60 text-foreground/80 p-3 rounded-md text-sm">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель <b>;</b>
    </span>

    <table class="mt-6 w-full">
      <thead>
        <tr class="table-row text-left text-muted-foreground font-medium text-sm">
          <th>Метки</th>
          <th>Тип записи*</th>
          <th>Логин*</th>
          <th>Пароль*</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="flex flex-col gap-6 pt-3">
        <TableRow v-for="account in accountsStore.accounts" :key="account.id" :account="account" />
        <span
          v-if="accountsStore.accounts.length === 0"
          class="text-center mt-10 text-muted-foreground"
          >Список пуст</span
        >
      </tbody>
    </table>
  </div>
</template>

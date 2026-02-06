<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts'
import TableRow from './TableRow.vue'

const accountsStore = useAccountsStore()
</script>

<template>
  <div>
    <span class="block bg-lime-300 p-2 rounded">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель <b>;</b>
    </span>

    <table class="mt-6 w-full">
      <thead>
        <tr class="table-row text-left text-gray-400 font-semibold text-sm">
          <th>Метки</th>
          <th>Тип записи*</th>
          <th>Логин*</th>
          <th>Пароль*</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="flex flex-col gap-2 pt-2">
        <TableRow v-for="account in accountsStore.accounts" :key="account.id" :account="account" />
        <span v-if="accountsStore.accounts.length === 0" class="text-center mt-10"
          >Список пуст</span
        >
      </tbody>
    </table>
  </div>
</template>

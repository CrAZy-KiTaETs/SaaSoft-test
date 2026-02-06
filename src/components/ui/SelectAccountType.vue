<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
</script>

<template>
  <Select default-value="local">
    <SelectTrigger>
      <SelectValue placeholder="Выберите тип записи" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="local"> Локальная </SelectItem>
      <SelectItem value="ldap"> LDAP </SelectItem>
    </SelectContent>
  </Select>
</template>

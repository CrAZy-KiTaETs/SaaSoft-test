<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useAccountsStore } from '@/stores/accounts'
import type { TAccount, TLocalAccount } from '@/types'
import { formatLocalAccount } from '@/utils/FormatLocalAccount'
import { reactive, ref } from 'vue'
import DeleteAccountButton from './DeleteAccountButton.vue'
import { Input, InputPassword } from './ui'
import SelectAccountType from './ui/SelectAccountType.vue'

const { account } = defineProps<{
  account: TAccount
}>()

const accountsStore = useAccountsStore()

const localAccount = reactive<TLocalAccount>({
  tags: account.tags.map((t) => t.text).join('; '),
  type: account.type,
  login: account.login,
  password: account.password || '',
})

const errors = ref({
  login: false,
  password: false,
})

const validateLocalAccount = () => {
  errors.value.login = localAccount.login.trim() === ''
  if (localAccount.type === 'local') {
    errors.value.password = (localAccount.password || '').trim() === ''
  } else {
    errors.value.password = false
  }

  return !errors.value.login && !errors.value.password
}

const handleChangeAccountType = (value: TLocalAccount['type']) => {
  localAccount.type = value
  if (value !== 'local') {
    localAccount.password = ''
  }
  checkAndSaveAccount()
}

const checkAndSaveAccount = () => {
  const isValid = validateLocalAccount()
  if (isValid) {
    const formattedAccount = formatLocalAccount(localAccount)
    accountsStore.updateAccount(account.id, formattedAccount)
  }
}
</script>

<template>
  <tr class="table-row">
    <td>
      <Input
        v-model="localAccount.tags"
        maxlength="50"
        placeholder="метка1; метка2"
        @blur="checkAndSaveAccount"
      />
    </td>
    <td>
      <SelectAccountType
        v-model="localAccount.type"
        @update:model-value="handleChangeAccountType"
      />
    </td>
    <td :class="cn(localAccount.type !== 'local' && 'col-span-2')">
      <Input
        v-model="localAccount.login"
        maxlength="100"
        placeholder="Логин"
        :error="errors.login"
        @blur="checkAndSaveAccount"
      />
    </td>
    <td v-if="localAccount.type === 'local'">
      <InputPassword
        v-model="localAccount.password"
        maxlength="100"
        placeholder="Пароль"
        :error="errors.password"
        @blur="checkAndSaveAccount"
      />
    </td>
    <td>
      <DeleteAccountButton :accountId="account.id" />
    </td>
  </tr>
</template>

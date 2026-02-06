import type { TAccount } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<TAccount[]>([])

  const loadFromStorage = () => {
    const stored = localStorage.getItem('accounts')
    if (stored) {
      try {
        accounts.value = JSON.parse(stored)
      } catch (e) {
        console.error('Ошибка при загрузке локального хранилища', e)
      }
    }
  }

  const saveToStorage = () => {
    const validAccounts = accounts.value.filter((account) => {
      if (!account.login.trim()) return false
      if (account.type === 'local' && !account.password?.trim()) return false
      return true
    })
    localStorage.setItem('accounts', JSON.stringify(validAccounts))
  }

  const addAccount = () => {
    const newAccount: TAccount = {
      id: Math.floor(Math.random() * 1000000) + '',
      tags: [],
      type: 'local',
      login: '',
      password: '',
    }
    accounts.value.push(newAccount)
    return newAccount.id
  }

  const updateAccount = (id: string, data: Omit<TAccount, 'id'>) => {
    const index = accounts.value.findIndex((acc) => acc.id === id)
    if (index !== -1) {
      accounts.value[index] = { id, ...data }
      saveToStorage()
    }
  }

  const deleteAccount = (id: string) => {
    accounts.value = accounts.value.filter((acc) => acc.id !== id)
    saveToStorage()
  }

  loadFromStorage()

  return {
    accounts,
    addAccount,
    updateAccount,
    deleteAccount,
  }
})

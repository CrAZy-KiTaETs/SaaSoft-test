import type { TLocalAccount } from '@/types'

const formatTagsToObj = (tags: string) => {
  return tags
    .split(';')
    .map((t) => t.trim())
    .filter((t) => t !== '')
    .map((text) => ({ text }))
}

export const formatLocalAccount = (account: TLocalAccount) => {
  return {
    type: account.type,
    login: account.login,
    password: account.type === 'local' ? account.password : null,
    tags: formatTagsToObj(account.tags),
  }
}

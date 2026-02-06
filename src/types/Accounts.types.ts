export interface TAccount {
  id: string
  tags: { text: string }[]
  type: 'local' | 'ldap'
  login: string
  password: string | null
}

export type TLocalAccount = Omit<TAccount, 'id' | 'tags'> & {
  tags: string
  password: string
}

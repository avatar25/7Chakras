import Dexie, { Table } from 'dexie'

export interface Entry {
  id?: number
  chakra: string
  content: string
  createdAt: Date
}

export class ChakrasDB extends Dexie {
  entries!: Table<Entry>

  constructor() {
    super('chakrasDB')
    this.version(1).stores({
      entries: '++id, chakra, createdAt',
    })
  }
}

export const db = new ChakrasDB()

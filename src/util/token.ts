import storage from './localStorage'
import { STORAGE_KEY } from './constants'

const token = {
  get: () => {
    if (!storage.isSupported) return ''
    return storage.get<string>(STORAGE_KEY)
  },

  set: (newTokenValue: string) => {
    if (storage.isSupported) {
      storage.set(STORAGE_KEY, newTokenValue)
    }
  },

  clean: () => {
    if (storage.isSupported) {
      storage.remove(STORAGE_KEY)
    }
  },
}

export default token

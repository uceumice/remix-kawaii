import { trim } from 'lodash'

// ----
export const parse = {
  array: (s: string): string[] => {
    return s.split(',').map(trim)
  }
}

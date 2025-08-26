import { LaunchesFiltersParamsType } from '@/interfaces/launches'
import { ReadonlyURLSearchParams } from 'next/navigation'

export const generatePath = (
  key: keyof LaunchesFiltersParamsType,
  value: unknown,
  pathname: string | null,
  searchParams: ReadonlyURLSearchParams | null
): string => {
  const current = new URLSearchParams(Array.from(searchParams?.entries() ?? []))

  if (!value || ((typeof value === 'string' || Array.isArray(value)) && value.length === 0) || value === 'undefined') {
    current.delete(key)
  } else {
    if (Array.isArray(value)) current.set(key, `${value.join(',')}`)
    else current.set(key, `${value}`)
  }
  if (key !== 'page') {
    current.set('page', '1')
  }
  const search = current.toString()
  const query = search ? `?${search}` : ''

  return `${pathname}${query}`
}

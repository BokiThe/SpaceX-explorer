import './styles.css'
import { useEffect, useState } from 'react'
import { LaunchesFiltersParamsType } from '@/interfaces/launches'
import useDebounce from '@/hooks/useDebounce'

export interface LaunchesFormValues {
  upcoming?: boolean
  success?: boolean
  start?: string
  end?: string
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
}

interface LaunchesFormProps {
  values: LaunchesFiltersParamsType
  handleFiltersChange: (_key: keyof LaunchesFiltersParamsType, _value: unknown) => void
}

const LaunchesForm: React.FC<LaunchesFormProps> = ({ values, handleFiltersChange }) => {
  const [searchInput, setSearchInput] = useState<string>(values.search || '')
  const debouncedSearch = useDebounce(searchInput, 400)

  // sync when external values.search changes (e.g., navigation)
  useEffect(() => {
    setSearchInput(values.search || '')
  }, [values.search])

  useEffect(() => {
    handleFiltersChange('search', debouncedSearch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch])

  const onSearchKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFiltersChange('search', searchInput)
    }
  }

  return (
    <form tabIndex={0} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-row border rounded px-3 py-2 w-full">
        <input
          tabIndex={1}
          type="search"
          name="search"
          value={searchInput}
          onKeyDown={onSearchKey}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by mission name"
          className="w-full outline-none"
        />
      </div>
      {/* sort */}
      <select
        tabIndex={2}
        name="sort"
        value={values.sort || 'date_utc'}
        onChange={(e) => handleFiltersChange('sort', e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="date_utc">Sort by Date</option>
        <option value="name">Sort by Name</option>
      </select>

      {/* filter by upcoming/past */}
      <select
        tabIndex={3}
        name="upcoming"
        value={!!values.upcoming ? values.upcoming.toString() : ''}
        onChange={(e) => handleFiltersChange('upcoming', e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="">All</option>
        <option value="true">Upcoming</option>
        <option value="false">Past</option>
      </select>
      {/* filter by success/failure */}
      <select
        tabIndex={5}
        name="success"
        value={!!values.success ? values.success.toString() : ''}
        onChange={(e) => handleFiltersChange('success', e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="">All</option>
        <option value="true">Success</option>
        <option value="false">Failure</option>
      </select>
      {/* filter by date range */}
      <div className="flex gap-2">
        <input
          tabIndex={6}
          type="date"
          name="start"
          value={values.start || ''}
          onChange={(e) => handleFiltersChange('start', e.target.value)}
          className="flex border rounded px-3 py-2 w-full"
        />
        <input
          tabIndex={7}
          type="date"
          name="end"
          value={values.end || ''}
          onChange={(e) => handleFiltersChange('end', e.target.value)}
          className="flex border rounded px-3 py-2 w-full"
        />
      </div>
    </form>
  )
}

export default LaunchesForm

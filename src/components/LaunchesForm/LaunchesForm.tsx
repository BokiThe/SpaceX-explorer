import React from 'react'

import './styles.css'

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
  values: LaunchesFormValues
  onChange: (name: string, value: string | boolean | undefined) => void
  onSubmit: (e: React.FormEvent) => void
}

const LaunchesForm: React.FC<LaunchesFormProps> = ({ values, onChange, onSubmit }) => {
  return (
    <form tabIndex={0} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
      <div className="flex flex-row border rounded px-3 py-2 w-full">
        <input
          tabIndex={1}
          type="search"
          name="search"
          value={values.search || ''}
          onChange={(e) => onChange('search', e.target.value)}
          placeholder="Search by mission name"
          className="w-full outline-none"
        />
      </div>
      {/* sort */}
      <select
        tabIndex={2}
        name="sort"
        value={values.sort || 'date_utc'}
        onChange={(e) => onChange('sort', e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="date_utc">Sort by Date</option>
        <option value="name">Sort by Name</option>
      </select>

      {/* filter by upcoming/past */}
      <select
        tabIndex={3}
        name="upcoming"
        value={values.upcoming === undefined ? '' : values.upcoming ? 'true' : 'false'}
        onChange={(e) =>
          onChange('upcoming', e.target.value === 'true' ? true : e.target.value === 'false' ? false : undefined)
        }
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
        value={values.success === undefined ? '' : values.success ? 'true' : 'false'}
        onChange={(e) =>
          onChange('success', e.target.value === 'true' ? true : e.target.value === 'false' ? false : undefined)
        }
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
          onChange={(e) => onChange('start', e.target.value)}
          className="flex border rounded px-3 py-2 w-full"
        />

        <input
          tabIndex={7}
          type="date"
          name="end"
          value={values.end || ''}
          onChange={(e) => onChange('end', e.target.value)}
          className="flex border rounded px-3 py-2 w-full"
        />
      </div>
    </form>
  )
}

export default LaunchesForm

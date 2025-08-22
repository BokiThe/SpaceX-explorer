export interface Launch {
  id: string
  name: string
  date_utc: string
  success?: boolean
  upcoming?: boolean
}

export interface LaunchQuery {
  upcoming?: boolean
  success?: boolean
  date_utc?: {
    $gte?: string
    $lte?: string
  }
  $text?: {
    $search: string
  }
  [key: string]: unknown
}

export interface LaunchesQueryOptions {
  sort?: Record<string, 'asc' | 'desc'> | string
  limit?: number
  page?: number
  offset?: number
  select?: Record<string, number> | string
  populate?: Array<string | { path: string; select?: Record<string, number>; populate?: unknown }> // Nested populate
  pagination?: boolean
}

export interface LaunchesResponse {
  docs: Launch[]
  totalDocs: number
  offset: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

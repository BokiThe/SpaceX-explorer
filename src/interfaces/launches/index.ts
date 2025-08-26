export interface LaunchesFiltersParamsType {
  upcoming?: boolean | string
  success?: boolean | string
  start?: string
  end?: string
  sort?: string | number | readonly string[] | undefined
  order?: 'asc' | 'desc'
  search?: string
  page?: string
}

export interface Launch {
  id: string
  name: string
  date_utc: string
  success?: boolean
  upcoming?: boolean
  rocket?: string
  launchpad?: string
  links?: {
    article?: string | null
    flickr?: {
      original?: string[]
      small?: string[]
    }
    patch?: {
      small?: string
      large?: string
    }
    reddit?: {
      campaign?: string | null
      launch?: string | null
      media?: string | null
      recovery?: string | null
    }
    webcast?: string | null
    wikipedia?: string | null
    youtube_id?: string | null
  }
  details?: string
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

export interface SpaceXDateRange {
  $gte?: string
  $lte?: string
}

export interface SpaceXNameQuery {
  $regex: string
  $options?: string
}

export interface LaunchesAPIQuery {
  upcoming?: boolean
  success?: boolean
  date_utc?: SpaceXDateRange
  name?: SpaceXNameQuery
  [key: string]: unknown
}

export interface LaunchesAPIRequestBody {
  query: LaunchesAPIQuery
  options: {
    page?: number
    limit?: number
    sort?: { [key: string]: 'asc' | 'desc' }
    pagination?: boolean
  }
}

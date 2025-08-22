export interface Launch {
  id: string
  name: string
  date_utc: string
  success?: boolean
  upcoming?: boolean
}

export interface LaunchesResponse {
  docs: Launch[]
  page: number
  totalPages: number
}

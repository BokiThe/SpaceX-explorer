export interface Launchpad {
  id: string
  name: string
  locality?: string
  region?: string
  details?: string
  images?: {
    large?: string[]
  }
}

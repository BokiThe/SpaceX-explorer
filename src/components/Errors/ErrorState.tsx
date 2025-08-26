import React from 'react'
import RetryButton from './RetryButton'

type Props = {
  message?: string
  onRetry?: () => void
  href?: string
}

const ErrorState = ({ message, onRetry, href }: Props) => (
  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 p-4 rounded">
    <p className="font-semibold">Something went wrong</p>
    {message && <p className="text-sm">{message}</p>}
    {onRetry ? (
      <button onClick={onRetry} className="mt-2 px-3 py-1 bg-red-600 text-white rounded">
        Retry
      </button>
    ) : (
      <RetryButton href={href} />
    )}
  </div>
)

export default ErrorState

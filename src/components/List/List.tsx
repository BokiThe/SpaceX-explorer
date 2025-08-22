import React from 'react'

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  className?: string
}

function List<T>({ items, renderItem, className = '' }: ListProps<T>) {
  return (
    <div className={className}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  )
}

export default List

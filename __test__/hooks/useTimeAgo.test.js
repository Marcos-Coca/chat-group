import useTimeAgo from '../../hooks/useTimeAgo'
import { renderHook } from '@testing-library/react-hooks'

const setUp = (param) => renderHook(() => useTimeAgo(param))
const time = (timestamp) => new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(timestamp)
const DAY_MS = 86400000

test('Get Time from today', () => {
  const now = Date.now()
  const { result } = setUp(now)

  expect(result.current).toBe(`today, ${time(now)}`)
})

test('Get Time from yesterday', () => {
  const yesterday = Date.now() - DAY_MS
  const { result } = setUp(yesterday)

  expect(result.current).toBe(`yesterday, ${time(yesterday)}`)
})

test('Get Time from 4 days ago', () => {
  const date = Date.now() - DAY_MS * 4
  const { result } = setUp(date)

  expect(result.current).toBe(`4 days ago, ${time(date)}`)
})

test('Get Time from far date', () => {
  const date = Date.now() - DAY_MS * 30
  const { result } = setUp(date)
  const dateString = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date)

  expect(result.current).toBe(`${dateString}, ${time(date)}`)
})

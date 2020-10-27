import useInput from '../../hooks/useInput'
import { act, renderHook } from '@testing-library/react-hooks'

const setUp = (param) => renderHook(() => useInput(param))

test('Change value from event', () => {
  const { result } = setUp()

  act(() => {
    const e = { target: { value: 'test' } }
    result.current[1](e)
  })

  expect(result.current[0]).toBe('test')
})

test('Change value directly', () => {
  const { result } = setUp()

  act(() => {
    result.current[1](null, 'One')
  })

  expect(result.current[0]).toBe('One')
})

test('Testing initial value', () => {
  const { result } = setUp('Piece')

  expect(result.current[0]).toBe('Piece')
})

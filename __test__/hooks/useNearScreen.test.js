import React from 'react'
import { mount } from 'enzyme'
import useNearScreen from '../../hooks/useNearScreen'
import { renderHook } from '@testing-library/react-hooks'

const observe = jest.fn()
const disconnect = jest.fn()
const entries = [{ isIntersecting: true }]

window.IntersectionObserver = jest.fn((callback, options) => {
  callback(entries)
  return { observe, disconnect }
})

describe('Componenet isIntersecting', () => {
  const { result, rerender, unmount } = renderHook(() => useNearScreen({}))
  const [show, element] = result.current
  const div = mount(<div ref={element} />)

  test('Testing if component is rendering', () => {
    rerender({})
    expect(observe).toHaveBeenCalled()
  })

  test('Component is visible', () => {
    expect(show).toBeTruthy()
  })

  test('Component unmounted', () => {
    unmount()
    expect(disconnect).toHaveBeenCalled()
  })
})

import useUser from 'hooks/useUser'
import UserMock from '__mocks__/UserMock'
import { renderHook } from '@testing-library/react-hooks'

jest.mock('services/auth', () => ({
  onAuthStateChanged: jest.fn()
}))

import { onAuthStateChanged } from 'services/auth'

describe('useUser Tests', () => {
  const setUp = () => renderHook(() => useUser())

  test('User is equal to UserMock', () => {
    onAuthStateChanged.mockImplementation((setUser) => {
      setUser(UserMock)
      return jest.fn()
    })
    const { result } = setUp()

    expect(result.current).toStrictEqual(UserMock)
  })

  test('User is equal to Null', () => {
    onAuthStateChanged.mockImplementation((setUser) => {
      setUser(null)
      return jest.fn()
    })

    const { result } = setUp()

    expect(result.current).toBeNull()
  })

  test('User unsuscribe', () => {
    const unsuscribe = jest.fn()
    onAuthStateChanged.mockImplementation((setUser) => {
      setUser(null)
      return unsuscribe
    })
    const { unmount } = setUp()

    unmount()
    expect(unsuscribe).toHaveBeenCalled()
  })
})

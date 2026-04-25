import { describe, it, expect } from 'vitest'

describe('sample tests', () => {
  it('should pass basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should pass string test', () => {
    expect('hello'.toUpperCase()).toBe('HELLO')
  })
})

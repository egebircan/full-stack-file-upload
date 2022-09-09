import { jest } from '@jest/globals'

const mockResultGenerator = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

export default mockResultGenerator

import { jest, test, expect, describe } from '@jest/globals'
import { validateFileExtension, validateFileSize } from './UploadValidations.js'
import mockRequestGenerator from '../../testUtil/RequestMocker.js'
import mockResultGenerator from '../../testUtil/ResultMocker.js'

describe('Validate file extension', () => {
  test('Invalid file types must be rejected before upload', () => {
    const mockedNext = jest.fn()
    const mockedReq = mockRequestGenerator(null, { file: { mimetype: 'application/octet-stream' } })
    const mockedRes = mockResultGenerator()

    expect(() => { validateFileExtension(mockedReq, mockedRes, mockedNext) }).toThrow('application/octet-stream file type is not allowed.')
  })

  test('Valid file types shall pass', () => {
    const mockedNext = jest.fn()
    const mockedReq = mockRequestGenerator(null, { file: { mimetype: 'text/plain' } })
    const mockedRes = mockResultGenerator()

    expect(() => { validateFileExtension(mockedReq, mockedRes, mockedNext) }).not.toThrow('text/plain file type is not allowed.')
  })
})

describe('Validate file size', () => {
  test('Files with size bigger than max limit are not allowed', () => {
    const mockedNext = jest.fn()
    const mockedReq = mockRequestGenerator(null, { file: { size: 9_999_999 } })
    const mockedRes = mockResultGenerator()

    expect(() => { validateFileSize(mockedReq, mockedRes, mockedNext) }).toThrow('Size limit is exceeded for file with size: 9999999. Limit is: 10000')
  })

  test('Files with size equal to or lower than max limit shall pass', () => {
    const mockedNext = jest.fn()
    const mockedReq = mockRequestGenerator(null, { file: { size: 1 } })
    const mockedRes = mockResultGenerator()

    expect(() => { validateFileSize(mockedReq, mockedRes, mockedNext) }).not.toThrow('Size limit is exceeded for file with size: 1. Limit is: 10000')
  })
})
const mockRequestGenerator = (mockedBody, mockedFileData) => {
  const req = {}
  req.body = mockedBody
  if (mockedFileData) {
    req.files = mockedFileData
  }
  return req
}

export default mockRequestGenerator

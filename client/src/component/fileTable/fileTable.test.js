import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import FileTable from './index.js'

it('should render file table', () => {
  // given
  const files = [
    {
        "fileName": "placeholder.txt",
        "fileSize": 100,
        "uploadDate": "today"
    }
  ]

  // when
  const { getByText } = render(<FileTable files={files} />)

  // then
  expect(getByText("placeholder.txt")).toBeInTheDocument()
  expect(getByText("100")).toBeInTheDocument()
  expect(getByText("today")).toBeInTheDocument()
})

it('should not render file table', () => {
    // given
    const files = []
  
    // when
    const { getByText, queryByText } = render(<FileTable files={files} />)
  
    // then
    expect(queryByText("placeholder.txt")).toBeNull()
    expect(queryByText("100")).toBeNull()
    expect(queryByText("today")).toBeNull()

    expect(getByText("File Name")).toBeInTheDocument()
    expect(getByText("File Size (bytes)")).toBeInTheDocument()
    expect(getByText("Upload Date")).toBeInTheDocument()
  })
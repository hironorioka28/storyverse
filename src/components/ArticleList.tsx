//import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { MasonryGrid } from '@egjs/react-grid'

const ArticleList = (): JSX.Element => {
  return (
    <Box w="2xl">
      <MasonryGrid gap={5} defaultDirection="end" align="justify">
        <Box w={100} h={80} border="1px">
          1
        </Box>
        <Box w={100} h={100} border="1px">
          2
        </Box>
        <Box w={100} h={60} border="1px">
          3
        </Box>
        <Box w={100} h={40} border="1px">
          4
        </Box>
        <Box w={100} h={20} border="1px">
          5
        </Box>
        <Box w={100} h={120} border="1px">
          6
        </Box>
        <Box w={100} h={200} border="1px">
          7
        </Box>
        <Box w={100} h={60} border="1px">
          8
        </Box>
        <Box w={100} h={50} border="1px">
          9
        </Box>
        <Box w={100} h={100} border="1px">
          10
        </Box>
      </MasonryGrid>
    </Box>
  )
}

export default ArticleList

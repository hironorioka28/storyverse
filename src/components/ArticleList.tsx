import { useState, useEffect } from 'react'
import { Heading, VStack, Box, Text, Image } from '@chakra-ui/react'
import { MasonryGrid } from '@egjs/react-grid'
import axios from 'axios'
import { Curation } from '../apis/types'

const ArticleList = (): JSX.Element => {
  const [curations, setCurations] = useState<Curation[]>()
  const nordotApiToken = process.env.REACT_APP_NORDOT_API_TOKEN
  const nordotUnitId = process.env.REACT_APP_BEAUTY_UNIT_ID

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        url: `https://api.nordot.jp/v1.0/curator/curations.list`,
        method: `get`,
        headers: {
          Authorization: `Bearer ${nordotApiToken}`,
        },
        params: {
          unit_id: nordotUnitId,
          status: `public`,
          limit: 100,
        },
      })
      setCurations(response.data.curations)
    }

    fetchData()
  }, [nordotApiToken, nordotUnitId])

  return (
    <Box w="8xl">
      <MasonryGrid gap={5} defaultDirection="end" align="justify">
        {curations ? (
          curations.map((item) => (
            <Box key={item.id} p={4} w={130} border="1px" borderRadius="base">
              <VStack>
                <Image src={item.content.image_thumb_360} w="full" />
                <Heading fontSize="xs">{item.content.title}</Heading>
              </VStack>
            </Box>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </MasonryGrid>
    </Box>
  )
}

export default ArticleList

import { useState, useEffect } from 'react'
import {
  Heading,
  VStack,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { MasonryGrid } from '@egjs/react-grid'
import axios from 'axios'
import { Curation } from '../apis/types'

const ArticleList = (): JSX.Element => {
  const [curations, setCurations] = useState<Curation[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        url: `/.netlify/functions/curations`,
      })
      setCurations(response.data.curations)
    }

    fetchData()
  }, [])

  return (
    <MasonryGrid gap={5} defaultDirection="end" align="justify">
      {curations ? (
        curations.map((item) => (
          <LinkBox key={item.id} p={4} w={130} border="1px" borderRadius="base">
            <VStack>
              <Image src={item.content.image_thumb_360} w="full" />
              <Heading fontSize="xs">
                {item.content.deleted ? (
                  <Text href={item.content.url} opacity="0.5">
                    {item.content.title}
                  </Text>
                ) : (
                  <LinkOverlay href={item.content.url} isExternal>
                    {item.content.title}
                  </LinkOverlay>
                )}
              </Heading>
            </VStack>
          </LinkBox>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </MasonryGrid>
  )
}

export default ArticleList

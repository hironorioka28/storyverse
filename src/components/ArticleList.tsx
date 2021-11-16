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

type Props = {
  panning: boolean
}

const ArticleList = ({ panning }: Props): JSX.Element => {
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
    <MasonryGrid gap={16} defaultDirection="end" align="justify">
      {curations ? (
        curations.map((item) => (
          <LinkBox key={item.id} p={2} w={130} border="1px" borderRadius="base">
            <VStack>
              <Image src={item.content.image_thumb_360} w="full" />
              <Heading fontSize="xs">
                {item.content.deleted ? (
                  <Text href={item.content.url} opacity="0.5">
                    {item.content.title}
                  </Text>
                ) : (
                  <LinkOverlay
                    href={item.content.url}
                    isExternal
                    sx={
                      panning
                        ? {
                            pointerEvents: 'none',
                          }
                        : {
                            pointerEvents: 'auto',
                          }
                    }
                  >
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

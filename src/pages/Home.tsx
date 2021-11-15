import { useState, useRef } from 'react'
import {
  VStack,
  HStack,
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
} from '@chakra-ui/react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ArticleList from '../components/ArticleList'
const categoryData: { name: string; width: string }[] = [
  {
    name: 'News',
    width: '6xl',
  },
  {
    name: 'Sports',
    width: '8xl',
  },
  {
    name: 'Technology',
    width: '8xl',
  },
  {
    name: 'World',
    width: '6xl',
  },
]

const Home = (): JSX.Element => {
  const [panning, setPanning] = useState(false)
  const els = useRef<HTMLDivElement[]>([])

  return (
    <Box h="100vh">
      <Heading>Story Verse</Heading>
      <TransformWrapper
        initialScale={0.1}
        minScale={0.1}
        onPanning={() => setPanning(true)}
        onPanningStop={() => setPanning(false)}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform, zoomToElement }) => (
          <Box border="1px" h="calc(100% - 80px)">
            <VStack spacing={4} alignItems="stretch">
              <HStack>
                <Button onClick={() => zoomIn()}>Zoom in</Button>
                <Button onClick={() => zoomOut()}>Zoom out</Button>
                <Button onClick={() => resetTransform()}>Reset</Button>
              </HStack>
              <HStack>
                {categoryData.map((item, index) => (
                  <Button
                    key={item.name}
                    onClick={() => zoomToElement(els.current[index])}
                  >
                    {item.name}
                  </Button>
                ))}
              </HStack>
            </VStack>
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: 'calc(100% - 40px)',
              }}
              contentStyle={{
                padding: '400px',
              }}
            >
              <Grid
                gridTemplateColumns="repeat(2, auto)"
                gridTemplateRows="repeat(2, auto)"
                columnGap={500}
                rowGap={500}
              >
                {categoryData.map((item, index) => (
                  <GridItem
                    key={item.name}
                    w={item.width}
                    ref={(elm: HTMLDivElement) => (els.current[index] = elm)}
                  >
                    <Heading mb={20} fontSize={250}>
                      {item.name}
                    </Heading>
                    <ArticleList panning={panning} />
                  </GridItem>
                ))}
              </Grid>
            </TransformComponent>
          </Box>
        )}
      </TransformWrapper>
    </Box>
  )
}

export default Home

import { useState, useRef } from 'react'
import { VStack, HStack, Box, Heading, Button } from '@chakra-ui/react'
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
        initialScale={0.2}
        minScale={0.2}
        centerOnInit
        onPanning={() => setPanning(true)}
        onPanningStop={() => setPanning(false)}
      >
        {({ zoomIn, zoomOut, resetTransform, zoomToElement }) => (
          <Box border="1px" h="calc(100% - 80px)">
            <HStack>
              <Button onClick={() => zoomIn()}>Zoom in</Button>
              <Button onClick={() => zoomOut()}>Zoom out</Button>
              <Button onClick={() => resetTransform()}>Reset</Button>
              {categoryData.map((item, index) => (
                <Button
                  key={item.name}
                  onClick={() => zoomToElement(els.current[index])}
                >
                  {item.name}
                </Button>
              ))}
            </HStack>
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: 'calc(100% - 40px)',
              }}
              contentStyle={{
                padding: '400px',
              }}
            >
              <VStack spacing={500}>
                <HStack spacing={500} p={100}>
                  {categoryData.map((item, index) => (
                    <Box
                      key={item.name}
                      w={item.width}
                      ref={(elm: HTMLDivElement) => (els.current[index] = elm)}
                    >
                      <Heading mb={20} fontSize={250}>
                        {item.name}
                      </Heading>
                      <ArticleList panning={panning} />
                    </Box>
                  ))}
                </HStack>
              </VStack>
            </TransformComponent>
          </Box>
        )}
      </TransformWrapper>
    </Box>
  )
}

export default Home

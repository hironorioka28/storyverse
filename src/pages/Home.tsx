import { VStack, HStack, Box, Heading, Button } from '@chakra-ui/react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ArticleList from '../components/ArticleList'

const Home = (): JSX.Element => {
  return (
    <Box h="100vh">
      <Heading>Story Verse</Heading>
      <TransformWrapper
        initialScale={0.1}
        minScale={0.1}
        // initialPositionX={200}
        // initialPositionY={100}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <Box border="1px" h="calc(100% - 80px)">
            <Box>
              <Button onClick={() => zoomIn()}>+</Button>
              <Button onClick={() => zoomOut()}>-</Button>
              <Button onClick={() => resetTransform()}>x</Button>
            </Box>
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: 'calc(100% - 40px)',
              }}
            >
              <VStack spacing={500}>
                <HStack spacing={500} p={100}>
                  <Box w="6xl">
                    <ArticleList />
                  </Box>
                  <Box w="8xl">
                    <ArticleList />
                  </Box>
                </HStack>
                <HStack spacing={500} p={100}>
                  <Box w="8xl">
                    <ArticleList />
                  </Box>
                  <Box w="6xl">
                    <ArticleList />
                  </Box>
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

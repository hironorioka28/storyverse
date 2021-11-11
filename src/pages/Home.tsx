import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ArticleList from '../components/ArticleList'

const Home = (): JSX.Element => {
  return (
    <Box h="100vh">
      <Heading>Home</Heading>
      <Text size="lg">Here is Home</Text>
      <TransformWrapper
        initialScale={1}
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
              <ArticleList />
            </TransformComponent>
          </Box>
        )}
      </TransformWrapper>
    </Box>
  )
}

export default Home

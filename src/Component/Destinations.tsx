import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Image } from "@chakra-ui/image"

function Destinations() {
  return (
    <div>
      <Grid
      m={10}
  h='100px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
    
  <GridItem rowSpan={2} colSpan={1} >
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  </GridItem>

  <GridItem colSpan={2}>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  </GridItem>
  <GridItem colSpan={2}></GridItem>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  <GridItem colSpan={4}>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

  </GridItem>
</Grid>
    </div>
  )
}

export default Destinations

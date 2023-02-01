import React from 'react'
import { Image } from "@chakra-ui/image"
import { SimpleGrid } from '@chakra-ui/react'
import slid from '../assets/slide.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import line from '../assets/bg-line.jpg'

import { Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Heading } from '@chakra-ui/react'
function Destinations2() {
  return (
    <div className='bg-card'>
         <h1 className='h1-card-up'>FEEL THE WARMTH OF OUR PEOPLE</h1>
        <div className='card-up'>
         <h1 className='h1-card-up-2'>AND OUR DESTINATIONS</h1>
        </div>
        <SimpleGrid columns={3} spacingX='40px' spacingY='20px'  bgImage={line}>
      <Card maxW='sm' margin={10} maxH='0'>
  <CardBody>
    <Image height={340}
    
    src={slid}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='1' spacing='3'>
      <Heading size='md' color='white'>DESTINATION THAT WELCOME YOU</Heading>
      <p className='p-card'>
         with open doors that lead to countless.
      </p>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
        SEE MORE
      </Button>

    </ButtonGroup>
  </CardFooter>
</Card>

<Card maxW='sm' margin={10} maxH='0'>
  <CardBody>
    <Image height={340}
      src={card2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='1' spacing='4'>
      <Heading size='md' color='white'>UNFORGETTABLE EXPERIENCE ALONGIDE UNIQUE PEIPLE</Heading>
      <p className='p-card'>
      the main constant across Colombia's hugely diverse regions is the warmth you'll be welcomed with in each and every one of them.
      </p>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
      SEE MORE
      </Button>

    </ButtonGroup>
  </CardFooter>
</Card>

<Card maxW='sm' margin={10} maxH='0'>
  <CardBody>
    <Image height={340}
      src={card3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      />
    <Stack mt='1' spacing='3'>
      <Heading size='md' color='white'>COLOMBIA WILL NEVER CEASE TO SURPRISE YOU</Heading>
      <p className='p-card'>
        with stunning biodiversity and charming cultural experessions, our country offers countless adventures.
      </p>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
      SEE MORE
      </Button>

    </ButtonGroup>
  </CardFooter>
</Card>
</SimpleGrid>
      </div>
  )
}

export default Destinations2

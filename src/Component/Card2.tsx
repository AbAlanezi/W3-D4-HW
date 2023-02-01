import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Heading } from '@chakra-ui/react'
 import { Image } from '@chakra-ui/react'
 import { Text } from '@chakra-ui/react'
 import { SimpleGrid } from '@chakra-ui/react'
 import bogta from '../assets/bogta.jpg'
 import andrés from '../assets/Andrés.jpg'
 import medellín from '../assets/Medellín.jpg'
 import cartagena from '../assets/Cartagena.jpg'
function Card2() {
  return (
    <div>
        <h1 className='estinations '>Destinations in Colombia</h1>
        <p className='estinations-p '>In Colombia, rhythm runs through our veins. It's a country that will thrill you with a huge range of destinations catering for all tastes.</p>
        <SimpleGrid columns={1} spacing={10}>
        <Card margin={5}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={bogta}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Bogotá</Heading>

      <Text py='2'>
      Bogotá is the capital of and largest city in Colombia. It is a place of convergence for people from all around the country and is therefore diverse and multicultural. Within this city, the past and present come together.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='red'>
       SHO MORE
      </Button>
    </CardFooter>
  </Stack>
</Card>
        <Card margin={5}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={andrés}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>San Andrés Island</Heading>

      <Text py='2'>
      Almost forty scuba diving sites, one of the best beaches in the Caribbean, a blue sea that's also green and even purple, people brimming with friendliness... to name but a few of the charms of the islands of San Andrés, Providencia and Santa Catalina, located in the Colombian Caribbean.

.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='red'>
      SHO MORE
      </Button>
    </CardFooter>
  </Stack>
</Card>
</SimpleGrid>
        <SimpleGrid columns={1} spacing={10}>
        <Card margin={5}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={medellín}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Medellín</Heading>

      <Text py='2'>
      From the mountains that surround the capital of Antioquia you can see how the Medellín River runs parallel to the Metro, which connects various parts of the city. There is an abundance of parks, libraries, museums and public spaces where many Cultural events take place. 


      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='red'>
      SHO MORE
      </Button>
    </CardFooter>
  </Stack>
</Card>
        <Card margin={5}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={cartagena}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Cartagena de Indias</Heading>

      <Text py='2'>
      Cartagena de Indias is known, brings together the charm of colonial architecture, the excitement of a vivid night life, fascinating cultural festivals, and lush landscapes, to bring you the perfect vacation experience. The city’s beaches beckon, inviting you to unwind and enjoy yourself in the refreshing breeze and warm waters of the sea.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='red'>
      SHO MORE
      </Button>
    </CardFooter>
  </Stack>
</Card>
</SimpleGrid>
      
    </div>
  )
}

export default Card2

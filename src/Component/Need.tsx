import React from 'react'
import health from'../assets/Health.png'
import visas from'../assets/Visas.png'
import withr from'../assets/withr.png'
import loc from'../assets/loc.png'
import currency from'../assets/Currency.png'
import { Image } from "@chakra-ui/image"
import { Text } from '@chakra-ui/react'

function Need() {
  return (
    <div className='div-need'>
        <h1 className='h1-down'>What do you need to know if you are going to Colombia?</h1>
        <div className='imgs'>

    <Image height={50}

src={loc}
  alt='Green double couch with wooden legs'
  borderRadius='lg'
/><Text></Text>
    <Image height={50}

src={withr}
  alt='Green double couch with wooden legs'
  borderRadius='lg'
/>
        <Image height={50}
    
    src={health}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
        <Image height={50}
    
    src={visas}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
        <Image height={50}
    
    src={currency}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
        </div>
    </div>
  )
}

export default Need

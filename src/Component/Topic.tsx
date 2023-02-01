import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'

function Topic() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<HTMLButtonElement>(null);
  
  return (
    <>
      <Button p="10" ml="15" onClick={onOpen}>How to write a good topic sentence
      </Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Get the reader interested with a hook</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
          
Good topic sentences usually include a “hook,” or something that makes people want to read more. While some are more common than others, you can hook your readers in a variety of ways: 
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Hide
            </Button>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      
      <Button p="10" m="10" onClick={onOpen}>How to write a good topic sentence
</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader> Find a middle ground between general and specific</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
          
          One of the biggest challenges in writing topic sentences is learning how much to include and how much to save for the rest of the paragraph. In short, you want to say just enough so that the reader knows what the paragraph is about, and ideally gets interested. Everything else should wait until the supporting sentences.  
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Hide
            </Button>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button p="10" m="10" onClick={onOpen}>How to write a good topic sentence
</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Be clear above all</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
          
          The most important part of topic sentences is clarity. Even if you get the reader excited and eager to read more, it won’t matter if they don’t know what they’re reading about.  
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Hide
            </Button>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
    
  )
}

export default Topic

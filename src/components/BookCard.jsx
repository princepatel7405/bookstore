import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const BookCard = ({image,name,price,author,category}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      w={"200px"}
      ml={"70px"}
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
        <b>Author</b>:{author}
      </Text>
      <Text>
        <b>Type</b>:{category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ₹{price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default BookCard
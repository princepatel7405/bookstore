import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import {SearchIcon} from "@chakra-ui/icons"
import { Box, Heading, Image, Input, InputGroup, InputLeftElement, SimpleGrid } from '@chakra-ui/react'
import BookCard from './BookCard'
const Home = () => {
    const data=useContext(DataContext)
    
useEffect(()=>{
    console.log(data);
},[data])
  return (
    <Box bgColor={"blackAlpha.100"} padding={"50px"}>
         <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <SearchIcon color='grey.300' />
    </InputLeftElement>
    <Input type='tel'  bgColor={"white"} width={"500px"} placeholder='Search By Name' />
         </InputGroup>
    <SimpleGrid columns={[1,2,2,2,3]} gap="40px"  mt={"50px"}>
        {
            data&&data.map((e)=>{
                return (
                    <BookCard price={e.price} name={e.name} author={e.author} category={e.category} image={e.image} />
                )
            })
        }
    </SimpleGrid>
        </Box>
  )
}

export default Home
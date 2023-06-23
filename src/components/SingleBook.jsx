import { Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleBook = () => {
    let {id}=useParams()
    const [data,setData]=useState([])
    console.log(id);
    let getData=async()=>{
        try {
            let res=await fetch(`https://drab-gold-mite-cuff.cyclic.app/book/${id}`)
            res=await res.json()
            console.log(res);
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
            getData()
    },[])
  return (
    <div>
            <Heading>
            {data.name}
            </Heading>
            <Image src={data.image}/>
            <Text fontSize={"xx-large"} ><b>Author</b>:{data.author}</Text>
            <Text fontSize={"xx-large"} ><b>Type</b>:{data.category}</Text>
            <Text fontSize={"xx-large"} ><b>Price</b>:₹{data.price}</Text>
            <Text fontSize={"larger"} ><b>About</b>:{data.description}</Text>
    </div>
  )
}

export default SingleBook

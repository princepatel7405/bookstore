import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import BookCard from "./BookCard";
const Home = () => {
  let data = useContext(DataContext);
  const [arr,setArr]=useState(data)
  const [text,setText]=useState("")
  const getSearch=async(e)=>{
    console.log(e.target.value);
    setText(e.target.value)
        try {
            let res=await fetch(`http://localhost:8080/getbook?name=${text}`)
             res=await res.json()
             console.log(res);
             setArr(res.data)
        } catch (error) {
            console.log(error);
        }
  }

  useEffect(() => {
    console.log(arr);
    setArr(data)
  }, [setArr,data]);
  return (
    <Box bgColor={"blackAlpha.100"} padding={"50px"}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="grey.300" />
        </InputLeftElement>
        <Input
        
          type="tel"
          bgColor={"white"}
          width={"500px"}
          placeholder="Search By Name"
          value={text}
          onChange={(e)=>getSearch(e)}
        />
      </InputGroup>
      <SimpleGrid columns={[1, 2, 2, 2, 3]} gap="40px" mt={"50px"}>
        {arr &&
          arr.map((e) => {
            return (
              <BookCard
                price={e.price}
                name={e.name}
                author={e.author}
                category={e.category}
                image={e.image}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Home;

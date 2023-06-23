import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import BookCard from "./BookCard";
const Home = () => {
  let data = useContext(DataContext);
  const [arr, setArr] = useState(data);
  const [text, setText] = useState("");
  const [category,setCategory] = useState("");

  const [obj, setObj] = useState({});



  const filterData=async(e)=>{
    console.log(e.target.value);
    try {
        let res=await fetch(`http://localhost:8080/book/filter/?category=${e.target.value}`)
        res=await res.json()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
  }
  const getSearch = async (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    try {
      let res = await fetch(
        `https://drab-gold-mite-cuff.cyclic.app/getbook?name=${e.target.value}`
      );
      res = await res.json();
      console.log(res);
      setArr(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(arr);
    console.log(category);
    setArr(data);
  }, [setArr, data,category]);
  return (
    <Box bgColor={"blackAlpha.100"} padding={"50px"}>
      <Flex justifyContent={"flex-end"}>
        <Box w="400px">
          <Text>Filter by Category</Text>
          <select onChange={(e)=>filterData(e)}>
            <option value={""}>select</option>
            <option value={"bussiness"}>Bussiness</option>
            <option value={"Historical Fiction"} >Historical</option>
            <option value={"love story"}>Romance</option>
          </select>
        </Box>
      </Flex>
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
          onChange={(e) => getSearch(e)}
        />
      </InputGroup>
      <SimpleGrid columns={[1, 2, 2, 2, 3]} gap="40px" mt={"50px"}>
        {arr &&
          arr.map((e) => {
            return (
              <BookCard
                id={e._id}
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

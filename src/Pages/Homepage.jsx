import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteData, getCountriesData } from "../Redux/action";

const Homepage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

const countriesData = useSelector((state)=>state.reducer.countries)

  useEffect(()=>{
    dispatch(getCountriesData())
  },[])
  console.log(countriesData);

  const handleDelete = (id) =>{
    dispatch(deleteData(id))
    .then((r)=>{dispatch(getCountriesData())
      navigate('/')
    });
  }

  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr style={{background:"yellowGreen",color:"green",border:"5px solid black"}}>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {countriesData?.length>0 && countriesData.map((el)=>{
              return(
               <Tr key={el.id}>
                <Td style={{background:"purple",color:"white",borderRadius:"150px"}}>{el.country}</Td>
                <Td style={{background:"brown",color:"white",borderRadius:"15px"}}>{el.city}</Td>
                <Td style={{background:"blue",color:"white",borderRadius:"20px"}}>{el.population}</Td>
                <Td style={{background:"orange",color:"green",borderRadius:"30px"}}><Link to={`/country/${el.id}`}>Edit</Link></Td>
                <Td style={{color:"red"}}><BUTTON id={el.id} handledelete={handleDelete}/></Td>
               </Tr>
               
              )
            })}
              

            
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const BUTTON =({id,handledelete})=>{
  return(
    <Button onClick={()=>handledelete(id)}>Delete</Button>
  )
}


export default Homepage;

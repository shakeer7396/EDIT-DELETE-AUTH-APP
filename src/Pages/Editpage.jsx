import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCountriesData, updateCountriesData } from "../Redux/action";

export const Editpage = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const navigate=useNavigate();

  const [country,setCountry] = useState('');
  const [population,setPopulation] = useState('');

  const handleUpdate = () =>{
   let params={
    city:country,
    population:population,
   };

   dispatch(updateCountriesData(id,params))
   .then((r)=>{
    dispatch(getCountriesData());
    navigate("/");
   });
  };
  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={country} onChange={(e)=>setCountry(e.target.value)} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" value={population} onChange={(e)=>setPopulation(e.target.value)} />
      </Box>
      <Button data-cy="update-button" onClick={handleUpdate}>Update</Button>
    </Box>
  );
};

export default Editpage;

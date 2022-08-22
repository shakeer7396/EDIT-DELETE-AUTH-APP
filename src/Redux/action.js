import * as types from "./actionTypes";
import axios from "axios";

const getCountriesRequest = () =>{
    return{type:types.GET_COUNTRIES_REQUEST}
}
const getCountriesSuccess = (payload) =>{
    return{type:types.GET_COUNTRIES_SUCCESS,payload}
}
const getCountriesFailure = () =>{
    return{type:types.GET_COUNTRIES_FAILURE}
}


const updateCountryRequest = () =>{
    return{type:types.UPDATE_COUNTRY_REQUEST}
}
const updateCountrySuccess = (payload) =>{
    return{type:types.UPDATE_COUNTRY_SUCCESS,payload}
}
const updateCountryFailure = () =>{
    return{type:types.UPDATE_COUNTRY_FAILURE}
}


const deleteCountryRequest =()=>{
    return{type:types.DELETE_COUNTRY_REQUEST}
}
const deleteCountrySuccess =(id)=>{
    return{type:types.DELETE_COUNTRY_SUCCESS,id}
}
const deleteCountryFailure =()=>{
    return{type:types.DELETE_COUNTRY_FAILURE}
}

export const getCountriesData = (payload) => (dispatch) =>{
    dispatch(getCountriesRequest())
    axios.get("http://localhost:8080/countries",payload)
    .then((r)=>{dispatch(getCountriesSuccess(r.data))})
    .catch((e)=>{dispatch(getCountriesFailure(e))})
}

export const updateCountriesData = (id,params) => (dispatch) =>{
    dispatch(updateCountryRequest())
    return axios.patch(`http://localhost:8080/countries/${id}`,params)
    .then((r)=>{dispatch(updateCountrySuccess(r.data))})
    .catch((e)=>{dispatch(updateCountryFailure(e))})
};


export const deleteData =(id)=> (dispatch) =>{
dispatch(deleteCountryRequest())
return axios.delete(`http://localhost:8080/countries/${id}`)
.then((r)=>{dispatch(deleteCountrySuccess(r.data))
    return types.DELETE_COUNTRY_SUCCESS
})

}





export{getCountriesRequest,getCountriesSuccess,getCountriesFailure,updateCountryRequest,updateCountrySuccess,updateCountryFailure,deleteCountryRequest,deleteCountrySuccess,deleteCountryFailure};
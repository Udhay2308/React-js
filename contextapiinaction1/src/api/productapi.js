  import axios from "axios"
  export const getdata = async function(){
   const alldata = await axios.get('https://fakestoreapi.com/products')
      return alldata.data
  }
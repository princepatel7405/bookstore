const { createContext, useState, useEffect } = require("react");

const DataContext=createContext()

export const DataState = ({children})=>{

         let [data,setData]=useState([])
         const dataFetch = async() => {
             try {
                 let res=await fetch("https://drab-gold-mite-cuff.cyclic.app/book")
                     res=await res.json()
                     setData(res.data)
             } catch (error) {
                 console.log(error);
             }
         }
         useEffect(()=>{
            dataFetch()
         },[setData])
    return <DataContext.Provider value={data} >
            {children}
    </DataContext.Provider>
}


export default DataContext
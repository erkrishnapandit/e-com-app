import react, {useState, useEffect} from 'react';
import axios from 'axios';
import { backendUrl } from '../App';

const List = () =>{
    const [list,setList] = useState([]);

    const fetchList = async()=>{
        try {
            const response = await axios.get(backendUrl + "/api/product/list");
            console.log(response.data);
            if(response.data.success){
                setList(response.data.products);
            }else{
                toast.error(response.data.message);
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            // alert(response.data.message);
            
        }

    }

    useEffect(()=>{
        fetchList();
    },[])

    return(
       <>
       <p>All Product List</p>
       <div className='flex flex-col gap-4'>
        {/* --------- List Table Title---------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-4 bg-gray-200 border border-gray-300 rounded-sm p-2'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b> 
            <b>Price</b>
            <b>Action</b>
           
        </div>
       </div>
       </>
    )
}

export default List;
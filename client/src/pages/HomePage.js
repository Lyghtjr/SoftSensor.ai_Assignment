import React,{useState,useEffect} from 'react'
import '../Styles/product.css'
import axios from 'axios'
import Product from '../components/Product';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ReactComponent as Spinner } from "../assets/Spinner.svg"
const HomePage = () => {
    const [products, setPrducts] = useState([]);
    const [page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true);
    useEffect(() =>{
        const getProducts = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/products?page=1&limit=8`);
                setPrducts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getProducts();
    },[])

const fetchMoreData = async () =>{
    try{
        const res = await axios.get(`http://localhost:5000/products?page=${page}&limit=8`);
        
        const data = await res.data;
        return data;
    }catch(err){
        console.log(err);
    }
}


const fetchData = async () =>{
    const moreData = await fetchMoreData();

    setPrducts([...products, ...moreData]);

    if(moreData.length === 0 || moreData.length < 8){
        setHasMore(false);
    }
    setPage(page + 1)
};


    return (
        <div className="row">
        <InfiniteScroll
        dataLength={products.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner></Spinner>}
        endMessage={<h3 style={{textAlign:'center'}}>No more items to show...</h3>}
      >

        {products.length > 0 && products.map((product) =>(
            
            <Product product={product} key={product.id} show={true}/>
        ))}
        </InfiniteScroll>
      </div>
    )
}

export default HomePage

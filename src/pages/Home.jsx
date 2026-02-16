import React, { useEffect, useState } from 'react'
import ProductItems from '../components/ProductItems'
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  async function fetchProducts() {
    setLoading(true)

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("Error aya hai Pratik",error);
      setPosts([]);
    }

    setLoading(false)

  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, [])
  return (
    <div className='flex justify-center'>
      {
        loading ? <Spinner /> : 
        (<div className='w-[65%] h-auto  flex justify-center flex-wrap gap-4 p-5 mt-5'>
          {posts.map((post) =>(
          <ProductItems post={post} key={post.id} />
        ))}
        </div>)
      }
    </div>
  )
}

export default Home

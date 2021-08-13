import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { getUserDetails} from '../actions/userActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch() 
  

  const userDetails = useSelector((state) => state.userDetails)
  const { loading1, error1, user } = userDetails

  const z= user.zetaRewards;

  const productList = useSelector((state) => state.productList)
  const { products, page,  pages, error, loading } = productList

  

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber) && getUserDetails())
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              product.zetaRewards<= z && 
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen

/* eslint-disable */
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CSpinner,
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'
import { useSelector } from 'react-redux'

const AllProducts = () => {
  const products = useSelector((state) => state.products)

  return (
    <>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>All Products</strong>
          </CCardHeader>
          <CRow className="container">
            {!products?.listProduct?.getDataProducts ? <CSpinner color="primary" className="mx-auto mt-4"/>  : ( 
              products.listProduct.getDataProducts.map((product) => {
              return (
                <CCol key={product._id} className="d-flex flex-row" lg={3}>
                  <CCard className="mt-3" style={{ width: '16rem' }}>
                    <CCardImage
                      orientation="top"
                      src={product.productImage}
                      style={{ height: '10rem', objectFit: 'cover' }}
                    />
                    <CCardBody>
                      <CCardTitle>{product.name}</CCardTitle>
                      <CCardText>{product.desc}</CCardText>
                      <CCardTitle>Rp. {product.price}</CCardTitle>
                      <div>
                        <CButton
                          className="btn btn-space"
                          href="#"
                          color="warning"
                          style={{ color: 'white' }}
                        >
                          Edit
                        </CButton>
                        <CButton
                          href="#"
                          style={{
                            position: 'absolute',
                            right: '0',
                            marginRight: '10px',
                            color: 'white',
                          }}
                          color="danger"
                        >
                          delete
                        </CButton>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCol>
              )
            }))}
          </CRow>
          <CCardBody></CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default AllProducts

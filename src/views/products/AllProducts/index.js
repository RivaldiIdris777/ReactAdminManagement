/* eslint-disable */ 
import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CCardImage,
    CCardTitle,
    CCardText,
    CButton,
  } from '@coreui/react'

  import ReactImg from 'src/assets/images/react.jpg'

const AllProducts = () => {
  return (
      <>
        <CRow>
          <CCol xs={12}>
             <CCard>
                  <CCardHeader>
                      <strong>All Products</strong>
                  </CCardHeader>
                  <CCardBody>
                      <CRow>
                          <CCol xs={12} style={{ width: '18rem' }}>
                              <CCard>
                                <CCardImage orientation="top" src={ReactImg} />
                                <CCardBody>
                                  <CCardTitle>Card title</CCardTitle>
                                  <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card&#39;s content.
                                  </CCardText>
                                  <CButton href="#">Go somewhere</CButton>
                                </CCardBody>                              
                              </CCard>
                          </CCol>
                      </CRow>
                  </CCardBody>
              </CCard>
          </CCol>
        </CRow>        
      </>
  )
}

export default AllProducts

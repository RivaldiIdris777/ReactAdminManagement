import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUIAdminPage
        </a>
        <span className="ms-1">&copy; 2021 Rivaldi Custom.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Covered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Rivaldi Idris
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

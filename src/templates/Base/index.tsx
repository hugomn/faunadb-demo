import React from 'react'
import { AuthWrapper } from 'lib/auth'

const BaseTemplate: React.FC = ({ children }) => {
  return (
      <AuthWrapper>
        <main data-testid="main">
          {children}
        </main>
      </AuthWrapper>
  )
}

export default BaseTemplate

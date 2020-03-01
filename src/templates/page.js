import React from 'react';
import get from 'lodash/get';
import Theme from '../components/theme.js'

class Page extends React.Component {
  render() {
    const page = get(this.props, 'pageContext')
    return ( 
      <Theme>
        <div style={{height: '100vh', width: '100vw'}}>
          <p>{page.title}</p>
        </div>
      </Theme>
    )
  }
}
export default Page
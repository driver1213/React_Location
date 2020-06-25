import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BaseLayout = (props) => {
    return (
        <>
        <Header />

        {props.children}
        <br/>
        <Footer />
        </>
    )
}

export default BaseLayout

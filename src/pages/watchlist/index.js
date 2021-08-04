import React from 'react'
import Navbar from '../../components/navbar'
import { PageContainer } from '../../styledComponents'

export const Watchlist = () => {
    return (
        <PageContainer>
            <Navbar />
            <h1 className="navText">hello from watchlist</h1>
        </PageContainer>
    )
}
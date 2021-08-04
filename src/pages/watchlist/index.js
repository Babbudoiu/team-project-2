import React from 'react'
import Navbar from '../../components/navbar'
import { PageContainer } from '../../styledComponents'

export const Watchlist =  (data) => {

    return (
        <PageContainer>
            <Navbar />
            <h1>title: {data.title}</h1>
        </PageContainer>
    )
}
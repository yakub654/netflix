import React from 'react'
import { Header } from '../components'

export default function headerContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    )
}

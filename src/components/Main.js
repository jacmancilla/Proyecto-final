import React from 'react'
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'

// Componentes
import AppBar from './AppBar'
import Inicio from './Inicio'
import Registro from './Registro'
import Menu from './Menu'
import Scan from './Scan'



const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<Inicio />} />
        <Route path='/registro' exact element={<Registro />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path='/scan' exact element={<Scan />} />

      </Routes>

    </View>
  )
}

export default Main
import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView, Text } from 'react-native'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab to='/'>Inicio</AppBarTab>
        <AppBarTab to='/registro'>Registro</AppBarTab>
        <AppBarTab to='/scan'>Scan</AppBarTab>
      </ScrollView>
    </View>
  )
}

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <Text fontWeight='bold' style={textStyles}>
        {children}
      </Text>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primario,
    flexDirection: 'row',
    paddingTop: 10
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecundario,
    backgroundColor: theme.appBar.primario,
    paddingHorizontal: 10,
    fontSize: theme.fontSizes.small,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  active: {
    color: theme.appBar.textoPrimario
  }
})

export default AppBar
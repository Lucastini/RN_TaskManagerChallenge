import React from 'react'
import { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type ContainerPropType ={
  children: JSX.Element,
  viewStyleProps: ViewStyle, 
}

const Container = (prop: ContainerPropType) => {

  const {children, ...viewStyleProps} = prop
    return (
        <View style={styles.container} {...viewStyleProps}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Container
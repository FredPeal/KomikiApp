/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

// Creamos barra de navegación
let NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index) {

        if (route.name == 'Login' || route.name == 'Dashboard') {
            return null;
        }
        return (<TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={() => {
              if(index > 0){
                navigator.pop();
              }
          }}>

                <Text style={{marginTop: 10, marginLeft:20, color:'#e3e3e3'}}>Back</Text>
            </TouchableHighlight>
        )
    },
    RightButton: function (route) {
        return null;
    },
    Title: function (route) {
        if (route.name == 'Login' || route.name == 'Dashboard') {
            return null;
        }
        return (
            <Text style={{marginTop: 10, color:'#e3e3e3', fontWeight: 'bold' }}>
                {route.name}
            </Text>
        )
    },
};

// Importamos componentes de Login y Pestañas
const Login = require('./src/components/loginView')
const Tabs = require('./src/components/tabs')
// Importamos vista de detalle
const Details = require('./src/components/komikiDetailView')


export default class KomikiApp extends Component {

    // Implementamos navegación
    renderScene(route, navigator) {
        switch (route.name) {
            case 'Login':
                return (
                    <Login {...route.props} navigator={navigator} route={route}/>
                );
            case 'Dashboard':
                return (
                    <Tabs {...route.props} navigator={navigator} route={route}/>
                );
            // Sin esto no podemos acceder a la navegación a vista de detalle
            case 'Details':
                return (
                    <Details {...route.props} navigator={navigator} route={route}/>
                )

        }
    }

    // Método principal que nos muestra los diferentes componentes por pantalla
    render() {
        return (
            <Navigator style={styles.bar}
                       initialRoute={{name: 'Login'}}
                       renderScene={this.renderScene}
                       configureScene={(route) => {
           if(route.sceneConfig){
             return route.sceneConfig;
           }
           return Navigator.SceneConfigs.FloatFromRight
         }}
                       navigationBar={
           <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}/>}
            />
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#2c2c2d',
    }
});

AppRegistry.registerComponent('KomikiApp', () => KomikiApp);

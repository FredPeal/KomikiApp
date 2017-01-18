import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native';

class loginView extends Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            username: "",
            password: ""
        };
    }


    render() {
        return (
            <Image source={{uri: 'https://www.fancyhometrends.com/images/produkte/i13/131799-FTD-xl-1916.jpg'}}
                   style={styles.container}>
                <Text style={styles.title}>
                    KomikiApp
                </Text>
                <View>
                    <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
                        <Text style={styles.textoBoton}>LOGIN</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        )
    }

    onLogin() {
        Alert.alert(
            'Acceso',
            'Ya estás dentro!!!',
            [
                {
                    text: 'Aceptar',
                    onPress: (this.aceptar.bind(this))
                },
                {
                    text: 'Cancelar',
                    onPress: (this.cancelar.bind(this))
                }
            ]
        )
    }

    aceptar() {
        this.props.navigator.replace({
            title: 'Dashboard',
            name: 'Dashboard',
            passProps: {},
        })

    }

    cancelar() {
        console.log('Login cancelado')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'stretch',
        padding: 30
    },
    title: {
        marginTop: 250,
        fontSize: 35,
        marginBottom: 10,
        backgroundColor: 'rgba(52,52,52,0)',
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    boton: {
        height: 45,
        backgroundColor: 'skyblue',
        borderWidth: 4,
        borderColor: '#ffffff',
        borderRadius: 5,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBoton: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18
    }

})

module.exports = loginView;

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    TouchableHighlight

} from 'react-native';

var Crypto = require('crypto-js');

var marvel = require('./claves.js');    // Revisa el fichero claves-ejemplo.js

const REQUEST_URL = "https://gateway.marvel.com:443/v1/public/characters";

class heroesView extends Component {
    constructor(props) {
        super(props)
        this.timestamp = Date.now();
        this.public_key = marvel.CLAVE_PUBLICA;
        this.private_key = marvel.CLAVE_PRIVADA;
        // Propiedades que creamos en nuestro componente
        // La primera es un poco especial porque invocamos el DataSource de ListView
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            // De entrada nuestros datos no estan cargados
            loaded: false
        }

    }

    // Este metodo se va a ejecutar una vez que el componente se haya montado, sino no vamos a ver los datos cargados
    // En ese momento, pedimos los datos.
    componentDidMount() {
        this.fetchData();
    }

    // Función desde la cual hacemos la petición a la API y obtenemos los datos.
    fetchData() {
        var hash = Crypto.MD5(this.timestamp + this.private_key + this.public_key);

        fetch(REQUEST_URL + '?ts=' + this.timestamp + '&apikey=' + this.public_key + '&hash=' + hash + '&offset=100')
        // Una vez obtengamos respuesta...
        // La convertimos a json
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                this.setState({
                    //CloneWithRows nos pasa automaticmaente los datos para mostrar como lista, feature de React Native
                    // Le decimos a nuestro componente que ya hemos cargado los datos, nos sirve tambien para la animación de carga
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
                    loaded: true
                })
            })
    }


    // Creamos una animación para la carga de los datos.
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Cargando héroes...</Text>
            </View>
        )
    }

    // Cómo renderizar cada linea de nuestra lista
    renderComic(comic) {
        return (
            <TouchableHighlight style={styles.row}>
                <Image source={{uri: comic.thumbnail.path.replace(/^http:\/\//i, 'https://')+'.jpg'}} style={styles.backgroundImage}>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{comic.name}</Text>
                        <Text style={styles.available}>{comic.available}</Text>
                    </View>
                </Image>
            </TouchableHighlight>
        )
    }


    render() {
        // return(
        //   // <View style={styles.container}>
        //   //   <Text style={styles.title}>Soy el componente Dashboard</Text>
        //   // </View>
        // )

        // Si no ha cargado, mostramos el texto de carga
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                //Conjunto de datos a mostrar en la lista
                dataSource={this.state.dataSource}
                // Cómo vamos a mostrar cada fila visualmente
                renderRow={this.renderComic.bind(this)}
                style={styles.listView}
            />
        )
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
    rightContainer: {
        height: 150,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    row: {
        height: 150,
    },
    title: {
        marginTop: 60,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    }
})

module.exports = heroesView;

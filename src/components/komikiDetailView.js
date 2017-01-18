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

class komikiDetailView extends Component {

    // Cargamos las props
    constructor(props) {
        super(props)
        this.passProps = this.props.route.passProps
        // Acortamos la fecha
        this.modified = this.passProps.comic.modified.slice(0, 10);

    }

    //passProps nos pasa las propiedades de nuestro componente

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.passProps.comic.thumbnail.path+'.jpg'}}
                       style={styles.image}/>

                <Text style={styles.title}>
                    {this.passProps.comic.name}
                </Text>
                <Text style={styles.description}>
                    {this.passProps.comic.description}
                </Text>
                <Text style={styles.description}>
                    Disponibles: {this.passProps.comic.comics.available}
                </Text>
                <Text style={styles.modified}>
                    Modificado: {this.modified}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 63,
        flex: 1,
        backgroundColor: '#2c2c2d',
    },
    title: {
        fontSize: 23,
        color: '#ffffff',
        fontWeight: 'bold',
        padding: 10,
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        color: '#e3e3e3',
        padding: 10,
    },
    modified: {
        marginTop: 10,
        fontSize: 16,
        color: 'red',
        padding: 10,
    },
    image: {
        alignSelf: 'stretch',
        height: 300,
    },
})

module.exports = komikiDetailView;

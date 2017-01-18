import React, {Component} from 'react';
import {
    TabBarIOS,
    StyleSheet
} from 'react-native';


const iconDashboard = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAHVJREFUWAntlbsJwDAQQ3WeINijBLJ/a8hI+Z1TpEilTpBIhSuB4OHHAY4JmMDfCcTUWi/AogBxAr3kcyjGx2YAu2rbuybwENBrmCqkiZpYQw13r74I5EfkUmtdETFzba51X0Oumq5GbGyX7VlDlpR7JvBtAhfC1RD7fnToFQAAAABJRU5ErkJggg=='
const iconHeroes = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSUlEQVRYR+2WMYjTUBjH/6+PEhHqpI1pQ4lQnAQnuc1FsVAoyIkWhCIidLBDew5OgtkVa6mDtloEBcGgFjs5nSLcVvBwcWusNs3g0EWrts0n7+hBFe4uaRNvuW9M3vt+v3zvfR9h2OVgu8zHnsBeBQKtQLFYTA2Hw/e1Wu3HVpc9EAFd1/cNBoO7RPSqUqm82a7TfBcolUraZDIxAKxVq9XiTm3uq0ChUEgDeEJEfUmSTpTL5eF/EdB1PdTv928S0Q0AYyJaqtfrH3aCi/cLVyCfzx8cjUZPAaQ2EjJ2vdFo3HIDX1ggl8stEdFzAIkp8G0ymTyl67oTuEA2m70K4A4AaQobOI5z3DCMrlv4XBXIZDL7Oef3GWO5WRARXWw2m8+8wD0LpNPpo5zzFwCO/QP6AuBMq9X6FJhAKpU6zRgT8ANbQAjAOwAPIpHIS8MwfruR8dIFIU3TTjLGzgNYBnB4KxEiWjFNs+K3wGw+rmlahohERUIzL74T0eVutysmoavwUoG/EiYSiccALs08NDnnZzudzror8nTRXAKqqoojEF+/GauO41ywLOubF7jnLhAbotGoHA6HPwI4tJGAsXuyLF9rt9sjr/C5BOLx+GsAGQC/iKhgWdajecCbezwdQSwWuwLgIQAbwDnLstYWgXuqgCzLRzjn64wxMWyWe73e10XhXgRCiqKsAvgsSVLeNM2ffsBdCyiKskJE3Lbt236BXd8BVVXj4/E4adu2GLO+h5tLKNaIOR9IuBEIBOz6CAKl+/FPuKjgHywAtyG9W2tYAAAAAElFTkSuQmCC'

const Dashboard = require('./dashboardView');
const Heroes = require('./heroesView');

class Tabs extends Component {

    // Este constructor se trae las propiedades que le pasamos por parámetro y las añade al componente
    // Heredamos propiedades de nuestro padre
    // También inicializamos propiedades aquí

    constructor(props) {
        super(props)

        this.state = {
            selectedTab: 'dashboard'
        }
    }

    render() {
        return (
            <TabBarIOS tintColor="white"
                       barTintColor="#2c2c2d">

                <TabBarIOS.Item
                    title="Dashboard"
                    // Marcamos tab que aparece como seleccionada al estar activa
                    selected={this.state.selectedTab === 'dashboard'}
                    icon={{uri: iconDashboard}}
                    onPress={() => {
              this.setState({
                selectedTab: 'dashboard'

              })

            }}>

                    <Dashboard navigator={this.props.navigator}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Heroes"
                    selected={this.state.selectedTab === 'heroes'}
                    icon={{uri: iconHeroes}}
                    onPress={() => {
              this.setState({
                selectedTab: 'heroes'
              })

            }}>

                    <Heroes/>
                </TabBarIOS.Item>

            </TabBarIOS>

        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
});


module.exports = Tabs;

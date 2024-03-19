import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

export default class Facturas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      facturas: [],
    };
  }

  componentDidMount() {
    this.getFacturas();
  }

  getFacturas = () => {
    this.setState({ loading: true });
    fetch('https://localhost:7284/api/factura')
      .then(res => res.json())
      .then(data => {
        this.setState({
          facturas: data,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.setState({ modalVisible: true })}
              style={{
                backgroundColor: '#440000',
                padding: 10,
                borderRadius: 50,
                marginBottom: 5,
                width: '150px',
                marginLeft: 300,
                marginRight: 300,
                marginTop: 20,
              }}
            >
              <Text style={{ color: 'white' }}>Registrar Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ modalVisible: true })}
              style={{
                backgroundColor: '#440000',
                padding: 10,
                borderRadius: 50,
                marginBottom: 5,
                width: '150px',
                marginLeft: 300,
                marginRight: 300,
                marginTop: 6,
              }}
            >
              <Text style={{ color: 'white' }}>Buscar Cliente</Text>
            </TouchableOpacity>
          </View>
              <View style={styles.containerdos}>
                <Text style={styles.headerItem }>Empresa: Diablo Amargo</Text>
                <Text style={styles.headerItem}>Direccion: </Text>
              </View>
              <View style={styles.containertres}>
                <Text style={styles.headerItem }>Fecha De Compra:</Text>
                <Text style={styles.headerItem}>Id Cliente: </Text>
                <Text style={styles.headerItem}>Id Empleado: </Text>
              </View>
            
            <View style={styles.containercuatro}>
                <Text style={styles.headerItem }>ID:</Text>
                <Text style={styles.headerItem }>Nombre:</Text>
                <Text style={styles.headerItem }>Precio Unitario:</Text>
                <Text style={styles.headerItem }>Cantidad:</Text>
                
            </View>
            <View>
              <button
              style={{
                backgroundColor: '#440000',
                padding: 10,
                borderRadius: 50,
                marginBottom: 1,
                width: '150px',
                marginLeft: 300,
                marginRight: 300,
                marginTop: 6,
                color:'white'
              }}
              >Confirmar</button>
              <button
              style={{
                backgroundColor: '#440000',
                padding: 10,
                borderRadius: 50,
                marginBottom: 1,
                width: '150px',
                marginLeft: 300,
                marginRight: 300,
                marginTop: 6,
                color:'white'
              }}
              >Cancelar</button>
            </View>
            <FlatList
              contentContainerStyle={styles.tableGroupDivider}
              data={this.state.facturas}
              renderItem={({ item, index }) => (
                <TouchableOpacity>
                  <View style={styles.row}>
                    <Text style={[styles.item, { flex: 1 }]}>{index + 1}</Text>
                    <Text style={[styles.item, { flex: 2 }]}>{item.fechaCompra}</Text>
                    <Text style={[styles.item, { flex: 1 }]}>{item.ivaCompra}</Text>
                    <Text style={[styles.item, { flex: 1 }]}>{item.subtotal}</Text>
                    <Text style={[styles.item, { flex: 1 }]}>{item.total}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  item: {
    flex: 1,
    textAlign: 'center',
  },
  tableHeader: {
    flex: 1,
    color: 'white',
    paddingVertical: 5,
  },
  tableGroupDivider: {
    backgroundColor: '#dcdcdc',
  },
  buttonContainer: {
    row: 'space',
    
  },
  containerdos: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 300,
    marginRight: 300,
    marginTop: 3,
    margin:'30px'
  },
  containertres: {
    flex: 1,
    marginLeft: 300,
    marginRight: 300,
    marginTop: -28,
    backgroundColor: 'white',
    margin:'40px'
  },
  containercuatro: {
    flex: 1,
    marginLeft: 300,
    marginRight: 300,
    marginTop: -38.5,
    display: 'flex',
    flexDirection: 'row',
    columnGap: '150px',
    backgroundColor: 'white',
    margin:'30px'
  },

});

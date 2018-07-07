import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default class App extends Component {
   constructor() {
       super();
       this.state = {}
   }

    render() {
       let rows = [];
       let index = 1;
       for(let i = 0; i < 4; i++) {
           let row = [];
           for(let j =0; j < 3; j++ ) {
               row.push(
                   <TouchableOpacity style={styles.btn}>
                       <Text>{index}</Text>
                   </TouchableOpacity>
               );
               index++;
           }
           rows.push(<View style={styles.row}>{row}</View>)
       }

        return(
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>5*5</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>25</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        <TouchableOpacity>
                            <Text>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>0</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    calculationText: {
        fontSize: 20,
        color: 'white',

    },
    btn: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    resultText: {
        fontSize: 24,
        color: 'white',
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    result: {
        flex:2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex:1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
        flex: 3,
        backgroundColor: 'yellow'
    },
    operations: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    }
});


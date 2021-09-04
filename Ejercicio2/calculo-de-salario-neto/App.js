import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  
    state = {
      
      text1:'',
      text2:'',
      text3:'',
      resultado:'0'};

   Positivo(valor1)
  {
    if(valor1 )
    {
    var sb=parseFloat(valor1);
    var iss= sb *0.03;
    var afp = sb *0.04;
    var renta= sb *0.05;
    var sn = sb - iss - afp - renta;
    this.setState({resultado: "Salario base $"+sb+"\n"+ "Descuento ISS(3%) $"+iss+"\n"+ "Descuento AFP(4%) $"+afp+"\n"+ "Descuento RENTA(5%) $"+renta+"\n"+"Salario Neto =$"+sn}) ;
    }
    else
    this.setState({resultado: 'Error!!'}) ;
  }

 
  render() {
    
    return (
      <View style={{flex:1,padding: 10,fontSize:24}}>
      <Text style={{padding: 15, fontSize: 24,backgroundColor:'red',color: 'white',
      textAlign:'center'}}>
       Calculando Salario neto de empleado
      </Text>

      
      <TextInput
        style={{height: 40,borderColor:'blue',borderWidth:2,padding:5,marginTop:10}}
        placeholder="Ingrese Salario Base"
        onChangeText={(text1) => this.setState({text1})}
        keyboardType='numeric'
      />
      
    
 <TouchableOpacity 
 style={{height: 60,backgroundColor:'green', marginTop:10,alignContent:'center',alignItems:'center',textAlignVertical:'center'}}
    onPress={() => {
 this.Positivo(this.state.text1,this.state.text2, this.state.text3);
}}
>
<Text style={{color:'white',fontSize:34,textAlignVertical:'center',textAlign: "center"}}> Calcular</Text>
</TouchableOpacity>


      <Text style={{padding: 10, fontSize: 32}}>
        {this.state.resultado}
      </Text>
      
    </View>
    );
  }
}
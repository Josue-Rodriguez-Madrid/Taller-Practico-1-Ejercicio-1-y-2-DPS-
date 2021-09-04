import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  
    state = {
      
      text1:'',
      text2:'',
      text3:'',
      resultado:'0'};

   Positivo(valor1, valor2, valor3)
  {
    if(!!valor1 &&  !!valor2 && !!valor3)
    {
    var a=parseFloat(valor1);
    var b=parseFloat(valor2);
    var c=parseFloat(valor3);
    var d= b*b;
    var e= 4*a*c;
    var f= d - e;
    var r=Math.sqrt(f);
    var g = - b + r;
    var h = 2*a;
    var x1= g/h
    this.setState({resultado: "Valores de: "+"a:"+a+","+"b:"+b+","+"c:"+c+";"+"\n"+"La respuesta de "+"X1"+"="+x1}) ;
    }
    else
    this.setState({resultado: 'Error!!'}) ;
  }

 Negativo(valor1, valor2, valor3)
  {
    if(!!valor1 &&  !!valor2 && !!valor3)
    {
    var a=parseFloat(valor1);
    var b=parseFloat(valor2);
    var c=parseFloat(valor3);
    var d= b*b;
    var e= 4*a*c;
    var f= d - e;
    var r=Math.sqrt(f);
    var g = - b - r;
    var h = 2*a;
    var x2= g/h
   this.setState({resultado: "Valores de: "+"a:"+a+","+"b:"+b+","+"c:"+c+";"+"\n"+"La respuesta de "+"X2"+"="+x2}) ;
    }
    else
    this.setState({resultado: 'Error!!'}) ;
  }

  render() {
    
    return (
      <View style={{flex:1,padding: 10,fontSize:24}}>
      <Text style={{padding: 15, fontSize: 24,backgroundColor:'orange',color: 'white',
      textAlign:'center'}}>
       Resolviendo ecuacion cuadratica
      </Text>

      <Image
      style={{width :250, height:145}}
      source={require('./assets/1.jpg')}
      Style={{width:800,height:800}}
      />
      
      <TextInput
        style={{height: 40,borderColor:'green',borderWidth:2,padding:5,marginTop:10}}
        placeholder="Valor a"
        onChangeText={(text1) => this.setState({text1})}
        keyboardType='numeric'
      />
      <TextInput
        style={{height: 40,borderColor:'green',borderWidth:2,padding:5,marginTop:5}}
        placeholder="Valor b"
        onChangeText={(text2) => this.setState({text2})}
         keyboardType='numeric'
      />
      <TextInput
        style={{height: 40,borderColor:'green',borderWidth:2,padding:5,marginTop:5}}
        placeholder="Valor c"
        onChangeText={(text3) => this.setState({text3})}
         keyboardType='numeric'
      />
    
 <TouchableOpacity 
 style={{height: 60,backgroundColor:'blue', marginTop:10,alignContent:'center',alignItems:'center',textAlignVertical:'center'}}
    onPress={() => {
 this.Positivo(this.state.text1,this.state.text2, this.state.text3);
}}
>
<Text style={{color:'white',fontSize:24,textAlignVertical:'center',textAlign: "center"}}> Raiz Positiva X1</Text>
</TouchableOpacity>

<TouchableOpacity 
 style={{height: 60,backgroundColor:'green', marginTop:10,alignContent:'center',alignItems:'center',textAlignVertical:'center'}}
    onPress={() => {
 this.Negativo(this.state.text1,this.state.text2, this.state.text3);
}}
>
<Text style={{color:'white',fontSize:24,textAlignVertical:'center',textAlign: "center"}}>Raiz Negativa X2</Text>
</TouchableOpacity>


      <Text style={{padding: 10, fontSize: 32}}>
        {this.state.resultado}
      </Text>
      
    </View>
    );
  }
}
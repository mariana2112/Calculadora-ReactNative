import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Styles from './style';
import React, {useState} from 'react';
import {calcular} from './functions';
export default function App() {
  const [texto1, setTexto1] = useState(0);
  const [texto2, setTexto2] = useState(0);
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState(0);
  return (
    <View style={Styles.container}>
      <Text style={Styles.texto2}>Calculadora</Text>
      <View style={Styles.linha}>
        <View>
          <TouchableOpacity
            onPress={() => setOperacao('+')}
            style={[
              Styles.botao,
              operacao === '+' ? Styles.selecionado : false,
            ]}>
            <Text style={Styles.texto}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOperacao('-')}
            style={[
              Styles.botao,
              operacao === '-' ? Styles.selecionado : false,
            ]}>
            <Text style={Styles.texto}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOperacao('x')}
            style={[
              Styles.botao,
              operacao === 'x' ? Styles.selecionado : false,
            ]}>
            <Text style={Styles.texto}>x</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOperacao('/')}
            style={[
              Styles.botao,
              operacao === '/' ? Styles.selecionado : false,
            ]}>
            <Text style={Styles.texto}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'flex-start'}}>
          <TextInput
            value={texto1}
            onChangeText={tex => {
              setTexto1(tex);
            }}
            keyboardType={'number-pad'}
            style={Styles.input}></TextInput>
          <TextInput
            value={texto2}
            onChangeText={tex => {
              setTexto2(tex);
            }}
            keyboardType={'number-pad'}
            style={Styles.input2}></TextInput>

          <TouchableOpacity
            onPress={() => calcular(texto1, texto2, operacao, setResultado)}
            style={Styles.botao2}>
            <Text style={Styles.texto}>Calcular</Text>
          </TouchableOpacity>

          <Text style={Styles.resultado}>{resultado}</Text>
        </View>
      </View>
    </View>
  );
}

import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
  },
  botao: {
    backgroundColor: '#4682B4',
    margin: 10,
    borderRadius: 500,
    height: 50,
    width: 50,
  },
  botao2: {
    backgroundColor: '#483D8B   ',
    margin: 20,
    borderRadius: 20,
    marginHorizontal: 150,
    marginLeft: 10,
  },
  texto: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  texto2: {
    marginTop: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },

  linha: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#708090',
    borderRadius: 5,
    opacity: 0.6,
    marginLeft: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    textAlign: 'center',
    fontSize: 20,
  },
  input2: {
    backgroundColor: '#708090',
    borderRadius: 5,
    opacity: 0.6,
    marginLeft: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    textAlign: 'center',
    fontSize: 20,
  },
  resultado: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: 10,
  },
  selecionado: {
    backgroundColor: 'green',
  },
});
export default Styles;

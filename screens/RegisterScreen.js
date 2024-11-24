import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import MaskInput, { Masks } from 'react-native-mask-input';
import { RadioButton } from 'react-native-paper';

export default function RegisterScreen({ navigation }) {
  const [accountType, setAccountType] = useState('user'); 
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    district: '',
    city: '',
    state: '',
    cpf: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    const { username, address, district, city, state, cpf, phone, password, confirmPassword } = formData;

    // Verificação de CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      Alert.alert('Erro', 'CPF inválido. Formato correto: 000.000.000-00');
      return false;
    }

    // Verificação de telefone
    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Erro', 'Telefone inválido. Formato correto: (00) 00000-0000');
      return false;
    }

    // Verificação de senha
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (validateForm()) {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.replace('Login'); 
    }
  };

  return (
    <View style={styles.container}>
      {/* Fundo com gradiente */}
      <View style={StyleSheet.absoluteFill}>
        <Svg height="100%" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#729466" stopOpacity="1" />
              <Stop offset="100%" stopColor="#788972" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </View>

      {/* Logo */}
      <Image
        source={require('../assets/images/logo2.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <ScrollView style={styles.form} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Tipo de Conta */}
        <Text style={styles.label}>Selecione o Tipo de Conta</Text>
        <View style={styles.radioButtonContainer}>
          <View style={styles.radioButtonOption}>
            <RadioButton
              value="user"
              status={accountType === 'user' ? 'checked' : 'unchecked'}
              onPress={() => setAccountType('user')}
              color="rgba(0, 0, 0, 0.8)"
            />
            <Text style={styles.radioButtonLabel}>Usuário</Text>
          </View>
          <View style={styles.radioButtonOption}>
            <RadioButton
              value="admin"
              status={accountType === 'admin' ? 'checked' : 'unchecked'}
              onPress={() => setAccountType('admin')}
              color="rgba(0, 0, 0, 0.8)"
            />
            <Text style={styles.radioButtonLabel}>Administrador</Text>
          </View>
        </View>

        {/* Campos do Formulário */}
        {[{ placeholder: 'Usuário', key: 'username' }, { placeholder: 'Endereço', key: 'address' }, { placeholder: 'Bairro', key: 'district' }, { placeholder: 'Cidade', key: 'city' }, { placeholder: 'Estado', key: 'state' }].map(({ placeholder, key }) => (
          <TextInput
            key={key}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
            autoCapitalize="none"
            value={formData[key]}
            onChangeText={(value) => handleInputChange(key, value)}
          />
        ))}

        {/* CPF com máscara */}
        <MaskInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          value={formData.cpf}
          onChangeText={(masked, raw) => handleInputChange('cpf', masked)}
          mask={Masks.BRL_CPF}
        />

        {/* Telefone com máscara */}
        <MaskInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          value={formData.phone}
          onChangeText={(masked, raw) => handleInputChange('phone', masked)}
          mask={Masks.BRL_PHONE}
        />

        {/* Senha e Confirmar Senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          secureTextEntry
          autoCapitalize="none"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          secureTextEntry
          autoCapitalize="none"
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
        />

        {/* Botão de Cadastro */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 35,
    marginBottom: 20,
    opacity: 0.8, 
    alignSelf: 'center', 
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  radioButtonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 30,
  },
  radioButtonOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonLabel: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
 input: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

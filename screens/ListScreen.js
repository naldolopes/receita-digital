import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const userData = {
  id: '1',
  user: 'Reginaldo Lopes de Oliveira',
  img_url: require('../assets/images/user_photo.jpg'),
  email: 'reginaldo.l@gmail.com',
  doc: '292.314.871-52',
  phone: '(12) 98765-0987',
};
const mockData = [
  {
    id: '1',
    number: '#00002684',
    date: '19/10/2024 - 8h45',
    doctor: 'Dr. Carlos José Marin',
    place: 'MedSaúde Clínica Médica ',
    location: 'São Paulo',
    specialties: 'Clínico Geral',
    doc: 'CRM/SP-785469',
    img_url: require('../assets/images/doc2.jpg'),
    itens: 1,
    medicine_list: {
      medicine: 'Losartana Potássica 50mg',
      detail: '02 vezes ao dia de 12 em 12 horas.',
    },
    region: {
      latitude: -23.55052,
      longitude: -46.633308,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
    shop_coordinates: [
      {
        id: 1,
        latitude: -23.55052,
        longitude: -46.633308,
        title: 'Ponto 1',
        bestplace: false,
      },
      {
        id: 2,
        latitude: -23.55052,
        longitude: -46.633308,
        title: 'Ponto 1',
        bestplace: true,
      },
      {
        id: 3,
        latitude: -23.55052,
        longitude: -46.633308,
        title: 'Ponto 1',
        bestplace: false,
      },
    ],
  },
  {
    id: '2',
    number: '#00003409',
    date: '24/11/2024 - 10h30',
    doctor: 'Dra. Marta Lopes da Silva',
    place: 'Clínica Santa Helena',
    location: 'São José dos Campos',
    specialties: 'Cardiologista',
    doc: 'CRM/SP-458523',
    img_url: require('../assets/images/doc1.jpg'),
    itens: 2,
    exam_list: {
      exam: 'Hemograma Completo',
      detail: 'Em jejum de 12 horas.',
    },
  },
  {
    id: '3',
    number: '#00003550',
    date: '26/11/2024 - 14h30',
    doctor: 'Dr. Mário Sérgio Calvancante',
    place: 'Hospital Vivale',
    location: 'São José dos Campos',
    specialties: 'Urologista',
    doc: 'CRM/SP-852456',
    img_url: require('../assets/images/doc3.jpg'),
    itens: 3,
    medicine_list: {
      medicine: 'Losartana Potássica 50mg',
      detail: '02 vezes ao dia de 12 em 12 horas.',
    },
    exam_list: {
      exam: 'Hemograma Completo',
      detail: 'Em jejum de 12 horas.',
    },
  },
];

const { height, width } = Dimensions.get('window'); // Obter altura e largura da tela

export default function ListScreen({ route, navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <View style={styles.textLeft}>
          <Text style={styles.title}>{item.doctor}</Text>
          <Text style={styles.subtitle}>{item.specialties}</Text>
        </View>
        <Image source={item.img_url} style={styles.imageCard} />
      </View>

      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.subtitle}>Paciente</Text>
        <Text style={styles.textLeftAligned}>{userData.user}</Text>
      </View>

      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.subtitle}>Data</Text>
        <Text style={styles.textLeftAligned}>{item.date}</Text>
      </View>

      <View style={styles.separator} />

      {/* Condicional para exibir "Itens Prescritos" baseado no valor de 'itens' */}
      {item.itens === 1 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Itens Prescritos</Text>
          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/check.png')}
              style={styles.icon}
            />
            <Text style={styles.checkText}>MEDICAMENTOS</Text>
          </View>
        </View>
      )}

      {item.itens === 2 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Itens Prescritos</Text>
          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/check.png')}
              style={styles.icon}
            />
            <Text style={styles.checkText}>EXAMES</Text>
          </View>
        </View>
      )}

      {item.itens === 3 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Itens Prescritos</Text>
          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/check.png')}
              style={styles.icon}
            />
            <Text style={styles.checkText}>MEDICAMENTOS</Text>
          </View>
          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/check.png')}
              style={styles.icon}
            />
            <Text style={styles.checkText}>EXAMES</Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            data: item,
            userData: userData,
          })
        }>
        <Text style={styles.buttonText}>VISUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Svg height={height * 0.4} width={width}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="100%" stopColor="#485E41" stopOpacity="1" />
              <Stop offset="50%" stopColor="#729466" stopOpacity="1" />
              <Stop offset="100%" stopColor="#485E41" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>

        <View style={styles.profileContainer}>
          <Image source={userData.img_url} style={styles.picture} />
          <Text style={styles.userText}>{userData.user}</Text>

          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/card.png')}
              style={styles.icon}
            />
            <Text style={styles.docText}>{userData.doc}</Text>
          </View>

          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/phone.png')}
              style={styles.icon}
            />
            <Text style={styles.phoneText}>{userData.phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.fixedView}>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/images/case.png')}
            style={styles.header_icon}
          />
          <Text style={styles.fixedText}>RECEITAS DIGITAIS</Text>
        </View>
      </View>

      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8E8',
  },
  topView: {
    width: width,
    height: height * 0.4, // Ajuste a altura proporcionalmente
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 0,
  },
  profileContainer: {
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    marginTop: 20,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  userText: {
    marginTop: 10,
    color: '#0F2707',
    fontSize: 24,
    fontWeight: 'bold',
  },
  docText: {
    color: '#0F2707',
    fontSize: 20,
  },
  phoneText: {
    color: '#0F2707',
    fontSize: 20,
  },
  checkText: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  listContainer: {
    paddingTop: height * 0.4 + 45,
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
  item: {
    backgroundColor: '#fff',
    height: 450,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 3,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#0F2707',
    marginRight: 10,
  },
  header_icon: {
    width: 22,
    height: 20,
    marginRight: 10,
  },
  fixedView: {
    position: 'absolute',
    paddingLeft: 20,
    top: height * 0.4,
    width: width,
    backgroundColor: '#EDE8E8',
    padding: 5,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  fixedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLeft: {
    flex: 1,
    marginRight: 10,
  },
  section: {
    marginBottom: 5,
  },
  textLeftAligned: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#0F2707',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageCard: {
    width: 60,
    height: 60,
    borderRadius: 30,
    aspectRatio: 1,
  },
});

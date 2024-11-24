import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { data, userData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/images/detail-top.png')} // Substitua pelo caminho da sua imagem
          style={styles.image}
        />
        <Text style={styles.title}>RECEITA DIGITAL</Text>
        <Text style={styles.subtitle}>{data.number}</Text>

        {/* Nova View com ícone e texto inline */}
        <View style={styles.placeContainer}>
          <Image
            source={require('../assets/images/place.png')}
            style={styles.placeIcon}
          />
          <Text style={styles.placeText}>{data.place}</Text>
        </View>

        {/* doctorContainer com informações do médico */}
        <View style={styles.doctorContainer}>
          <View style={styles.doctorNameContainer}>
            <Text style={styles.doctorText}>{data.doctor}</Text>

            {/* Dois TextViews abaixo do nome do médico */}
            <View style={styles.inlineTextContainer}>
              <Text style={styles.doctorSpecText}>{data.specialties}</Text>
              <Text style={styles.doctorDocBullet}>{data.doc}</Text>
            </View>
          </View>

          {/* ImageView à direita centralizada */}
          <Image source={data.img_url} style={styles.doctorImage} />
        </View>

        <View style={styles.separator} />

        {/* pacientContainer */}
        <View style={styles.pacientContainer}>
          <Text style={styles.additionalInfoSubText}>Paciente</Text>
          <Text style={styles.pacientInfoText}>{userData.user}</Text>
        </View>

        <View style={styles.separator} />

        {/* Condicional para exibir MEDICAMENTOS */}
        {data.itens === 1 && (
          <View style={styles.section}>
            {/* medicineContainer */}
            <View style={styles.pacientContainer}>
              <Text style={styles.innnerTitle}>Medicamentos</Text>

              <View style={styles.innerContainer}>
                <Image
                  source={require('../assets/images/medicine_logo.png')}
                  style={styles.medicineIcon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.pacientInfoText}>
                    {data.medicine_list.medicine}
                  </Text>
                  <Text style={styles.pacientInfoTextDetail}>
                    {data.medicine_list.detail}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.button, styles.rowButton]}
                onPress={() =>
                  navigation.navigate('Map', {
                    data: data,
                  })
                }>
                <Text style={styles.buttonText}>Onde Comprar</Text>
                <Image
                  source={require('../assets/images/map.png')}
                  style={styles.placeIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.separator} />
          </View>
        )}

        {/* Condicional para exibir EXAMES */}
        {data.itens === 2 && (
          <View style={styles.section}>
            {/* examsContainer */}
            <View style={styles.pacientContainer}>
              <Text style={styles.innnerTitle}>Exames</Text>

              <View style={styles.innerContainer}>
                <Image
                  source={require('../assets/images/exam_logo.png')}
                  style={styles.medicineIcon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.pacientInfoText}>
                    {data.exam_list.exam}
                  </Text>
                  <Text style={styles.pacientInfoTextDetail}>
                    {data.exam_list.detail}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        )}

        {/* Condicional para exibir MEDICAMENTOS e EXAMES */}
        {data.itens === 3 && (
          <View style={styles.section}>
            {/* medicineContainer */}
            <View style={styles.pacientContainer}>
              <Text style={styles.innnerTitle}>Medicamentos</Text>

              <View style={styles.innerContainer}>
                <Image
                  source={require('../assets/images/medicine_logo.png')}
                  style={styles.medicineIcon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.pacientInfoText}>
                    {data.medicine_list.medicine}
                  </Text>
                  <Text style={styles.pacientInfoTextDetail}>
                    {data.medicine_list.detail}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.button, styles.rowButton]}
                onPress={() =>
                  navigation.navigate('Map', {
                    data: data,
                  })
                }>
                <Text style={styles.buttonText}>Onde Comprar</Text>
                <Image
                  source={require('../assets/images/map.png')}
                  style={styles.placeIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            {/* examsContainer */}
            <View style={styles.pacientContainer}>
              <Text style={styles.innnerTitle}>Exames</Text>

              <View style={styles.innerContainer}>
                <Image
                  source={require('../assets/images/exam_logo.png')}
                  style={styles.medicineIcon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.pacientInfoText}>
                    {data.exam_list.exam}
                  </Text>
                  <Text style={styles.pacientInfoTextDetail}>
                    {data.exam_list.detail}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        )}

        {/* FooterContainer */}
        <View style={styles.pacientContainer}>
          <Text style={styles.footerPlaceText}>
            {data.location} - {data.date}
          </Text>
          <Image
            source={require('../assets/images/code.png')}
            style={styles.codeIcon}
          />
          <Text style={styles.footerSignText}>Assinatura Digital</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDE8E8',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    maxWidth: '90%',
    height: '90%',
    alignSelf: 'center',
    position: 'relative',
  },
  image: {
    width: 66,
    height: 65,
    position: 'absolute',
    top: 10,
    right: 20,
  },
  title: {
    fontSize: 24,
    color: '#222222',
    fontWeight: 'bold',
  },
  innnerTitle: {
    fontSize: 22,
    color: '#222222',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 3,
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  placeText: {
    fontSize: 18,
    color: '#222222',
  },
  doctorContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  doctorNameContainer: {
    flex: 1,
    marginBottom: 5,
  },
  doctorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  inlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  doctorSpecText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0356F8',
    marginRight: 5,
  },
  doctorDocBullet: {
    backgroundColor: '#0F2707',
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
    width: 110,
    height: 26,
    textAlign: 'center',
    borderRadius: 30,
    color: 'white',
    marginLeft: 5,
  },
  pacientContainer: {
    marginTop: 2,
    padding: 4,
  },
  innerContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  medicineIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  placeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'space-between',
    height: 50,
  },
  pacientInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pacientInfoTextDetail: {
    fontSize: 14,
    color: 'gray',
  },
  additionalInfoSubText: {
    fontSize: 16,
    color: 'gray',
  },
  separator: {
    margin: 2,
    height: 1,
    backgroundColor: '#ddd',
  },
  rowButton: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0F2707',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 8,
  },
  footerPlaceText: {
    fontSize: 13,
    color: '#222222',
    alignSelf: 'center',
    marginBottom: 5,
  },
  footerSignText: {
    fontSize: 11,
    color: 'gray',
    alignSelf: 'center',
  },
  codeIcon: {
    margin: 5,
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
  section: {
    marginBottom: 5,
  },
});

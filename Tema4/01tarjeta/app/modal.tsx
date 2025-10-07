import { Text, View, Image, StyleSheet } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function Index() {
  return (
    <View
      style={
      styles.screen
      }>
      <View style={
      styles.container
      }>
       <Image
        style={styles.profilePicture}
        source={{
          uri: 'https://i.pinimg.com/originals/f4/40/8a/f4408ae59bc76f809d049fcc92cbea80.jpg',
        }}
      />
       <Text style={styles.name}>Samuel Jimenez.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02afffff',
    padding: 20, 
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%', 
    
  },
  profilePicture: {
    width: '50%', 
    aspectRatio: 1,
    borderRadius: 1000, 
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
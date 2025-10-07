import { StyleSheet, Text, View } from "react-native";
//#region views
export default function Index() {

  return (
 
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerText}>Bienvenidos a mi apps.</Text>
        
      </View>

      <View style={styles.content}>

      <View style={styles.leftColumn}>
        
      </View>

        <Text style={styles.contentText}>Hola</Text>

      <View style={styles.rightColumn}>

      </View>

      </View>

      <View style={styles.footer}>

        <Text style={styles.footerText}>Footer de mi app</Text>

      </View>

    </View>
    
  );
}
//#endregion
//#region styles
const styles = StyleSheet.create({

  header: {
    backgroundColor: '#00d9ffff',
    height: 80,               
    justifyContent: 'center', 
    alignItems: 'center',     
    paddingHorizontal: 10,
  },
  container:{
    flex: 1,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',           
  },
  footer:{
    backgroundColor: '#00d9ffff',
    height: 80,               
    paddingHorizontal: 10,

 }

 ,
 footerText:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',       
 },
 content:{
  flex: 1,
  alignContent: 'center',
  flexDirection: 'row',

 }
 ,
 contentText:{
  flex : 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
     
 },
 rightColumn:{
  backgroundColor: 'black',
  flex: 1
  

 },
 leftColumn:{
  backgroundColor: 'red',
  flex: 1
  
 }
 });
//#endregion

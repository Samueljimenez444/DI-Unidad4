import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const Index = () => {

  
  const [count, setCount] = useState(0);

     const handleIncrement = () => {

    setCount(count + 1);
    
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
     
  useEffect(() => {
    if (count !== 0 && count % 10 === 0 ) {
      alert("Enhorabuena tienes " + count + " clicks");
    }

  }, [count]);

  return (
   <View style={styles.container}>

      <Text style={styles.title}>
        Contador: {count}
      </Text>

      <Pressable onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>

      <Pressable onPress={handleDecrement} style={styles.button}>
         <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>
      
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});


export default Index;

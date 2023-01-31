import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ProList from './src/screens/ProList';

export default function App() {
  const [switchState, setSwitchState] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text>Họ Tên: Vương Xuân Huy</Text>
      <Text>Mã Sinh Viên: PH27045</Text>
      <Button title='Thêm mới'
      onPress={() => setSwitchState(!switchState)}/>
      {
        switchState
        ? 
        <>
        <Text>Thêm Mới</Text>
          <TextInput placeholder='Tên'/>
          <TextInput placeholder='Mô tả'/>
          <TextInput placeholder='Link'/>
          <Button title='Hủy'
          onPress={() => setSwitchState(!switchState)}/> 
          <Button title='Lưu'/>
        </>
        :null
      }
      <ProList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  marginTop: 100

  },
});

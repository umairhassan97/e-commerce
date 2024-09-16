import {ButtonProps} from 'config/types/ProductInterfaces';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button: React.FC<ButtonProps> = ({onPress, title, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;

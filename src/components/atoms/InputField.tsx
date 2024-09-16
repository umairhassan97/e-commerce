import {InputFieldProps} from 'config/types/ProductInterfaces';
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default InputField;

import {TextProps} from 'config/types/ProductInterfaces';
import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

const Textfield: React.FC<TextProps> = ({children, style, ...props}) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default Textfield;

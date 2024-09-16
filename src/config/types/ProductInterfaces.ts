import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface ButtonProps  {
  onPress: () => void;
  title: string;
  style?:StyleProp<ViewStyle>
}

export interface InputFieldProps  {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?:any
}
 
export interface TextProps extends RNTextProps {
  children: React.ReactNode;
}

export interface ProductCardProps {
  name: string;
  price: number;
  onDelete: () => void;
}

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductState {
  products: Product[];
}



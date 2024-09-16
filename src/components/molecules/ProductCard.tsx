import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../atoms/Button';
import Textfield from '../atoms/Text';
import {ProductCardProps} from 'config/types/ProductInterfaces';

const ProductCard: React.FC<ProductCardProps> = ({name, price, onDelete}) => {
  const handleDelete = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <View style={styles.card}>
      <Textfield>{name}</Textfield>
      <Textfield>${price}</Textfield>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductCard;

import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductCard from '../molecules/ProductCard';

const ProductList: React.FC<{onDelete: (id: string) => void}> = ({
  onDelete,
}) => {
  const products = useSelector((state: RootState) => state.products.products);

  const productCards = useMemo(() => {
    return products.map(product => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        onDelete={() => onDelete(product.id)}
      />
    ));
  }, [products, onDelete]);

  return <View>{productCards}</View>;
};

export default ProductList;

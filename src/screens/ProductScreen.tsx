import React, {useState, useCallback} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProduct, deleteProduct} from '../store';
import uuid from 'react-native-uuid';
import ProductList from '../components/organisms/ProductList';
import Button from '../components/atoms/Button';
import InputField from '../components/atoms/InputField';
import Textfield from '../components/atoms/Text';

const ProductScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  // Handler for adding a product
  const handleAddProduct = useCallback(() => {
    if (name && price) {
      dispatch(
        addProduct({
          id: uuid.v4(),
          name,
          price: parseFloat(price),
        }),
      );
      setName('');
      setPrice('');
      setModalVisible(false);
    }
  }, [name, price, dispatch]);

  // Handler for deleting a product
  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id));
    },
    [dispatch],
  );

  // Handler for opening the modal
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setName('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      {/* Add Product Button */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '30%'}}></View>
        <Textfield style={styles.heading}>Product List</Textfield>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Textfield style={styles.addButtonText}>Add Product</Textfield>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <View style={{flex: 1, marginTop: 30}}>
        <ProductList onDelete={handleDeleteProduct} />
      </View>

      {/* Modal for Adding Product */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeModal}
          style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Textfield style={styles.modalTitle}>Add New Product</Textfield>
            <InputField
              value={name}
              onChangeText={setName}
              placeholder="Product Name"
            />
            <InputField
              value={price}
              onChangeText={setPrice}
              placeholder="Price"
              keyboardType="numeric"
            />
            <View style={styles.buttonsView}>
              <Button
                title="Cancel"
                onPress={closeModal}
                style={{width: '40%', backgroundColor: '#808080'}}
              />
              <Button
                title="Save Product"
                onPress={handleAddProduct}
                style={{width: '45%'}}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    alignSelf: 'center',
    flex: 1,
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default ProductScreen;

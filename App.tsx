import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import {store} from './src/store';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ProductScreen />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

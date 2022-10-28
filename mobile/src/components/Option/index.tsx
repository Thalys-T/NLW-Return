import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
 } from 'react-native';

import { styles } from './styles';


interface Props extends TouchableOpacityProps{
  title: string;
  image: ImageProps;
}

export function Option() {
  return (
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  );
}
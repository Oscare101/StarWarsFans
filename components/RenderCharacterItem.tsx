import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Theme} from '../constants/interfaces';
import colors from '../constants/colors';
import Icon from './Icon';

const width = Dimensions.get('screen').width;

export default function RenderCharacterItem(props: {
  item: any;
  theme: Theme['value'];
}) {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <TouchableOpacity style={styles.heartButton}>
        <Icon
          icon="heart"
          color={colors[props.theme].main}
          size={width * 0.06}
        />
      </TouchableOpacity>

      <Text style={[styles.name, {color: colors[props.theme].main}]}>
        {props.item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.92,
    borderRadius: width * 0.02,
    padding: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heartButton: {
    // height: '100%',
    // width: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: width * 0.05,
  },
});

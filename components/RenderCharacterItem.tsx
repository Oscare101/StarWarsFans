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

      <View style={styles.column}>
        <View style={styles.rowBetween}>
          <Text style={[styles.name, {color: colors[props.theme].main}]}>
            {props.item.name}
          </Text>
          <Icon
            icon="open"
            color={colors[props.theme].comment}
            size={width * 0.05}
          />
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.rowCenter}>
            <Icon
              icon="calendar"
              color={colors[props.theme].main}
              size={width * 0.04}
            />
            <Text
              style={[styles.characterInfo, {color: colors[props.theme].main}]}>
              {props.item.birth_year}
            </Text>
          </View>
          <View style={styles.rowCenter}>
            <Icon
              icon="gender"
              color={colors[props.theme].main}
              size={width * 0.04}
            />
            <Text
              style={[styles.characterInfo, {color: colors[props.theme].main}]}>
              {props.item.gender}
            </Text>
          </View>
        </View>
      </View>
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
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    fontSize: width * 0.05,
  },
  characterInfo: {
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
  },
});

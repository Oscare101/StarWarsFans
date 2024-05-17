import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {Theme} from '../constants/interfaces';
import colors from '../constants/colors';
import Icon from './Icon';

const width = Dimensions.get('screen').width;

function RenderCharacterItem(props: {
  item: any;
  theme: Theme['value'];
  onLikeCharacter: any;
  liked: boolean;
}) {
  const characterInfo = [
    {icon: 'calendar', title: props.item.birth_year},
    {icon: 'gender', title: props.item.gender},
    {icon: 'planet', title: props.item.info.homeworld.name},
    {
      icon: 'person',
      title: props.item.info.species.map((i: any) => i.name).join(',') || '???',
    },
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card, {backgroundColor: colors[props.theme].card}]}>
      <View style={styles.column}>
        <View style={styles.rowBetween}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.heartButton}
            onPress={props.onLikeCharacter}>
            <Icon
              icon={props.liked ? 'heartFull' : 'heart'}
              color={colors[props.theme].main}
              size={width * 0.06}
            />
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            style={[styles.name, {color: colors[props.theme].main}]}>
            {props.item.name}
          </Text>
          <Icon
            icon="open"
            color={colors[props.theme].comment}
            size={width * 0.05}
          />
        </View>
        <View style={styles.rowBetween}>
          {characterInfo.map((info: any, index: number) => (
            <View key={index} style={styles.rowCenter}>
              <Icon
                icon={info.icon}
                color={colors[props.theme].comment}
                size={width * 0.04}
              />
              <Text
                numberOfLines={1}
                style={[
                  styles.characterInfo,
                  {color: colors[props.theme].comment},
                ]}>
                {info.title}
              </Text>
            </View>
          ))}
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
    justifyContent: 'flex-start',
    flex: 1,
  },
  name: {
    fontSize: width * 0.05,
    flex: 1,
    marginLeft: width * 0.01,
  },
  characterInfo: {
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
    flex: 1,
  },
});

export default memo(RenderCharacterItem);

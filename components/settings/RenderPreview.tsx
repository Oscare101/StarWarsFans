import {Dimensions, StyleSheet, View} from 'react-native';
import Icon from '../icons/Icon';
import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces';

const width = Dimensions.get('screen').width;

export default function RenderPreview(props: {theme: Theme['value']}) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors[props.theme].bg,
          borderColor: colors[props.theme].comment,
        },
      ]}>
      <View style={[styles.rowBetween, {padding: width * 0.01}]}>
        <Icon
          icon="chevronLeft"
          color={colors[props.theme].main}
          size={width * 0.02}
        />
        <View
          style={{
            width: width * 0.05,
            height: width * 0.004,
            backgroundColor: colors[props.theme].main,
          }}
        />
      </View>
      <View style={[styles.top, {backgroundColor: colors[props.theme].card}]}>
        <View
          style={[styles.bigCard, {backgroundColor: colors[props.theme].bg}]}
        />
        <View
          style={[styles.rowBetween, {width: '80%', marginTop: width * 0.015}]}>
          <View
            style={{
              width: '45%',
              aspectRatio: 1,
              backgroundColor: colors[props.theme].bg,
              borderRadius: width * 0.01,
            }}
          />
          <View
            style={{
              width: '45%',
              aspectRatio: 1,
              backgroundColor: colors[props.theme].bg,
              borderRadius: width * 0.01,
            }}
          />
        </View>
      </View>
      <View style={[styles.top]}>
        <View
          style={[styles.bigCard, {backgroundColor: colors[props.theme].card}]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.17,
    aspectRatio: 0.5,
    borderRadius: width * 0.02,
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    height: '40%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigCard: {
    width: '80%',
    height: width * 0.03,
    borderRadius: width * 0.01,
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
  },
});

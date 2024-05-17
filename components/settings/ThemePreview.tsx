import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {Theme} from '../../constants/interfaces';
import RenderPreview from './RenderPreview';

const width = Dimensions.get('screen').width;

export default function ThemePreview(props: {
  theme: string;
  action: any;
  themeColor: string;
  currentTheme: string;
}) {
  const theme = props.theme;
  return (
    <View style={styles.center}>
      <View
        style={[
          styles.center,
          {
            padding: width * 0.01,
            borderWidth: width * 0.005,
            borderColor:
              props.currentTheme === theme
                ? colors[props.themeColor].accent
                : '#00000000',
            borderRadius: width * 0.03,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={props.action}
          style={{width: width * 0.17, aspectRatio: 0.5}}>
          {props.theme === 'system' ? (
            <View
              style={{
                width: width * 0.17,
                aspectRatio: 0.5,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  alignItems: 'flex-start',
                }}>
                <RenderPreview theme={'light'} />
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  overflow: 'hidden',
                  alignItems: 'flex-end',
                }}>
                <RenderPreview theme={'dark'} />
              </View>
            </View>
          ) : (
            <RenderPreview theme={theme as Theme['value']} />
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.title,
          {
            color:
              props.currentTheme === theme
                ? colors[props.themeColor].main
                : colors[props.themeColor].comment,
          },
        ]}>
        {props.theme}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: width * 0.04},
});

import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 9,
  },
  title: {
    fontSize: normalize(22),
    fontWeight: '700',
    marginLeft: normalize(6),
  },
});

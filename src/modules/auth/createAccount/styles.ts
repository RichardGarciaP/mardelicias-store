import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {palette} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: normalize(24),
  },
  container: {
    flex: 1,
  },
  form: {},
  formControl: {
    marginBottom: normalize(24),
  },
  containerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyAccount: {
    fontSize: normalize(16),
  },
  link: {
    marginLeft: normalize(6),
    color: palette.main.p500,
    fontWeight: '700',
    fontSize: normalize(16),
  },
  textError: {
    color: 'red',
  },
});

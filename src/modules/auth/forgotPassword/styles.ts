import {StyleSheet} from 'react-native';
import {normalize} from '@/shared/helpers';
import {palette} from '@/shared/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24),
  },
  containerTitle: {
    marginVertical: normalize(32),
  },
  description: {
    fontSize: normalize(18),
  },
  form: {
    marginTop: normalize(30),
    marginBottom: normalize(24),
  },
  innerWrapper: {
    marginTop: normalize(98),
  },
  formControl: {
    marginBottom: normalize(24),
  },
  textError: {
    color: 'red',
  },
  btnContainer: {
    backgroundColor: palette.main.p500,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(16),
    borderRadius: normalize(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

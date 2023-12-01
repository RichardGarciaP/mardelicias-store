import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: normalize(15),
  },
  container: {
    paddingHorizontal: normalize(15),
    flexDirection: 'column',
  },
  profileText: {
    paddingVertical: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(15),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: {
    width: normalize(70),
    height: normalize(70),
    marginRight: normalize(20),
  },
  scrollContainer: {
    paddingBottom: normalize(50),
  },
});

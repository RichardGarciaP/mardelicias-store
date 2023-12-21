import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  titleSection: {
    fontWeight: '700',
    marginBottom: normalize(24),
    fontSize: 20,
  },
  innerContainer: {
    marginBottom: normalize(8),
  },
  contactCard: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(18),
    backgroundColor: 'white',
    marginBottom: normalize(10),
    borderRadius: normalize(16),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: semantic.text.black,
    opacity: 0.8,
    maxHeight: normalize(50),
  },
  desccription: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    tintColor: palette.main.p500,
    marginRight: 6,
  },
});

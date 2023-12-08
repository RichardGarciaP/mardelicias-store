import {palette, semantic} from '@/shared/constants/colors';
import {normalize} from '@/shared/helpers';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: palette.main.p500,
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(12),
    borderRadius: normalize(10),
  },
  textButton: {
    color: semantic.text.white,
    fontWeight: '700',
    fontSize: normalize(16),
  },
  resume: {
    borderWidth: 2,
    borderColor: semantic.fill.f04,
    borderRadius: normalize(16),
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(12),
    marginTop: normalize(20),
    marginBottom: normalize(26),
  },
  containerResumeText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(6),
  },
  sectionContainer: {
    marginBottom: normalize(26),
  },
  placeholderImage: {
    marginTop: 20,
    width: '100%',
    height: 300,
    backgroundColor: semantic.fill.f04,
    borderRadius: normalize(8),
  },
  textPlane: {
    color: semantic.text.black,
    fontWeight: '700',
    fontSize: normalize(16),
  },
});

import {Image, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';

import HeaderWithIcon from '@/shared/components/headerBack';

import {Button} from '@/shared/components/buttons';
import {normalize} from '@/shared/helpers';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import {location, map} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import CheckBox from '@/shared/components/checkbox';
import useDarkMode from '@/shared/hooks/useDarkMode';
import CustomStatusBar from '@/shared/components/customStatusBar';
import {_styles} from './styles';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const NewAddress = () => {
  const {isDarkMode} = useDarkMode();
  const [check, setCheck] = useState<boolean>(true);
  const styles = _styles(isDarkMode);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.topSpace} />
      <View style={styles.headerBack}>
        <HeaderWithIcon title="Dirección" />
      </View>
      <Image source={map} />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{padding: normalize(24)}}>
        <View style={styles.alignCenter}>
          <Typography style={styles.fontBold}>Detalle</Typography>
          <View style={styles.dividerLight} />
        </View>

        <BottomSheetScrollView>
          <View style={{marginBottom: normalize(24)}}>
            <Input
              label="newAddress.name"
              placeholder="newAddress.namePlaceholder"
            />
          </View>
          <View style={{marginBottom: normalize(24)}}>
            <Input
              label="newAddress.address"
              placeholder="newAddress.addressPlaceholder"
              rightIcon={<Icon icon={location} />}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox value={check} onChange={setCheck} />
            <Typography style={{marginLeft: normalize(10)}}>
              newAddress.checkboxText
            </Typography>
          </View>
          <Button title="newAddress.button" />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default NewAddress;

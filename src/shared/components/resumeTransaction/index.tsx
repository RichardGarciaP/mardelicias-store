import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {currencyType} from '@/shared/constants/global';

interface ResumeTransaction {
  total: number;
  pending: number;
}

export default function ResumeTransaction({
  total,
  pending = 0,
}: ResumeTransaction) {
  return (
    <View style={styles.resume}>
      {pending ? (
        <View style={styles.containerResumeText}>
          <Typography>{'Saldo en Efectivo'}</Typography>
          <Typography translate={false}>{pending}</Typography>
        </View>
      ) : (
        <View></View>
      )}
      <View style={styles.containerResumeText}>
        <Typography>{'Total'}</Typography>
        <Typography translate={false}>{total?.toFixed(2)}</Typography>
      </View>
    </View>
  );
}

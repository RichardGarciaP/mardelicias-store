import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import Typography from '@/shared/components/typography';
import {currencyType} from '@/shared/constants/global';

interface ResumeTransaction {
  total: number;
  pending: number;
}

export default function ResumeTransaction({total, pending}: ResumeTransaction) {
  return (
    <View style={styles.resume}>
      <View style={styles.containerResumeText}>
        <Typography>{'Saldo en Efectivo'}</Typography>
        <Typography translate={false}>{pending.toFixed(2)}</Typography>
      </View>
      <View style={styles.containerResumeText}>
        <Typography>{'Total'}</Typography>
        <Typography translate={false}>{total.toFixed(2)}</Typography>
      </View>
    </View>
  );
}

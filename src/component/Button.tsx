import React from 'react';
import {Pressable} from './Pressable';
import {fonts} from '../style/Fonts';
import {Text} from './Text';
import {DeviceHelper} from '../helper/DeviceHelper';
import {ActivityIndicator} from 'react-native';

export interface ButtonProps {
  label: string;
  isLight?: boolean;
  onPress: () => void;
  disabled?: boolean;
  showLoader?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  label,
  isLight = false,
  onPress,
  disabled,
  showLoader,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      shadowColor={'gray'}
      shadowOffset={{width: 0, height: 1}}
      shadowOpacity={0.3}
      shadowRadius={2}
      elevation={2}
      borderRadius={10}
      paddingVertical={'s'}
      paddingHorizontal={'r'}
      justifyContent={'center'}
      alignItems={'center'}
      disabled={disabled}
      height={DeviceHelper.calculateHeightRatio(55)}
      backgroundColor={isLight ? 'primary2' : 'primary'}>
      {showLoader ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <Text
          color={isLight ? 'primary' : 'primary2'}
          fontSize={15}
          fontFamily={fonts.regular}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

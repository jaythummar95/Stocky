import React from 'react';
import {observer} from 'mobx-react-lite';
import {Box} from '../Box';
import {DeviceHelper} from '../../helper/DeviceHelper';
import {Pressable} from '../Pressable';
import {Image} from '../Image';
import {Images} from '../../assets';
import {Text} from '../Text';
import {fonts} from '../../style/Fonts';

export interface HomeHeaderProps {
  onBackPress?: () => void;
  onMenuPress?: () => void;
  isMenu?: boolean;
  label?: string;
  islabel?: boolean;
}

export const HEADER_HEIGHT = DeviceHelper.calculateHeightRatio(70);

export const Header: React.FC<HomeHeaderProps> = observer(
  ({onBackPress, onMenuPress, isMenu, label, islabel}: HomeHeaderProps) => {
    return (
      <Box
        flexDirection={'row'}
        backgroundColor={'primary'}
        justifyContent={'center'}
        alignItems={'center'}
        width={DeviceHelper.width()}
        height={HEADER_HEIGHT}
        shadowColor={'gray'}
        shadowOffset={{width: 0, height: 1}}
        shadowOpacity={0.5}
        shadowRadius={2}
        elevation={5}
        borderBottomRightRadius={8}
        borderBottomLeftRadius={8}>
        <Box flexDirection={'row'} flex={1}>
          {isMenu ? (
            <Box marginStart={'s'} justifyContent={'center'} marginTop={'sr'}>
              <Pressable
                marginLeft={'sr'}
                onPress={onMenuPress}
                height={DeviceHelper.calculateHeightRatio(40)}
                width={DeviceHelper.calculateWidthRatio(40)}>
                <Image
                  source={Images.menu}
                  resizeMode={'stretch'}
                  height={DeviceHelper.calculateHeightRatio(28)}
                  width={DeviceHelper.calculateWidthRatio(28)}
                />
              </Pressable>
            </Box>
          ) : (
            <Box marginStart={'s'} justifyContent={'center'} marginTop={'sr'}>
              <Pressable
                onPress={onBackPress}
                height={DeviceHelper.calculateHeightRatio(40)}
                width={DeviceHelper.calculateWidthRatio(40)}>
                <Image
                  source={Images.back}
                  height={DeviceHelper.calculateHeightRatio(28)}
                  width={DeviceHelper.calculateWidthRatio(28)}
                />
              </Pressable>
            </Box>
          )}
          <Box
            flex={1}
            marginHorizontal={'s'}
            justifyContent={'center'}
            alignItems={'center'}>
            {islabel ? (
              <Text
                fontSize={18}
                textAlign={'center'}
                fontFamily={fonts.regular}
                color={'primary2'}>
                {label}
              </Text>
            ) : (
              <Image
                source={Images.logo_white}
                resizeMode={'stretch'}
                height={DeviceHelper.calculateHeightRatio(36)}
                width={DeviceHelper.calculateWidthRatio(26)}
              />
            )}
          </Box>
        </Box>
        <Pressable
          justifyContent={'center'}
          alignItems={'flex-end'}
          height={DeviceHelper.calculateHeightRatio(40)}
          width={DeviceHelper.calculateWidthRatio(40)}
          marginRight={'sr'}
          onPress={onMenuPress}>
          <Image
            source={Images.notification}
            resizeMode={'stretch'}
            height={DeviceHelper.calculateHeightRatio(22)}
            width={DeviceHelper.calculateWidthRatio(22)}
          />
        </Pressable>
      </Box>
    );
  },
);

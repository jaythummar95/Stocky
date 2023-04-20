import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Box} from '../component/Box';
import {Screen} from '../component/Screen';
import {Images} from '../assets';
import {Image} from '../component/Image';
import {Text} from '../component/Text';
import {fonts} from '../style/Fonts';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Route, StackParamList} from '../navigation/AppNavigation';

export const SplaceScreen: React.FC = observer(() => {
  const {navigate} = useNavigation<StackNavigationProp<StackParamList>>();

  useEffect(() => {
    checkAndNavigate();
  }, []);

  const checkAndNavigate = async () => {
    setTimeout(async () => {
      navigate(Route.Dashboard);
    }, 2000);
  };
  return (
    <Screen>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Image source={Images.logo} />
        <Text
          marginTop={'s'}
          fontFamily={fonts.regular}
          color={'primary'}
          fontSize={36}
          textAlign={'center'}
          fontWeight={'400'}>
          Stocky
        </Text>
      </Box>
    </Screen>
  );
});

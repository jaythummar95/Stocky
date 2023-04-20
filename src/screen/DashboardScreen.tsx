import React from 'react';
import {observer} from 'mobx-react';
import {Box} from '../component/Box';
import {Screen} from '../component/Screen';
import {Header} from '../component/Header/Header';
import {Text} from '../component/Text';
import {fonts} from '../style/Fonts';
import { StockyRemiderCell } from "../component/StockyReminder/StockyRemiderCell";

export const DashboardScreen: React.FC = observer(() => {
  return (
    <Screen>
      <Box>
        <Header isMenu={true} />
        <Box marginVertical={'r'} marginHorizontal={'sr'}>
          <Text fontFamily={fonts.regular} fontSize={18} color={'black'}>
            STOCK REMINDER
          </Text>
        </Box>
        <StockyRemiderCell/>
      </Box>
    </Screen>
  );
});

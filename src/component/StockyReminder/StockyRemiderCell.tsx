import React from 'react';
import {observer} from 'mobx-react-lite';
import {Text} from '../Text';
import {Box} from '../Box';
import {DeviceHelper} from '../../helper/DeviceHelper';

export const StockyRemiderCell: React.FC = observer(() => {
  return (
    <Box
      borderRadius={8}
      shadowColor={'gray'}
      shadowOffset={{width: 0, height: 1}}
      shadowOpacity={0.5}
      shadowRadius={2}
      elevation={4}
      marginHorizontal={'sr'}
      height={DeviceHelper.calculateHeightRatio(75)}
      width={DeviceHelper.calculateWidthRatio(134)}>
      <Box marginHorizontal={'s'} marginVertical={'s'}>
        <Text>Baring Size 25</Text>
      </Box>
    </Box>
  );
});

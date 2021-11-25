import React from 'react';
import { Box } from '@mui/material';
import ViewTitleLabel from '../../atoms/labels/ViewTitleLabel';

const HogemonListView: React.VFC = () => {
  const hogemonList: string[] = [
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
    'scroll check',
  ];

  return (
    <Box>
      <ViewTitleLabel label="Hoge Data List" />
      {hogemonList.map((item, idx) => (
        <Box key={idx} height="100px" mb="8px" sx={{ backgroundColor: 'green' }}>
          {item}
        </Box>
      ))}
    </Box>
  );
};

export default HogemonListView;

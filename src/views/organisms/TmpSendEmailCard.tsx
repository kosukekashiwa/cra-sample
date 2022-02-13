import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import React, { useState } from 'react';

const TmpSendEmailCard: React.VFC = () => {
  const [val, setVal] = useState('');
  const [isSend, setIsSend] = useState(false);
  return (
    <Card>
      <CardContent>
        <Box>メールアドレス</Box>
        <Box mt={1}>
          <TextField
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            onClick={(): void => {
              setIsSend(true);
            }}
          >
            Send
          </Button>
        </Box>
        {isSend && (
          <Box data-testid={'sample'} mt={1}>
            送信しました。
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TmpSendEmailCard;

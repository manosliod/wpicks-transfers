import { CircularProgress, Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <CircularProgress size={50} sx={{ color: '#50D8A5' }} />
    </Box>
  );
};

export default Loading;

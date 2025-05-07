import React, { useRef, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomPagination = styled(Pagination)(() => ({
  '& .MuiPagination-ul': {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
  },
  '& .MuiPaginationItem-root': {
    width: '40px',
    height: '40px',
    fontWeight: 500,
    color: '#6B7280',
    backgroundColor: '#fff',
    margin: 0,
    borderRadius: 0,
    '&.Mui-selected': {
      backgroundColor: '#1F2937',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#1F2937',
      },
    },
    '&:hover': {
      backgroundColor: '#F3F4F6',
    },
  },
  '& .first-page': {
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
  },
  '& .last-page': {
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  '& .MuiPaginationItem-previousNext': {
    margin: '0 8px',
    borderRadius: '8px',
  },
}));

export default function TransfersListPagination() {
  const count = 3;
  const [page, setPage] = useState(1);
  const paginationRef = useRef<HTMLDivElement>(null);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (paginationRef.current) {
      paginationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      <div ref={paginationRef}>
        <CustomPagination
          count={count}
          page={page}
          onChange={handleChange}
          shape="rounded"
          renderItem={(item) => {
            let extraClass = '';

            if (item.type === 'page') {
              if (item.page === 1) {
                extraClass = 'first-page';
              } else if (item.page === count) {
                extraClass = 'last-page';
              }
            }

            return (
              <PaginationItem
                {...item}
                className={extraClass}
                slots={{
                  previous: ArrowBackIosNewIcon,
                  next: ArrowForwardIosIcon,
                }}
              />
            );
          }}
        />
      </div>
    </Stack>
  );
}

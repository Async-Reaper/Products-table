import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { setPage } from '../../store/reducers/paginationReducer';

const PaginationWrapper = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

interface IPagination {
   pages: number[];
   currentPage: number
}

const Pagination: FC<IPagination> = ({ pages, currentPage }) => {
   const dispatch = useTypedDispatch()
   return (
      <PaginationWrapper>
         {pages.map(page => <p key={page} onClick={() => dispatch(setPage(page))} className={currentPage === page ? 'page page__current' : 'page'}>{page}</p>)}
      </PaginationWrapper>
   )
}

export default Pagination
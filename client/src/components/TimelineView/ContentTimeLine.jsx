import React, { useState } from 'react';
import styled from 'styled-components';
import DatePagination from 'react-date-pagination';

const Container = styled.div`

`;

function ContentTimeLine() {
    let daysArray = [{date: ',2018-06-01'}, {date: '2018-06-02'}, {date: '2018-06-03'},{date: '2018-06-04'}, {date: '2018-06-05'}, {date: '2018-06-06'},{date: '2018-06-07'}, {date: '2018-06-08'}, {date: '2018-06-09'}]
    const [activePage, setActivePage] = useState(1)
    const handlePageChange=(pageNumber) => {
        setActivePage(pageNumber)
      }
    return (
        <Container>
            <DatePagination
                activePage={activePage}
                itemsCountPerPage={1}
                totalItemsCount={daysArray.length}
                days={daysArray}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />

        </Container>
    );
}

export default ContentTimeLine;
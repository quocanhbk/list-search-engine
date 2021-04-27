import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3% 2%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #a59c87;
  border-bottom: 1px solid;
`;
const Title = styled.h3``;
const RightContent = styled.div`
  color: #a59c87;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(0),
    },
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#A59C87",
      border: "none",
    },
  },
  tablePaginationSelectIcon: {
    "& .MuiPaginationItem-root": {
        color: "red",
    }
  },
}));

function HeaderTimeLine() {
  const classes = useStyles();
  return (
    <Container>
      <Title>Timeline Schedule</Title>
      <RightContent className={classes.root}>
        <Pagination
          count={3}
          variant="outlined"
          color="secondary"
          size="large"
          shape="round"
          outline="none"
          classes={{
            ul: classes.ul,
            selectIcon: classes.tablePaginationSelectIcon,
            select: classes.tablePaginationSelectIcon,
          }}
        />
      </RightContent>
    </Container>
  );
}

export default HeaderTimeLine;

import React, { useState } from "react";
import styled from "styled-components";
import AddForm from "./AddForm";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { Stack, Typography } from "@mui/material";

const AddDivWrapper = styled.div`
  margin: 0 10px;
  padding-bottom: 10px;
`;
const AddButton = styled.button`
  width: 100%;
  background: #c1a7c5;
  padding: 2px 0;
  border-radius: 11px;
  font-size: 28px;
`;
const Add = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <AddDivWrapper>
      <AddButton onClick={handleOpenModal}>+</AddButton>
      <AddForm
        open={openModal}
        handleClose={handleCloseModal}
        tasks={tasks}
        setTasks={setTasks}
      />
      {tasks.length > 0 && tasks.map((item) => {
        return (
          <>
            <Stack  direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={2}>
            <Stack>
            <Typography>{item?.task}</Typography>
            <Typography>{item?.value}</Typography>
            </Stack>
            <Stack direction="row"
  justifyContent="space-between"
  alignItems="center"
  spacing={2}>
            <DeleteIcon />
            <Checkbox {...label}  />
            </Stack>
            </Stack>
            </>
        );
      })}
    </AddDivWrapper>
  );
};

export default Add;

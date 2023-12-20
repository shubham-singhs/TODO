import React, { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import { Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import SelectOptions from "./SelectOptions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#c1a7c5",
  boxShadow: 24,
  p: 4,
};

const AddForm = ({ open, handleClose, tasks, setTasks }) => {
  const initialValues = {
    tasks: [],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = (event) => {
    event.preventDefault();
  const formData = {
    task: formValues.taskDetails,
    value: formValues.time,
  };
  const newTask = {
    task: formData.task,
    value: formData.value,
  };
  // Update tasks using the functional form of setState to ensure correct state updates
  setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to tasks array
  event.target.reset();
  handleClose();
  };
  useEffect(() => {
    // This effect will run every time 'tasks' state changes
    console.log(tasks);
  }, [tasks]); // Only re-run the effect if 'tasks' state changes

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={style}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <h1>Create a new Task</h1>
            <Grid item>
              <TextField
                id="taktype"
                name="taskDetails"
                label="Enter Your Task Details"
                type="text"
                value={formValues.taskDetails}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item>
              <FormControl>
                <SelectOptions value={formValues.time} onChange={handleInputChange}/>
              </FormControl>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{
                  backgroundColor: "#c1a7c5",
                  margin: "5px",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </div>
  );
};

export default AddForm;

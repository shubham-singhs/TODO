import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import logo from "../../assets/image/profile-pic.png";
import { formatDate, formatTime } from "../../Utils/functions";

const HeaderImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;
const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Header = () => {
  const [formattedDate, setFormattedDate] = useState(undefined);
  const [formattedTime, setFormattedTime] = useState(undefined);
  useEffect(() => {
    const date = new Date();
    setFormattedDate(formatDate(date));
    setFormattedTime(formatTime(date));
  }, []);

  return (
    <WrapperDiv>
      <div>
        <Typography variant="h2" component="h2">Hey, Shubham</Typography>
        {formattedTime && formattedDate ? (
          <Typography variant="p" component="p">
            {formattedDate} <span>{formattedTime}</span>
          </Typography>
        ) : (
          ""
        )}
      </div>
      <div>
        <HeaderImg src={logo} alt="404" />
      </div>
    </WrapperDiv>
  );
};
export default Header;

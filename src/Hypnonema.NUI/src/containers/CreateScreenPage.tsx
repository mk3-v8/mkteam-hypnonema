import { FC } from "react";

import { Card, CardContent, Container, Typography } from "@mui/material";
import { ScreenForm } from "../components/ScreenForm";
import Screen from "../types/screen";
import { useNuiRequest } from "fivem-nui-react-lib";
import styled from "styled-components";
import SimpleBar from "simplebar-react";

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CreateScreenPage: FC = () => {
  const { send } = useNuiRequest();

  const onSubmit = (data: Screen) => {
    send("createScreen", { payload: JSON.stringify(data) }).then(() => {});
  };

  return (
    <Container>
      <Typography sx={{ marginTop: "50px", marginBottom: "10px" }} variant="h5">
        Create Screen
      </Typography>
      <Wrapper>
        <Card
          sx={{
            width: "100%",
            maxWidth: "100%",
            boxShadow: "6",
          }}
        >
          <SimpleBar
            autoHide={false}
            style={{
              maxHeight: "420px",
            }}
          >
            <CardContent>
              <ScreenForm onSubmit={(data: Screen) => onSubmit(data)} />
            </CardContent>
          </SimpleBar>
        </Card>
      </Wrapper>
    </Container>
  );
};

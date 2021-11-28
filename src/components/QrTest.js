import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import QrReader from "react-qr-reader";
import Layout from "./Layout";
import { Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import ResultCard from "./ResultCard";

const NoResult = {
  id: 0,
  Name: "Bitte Scannen",
  ValidUntil: "01. Januar 1990",
};
const QrTest = () => {
  const [Result, setResult] = useState(NoResult);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(NoResult);
    }, 1000);
  });

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const section = {
    height: "90%",
    backgroundColor: "#3254a8",
  };

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <Paper>
                <QrReader
                  delay={300}
                  facingMode="user"
                  onError={handleError}
                  onScan={handleScan}
                  style={section}
                />
              </Paper>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Paper>
              <ResultCard Result={Result}></ResultCard>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default QrTest;

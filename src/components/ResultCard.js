import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export default function ResultCard({ Result }) {
  const { Name, ValidUntil } = Result;
  return (
    <Card>
      <CardHeader title={Name} subheader={ValidUntil}></CardHeader>
    </Card>
  );
}

import React from "react";
import { Link } from "@mui/material";

export default function Copyright({ Loki }: any) {
  return (
    <React.Fragment>
      {"©"}
      <Link color="inherit" href="https://github.com/Lokeshsri11">
        {Loki}
      </Link>{"Loki"}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

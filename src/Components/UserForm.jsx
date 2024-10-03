import React, { useContext } from "react";
import { AppContext } from "../Store/AppContext";
import UserDetails1 from "./UserDetails1";
import UserDetails2 from "./UserDetails2";
import Sucess from "./Sucess";
import Confirmation from "./Confirmation";

function UserForm() {
  const context = useContext(AppContext);
  const { step } = context;
  switch (step) {
    case 1:
      return <UserDetails1 />;
    case 2:
      return <UserDetails2 />;
    case 3:
      return <Confirmation />;
    case 4:
      return <Sucess />;
  }
}

export default UserForm;

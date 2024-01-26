import { useEffect, type ReactNode } from "react";
import {Navigate } from 'react-router-dom';

import Stepper from "@/components/Atom/Stepper";
import Header from "@/components/Header";
import { useUser } from "@/stores/User";
import { useAuth } from "@/stores/Auth";

type PropsDashboard = {
  children: ReactNode;
};

export default function Dashboard({ children }: PropsDashboard) {
  const { toGetUser } = useUser();
  const {dni,phone} = useAuth()

  useEffect(() => {
    toGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(!dni || !phone){
    return <Navigate to="/" />
  }

  return (
    <>
      <Header />
      <Stepper />

      {children}
    </>
  );
}

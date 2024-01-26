import ProccessIcon from '@/assets/icons/progress.svg';
import LeftArrowGray from "@/assets/icons/left-arrow-gray.svg";

import Stack from "./Stack";
import Text from "./Text";
import Hidden from './HIdden';
import ProgressBar from './ProgressBar';
import StepperItem from './StepperItem';
import { useLocation, Link } from 'react-router-dom';
import { useMemo } from 'react';

export default function Stepper(){
  const location = useLocation();

  const current_step = useMemo(()=> location.pathname === "/plans" ? 1:2,[location.pathname])
  const current_porcentage = useMemo(()=> current_step === 1 ? 10:100,[current_step])

  return (
    <>
      <Hidden>
        <div className="stepper">
          <StepperItem  step={1} text='Planes y coberturas' active={location.pathname === "/plans"}/>

          <img src={ProccessIcon} alt="icono" />

          <StepperItem step={2} text='Resumen' active={location.pathname === "/resumen"}/>
        </div>
      </Hidden>

      <Hidden query='min'>
        <div className="stepper">
          <Stack align='center' gap={16}>
            <Link to="/plans">
              <img src={LeftArrowGray} width={24} alt="icono" color='#ccc' />
            </Link>

            <Text size={10} line={16} weight={900}>Paso {current_step} de 2</Text>

            <ProgressBar value={current_porcentage} />
          </Stack>
        </div>
      </Hidden>
    </>
  )
}
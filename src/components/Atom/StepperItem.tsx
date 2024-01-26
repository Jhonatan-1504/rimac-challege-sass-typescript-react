import { useMemo } from "react";

import Stack from "./Stack";
import Text from "./Text";

type PropsStepperItem = {
  step: number;
  text: string;
  active?: boolean;
};

export default function StepperItem({step,text,active}:PropsStepperItem) {
  const active_class = useMemo(()=> (active) ? "primary" : "" , [active])
  const active_weight = useMemo(()=> (active) ? 700 : 400 , [active])
  const active_color = useMemo(()=> (active) ?  "#141938" :"#7981B2" , [active])

  return (
    <Stack gap={16} justify="center">
      <div className={"stepper--number "+active_class}>
        <Text size={12} line={16} weight={700}>
          {step}
        </Text>
      </div>
      <Text size={16} line={24} weight={active_weight} color={active_color}>
        {text}
      </Text>
    </Stack>
  );
}

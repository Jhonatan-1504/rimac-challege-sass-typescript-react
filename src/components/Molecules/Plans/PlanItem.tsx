import HomePostIcon from '@/assets/icons/home-post.svg';
// import HospitalIcon from '@/assets/icons/hospital.svg';

import Button from "@/components/Atom/Button";
import Card from "@/components/Atom/Card";
import Divider from "@/components/Atom/Divider";
import Stack from "@/components/Atom/Stack";
import Text from "@/components/Atom/Text";
import type { Plan } from '@/services/Plant';
import { useNavigate } from 'react-router-dom';
import { useResumen } from '@/stores/Resumen';
import { useMemo } from 'react';

type PropsPlanItem = {
  plan: Plan
}

export default function PlanItem({plan}:PropsPlanItem){
  const navigate = useNavigate()

  const {who, choosePlan} = useResumen()

  const discount = useMemo(()=> (who === "other") ? (plan.price * (100 - 5) / 100).toFixed(2): "", [who, plan])

  function handleClick(){
    choosePlan({
      plan: plan.name,
      price: who === "other" ? discount : plan.price.toString()
    })

    navigate("/resumen")
  }

  return (
    <Card>
      <Stack gap={16}>
        <Stack direction='vertical' gap={24}>
          <Text size={24} line={32} weight={900}>{plan.name}</Text>

          <Stack gap={4} direction='vertical'>
            <Text size={12} line={16} weight={900} color='#7981B2'>COSTO DEL PLAN</Text>

            {
              who === "other" && (
                <Text size={14} line={20} weight={400} color='#7981B2' className='line-through'>${plan.price} antes</Text>
              )
            }        
            
            <Text size={20} line={28} weight={900}>
              ${who === "other" ? discount : plan.price} al mes
            </Text>
          </Stack>
        </Stack>

        <Stack align='start'>
          <img width={56} src={HomePostIcon} alt='icon home post'></img>
        </Stack>
      </Stack>

      <Divider />

      <Stack gap={16}>
        <ul className='plans__item--ul'>
          {plan.description.map((r,key) => (
            <li key={key}>
              <Text size={16} line={28} weight={700}>{r}</Text>
            </li>
          ))}

          {/* <li>
            <Text size={16} line={28} weight={700}>Médico general a domicilio</Text>
            <Text size={16} line={28} weight={400}>por S/20 y medicinas cubiertas al 100%.</Text>          
          </li> */}
        </ul>
      </Stack>

      <Button onClick={handleClick} text='Seleccionar Plan' bg='#FF1C44' className='plans__item--button' />
    </Card>
  )
}
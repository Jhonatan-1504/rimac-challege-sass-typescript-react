import UserGroup from '@/assets/icons/user-group.svg';

import Back from "@/components/Atom/Back"
import Card from "@/components/Atom/Card"
import Divider from '@/components/Atom/Divider';
import Hidden from "@/components/Atom/HIdden"
import Stack from "@/components/Atom/Stack"
import Text from "@/components/Atom/Text"
import Dashboard from '@/layout/Dashboard';
import { useAuth } from '@/stores/Auth';
import { useResumen } from '@/stores/Resumen';
import { useUser } from '@/stores/User';

const Resumen = () =>{
  const {name,lastName} = useUser(state => state.user)
  const {dni,phone} = useAuth()
  const {plan,price} = useResumen()

  return (
    <Dashboard>
        <Hidden>
          <Back to="/plans" />
        </Hidden>
        
        <Stack className="back md-80">
          <Text size={40} line={48} weight={700} color="#141938" className='back--title'>Resumen del seguro</Text>
        </Stack>

        <Stack className="back md-80">
          <Card>
            <Stack gap={8} direction='vertical'>
              <Text size={10} line={16} weight={900}>PRECIOS CALCULADOS PARA:</Text>

              <Stack gap={12}>
                <img src={UserGroup} alt="icon user group" />
                <Text weight={700} size={20} line={28}>{name} {lastName}</Text>
              </Stack>
            </Stack>

            <Divider />

            <Stack gap={4} direction='vertical'>
              <Text size={16} line={24} weight={700} >Responsable de pago</Text>
              <Text size={14} line={24} weight={400} >DNI: {dni}</Text>
              <Text size={14} line={24} weight={400} >Celular: {phone}</Text>
            </Stack>

            <Stack gap={4} direction='vertical' className='mt-16'>
              <Text size={16} line={24} weight={700} >Plan elegido</Text>
              <Text size={14} line={24} weight={400} >{plan}</Text>
              <Text size={14} line={24} weight={400} >Costo del Plan: ${price} al mes</Text>
            </Stack>
          </Card>
        </Stack>
    </Dashboard>
  )
}

export default Resumen
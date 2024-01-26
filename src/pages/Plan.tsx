import Back from "@/components/Atom/Back"
import Hidden from "@/components/Atom/HIdden"
import Stack from "@/components/Atom/Stack"
import Text from "@/components/Atom/Text"

import PlanSelect from '@/components/Molecules/Plans/PlanSelect';
import PlanList from "@/components/Molecules/Plans/PlanList"
import Dashboard from "@/layout/Dashboard"

import { useUser } from "@/stores/User";

const Plan = () => {
  const {name} = useUser(state => state.user)

  return (
    <Dashboard>
      <Hidden>
        <Back to="/" />
      </Hidden>

      <Stack margin="16px auto" direction="vertical" gap={32} className="banner--plans">
        <Stack direction="vertical" justify="center" gap={8}>
          <Text weight={700} size={40} line={48} className="text-center md-text-left banner--title" >{name} ¿Para quién deseas cotizar?</Text>
          <Text weight={400} size={16} line={28} className="text-center md-text-left" >Selecciona la opción que se ajuste más a tus necesidades.</Text>
        </Stack>

        <PlanSelect />
      </Stack>

      <PlanList />
    </Dashboard>
  )
}

export default Plan
import family from "@/assets/family.svg";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Hidden from "@/components/Atom/HIdden";
import Stack from "@/components/Atom/Stack";
import Tag from "@/components/Atom/Tag";
import Input from "@/components/Atom/Input";
import Checkbox from "@/components/Atom/Checkbox";
import Link from "@/components/Atom/Link";
import Button from "@/components/Atom/Button";
import Text from "@/components/Atom/Text";
import Divider from "@/components/Atom/Divider";
import InnerSelectByInput from '@/components/Atom/InnerSelectByInput';

import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "@/stores/Auth";

const Home = () => {
  const loggin = useAuth(state=>state.loggin)
  const [form, setForm] = useState({ dni: 30216147, phone: 5130216147 }); 

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleSubmit(ev: FormEvent<HTMLFormElement>){
    ev.preventDefault()

    loggin(form);

    navigate("/plans")
  }

  return (
    <>
      <Header />

      <Container>
        <Stack gap={106}>
          <Hidden query="max">
            <Stack>
              <img src={family} alt="" />

              <Hidden query="max" media="xl">
                <img src={family} alt="" />
              </Hidden>
            </Stack>
          </Hidden>

          <form onSubmit={handleSubmit}>

            <Stack gap={16}>
              <Stack gap={16} direction="vertical">
                <div> <Tag text="Seguro Salud Flexible" /> </div>

                <Text size={32} line={40} weight={700}>Creado para ti y tu familia</Text>
              </Stack>              

              <Hidden query="min">
                <img src={family} alt="" height={160} width={136} />
              </Hidden>
            </Stack>

            <Hidden query="min">
              <Divider />
            </Hidden>

            <Text size={14} line={20} weight={600} className="mt-8">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</Text>

            <Stack gap={16} direction="vertical" className="mt-16">
              <Input name="dni" maxLength={8} onChange={handleChange} label="Nro. de documento" value={form.dni} prepend={ <InnerSelectByInput /> } />
              <Input name="phone" onChange={handleChange} label="Celular" value={form.phone} />
            </Stack>

            <Stack gap={12} className="max-md-mt-16 mt-116" direction="vertical">
              <Checkbox name="privacy_policy" label="Acepto la Política de Privacidad" />
              <Checkbox name="trade_policy" label="Acepto la Política Comunicaciones Comerciales" />

              <Link size={13} text="Aplican Términos y Condiciones." />
            </Stack>

            {/* <RouteLink to="/plans"> */}
              <Button type="submit" text="Cotiza aquí" className="mt-16" />
            {/* </RouteLink> */}
          </form>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export  default Home
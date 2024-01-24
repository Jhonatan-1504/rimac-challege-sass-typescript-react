import family from "./assets/family.svg";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "./components/Container";
import Hidden from "./components/Atom/HIdden";
import Stack from "./components/Atom/Stack";
import Tag from "./components/Atom/Tag";
import Input from "./components/Atom/Input";
import Checkbox from "./components/Atom/Checkbox";
import Link from "./components/Atom/Link";
import Button from "./components/Atom/Button";
import Text from "./components/Atom/Text";
import Divider from "./components/Atom/Divider";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Stack gap={126}>
          <Hidden query="max">
            <Stack>
              <img src={family} alt="" />
              <img src={family} alt="" />
            </Stack>
          </Hidden>

          <form action="#">

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

            <Text size={14} line={20} weight={600}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</Text>

            <Stack gap={16} direction="vertical" className="mt-16">
              <Input label="Nro. de documento" defaultValue={30216147} prepend={<>text</>} />
              <Input label="Celular" defaultValue={5130216147} />
            </Stack>

            <Stack gap={12} className="max-md-mt-16 mt-116" direction="vertical">
              <Checkbox label="Acepto la Política de Privacidad" />
              <Checkbox label="Acepto la Política Comunicaciones Comerciales" />

              <Link text="Aplican Términos y Condiciones." />
            </Stack>

            <Button text="Cotiza aquí" className="mt-16" />
          </form>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export default App;

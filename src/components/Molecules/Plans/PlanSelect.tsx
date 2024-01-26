import CheckIcon from "@/assets/icons/check.svg";
import CircleIcon from "@/assets/icons/circle.svg";
import GuardIcon from "@/assets/icons/guard.svg";
import GuardPlusIcon from "@/assets/icons/guard-plus.svg";

import Card from "@/components/Atom/Card";
import Stack from "@/components/Atom/Stack";
import Text from "@/components/Atom/Text";
import { Who, useResumen } from "@/stores/Resumen";
import { useMemo } from "react";

export default function PlanSelect() {
  const { chooseWho, who } = useResumen();

  const with_border_me = useMemo(() => who === "me", [who]);
  const with_border_other = useMemo(() => who === "other", [who]);

  function handleChange(who_person: Who) {
    chooseWho(who_person);
  }

  return (
    <Stack gap={32} direction="horizontal" className="md--column">
      <Card with_border={with_border_me}>
        <Stack justify="end" align="start">
          <div onClick={() => handleChange("me")} style={{cursor:'pointer'}}>
            {with_border_me ? (
              <img src={CheckIcon} alt="" />
            ) : (
              <img src={CircleIcon} alt="" />
            )}
          </div>
        </Stack>

        <Stack direction="vertical" gap={8}>
          <Stack
            gap={8}
            direction="vertical"
            className="md--row md-align-center"
          >
            <img src={GuardIcon} alt="" width={48} />

            <Text size={20} line={28} weight={900}>
              Para mi
            </Text>
          </Stack>

          <Text size={12} line={20} weight={400}>
            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
          </Text>
        </Stack>
      </Card>

      <Card with_border={with_border_other}>
        <Stack justify="end">
          <div onClick={() => handleChange("other")} style={{cursor:'pointer'}}>
            {with_border_other ? (
              <img src={CheckIcon} alt="" />
            ) : (
              <img src={CircleIcon} alt="" />
            )}
          </div>
        </Stack>

        <Stack direction="vertical" gap={8}>
          <Stack
            gap={8}
            direction="vertical"
            className="md--row md-align-center"
          >
            <img src={GuardPlusIcon} alt="" width={48} />

            <Text size={20} line={28} weight={900}>
              Para alguien más
            </Text>
          </Stack>

          <Text size={12} line={20} weight={400}>
            Realiza una cotización para uno de tus familiares o cualquier
            persona.
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}

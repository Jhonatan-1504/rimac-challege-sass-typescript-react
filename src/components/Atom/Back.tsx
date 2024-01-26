import LeftArrow from "@/assets/icons/left-arrow.svg";
import { Link, type To } from "react-router-dom";
import Text from "./Text";
import Stack from "./Stack";

type PropsBack = {
  to: To;
  text?: string;
};

export default function Back({ to, text = "Volver" }: PropsBack) {
  return (
    <div className="back">
      <Link to={to}>
        <Stack gap={8}>
          <img src={LeftArrow} alt="left arrow icon" />
          <Text size={18} weight={700} line={20} color="#4F4FFF">
            {text}
          </Text>
        </Stack>
      </Link>
    </div>
  );
}

import { type CSSProperties, useMemo } from "react";

type PropsProgressBar = {
  max?: number;
  value?: number;
};

export default function ProgressBar({ max = 100, value }: PropsProgressBar) {
  const styles = useMemo(() => {
    return {
      "--max": `${max}`,
      "--value": `${value}`,
    } as CSSProperties;
  }, [value, max]);

  return <progress value={10} style={styles}></progress>;
}

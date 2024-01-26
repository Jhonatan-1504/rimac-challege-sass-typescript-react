import { useEffect, useMemo, useState } from "react";

import LeftArrowGrayIcon from "@/assets/icons/left-arrow-gray.svg";
import RightArrowIcon from "@/assets/icons/right-arrow.svg";

import Stack from "@/components/Atom/Stack";
import PlanItem from "./PlanItem";
import Text from "@/components/Atom/Text";

import { usePlan } from "@/stores/Plan";
import { useUser } from "@/stores/User";
import { useResumen } from "@/stores/Resumen";
import useScroll from "@/helpers/srollbar-width";

export default function PlanList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, toGetPlans } = usePlan();
  const who = useResumen((state) => state.who);
  const age = useUser((state) => state.age);
  const scrollX = useScroll();

  const itemsPerPage = useMemo(() => (scrollX < 924 ? 1 : scrollX > 1292 ? 3 : 2),[scrollX]);
  const perPage = useMemo(() => (itemsPerPage === 1 ? 3 : 2),[itemsPerPage]);
  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage,[currentPage, itemsPerPage]);
  const endIndex = useMemo(() => startIndex + itemsPerPage,[startIndex, itemsPerPage]);

  const filters = useMemo(() => data.filter((r) => r.age > age), [data, age]);
  const paginations = useMemo(() => filters.slice(startIndex, endIndex),[filters, endIndex, startIndex]);

  useEffect(() => {
    toGetPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!who) {
    return;
  }

  return (
    <Stack direction="vertical" gap={64}>
      <Stack gap={32} className="plans">
        {paginations.map((plan, key) => (
          <PlanItem key={key} plan={plan} />
        ))}
      </Stack>

      {itemsPerPage < 3 && (
        <Stack gap={16} className="plans" justify="center">
          <img src={LeftArrowGrayIcon} alt="" width={32} onClick={()=>setCurrentPage(state => state === 1 ? 1 : (state - 1))} />

          <Stack gap={4}>
            <Text size={16} line={24} weight={400}>
              {currentPage}
            </Text>
            <Text size={16} line={24} weight={400}>
              /
            </Text>
            <Text size={16} line={24} weight={400}>
              {perPage}
            </Text>
          </Stack>

          <img src={RightArrowIcon} alt="" width={32} onClick={()=>setCurrentPage(state => perPage === currentPage ? perPage : (state + 1))} />
        </Stack>
      )}
    </Stack>
  );
}

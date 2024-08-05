import { Center } from "@mantine/core";
import { IconBook, IconClock, IconCode, IconLetterA, IconSchool, IconSubtask } from "@tabler/icons-react";
import { FC } from "react";
import { DashboardCard } from "@/components/cards/DashboardCard";
import { appServices } from "@/config/site";

export const DashboardPage: FC = () => {
  return (
    <Center style={{ gap: "20px" }}>
      <DashboardCard
        title="Learn"
        icon={IconSchool}
        modalTitle="Learn"
        modalCards={appServices.learn}
      />
      <DashboardCard
        title="Productivity"
        icon={IconSubtask}
        modalTitle="Productivity"
        modalCards={appServices.productivity}
      />
    </Center>
  );
};

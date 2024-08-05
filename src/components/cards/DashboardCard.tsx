import { Anchor, Card, Center, Modal, Stack, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBook, IconClock, IconCode, IconSubtask, TablerIcon } from "@tabler/icons-react";
import { FC } from "react";

interface DashboardCardProps {
  title: string;
  icon: TablerIcon;
  modalTitle?: string;
  modalCards?: { label: string; icon: TablerIcon, link: string }[];
}

export const DashboardCard: FC<DashboardCardProps> = ({ title, icon: Icon, modalTitle, modalCards }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card w="40%" h={200} className="hover:bg-neutral-700 cursor-pointer" onClick={open}>
        <Center h="100%">
          <Stack align="center">
            <Icon size={64} color="teal" />
            <Title order={2}>{title}</Title>
          </Stack>
        </Center>
      </Card>

      {modalTitle && modalCards && (
        <Modal opened={opened} onClose={close} withCloseButton={false}>
          <Card w="100%" mb="md" bg="#444">
            <Center>
              <Title order={2}>{modalTitle}</Title>
            </Center>
          </Card>
          <Center style={{ gap: "20px" }}>
            {modalCards.map((card, index) => (
              <Card component="a" href={card.link} w="50%" h={150} key={index} className="hover:bg-neutral-700 cursor-pointer">
                <Center h="100%">
                  <Stack align="center">
                    <card.icon size={48} color="gray" />
                    <Title order={4}>{card.label}</Title>
                  </Stack>
                </Center>
              </Card>
            ))}
          </Center>
        </Modal>
      )}
    </>
  );
};

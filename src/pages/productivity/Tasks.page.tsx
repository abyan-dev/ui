import { useGetTasks } from "@/hooks/productivity/useGetTasks";
import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Divider,
  Group,
  Modal,
  Skeleton,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DateInput, DatePicker, DateTimePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  due_date: string;
  is_complete: boolean;
  user_email: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export function TasksPage() {
  const { getTasks, isLoading, error } = useGetTasks();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [pendingOpened, { open: pendingOpen, close: pendingClose }] = useDisclosure(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      const fetchedTasks = await getTasks();
      const formattedTasks = fetchedTasks.map((task: Task) => ({
        ...task,
        due_date: formatDate(task.due_date),
      }));
      setTasks(formattedTasks);
    }
    fetchTasks();
  }, []);

  const handleCardClick = (task: Task) => {
    setSelectedTask(task);
    pendingOpen();
  };

  const pendingTasks = tasks
    .filter((task) => !task.is_complete)
    .sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime());

  const completedTasks = tasks
    .filter((task) => task.is_complete)
    .sort((a, b) => new Date(b.due_date).getTime() - new Date(a.due_date).getTime());


  return (
    <>
      <Modal
        opened={pendingOpened}
        onClose={() => {
          pendingClose();
          setSelectedTask(null);
        }}
        withCloseButton={false}
      >
        <Title order={3} mb="md">Update Task</Title>
        <form>
          <TextInput required mb="sm" label="Title" value={selectedTask?.title} />
          <TextInput required mb="sm" label="Description" value={selectedTask?.description} />
          <TextInput required mb="lg" label="Due date" value={selectedTask?.due_date} />
          <Checkbox
            mb="lg"
            color="teal"
            defaultChecked
            label="I have completed this task"
          />
          <Button onClick={() => {
            pendingClose();
            setSelectedTask(null);
          }} color="teal" variant="outline">Save</Button>
        </form>
      </Modal>

      <Container w={1000}>
        <Skeleton visible={isLoading}>
          <Button w="100%" h={100} className="text-xl" variant="light" color="teal">
            Create a New Task
          </Button>
        </Skeleton>
        <Group grow mb={24} mt={36}>
          <Stack>
            <Group>
              <Skeleton visible={isLoading}>
                <Title>Pending</Title>
              </Skeleton>
            </Group>
            <Divider />
          </Stack>
          <Stack>
            <Skeleton visible={isLoading}>
              <Title>Completed</Title>
            </Skeleton>
            <Divider />
          </Stack>
        </Group>
        <div className="grid grid-cols-2 gap-4">
          <Stack>
            {pendingTasks.map((task) => (
              <Skeleton key={task.id} visible={isLoading}>
                <Card className="hover:bg-neutral-700 cursor-pointer" onClick={() => handleCardClick(task)}>
                  <Title order={4}>{task.title}</Title>
                  <Text>{task.description}</Text>
                  <Text size="sm" mt="sm">
                    Due date: {task.due_date}
                  </Text>
                </Card>
              </Skeleton>
            ))}
          </Stack>
          <Stack>
            {completedTasks.length !== 0 ? (
              completedTasks.map((task) => (
                <Skeleton key={task.id} visible={isLoading}>
                  <Card>
                    <Title order={4}>{task.title}</Title>
                    <Text>Due date: {new Date(task.due_date).toLocaleDateString()}</Text>
                  </Card>
                </Skeleton>
              ))
            ) : (
              <Text>You have not completed any tasks.</Text>
            )}
          </Stack>
        </div>
      </Container>
    </>
  );
}

import { Card, Image, Text, Group, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, getRef) => ({
  card: {
    width: '350px',
    display: 'inline-block',
    padding: '10px',
    margin: '15px',
    height: '335px',
    textAlign: 'left',
    [`@media (max-width: 400px)`]: {
      margin: 'auto'
    },
  },
}));

interface CardData {
  title: string,
  image: string,
  text: string
}

export function CardBlock({ title, image, text }: CardData) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
      <Card.Section>
        <Image
          src={image}
          alt=""
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={700}>{title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {text}
      </Text>
    </Card>
  );
}
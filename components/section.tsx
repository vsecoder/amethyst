import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { IconMicrophone, IconMap, IconAlignJustified, IconDiamond } from '@tabler/icons';
import Router from 'next/router';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconMicrophone,
    title: 'Plasmo Voice',
    description: 'На сервере присутствует мод для голосового чата',
  },
  {
    icon: IconDiamond,
    title: 'Администрация',
    description: 'Администрация никак не вмешивается в игровой процесс, и сама может быть наказана',
  },
  {
    icon: IconAlignJustified,
    title: 'Дискорд',
    description:
      'Задавайте вопросы прямо в ДС, администрация всегда готова ответить на любой вопрос',
  },
  {
    icon: IconMap,
    title: 'Правила',
    description:
      'Все правила сервера прозрачны и доступны для просмотра на нашем сайте',
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Полностью рабочий и продуманный сервер с интересными фишками
          </Title>
          <Text color="dimmed">
            Сервер полностью настроен, предусмотрены многие моменты, хороший админ состав, 
            интересные РП и многое другое!
          </Text>

          <Button
            variant="gradient"
            onClick={() => {Router.push('https://docs.google.com/forms/d/e/1FAIpQLSf7x5Xwib3AD9fz8-PQXPJgmZnPzG4y5Kpby0mSa66Sxfm9dw/viewform')}}
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Присоединиться
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
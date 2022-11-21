import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));


export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Часто задаваемые вопросы
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Нужна ли лицензия?</Accordion.Control>
          <Accordion.Panel>Конечно нет, мы придерживаемся возможности зайти с пиратки без каких-либо ущемлений!</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>С какой версии надо заходить?</Accordion.Control>
          <Accordion.Panel>В основном сервер идёт в ногу с временем, но т.к. некоторые плагины необходимо переписать на новые версии, будут задержки в переходе.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>За что меня могут забанить?</Accordion.Control>
          <Accordion.Panel>Вас могут забанить за нарушения пунктов правил, в которых указан бан за нарушение(таких очень мало, обычно ограничиваемся предупреждением или штрафом в игровой валюте).</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
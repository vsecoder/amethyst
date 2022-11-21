import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { createStyles, Group, AppShell, Navbar, Card, Image, Text } from '@mantine/core';
import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import {
  IconBuildingBank,
  IconTicket,
  IconMessage,
  IconUserCircle,
  IconNews,
} from '@tabler/icons';
import { parseCookies } from 'nookies';

import { AmethystLogo } from '../../components/logo';
import { Bank } from '../../components/bank';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  var b;
  if(theme.colorScheme == 'light'){b = {color: 'black'}}
  else{b = {}}
  return {
    block: {
      background: 'gray'
    },
    navbar: {
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
    },

    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      )}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      )}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      ...b,

      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
          0.1
        ),
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
      ...b,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
          0.15
        ),
        color: 'white',
        [`& .${icon}`]: {
          opacity: 0.9,
          color: 'white',
        },
      },
    },
    card: {
      width: '350px',
      display: 'inline-block',
      padding: '10px',
      margin: '15px',
      height: '335px',
      textAlign: 'left',
      [`@media (max-width: 400px)`]: {
        margin: 'auto',
        width: '300px',
      },
    },
    image: {
      width: '90px',
      display: 'inline-block',
      margin: 10
    },
    section: {
      backgroundColor: '#b55030',
      textAlign: 'center'
    },
  };
});

const data = [
  { link: '', label: 'Профиль', icon: IconUserCircle },
  { link: '', label: 'Банк', icon: IconBuildingBank },
  { link: '', label: 'Жалобы', icon: IconTicket },
  { link: '', label: 'Форум', icon: IconMessage },
  { link: '', label: 'Новости', icon: IconNews }
];


const Player = () => {
  const router = useRouter()
  const { nick } = router.query;
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Профиль');
  const [name, setName] = useState('-');
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState(600)
  const { width } = useViewportSize();

  const jwt = parseCookies().jwt;
  const id = parseCookies().id;
  const username = parseCookies().username;
  useEffect(() => {
    setName(username);
    setSize(width);
  })

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      {size <= 400 &&
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Открыть меню</Text>
          </div>
        </Header>
      }
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Navbar.Section grow>
              <Group position="apart">
                <AmethystLogo />
              </Group>
              {links}
            </Navbar.Section>
          </Navbar>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
          { active == 'Профиль' && 
            <>
              <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
                <Card.Section className={classes.section}>
                  <Image
                    src={'https://mc-heads.net/body/'+nick+'/right'}
                    alt=""
                    className={classes.image}
                    width={80}
                  />
                  <Image
                    src={'https://render.skinmc.net/3d.php?user='+nick+'&hr=-25&vr=-10&hrh=0&vrll=25&vrrl=-25&vrla=-20&vrra=20&aa=false&ratio=25'}
                    alt=""
                    className={classes.image}
                    width={80}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={700}>{nick}</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Граждании NN
                  {name == nick && <><br /><p>Ваш профиль</p></>}
                </Text>
              </Card>
              <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={700}>Биография</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  Тути типо биография из заявку будет
                </Text>
              </Card>
              <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={700}>Статистика</Text>
                </Group>
                
                <Text size="sm" color="dimmed">
                  Тут пункты из статистики игрока
                </Text>
              </Card>
            </>
          }
          { active == 'Банк' && <Bank />}
          { active == 'Жалобы' && 
            <>
              <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={700}>Убийство</Text>
                </Group>
                
                <Text size="sm" color="dimmed">
                  Вы обвиняетесь в убийстве игрока ----, суд объявил слушанье 10 декабря в 19:00 по МСК
                </Text>
              </Card>
            </>
          }
      </AppShell>
    </>
  )
}

export default Player

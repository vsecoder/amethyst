import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { IconBrandDiscord } from '@tabler/icons';
import { AmethystLogo } from './logo';
import Link from 'next/link';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <AmethystLogo />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link href="https://discord.gg/xrGna3M6s9">
            <ActionIcon size="lg">
              <IconBrandDiscord size={18} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
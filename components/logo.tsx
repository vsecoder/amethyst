import { createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inline: {
    display: 'inline-block',
    cursor: 'pointer'
  },
  image: {
    width: '30px',
    display: 'inline-block',
    margin: '5px',
    marginTop: '-5px'
  },
  link: {
    color: 'white',
    cursor: 'pointer'
  }
}));

export function AmethystLogo() {
  const { classes } = useStyles();

  return (
    <Link href='/' className={classes.link}>
      <div className={classes.inline}>
        <img src="/favicon.png" className={classes.image} />
        <h2 className={classes.inline}>Amethyst</h2>
      </div>
    </Link>
  );
}
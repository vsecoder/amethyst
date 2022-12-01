import { HeaderTabs } from '../components/header';
import { FooterSocial } from '../components/footer';
import { CardBlock } from '../components/card';
import { FeaturesTitle } from '../components/section';
import { FaqSimple } from '../components/faq';
import { CardsCarousel } from '../components/carousels';

import Router from 'next/router';
import { createStyles, Button, Container } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useScrollIntoView } from '@mantine/hooks';

import axios from 'axios';

const useStyles = createStyles((theme) => ({
  banner: {
    width: '100%',
    maxWidth: '1920px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    height: '790px'
  },
  banner_img: {
    pointerEvents: 'none',
    position: 'absolute',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    background: 'linear-gradient(180deg,#186ef0,#429ae7,#1A1B1E)',
    zIndex: -1
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1,
    position: 'inherit'
  },
  inner: {
    maxWidth: '640px',
    margin: '128px 0',
  },
  h1: {
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    fontSize: '42px',
    lineHeight: '56px',
    fontStyle: 'normal',
    marginBottom: '22px',
    [theme.fn.smallerThan('xs')]: {
      fontSize: '34px',
      lineHeight: '32px',
    },
  },
  p: {
    marginBottom: '45px',
    fontSize: '18px'
  },
  white: {
    color: 'white'
  },
  btn: {
    zIndex: 10,
    margin: '15px'
  },
  conteiner: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 300,
      height: 2,
      margin: '0 auto',
      marginTop: 50
    },
  },
  conteiner1: {
    textAlign: 'center',
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 300,
      height: 2,
      margin: '0 auto',
      marginTop: 50
    },
  },
}));

export default function IndexPage() {
  const { classes } = useStyles();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });
  const [online, setOnline] = useState('0/100');

  useEffect(() => {
    axios.get('https://api.trademc.org/shop.getOnline?shop=196689&v=3').then((res) => {
      setOnline(res.data.response.players+'/'+res.data.response.max_players);
    });
  }, []);

  return (
    <>
      <HeaderTabs />
      <div className={classes.banner}>
        <div className={classes.content}>
          <div className={classes.inner}>
            <h1 className={classes.h1}>Технологичный <br />ванильный сервер<br /> с нотками RP</h1>
            <p className={classes.p}>
              Выживайте, стройте город, находите друзей и отыгрывайте RP
              <br />
              Без приватов, привилегий и лишних плагинов
            </p>
            <div className={classes.btn}>
              <Button
                color="gray"
                size="md"
                m={10}
                onClick={() => {Router.push('https://docs.google.com/forms/d/e/1FAIpQLScvYH8osK5IaB7Vilf76vcYU4K77hvNBY8rPih9lc-idxkvJg/viewform?usp=sharing')}}
              >Подать заявку</Button>
              <Button
                variant="subtle"
                m={10}
                onClick={() => scrollIntoView({ alignment: 'center' })}
                className={classes.white}
              >О сервере</Button>
            </div>
            <p className={classes.p}>Онлайн {online}</p>
          </div>
        </div>
        <img src='/banner.webp' className={classes.banner_img} />
      </div>
      <Container my="md" size={1182} mt={100} className={classes.conteiner1}>
        <CardBlock 
          title='Присоединяйтесь к городам' 
          image='/commune.webp' 
          text='Для отличной игры советуется вступить в город, или создать свой!' />
        <CardBlock 
          title='Наблюдайте за новостями' 
          image='/event.webp' 
          text='Очень часто будут проходить ивенты, которые помогут вам выделиться или разбогатеть!' />
        <CardBlock 
          title='Помогайте государству' 
          image='/rule.webp' 
          text='Чем выше город, больше актив и лучше сплочённость - тем богаче его жители!' />
      </Container>
      <Container my="md" size={1262} mt={50} className={classes.conteiner} ref={targetRef}>
        <FeaturesTitle />
      </Container>
      <Container my="md" size={1262} mt={50} className={classes.conteiner}>
        <FaqSimple />
      </Container>
      <Container my="md" size={1262} mt={50} className={classes.conteiner}>
        <CardsCarousel />
      </Container>
      <FooterSocial />
    </>
  );
}

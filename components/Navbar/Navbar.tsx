import { createStyles, Header, Container, Burger, Title, ActionIcon } from '@mantine/core';
import { useStore } from '@context/useStore';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

const HEADER_HEIGHT = 100;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  branding: {
    textDecoration: 'none',
    cursor: 'pointer',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  github: {
    display: 'none',
    [theme.fn.largerThan('sm')]: {
      display: 'block',
    },
  },
}));

export const Navbar = () => {
  const { showSections, setShowSections } = useStore();
  const { classes } = useStyles();

  return (
    <>
      <Header height={HEADER_HEIGHT} mb={10} className={classes.root}>
        <Container size={2100} className={classes.header}>
          <Link href="/">
            <Title order={1}>
              <span className={classes.branding}>resume.so</span>
            </Title>
          </Link>

          <Burger
            opened={showSections}
            onClick={() => setShowSections(!showSections)}
            className={classes.burger}
            size="md"
          />

          <ActionIcon size="xl" className={classes.github}>
            <BsGithub size={30} />
          </ActionIcon>
        </Container>
      </Header>
    </>
  );
};

import { createStyles, Container, Text, Button, Group, Title } from '@mantine/core';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <Title align="center" order={1} mb="xl">
          resume.so
        </Title>
        <h1 className={classes.title}>
          An{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            easy way
          </Text>{' '}
          to create a markdown resume
        </h1>

        <Text className={classes.description} color="dimmed">
          {`Saying it's the easiest way to create a resume would be a blatant lie. But hey, it's still pretty cool!`}
        </Text>

        <Group className={classes.controls}>
          <Link href="/create">
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
            >
              Get started
            </Button>
          </Link>

          <Button
            component="a"
            target="_blank"
            href="https://github.com/oasido/resume.so"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<BsGithub size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default Home;

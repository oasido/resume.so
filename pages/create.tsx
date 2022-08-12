import type { NextPage } from 'next';
import { createStyles, Grid, Container, Transition } from '@mantine/core';
import Sections from '@components/sections';
import Editor from '@components/editor';
import Preview from '@components/preview';
import Navbar from '@components/Navbar';
import { useStore } from '@context/useStore';

const useStyles = createStyles((theme) => ({
  grid: {
    width: '100%',
    height: '100%',
  },

  editor: {
    backgroundColor: 'yellow',
  },
  preview: {
    backgroundColor: 'lightblue',
  },

  hide: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  zIndex: {
    zIndex: 10,
  },
}));

const Create: NextPage = () => {
  const { classes } = useStyles();
  const { showSections } = useStore();

  return (
    <>
      <Navbar />
      <Container size={2000}>
        <Grid grow className={classes.grid}>
          <Transition mounted={showSections} transition="scale-x" duration={220}>
            {(styles) => (
              <div style={styles} className={classes.zIndex}>
                <Sections />
              </div>
            )}
          </Transition>
          {!showSections && (
            <Grid.Col className={classes.hide} span={1} style={{ maxWidth: 'fit-content' }}>
              <Sections />
            </Grid.Col>
          )}
          <Grid.Col span={4}>
            <Editor />
          </Grid.Col>
          <Grid.Col span={4}>
            <Preview />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default Create;

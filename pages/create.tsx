import type { NextPage } from 'next';
import { createStyles, SimpleGrid, AppShell, Navbar, Text, Container } from '@mantine/core';
import Sections from '@components/sections';
import Editor from '@components/editor';
import Preview from '@components/preview';

const useStyles = createStyles((theme) => ({
  container: {
    padding: '2rem',
    display: 'flex',
  },

  editor: {
    backgroundColor: 'yellow',
  },
  preview: {
    backgroundColor: 'lightblue',
  },
}));

const Create: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      {/* <SimpleGrid
        cols={2}
        className={classes.grid}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      > */}
      <div className={classes.container}>
        <Sections />
        <Editor />
        <Preview />
      </div>
      {/* <div className={classes.preview}>Preview</div> */}
      {/* </SimpleGrid> */}
    </>
  );
};

export default Create;

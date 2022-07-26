import type { NextPage } from 'next';
import { createStyles, Container, SimpleGrid } from '@mantine/core';
import Sections from '@components/sections';

const useStyles = createStyles((theme) => ({
  grid: {
    padding: '1rem',
  },

  editor: {
    backgroundColor: 'yellow',
  },
  preview: {
    backgroundColor: 'lightblue',
  },
}));

const Create: NextPage = () => {
  const { classes } = useStyles();

  return (
    <SimpleGrid
      cols={3}
      className={classes.grid}
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <Sections />
      <div className={classes.editor}>Editor</div>
      <div className={classes.preview}>Preview</div>
    </SimpleGrid>
  );
};

export default Create;

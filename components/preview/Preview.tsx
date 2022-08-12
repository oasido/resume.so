import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { createStyles } from '@mantine/core';
import { useStore } from '@context/useStore';

const useStyles = createStyles((theme) => ({
  container: {
    padding: '0.5rem',
    borderRadius: theme.radius.sm,
    border: '1px solid #ced4da',
    position: 'relative',
    minHeight: '301px',
  },

}));

export const Preview = () => {
  const { classes } = useStyles();
  const { sections, setSections } = useStore();
  console.log(sections);

  return (
    <div className={classes.container}>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>hi</ReactMarkdown> */}
    </div>
  );
};

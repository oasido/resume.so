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
  const { sections } = useStore();
  const markdown = sections.map((section) => section.text.replace('\n', '\n\n')).join('\r\n');

  return (
    <div className={classes.container}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

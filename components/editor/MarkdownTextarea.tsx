import { createStyles, Textarea, Text, Input, Title, ActionIcon, Collapse } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: '0.5rem',
    width: '100%',
    padding: '0.1rem 1rem',
  },
  textarea: {},
}));

export const MarkdownTextarea = () => {
  const { classes } = useStyles();

  return <Textarea size="lg" minRows={10} minLength={10} placeholder="" />;
};

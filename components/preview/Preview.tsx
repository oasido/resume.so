import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ActionIcon, createStyles } from '@mantine/core';
import { useStore } from '@context/useStore';
import { AiFillCopy } from 'react-icons/ai';
import { useClipboard } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  container: {
    padding: '0.5rem',
    borderRadius: theme.radius.sm,
    border: '1px solid #ced4da',
    position: 'relative',
    minHeight: '301px',
  },

  copy: {
    padding: '0.5rem',
    position: 'absolute',
    right: 0,
  },
}));

export const Preview = () => {
  const { classes } = useStyles();
  const { sections } = useStore();
  const markdown = sections.map((section) => section.text.replace('\n', '\n\n')).join('\r\n');
  const clipboard = useClipboard();

  return (
    <div className={classes.container}>
      <div className={classes.copy}>
        <ActionIcon onClick={() => clipboard.copy(markdown)} variant="outline">
          <AiFillCopy size={18} />
        </ActionIcon>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

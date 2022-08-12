import { createStyles } from '@mantine/core';
import { useStore } from '@context/useStore';
import { MarkdownTextarea } from '@components/editor/MarkdownTextarea';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.gray[1],
  },
}));

export const Editor = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <MarkdownTextarea />
    </div>
  );
};

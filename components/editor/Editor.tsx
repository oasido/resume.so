import { createStyles } from '@mantine/core';
import { useStore } from '@context/useStore';
import { MarkdownTextarea } from '@components/editor/MarkdownTextarea';

const useStyles = createStyles((theme) => ({
  container: {
    padding: '0.5rem',
    backgroundColor: theme.colors.gray[1],

    [theme.fn.largerThan('sm')]: {
      padding: '1rem',
    },
  },
}));

export const Editor = () => {
  const { classes } = useStyles();
  const { sections, selected } = useStore();

  const handleInputs = () => {
    const currentSelectedSection = sections.length > 0 ? sections[selected].title : null;
    switch (currentSelectedSection) {
      case 'Heading':
        return <MarkdownTextarea />;
      case 'About':
        break;
      case 'Work Experience':
        break;
      case 'Projects':
        break;
      case 'Education':
        break;
      case null:
        return 'Emptiness!';
      default:
        return 'some textarea';
    }
  };

  return <div className={classes.container}>{handleInputs()}</div>;
};

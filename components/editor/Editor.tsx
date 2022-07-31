import { createStyles, Container } from '@mantine/core';
import { useStore } from '@context/useStore';
import { Heading } from '@components/editor/default/Heading';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.gray[1],
  },
}));

export const Editor = () => {
  const { classes } = useStyles();
  const { sections, selected } = useStore();

  const handleInputs = () => {
    const currentSelectedSection = sections[selected];
    switch (currentSelectedSection) {
      case 'Heading':
        return <Heading />;
      case 'About':
        break;
      case 'Work Experience':
        break;
      case 'Projects':
        break;
      case 'Education':
        break;
      default:
        return 'some textarea';
    }
  };

  // return <div className={classes.container}>{handleInputs()}</div>;
  return <Container className={classes.container}>{handleInputs()}</Container>;
};

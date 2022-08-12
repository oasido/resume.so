import type { NextPage } from 'next';
import { createStyles, Stack, Button, ActionIcon } from '@mantine/core';
import { VscAdd } from 'react-icons/vsc';
import { AddSectionModal } from './AddSectionModal';
import { useStore } from '@context/useStore';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.white,

    [theme.fn.smallerThan('sm')]: {
      zIndex: 10,
      position: 'absolute',
      maxWidth: '25rem',
      padding: '1rem 2rem',
      borderRadius: theme.radius.sm,
      boxShadow: '10px 10px 15px -3px rgba(0,0,0,0.15)',
    },
  },

  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  listItem: {
    position: 'relative',
  },

  deleteSectionButton: {
    position: 'absolute',
    right: '0.7rem',
    top: '0.9rem',
  },
}));

export const Sections: NextPage = () => {
  const { classes } = useStyles();
  const { sections, setSections, setAddSectionModalOpened, selected, setSelected } = useStore();

  const removeSection = (idx: number): void => {
    setSelected(selected < 0 ? selected - 1 : 0);
    setSections(sections.slice(0, idx).concat(sections.slice(idx + 1, sections.length)));
  };

  return (
    <>
      <AddSectionModal />
      <div className={classes.container}>
        <Stack spacing="sm">
          <ul className={classes.list}>
            {sections.map((section, idx) => (
              <li key={idx} className={classes.listItem}>
                <Button
                  size="xl"
                  fullWidth
                  variant={selected === idx ? 'outline' : 'default'}
                  component="div"
                  onClick={() => {
                    setSelected(idx);
                  }}
                >
                  <span>{section.title}</span>
                </Button>
                {selected === idx ? (
                  <ActionIcon
                    className={classes.deleteSectionButton}
                    color="red"
                    variant="filled"
                    onClick={() => removeSection(idx)}
                  >
                    X
                  </ActionIcon>
                ) : null}
              </li>
            ))}
          </ul>
          <Button
            size="xl"
            variant={selected === sections.length + 1 ? 'outline' : 'default'}
            onClick={() => {
              setAddSectionModalOpened(true);
            }}
            leftIcon={<VscAdd size={20} />}
          >
            Add Section
          </Button>
        </Stack>
      </div>
    </>
  );
};

import type { NextPage } from 'next';
import { createStyles, Stack, Button, ActionIcon } from '@mantine/core';
import { VscAdd } from 'react-icons/vsc';
import { AddSectionModal } from './AddSectionModal';
import { useStore } from '@context/useStore';

const useStyles = createStyles((theme) => ({
  container: {
    // backgroundColor: 'gray',
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
    top: '0.7rem',
  },
}));

export const Sections: NextPage = () => {
  const { classes } = useStyles();
  const { sections, setSections, setAddSectionModalOpened, selected, setSelected } = useStore();

  const removeSection = (idx: number): void => {
    setSections(sections.filter((section) => sections.indexOf(section) !== idx));
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
                  size="lg"
                  fullWidth
                  variant={selected === idx ? 'outline' : 'default'}
                  component="div"
                  onClick={() => {
                    setSelected(idx);
                  }}
                >
                  <span>{section}</span>
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
            size="lg"
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

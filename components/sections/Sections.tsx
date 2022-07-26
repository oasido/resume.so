import type { NextPage } from 'next';
import { useState } from 'react';
import { createStyles, Stack, Button, ActionIcon } from '@mantine/core';
import { VscAdd } from 'react-icons/vsc';
import { AddSectionModal } from './AddSectionModal';

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
  const [sections, setSections] = useState<string[]>([
    'Heading',
    'About',
    'Work Experience',
    'Projects',
    'Education',
  ]);
  const [selected, setSelected] = useState<number>(0);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [newSection, setNewSection] = useState<string>('');

  const addCustomSection = (name: string): void => {
    if (newSection.length > 0 && sections.indexOf(name) === -1) {
      setSections((previousSections) => [...previousSections, newSection]);
      setNewSection('');
      setModalOpened(false);
    }
  };

  const removeSection = (idx: number): void => {
    // figure out why .splice isn't working properly.
    setSections((previousSections) => {
      return previousSections.filter((section) => previousSections.indexOf(section) !== idx);
    });
  };

  const modalProps = {
    addCustomSection,
    removeSection,
    modalOpened,
    setModalOpened,
    newSection,
    setNewSection,
  };

  return (
    <>
      <AddSectionModal {...modalProps} />
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
              // setSelected(sections.length + 1);
              setModalOpened(true);
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

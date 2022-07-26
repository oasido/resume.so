import { ChangeEvent } from 'react';
import { createStyles, Modal, Title, Input, Button } from '@mantine/core';
import { TbSection } from 'react-icons/tb';

const useStyles = createStyles((theme) => ({
  modalButtonsWrapper: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
}));

export const AddSectionModal = (modalProps: any) => {
  const {
    addCustomSection,
    removeSection,
    modalOpened,
    setModalOpened,
    newSection,
    setNewSection,
  } = modalProps;
  const { classes } = useStyles();

  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      onKeyDown={({ key }) => {
        key === 'Enter' && newSection.length > 0 && addCustomSection(newSection);
      }}
      title={<Title order={3}>✨ New Custom Section</Title>}
      centered
    >
      <Input
        size="lg"
        icon={<TbSection />}
        placeholder="Section Title"
        value={newSection}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setNewSection(evt.target.value)}
      />
      <div className={classes.modalButtonsWrapper}>
        <Button onClick={() => setModalOpened(false)} fullWidth size="lg" color="gray">
          Cancel
        </Button>
        <Button onClick={() => addCustomSection(newSection)} fullWidth size="lg" color="green">
          Add Section
        </Button>
      </div>
    </Modal>
  );
};

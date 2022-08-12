import { createStyles, Textarea } from '@mantine/core';
import { useStore } from '@context/useStore';
import { ChangeEvent } from 'react';

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
  const { sections, setSections, selected } = useStore();

  const updateText = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedSections = sections.map((section, idx) => {
      if (selected === idx) {
        section.text = evt.target.value;
        return section;
      } else {
        return section;
      }
    });

    setSections([...updatedSections]);
  };

  return (
    <Textarea
      value={sections[selected] ? sections[selected].text : ''}
      onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => updateText(evt)}
      size="lg"
      minRows={10}
      minLength={10}
      placeholder=""
    />
  );
};

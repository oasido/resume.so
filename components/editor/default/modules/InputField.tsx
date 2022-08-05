import { ChangeEvent } from 'react';
import { createStyles, Input } from '@mantine/core';
import { useUserData } from '@context/useUserData';
import { BiUserCircle } from 'react-icons/bi';

const useStyles = createStyles((theme) => ({
  input: { maxWidth: '20rem' },
  mb: { marginBottom: '1rem' },
}));

export const InputField = () => {
  const { classes } = useStyles();

  const { fields, setFields } = useUserData();

  return (
    <Input
      className={`${classes.mb} ${classes.input}`}
      size="lg"
      icon={<BiUserCircle size="25" />}
      placeholder="Your full name"
      value={fields.name}
      onChange={(evt: ChangeEvent<HTMLInputElement>) => setFields({ name: evt.target.value })}
    />
  );
};

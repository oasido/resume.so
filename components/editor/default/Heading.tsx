import { useUserData } from '@context/useUserData';
import { createStyles, Text, Input, Title, ActionIcon, Collapse } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineInfoCircle, AiOutlinePhone } from 'react-icons/ai';

const useStyles = createStyles((theme) => ({
  container: {
    // backgroundColor: 'red',
  },
  mb: {
    marginBottom: '1rem',
  },
  titleWithShowMore: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const Heading = () => {
  const { name, setName } = useUserData();
  const { classes } = useStyles();
  const [openContact, setOpenContact] = useState<boolean>(false);

  return (
    <div className={classes.container}>
      <Title order={3}>{`Your Resume's Heading`}</Title>
      <Text className={classes.mb} size="lg">
        The heading holds your name and basic contact information, {`there's`} no need to add in
        details that are <i>too</i> personal, like ID number or a percise address.
      </Text>

      <Input
        className={classes.mb}
        size="lg"
        icon={<BiUserCircle size="25" />}
        placeholder="Your full name"
        value={name}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
      />

      <div className={classes.titleWithShowMore}>
        <Title order={4}>Contact</Title>
        <ActionIcon onClick={() => setOpenContact(!openContact)}>
          <AiOutlineInfoCircle size="20" />
        </ActionIcon>
      </div>
      <Collapse in={openContact}>
        <Text className={classes.mb}>
          Your email address should look professional, bad examples would be:
          john_doe50433@gmail.com, mosquitoman911@gmail.com
        </Text>
      </Collapse>
      <Input
        className={classes.mb}
        size="lg"
        icon={<BiUserCircle size="25" />}
        placeholder="Email address"
        value={name}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
      />
      <Input
        className={classes.mb}
        size="lg"
        icon={<AiOutlinePhone size="25" />}
        placeholder="Phone"
        value={name}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
      />
      {/* email, other links, phone number, location */}
    </div>
  );
};

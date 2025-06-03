/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tabs } from '@ark-ui/react';
import Link from '../Link/Link';
import { styled } from '../../../styled-system/jsx';
import { tabs } from '../../../styled-system/recipes';
import Box from '../Box/Box';
import Button from '../Button/Button';

const TabsComponent = () => {
  const classes = tabs();

  return (
    <Tabs.Root className={classes.root} defaultValue="react">
      <Tabs.List className={classes.list}>
        <Tabs.Trigger className={classes.trigger} value="react">
          React
        </Tabs.Trigger>
        <Tabs.Trigger className={classes.trigger} value="vue">
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger className={classes.trigger} value="solid">
          Solid
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className={classes.content} value="react">
        <Box as="header" color="red.50" textStyle="body/sm/regular" marginBlockEnd="32">
          Box body/sm/regular
        </Box>
        <Button variant="primary" size="lg">
          <button type="button">Primary Button</button>
        </Button>
        <Link color="red.40">
          <a href="#">This is a link</a>
        </Link>
      </Tabs.Content>
      <Tabs.Content className={classes.content} value="vue">
        Vue Content
      </Tabs.Content>
      <Tabs.Content className={classes.content} value="solid">
        Solid Content
      </Tabs.Content>
    </Tabs.Root>
  );
};

const StyledTabs = styled(TabsComponent);

export default StyledTabs;

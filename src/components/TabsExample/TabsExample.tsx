/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tabs } from '@ark-ui/react';
import { styled } from '../../../styled-system/jsx';
import { tabs } from '../../../styled-system/recipes';

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
        React Content
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

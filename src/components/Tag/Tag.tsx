import { Icon, TypeIconName } from '@bitrise/bitkit';

import { styled } from '../../../styled-system/jsx';
import { tag } from '../../../styled-system/recipes';

export type TagProps = {
  children: string;
  colorScheme?: 'neutral' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'purpleFilled';
  iconName?: TypeIconName;
  onClose?: VoidFunction
  size?: 'sm' | 'md';
};

const Tag = (props: TagProps) => {
  const { children, colorScheme = 'neutral', iconName, onClose, size = 'md' } = props;

  const classes = tag({ colorScheme, size });

  const Root = styled('span');
  return (
    <Root className={classes.root}>
      {!!iconName && <Icon name={iconName} size={size === 'sm' ? '16' : '24'} />}
      <span className={classes.label}>{children}</span>
      {!!onClose  && <button className={classes.closeTrigger} type='button'>
        <Icon name="Cross" size="16" />
      </button>}
    </Root>
  );
};

export default Tag;

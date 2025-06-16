import BitkitButton from '../BitkitButton/BitkitButton';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';

const TestPage = () => {
  return (
    <Box padding="16" rel="ative" data-testid="test-page" background="pal.red.50">
      <Button variant="secondary" asChild>
        <a href="https://www.bitrise.io" target="_blank" rel="noopener noreferrer">
          Button label
        </a>
      </Button>
      <BitkitButton as="button">eee</BitkitButton>
      <Box data-testid="test-box" asChild width="96">
        <Text as="h6" textStyle="heading/h6" hasEllipsis>
          The quick brown fox jumps over the lazy dog.
        </Text>
      </Box>
    </Box>
  );
};

export default TestPage;

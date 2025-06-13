import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';

const TestPage = () => {
  return (
    <Box padding="16">
      <Button variant="secondary" asChild>
        <a href="https://www.bitrise.io" target="_blank" rel="noopener noreferrer">
          Button label
        </a>
      </Button>
      <Box width="96">
        <Text textStyle="heading/h6">The quick brown fox jumps over the lazy dog.</Text>
      </Box>
    </Box>
  );
};

export default TestPage;

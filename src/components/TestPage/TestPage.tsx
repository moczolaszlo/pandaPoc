import Box from '../Box/Box';
import Button from '../Button/Button';

const TestPage = () => {
  return (
    <Box padding="16">
      <Button variant="secondary" asChild>
        <a href="https://www.bitrise.io" target="_blank" rel="noopener noreferrer">
          Button label
        </a>
      </Button>
    </Box>
  );
};

export default TestPage;

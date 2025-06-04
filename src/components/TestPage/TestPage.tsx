import Box from '../Box/Box';
import Button from '../Button/Button';
import BitkitButton from '../BitkitButton/BitkitButton';
import Link from '../Link/Link';

const TestPage = () => {
  return (
    <Box padding="16">
      <Box as="h1">Test Page</Box>

      <BitkitButton as="a" href="#e" size="lg" variant="primary" marginBottom="32">
        <span>Bitkit Button</span>
      </BitkitButton>
      <Box as="div" color="red.50" textStyle="body/sm/regular" marginBlockEnd="32">
        Box body/sm/regular
      </Box>
      <Button variant="primary" size="lg">
        <button type="button">Primary Button</button>
      </Button>
      <Link as="a" href="#e">
        This is a link
      </Link>
    </Box>
  );
};

export default TestPage;

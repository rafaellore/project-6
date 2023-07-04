import * as Styled from './styles';

import { Text } from '../Text';

export type FooterProps = {
  html: string;
};

export const Footer = ({ html }: FooterProps) => {
  return (
    <Styled.Container>
      <Text>{html}</Text>
    </Styled.Container>
  );
};

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Title>Screen login</Title>

        <Description></Description>

        <ViewButton></ViewButton>
      </Container>
    </SafeAreaView>
  );
};

export default Login;

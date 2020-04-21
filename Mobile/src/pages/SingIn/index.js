import React from 'react';
import { Text } from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';
import BackGround from '~/components/Background';

export default function SingIn() {
  return (
    <BackGround>
      <Text>SingIN</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />

      <Button>Entrar</Button>
    </BackGround>
  );
}

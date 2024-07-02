import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Esto es un query', name: 'Hola' })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
}

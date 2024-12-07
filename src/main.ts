import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      // exceptionFactory: (e) => {
      //   console.error(e);
      //   throw e;
      // },
    }),
  );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Personal Website API')
    .setDescription('API for my personal website')
    .setVersion('1.0')
    .addTag('user')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 4000);
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();

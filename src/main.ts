import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport} from '@nestjs/microservices';
import { join } from 'path';
import { DulceriaModule } from './dulceria/dulceria.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(DulceriaModule,{
    transport: Transport.GRPC,
    options:{
      package: 'dulceria',
      protoPath: join(__dirname,`../src/proto/dulceria.proto`),
      url: 'localhost:50052'
      
    }
  });
  console.log(join(__dirname,`../src/proto/dulceria.proto`))
  await app.listen();
}
bootstrap();

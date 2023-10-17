import { AaaMiddleware } from './aaa.middleware';
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AaaMiddleware).forRoutes('*');
  }
}

// 实现 NestModule 接口的 configure 方法，在里面应用 AaaMiddleware 到所有路由。

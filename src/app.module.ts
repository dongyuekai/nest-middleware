import { AaaMiddleware } from './aaa.middleware';
import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // 实现 NestModule 接口的 configure 方法，
  configure(consumer: MiddlewareConsumer) {
    // 应用 AaaMiddleware 到所有路由
    // consumer.apply(AaaMiddleware).forRoutes('*');
    // 应用 AaaMiddleware 到指定的路由  在执行前后分别输出before和after
    consumer
      .apply(AaaMiddleware)
      .forRoutes({ path: 'hello*', method: RequestMethod.GET });
    consumer
      .apply(AaaMiddleware)
      .forRoutes({ path: 'world2', method: RequestMethod.GET });
  }
}

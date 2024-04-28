import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatasourceModule } from './datasource/datasource.module';
@Module({
  imports: [UsersModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

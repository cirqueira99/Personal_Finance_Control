import { BankModule } from './core/domain/modules/bank.module';
import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
import { connection } from 'mongoose';
import { AccountModule } from './core/domain/modules/account.module';

// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
// const mongooseConected =  MongooseModule.forRoot('mongodb://localhost:27017/test-mongo');
// autoIncrement.initialize(mongoose.connection);

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test-mongo'), 
    AccountModule,
    BankModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost:27017/test-mongo', {
//       connectionFactory: (connection) => {
//         connection.plugin( require(autoIncrement) );
//         return connection;
//       }
//     }), 
//     AccountModule
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}

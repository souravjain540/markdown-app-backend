import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArticleModuleBase } from "./base/article.module.base";
import { ArticleService } from "./article.service";
import { ArticleController } from "./article.controller";
import { ArticleResolver } from "./article.resolver";

@Module({
  imports: [ArticleModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleResolver],
  exports: [ArticleService],
})
export class ArticleModule {}

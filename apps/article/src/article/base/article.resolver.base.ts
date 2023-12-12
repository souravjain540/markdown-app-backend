/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Article } from "./Article";
import { ArticleCountArgs } from "./ArticleCountArgs";
import { ArticleFindManyArgs } from "./ArticleFindManyArgs";
import { ArticleFindUniqueArgs } from "./ArticleFindUniqueArgs";
import { CreateArticleArgs } from "./CreateArticleArgs";
import { UpdateArticleArgs } from "./UpdateArticleArgs";
import { DeleteArticleArgs } from "./DeleteArticleArgs";
import { ArticleService } from "../article.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Article)
export class ArticleResolverBase {
  constructor(
    protected readonly service: ArticleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Article",
    action: "read",
    possession: "any",
  })
  async _articlesMeta(
    @graphql.Args() args: ArticleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Article])
  @nestAccessControl.UseRoles({
    resource: "Article",
    action: "read",
    possession: "any",
  })
  async articles(
    @graphql.Args() args: ArticleFindManyArgs
  ): Promise<Article[]> {
    return this.service.articles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Article, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Article",
    action: "read",
    possession: "own",
  })
  async article(
    @graphql.Args() args: ArticleFindUniqueArgs
  ): Promise<Article | null> {
    const result = await this.service.article(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Article)
  @nestAccessControl.UseRoles({
    resource: "Article",
    action: "create",
    possession: "any",
  })
  async createArticle(
    @graphql.Args() args: CreateArticleArgs
  ): Promise<Article> {
    return await this.service.createArticle({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Article)
  @nestAccessControl.UseRoles({
    resource: "Article",
    action: "update",
    possession: "any",
  })
  async updateArticle(
    @graphql.Args() args: UpdateArticleArgs
  ): Promise<Article | null> {
    try {
      return await this.service.updateArticle({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Article)
  @nestAccessControl.UseRoles({
    resource: "Article",
    action: "delete",
    possession: "any",
  })
  async deleteArticle(
    @graphql.Args() args: DeleteArticleArgs
  ): Promise<Article | null> {
    try {
      return await this.service.deleteArticle(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
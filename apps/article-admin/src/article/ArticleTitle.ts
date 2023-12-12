import { Article as TArticle } from "../api/article/Article";

export const ARTICLE_TITLE_FIELD = "title";

export const ArticleTitle = (record: TArticle): string => {
  return record.title?.toString() || String(record.id);
};

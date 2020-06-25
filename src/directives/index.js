import { answer_def } from "./answer";
import { answer_preview_def } from "./answerPreview";
import { banner_def } from "./banner";
import { comments_def } from "./comments";
import { editor_def } from "./editor";
import { main_def } from "./main";
import { question_preview_def } from "./questionPreview";
import { results_def } from "./results";
import { search_def } from "./search";
import { tag_def } from "./tag";
import { votes_def } from "./votes";

export function directiveSetup(mod) {
  mod.directive("answer", answer_def);
  mod.directive("answerpreview", answer_preview_def);
  mod.directive("banner", banner_def);
  mod.directive("comments", comments_def);
  mod.directive("editor", editor_def);
  mod.directive("main", main_def);
  mod.directive("questionpreview", question_preview_def);
  mod.directive("results", results_def);
  mod.directive("search", search_def);
  mod.directive("tag", tag_def);
  mod.directive("votes", votes_def);
}

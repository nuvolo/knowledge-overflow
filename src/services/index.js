import { notification_service_def } from './notification';
import { question_service_def } from './question';
import { tags_service_def } from './tag';
import { vote_service_def } from './vote';
import { create_service_def } from './create';
import { results_service_def } from './results';
import { admin_service_def } from './admin';
import { attachment_service_def } from './attachment';

export function serviceSetup(mod) {
    mod.service("voteService", vote_service_def);
    mod.service("createService", create_service_def);
    mod.service("questionService", question_service_def);
    mod.service("tagsService", tags_service_def);
    mod.service("resultsService", results_service_def);
    mod.service("adminService", admin_service_def);
    mod.service('attachmentService', attachment_service_def);
    mod.service('notificationService', notification_service_def);
}
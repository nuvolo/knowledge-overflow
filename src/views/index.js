import { admin_tag_view_def } from './adminTag';
import { admin_view_def } from './admin';
import { admin_webhook_view_def } from './adminWebhook';
import { ask_view_def } from './ask';
import { edit_view_def } from './edit';
import { home_view_def } from './home';
import { profile_view_def } from './profile';
import { question_view_def } from './question';
import { questions_view_def } from './questions';
import { search_view_def } from './search';
import { tags_view_def } from './tags';
import { tag_view_def } from './tag';

routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
    $stateProvider.state('admin_tags', admin_tag_view_def());
    $stateProvider.state('admin', admin_view_def());
    $stateProvider.state('admin_webhook', admin_webhook_view_def());
    $stateProvider.state('ask', ask_view_def());
    $stateProvider.state('edit', edit_view_def());
    $stateProvider.state('home', home_view_def());
    $stateProvider.state('profile', profile_view_def());
    $stateProvider.state('question', question_view_def());
    $stateProvider.state('questions', questions_view_def());
    $stateProvider.state('search', search_view_def());
    $stateProvider.state('tags', tags_view_def());
    $stateProvider.state('tag', tag_view_def());
}
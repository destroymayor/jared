import { fetchGithubUserContribution } from '@/domain/repositories/github.repository';

export async function getGithubUserContribution() {
    return fetchGithubUserContribution();
}
